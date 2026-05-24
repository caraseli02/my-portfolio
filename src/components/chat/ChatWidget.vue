<script setup lang="ts">
import { ref, nextTick, watch } from "vue";
import { Chat } from "@ai-sdk/vue";
import { DefaultChatTransport } from "ai";
import ChatMessage from "./ChatMessage.vue";
import ChatInput from "./ChatInput.vue";

const isOpen = ref(false);
const messagesContainer = ref<HTMLElement>();

const chat = new Chat({
  transport: new DefaultChatTransport({ api: "/api/chat" }),
});

const input = ref("");

function toggle() {
  isOpen.value = !isOpen.value;
}

function handleSubmit() {
  const text = input.value.trim();
  if (!text) return;
  chat.sendMessage({ text });
  input.value = "";
  nextTick(scrollToBottom);
}

function scrollToBottom() {
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }
}

watch(
  () => chat.messages.length,
  () => {
    nextTick(scrollToBottom);
  },
);

const SUGGESTIONS = [
  "What projects has Vlad built?",
  "What tech stack does Vlad use?",
  "Tell me about TopProperties",
];
</script>

<template>
  <!-- Floating bubble -->
  <button
    v-if="!isOpen"
    class="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-105 sm:bottom-6 sm:right-6"
    style="background-color: var(--color-primary); color: white"
    aria-label="Open chat"
    @click="toggle"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    </svg>
  </button>

  <!-- Chat panel -->
  <Transition name="slide-up">
    <div
      v-if="isOpen"
      class="fixed z-[90] flex flex-col overflow-hidden border shadow-2xl"
      style="background-color: var(--color-bg); border-color: var(--color-border)"
      :class="[
        'inset-0 h-[100dvh] w-full rounded-none sm:inset-auto sm:bottom-6 sm:right-6 sm:h-auto sm:max-h-[70vh] sm:w-[400px] sm:rounded-2xl',
      ]"
    >
      <!-- Header -->
      <div
        class="flex items-center justify-between px-4 py-3 border-b"
        style="border-color: var(--color-border)"
      >
        <div class="flex items-center gap-2">
          <span class="text-sm font-semibold" style="color: var(--color-text)"
            >Portfolio Assistant</span
          >
          <span
            class="text-xs px-1.5 py-0.5 rounded-full"
            style="background-color: var(--color-primary-light); color: var(--color-primary)"
            >AI</span
          >
        </div>
        <button
          class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md transition-colors"
          style="color: var(--color-text-muted)"
          @click="toggle"
          aria-label="Close chat"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Messages -->
      <div ref="messagesContainer" class="flex-1 overflow-y-auto p-4 space-y-3">
        <!-- Welcome state -->
        <template v-if="chat.messages.length === 0">
          <div class="text-center py-8">
            <p class="text-sm mb-4" style="color: var(--color-text-muted)">
              Hi, I'm Vlad's portfolio assistant. Ask me anything about his projects, tech stack, or
              experience.
            </p>
            <div class="flex flex-wrap gap-2 justify-center">
              <button
                v-for="suggestion in SUGGESTIONS"
                :key="suggestion"
                class="min-h-10 cursor-pointer rounded-full border px-3 py-1.5 text-xs transition-colors"
                style="
                  border-color: var(--color-border);
                  color: var(--color-text-muted);
                  background-color: var(--color-surface);
                "
                @click="
                  input = suggestion;
                  handleSubmit();
                "
              >
                {{ suggestion }}
              </button>
            </div>
          </div>
        </template>

        <!-- Message list -->
        <template v-else>
          <ChatMessage
            v-for="(message, index) in chat.messages"
            :key="message.id ?? index"
            :message="message"
          />
          <!-- Streaming indicator -->
          <div v-if="chat.status === 'streaming'" class="flex items-center gap-1 px-3 py-2">
            <span
              class="inline-block h-2 w-2 rounded-full animate-bounce"
              style="background-color: var(--color-primary); animation-delay: 0ms"
            />
            <span
              class="inline-block h-2 w-2 rounded-full animate-bounce"
              style="background-color: var(--color-primary); animation-delay: 150ms"
            />
            <span
              class="inline-block h-2 w-2 rounded-full animate-bounce"
              style="background-color: var(--color-primary); animation-delay: 300ms"
            />
          </div>
        </template>

        <!-- Error state -->
        <div
          v-if="chat.error"
          class="flex items-center gap-2 p-3 rounded-lg border"
          style="border-color: var(--color-border); background-color: var(--color-bg-subtle)"
        >
          <p class="text-sm flex-1" style="color: var(--color-text-muted)">
            Something went wrong. Please try again.
          </p>
          <button
            class="text-xs px-2 py-1 rounded-md cursor-pointer"
            style="background-color: var(--color-primary); color: white"
            @click="chat.regenerate()"
          >
            Retry
          </button>
        </div>
      </div>

      <!-- Input -->
      <ChatInput v-model="input" :disabled="chat.status === 'streaming'" @submit="handleSubmit" />
    </div>
  </Transition>
</template>

<style scoped>
.slide-up-enter-active {
  animation: slideUp 0.3s ease-out;
}
.slide-up-leave-active {
  animation: slideUp 0.2s ease-in reverse;
}
</style>

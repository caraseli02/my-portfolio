<script setup lang="ts">
defineProps<{
  message: {
    id?: string;
    role: string;
    parts: Array<{ type: string; text?: string }>;
  };
}>();
</script>

<template>
  <div class="flex" :class="message.role === 'user' ? 'justify-end' : 'justify-start'">
    <div
      class="max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap"
      :style="
        message.role === 'user'
          ? 'background-color: var(--color-primary); color: white; border-bottom-right-radius: 4px;'
          : 'background-color: var(--color-surface); color: var(--color-text); border-bottom-left-radius: 4px; border: 1px solid var(--color-border-light);'
      "
    >
      <template v-for="(part, i) in message.parts" :key="i">
        <span v-if="part.type === 'text' && part.text">{{ part.text }}</span>
      </template>
    </div>
  </div>
</template>

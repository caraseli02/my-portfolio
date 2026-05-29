<script setup lang="ts">
defineProps<{
  modelValue: string;
  disabled?: boolean;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: string];
  submit: [];
}>();
</script>

<template>
  <form
    class="flex items-center gap-2 p-3 border-t"
    style="border-color: var(--color-border)"
    @submit.prevent="$emit('submit')"
  >
    <input
      :value="modelValue"
      :disabled="disabled"
      type="text"
      aria-label="Ask about Vlad's projects, tech, or experience"
      placeholder="Ask about projects, tech, experience..."
      class="min-h-11 flex-1 rounded-lg px-3 py-2 text-sm outline-none transition-colors"
      style="
        background-color: var(--color-bg-subtle);
        color: var(--color-text);
        border: 1px solid var(--color-border-light);
      "
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <button
      type="submit"
      :disabled="disabled || !modelValue.trim()"
      class="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg transition-colors disabled:opacity-40"
      style="background-color: var(--color-primary); color: var(--color-on-primary)"
      aria-label="Send message"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  </form>
</template>

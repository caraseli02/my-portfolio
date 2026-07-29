<template>
  <Teleport to="body">
    <Transition name="lightbox">
      <div
        v-if="open"
        class="fixed inset-0 z-[80] flex items-center justify-center bg-charcoal/90 p-4 backdrop-blur-sm md:p-8"
        role="dialog"
        aria-modal="true"
        :aria-label="current?.label || 'Image preview'"
        @click.self="close"
      >
        <button
          type="button"
          class="absolute top-4 right-4 z-10 inline-flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors hover:bg-white/10"
          aria-label="Close preview"
          @click="close"
        >
          ✕
        </button>

        <button
          v-if="assets.length > 1"
          type="button"
          class="absolute left-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/20 text-white transition-colors hover:bg-white/10 sm:inline-flex md:left-6"
          aria-label="Previous image"
          @click.stop="prev"
        >
          ←
        </button>

        <figure class="relative flex max-h-full max-w-5xl flex-col items-center gap-4">
          <img
            :src="current?.src"
            :alt="current?.alt"
            class="max-h-[78vh] w-auto max-w-full object-contain shadow-2xl"
          />
          <figcaption
            class="flex flex-wrap items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-white/75"
          >
            <span>{{ current?.label }}</span>
            <span v-if="assets.length > 1" aria-hidden="true">·</span>
            <span v-if="assets.length > 1">{{ index + 1 }} / {{ assets.length }}</span>
          </figcaption>
        </figure>

        <button
          v-if="assets.length > 1"
          type="button"
          class="absolute right-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/20 text-white transition-colors hover:bg-white/10 sm:inline-flex md:right-6"
          aria-label="Next image"
          @click.stop="next"
        >
          →
        </button>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, watch } from "vue";
import type { WorkAsset } from "../../types/projects";

const props = defineProps<{
  open: boolean;
  assets: WorkAsset[];
  startIndex?: number;
}>();

const emit = defineEmits<{
  close: [];
  "update:index": [number];
}>();

const index = computed({
  get: () => props.startIndex ?? 0,
  set: (value: number) => emit("update:index", value),
});

const current = computed(() => props.assets[index.value] ?? props.assets[0]);

const close = () => emit("close");

const prev = () => {
  if (!props.assets.length) return;
  index.value = (index.value - 1 + props.assets.length) % props.assets.length;
};

const next = () => {
  if (!props.assets.length) return;
  index.value = (index.value + 1) % props.assets.length;
};

const onKeydown = (event: KeyboardEvent) => {
  if (!props.open) return;
  if (event.key === "Escape") close();
  if (event.key === "ArrowLeft") prev();
  if (event.key === "ArrowRight") next();
};

watch(
  () => props.open,
  (isOpen) => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  },
);

onMounted(() => window.addEventListener("keydown", onKeydown));
onUnmounted(() => {
  window.removeEventListener("keydown", onKeydown);
  document.body.style.overflow = "";
});
</script>

<style scoped>
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.22s ease;
}
.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}
</style>

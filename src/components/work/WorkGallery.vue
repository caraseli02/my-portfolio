<template>
  <div>
    <div class="mb-4 flex flex-wrap items-end justify-between gap-3">
      <p class="editorial-kicker">visual assets</p>
      <p
        v-if="assets.length > 1"
        class="font-mono text-[11px] uppercase tracking-[0.16em] text-cobalt-500/60 dark:text-cobalt-200/60"
      >
        click to enlarge · {{ assets.length }} frames
      </p>
    </div>

    <div
      class="grid gap-4"
      :class="assets.length > 1 ? 'md:grid-cols-2 xl:grid-cols-3' : 'md:grid-cols-1'"
    >
      <button
        v-for="(asset, i) in assets"
        :key="asset.src"
        type="button"
        class="group relative overflow-hidden border border-cobalt-500/15 bg-white text-left transition-transform hover:-translate-y-0.5 dark:border-cobalt-300/15 dark:bg-charcoal-50"
        @click="openAt(i, $event.currentTarget as HTMLButtonElement)"
      >
        <picture>
          <source
            type="image/webp"
            :srcset="`${webpBase(asset.src)}-320.webp 320w, ${webpBase(asset.src)}-640.webp 640w, ${webpBase(asset.src)}.webp 1280w`"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
          />
          <img
            :src="asset.src"
            :alt="asset.alt"
            loading="lazy"
            width="900"
            height="1120"
            class="aspect-[4/5] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </picture>
        <span
          class="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-charcoal/70 to-transparent px-4 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-white"
        >
          <span>{{ asset.label }}</span>
          <span aria-hidden="true">⤢</span>
        </span>
      </button>
    </div>

    <ImageLightbox
      :open="lightboxOpen"
      :assets="assets"
      :start-index="activeIndex"
      :return-focus="returnFocus"
      @close="closeLightbox"
      @update:index="activeIndex = $event"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { WorkAsset } from "../../types/projects";
import ImageLightbox from "./ImageLightbox.vue";

defineProps<{
  assets: WorkAsset[];
}>();

const lightboxOpen = ref(false);
const activeIndex = ref(0);
const returnFocus = ref<HTMLElement | null>(null);

const webpBase = (src: string) => src.replace(/\.[^.]+$/, "");

const openAt = (index: number, el: HTMLButtonElement) => {
  activeIndex.value = index;
  returnFocus.value = el;
  lightboxOpen.value = true;
};

const closeLightbox = () => {
  lightboxOpen.value = false;
};
</script>

<template>
  <component :is="tag" v-in class="word-mask">
    <template v-for="(word, i) in words" :key="i">
      <span class="wm"
        ><span
          class="wm-inner"
          :class="{ accent: word.accent }"
          :style="{ '--wd': `${baseDelay + i * step}ms` }"
          >{{ word.t }}</span
        ></span
      >{{ i < words.length - 1 ? " " : "" }}
    </template>
  </component>
</template>

<script setup lang="ts">
import { vIn } from "../../composables/useInView";

export interface MaskWord {
  t: string;
  accent?: boolean;
}

withDefaults(
  defineProps<{
    words: MaskWord[];
    tag?: string;
    baseDelay?: number;
    step?: number;
  }>(),
  {
    tag: "span",
    baseDelay: 0,
    step: 45,
  },
);
</script>

<style scoped>
.wm {
  display: inline-block;
  overflow: hidden;
  vertical-align: bottom;
  padding-bottom: 0.14em;
  margin-bottom: -0.14em;
}

.wm-inner {
  display: inline-block;
  transform: translateY(118%);
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: var(--wd, 0ms);
}

.wm-inner.accent {
  font-style: italic;
  color: var(--color-cobalt-400);
}

.dark .wm-inner.accent {
  color: var(--color-cobalt-200);
}

.word-mask.in .wm-inner {
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .wm-inner {
    transform: none;
    transition: none;
  }
}
</style>

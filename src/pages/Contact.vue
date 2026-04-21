<template>
  <div class="bg-cream-100 min-h-screen pt-32 flex flex-col">
    <div class="flex-1 max-w-4xl mx-auto px-6 lg:px-12 pb-24 flex flex-col justify-center">
      <!-- Animated Headlines -->
      <div class="mb-12 md:mb-16 max-w-2xl">
        <p class="text-xl md:text-2xl text-cobalt-600 mb-6">
          Reach out to create something
        </p>
        <div class="space-y-2 md:space-y-3">
          <p
            v-for="(word, index) in words"
            :key="index"
            class="text-3xl md:text-5xl lg:text-6xl font-display text-cobalt-500 transition-all duration-500"
            :class="{
              'opacity-100': currentWordIndex === index,
              'opacity-40': currentWordIndex !== index
            }"
          >
            {{ word }}<span v-if="hasPeriod(index)">.</span>
          </p>
        </div>
        <p class="mt-8 text-lg md:text-xl text-cobalt-600 leading-relaxed">
          Best first touch is LinkedIn. Send a short note with the project, the role, and the timeline. That gets the fastest response.
        </p>
      </div>

      <!-- Primary Actions -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-14">
        <a 
          href="https://www.linkedin.com/in/caraseli/"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center px-7 py-3 bg-cobalt-500 text-cream-100 font-medium hover:opacity-85 transition-opacity"
        >
          Start on LinkedIn
        </a>

        <a 
          href="https://github.com/caraseli02?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center px-7 py-3 border border-cobalt-500 text-cobalt-500 font-medium hover:bg-cobalt-500 hover:text-cream-100 transition-colors"
        >
          Browse GitHub
        </a>
      </div>

      <!-- Supporting Notes -->
      <div class="grid gap-4 md:grid-cols-2 text-cobalt-600 mb-12 md:mb-16">
        <div class="border border-cobalt-500/20 p-5">
          <p class="text-xs uppercase tracking-[0.25em] text-cobalt-500/60 mb-2">Good fit</p>
          <p class="leading-relaxed">Frontend builds, design system work, UI polish, and product-facing Vue projects.</p>
        </div>
        <div class="border border-cobalt-500/20 p-5">
          <p class="text-xs uppercase tracking-[0.25em] text-cobalt-500/60 mb-2">Helpful in the first message</p>
          <p class="leading-relaxed">What you are building, what stage it is in, and where the interface currently feels weak.</p>
        </div>
      </div>

      <p class="text-cobalt-500 text-xl lowercase font-serif italic">
        don't be shy
      </p>
    </div>

    <!-- Arch SVG at bottom -->
    <div class="flex justify-center pb-8">
      <svg viewBox="0 0 60 80" class="w-20 h-24 text-cobalt-500">
        <path d="M10 70 Q10 10, 30 10 Q50 10, 50 70" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';

export default defineComponent({
  name: 'Contact',
  setup() {
    const words = ['daring', 'playful', 'immersive', 'enticing', 'joyful', 'intuitive', 'exciting'];
    const currentWordIndex = ref(0);
    let interval: ReturnType<typeof setInterval> | null = null;

    const hasPeriod = (index: number): boolean => {
      // Add period to certain words like in the reference
      return index === 0 || index === 1 || index === 5;
    };

    const startInterval = () => {
      interval = window.setInterval(() => {
        currentWordIndex.value = (currentWordIndex.value + 1) % words.length;
      }, 2000);
    };

    const stopInterval = () => {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopInterval();
      } else {
        startInterval();
      }
    };

    onMounted(() => {
      startInterval();
      document.addEventListener('visibilitychange', handleVisibilityChange);
    });

    onUnmounted(() => {
      stopInterval();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    });

    return {
      words,
      currentWordIndex,
      hasPeriod
    };
  }
});
</script>

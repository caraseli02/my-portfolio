<template>
  <div class="flex min-h-screen flex-col bg-cream-100 pt-32 dark:bg-charcoal">
    <div class="flex-1 max-w-4xl mx-auto px-6 lg:px-12 pb-24 flex flex-col justify-center">
      <!-- Animated Headlines -->
      <div class="mb-16">
        <p class="eyebrow-label mb-6">
          Reach out to create something
        </p>
        <div class="space-y-3">
          <p
            v-for="(word, index) in words"
            :key="index"
            class="display-title text-3xl transition-all duration-500 md:text-5xl lg:text-6xl"
            :class="{
              'opacity-100': currentWordIndex === index,
              'opacity-30': currentWordIndex !== index
            }"
          >
            {{ word }}<span v-if="hasPeriod(index)">.</span>
          </p>
        </div>
      </div>

      <!-- Contact Links -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-12 mb-16">
        <!-- Email Sunburst -->
        <a
          href="mailto:vlad@example.com"
          class="group relative w-32 h-32 md:w-36 md:h-36 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt-500 focus-visible:outline-offset-4 rounded-full"
          aria-label="Send email"
        >
          <svg viewBox="0 0 100 100" class="w-full h-full text-cobalt-500 group-hover:rotate-45 transition-transform duration-700" aria-hidden="true">
            <!-- Sunburst rays -->
            <g v-for="n in 16" :key="n" :transform="`rotate(${n * 22.5} 50 50)`">
              <line x1="50" y1="5" x2="50" y2="20" stroke="currentColor" stroke-width="1.5"/>
            </g>
            <circle cx="50" cy="50" r="18" fill="none" stroke="currentColor" stroke-width="1.5"/>
          </svg>
          <span class="absolute inset-0 flex items-center justify-center font-display text-base font-medium tracking-[-0.04em] text-cobalt-500 dark:text-cobalt-300 md:text-lg">
            email
          </span>
        </a>

        <!-- LinkedIn Sunburst -->
        <a
          href="https://www.linkedin.com/in/caraseli/"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative w-32 h-32 md:w-36 md:h-36 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt-500 focus-visible:outline-offset-4 rounded-full"
          aria-label="LinkedIn profile"
        >
          <svg viewBox="0 0 100 100" class="w-full h-full text-cobalt-500 group-hover:rotate-45 transition-transform duration-700" aria-hidden="true">
            <!-- Sunburst rays -->
            <g v-for="n in 16" :key="n" :transform="`rotate(${n * 22.5} 50 50)`">
              <line x1="50" y1="5" x2="50" y2="20" stroke="currentColor" stroke-width="1.5"/>
            </g>
            <circle cx="50" cy="50" r="18" fill="none" stroke="currentColor" stroke-width="1.5"/>
          </svg>
          <span class="absolute inset-0 flex items-center justify-center font-display text-base font-medium tracking-[-0.04em] text-cobalt-500 dark:text-cobalt-300 md:text-lg">
            linkedin
          </span>
        </a>
      </div>

      <!-- Playful Text -->
      <p class="mono-label text-center text-cobalt-500 dark:text-cobalt-300">
        don't be shy
      </p>
    </div>

    <!-- Arch SVG at bottom -->
    <div class="flex justify-center pb-8">
      <svg viewBox="0 0 60 80" class="w-20 h-24 text-cobalt-500 dark:text-cobalt-300">
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

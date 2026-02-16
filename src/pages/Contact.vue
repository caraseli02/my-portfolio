<template>
  <div class="bg-cream-100 min-h-screen pt-32 flex flex-col">
    <div class="flex-1 max-w-4xl mx-auto px-6 lg:px-12 pb-24 flex flex-col justify-center">
      <!-- Animated Headlines -->
      <div class="mb-16">
        <p class="text-xl md:text-2xl text-cobalt-600 mb-6">
          Reach out to create something
        </p>
        <div class="space-y-3">
          <p
            v-for="(word, index) in words"
            :key="index"
            class="text-4xl md:text-5xl lg:text-6xl font-serif italic text-cobalt-500 transition-all duration-500"
            :class="{
              'opacity-100': currentWordIndex === index,
              'opacity-20': currentWordIndex !== index
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
          class="group relative w-32 h-32 md:w-36 md:h-36"
        >
          <svg viewBox="0 0 100 100" class="w-full h-full text-cobalt-500 group-hover:rotate-45 transition-transform duration-700">
            <!-- Sunburst rays -->
            <g v-for="n in 16" :key="n" :transform="`rotate(${n * 22.5} 50 50)`">
              <line x1="50" y1="5" x2="50" y2="20" stroke="currentColor" stroke-width="1.5"/>
            </g>
            <circle cx="50" cy="50" r="18" fill="none" stroke="currentColor" stroke-width="1.5"/>
          </svg>
          <span class="absolute inset-0 flex items-center justify-center font-serif italic text-cobalt-500 text-base md:text-lg">
            email
          </span>
        </a>

        <!-- LinkedIn Sunburst -->
        <a 
          href="https://www.linkedin.com/in/caraseli/"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative w-32 h-32 md:w-36 md:h-36"
        >
          <svg viewBox="0 0 100 100" class="w-full h-full text-cobalt-500 group-hover:rotate-45 transition-transform duration-700">
            <!-- Sunburst rays -->
            <g v-for="n in 16" :key="n" :transform="`rotate(${n * 22.5} 50 50)`">
              <line x1="50" y1="5" x2="50" y2="20" stroke="currentColor" stroke-width="1.5"/>
            </g>
            <circle cx="50" cy="50" r="18" fill="none" stroke="currentColor" stroke-width="1.5"/>
          </svg>
          <span class="absolute inset-0 flex items-center justify-center font-serif italic text-cobalt-500 text-base md:text-lg">
            linkedin
          </span>
        </a>
      </div>

      <!-- Playful Text -->
      <p class="text-center text-cobalt-500 text-xl lowercase font-serif italic">
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
    let interval: number | null = null;

    const hasPeriod = (index: number): boolean => {
      // Add period to certain words like in the reference
      return index === 0 || index === 1 || index === 5;
    };

    onMounted(() => {
      // Cycle through words every 2 seconds
      interval = window.setInterval(() => {
        currentWordIndex.value = (currentWordIndex.value + 1) % words.length;
      }, 2000);
    });

    onUnmounted(() => {
      if (interval) {
        clearInterval(interval);
      }
    });

    return {
      words,
      currentWordIndex,
      hasPeriod
    };
  }
});
</script>

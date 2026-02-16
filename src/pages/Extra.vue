<template>
  <div class="bg-cream-100 min-h-screen pt-32 flex flex-col items-center justify-center px-6">
    <div class="text-center max-w-2xl">
      <!-- Decorative Blob -->
      <div class="w-32 h-32 mx-auto mb-8 text-cobalt-500">
        <svg viewBox="0 0 120 100" class="w-full h-full fill-current animate-pulse-slow">
          <path d="M30 50 Q20 20, 50 15 Q80 10, 95 40 Q110 70, 80 85 Q50 100, 30 80 Q10 60, 30 50Z"/>
        </svg>
      </div>

      <h1 class="text-4xl md:text-5xl font-serif italic text-cobalt-500 mb-6">
        You found the extra page!
      </h1>

      <p class="text-xl text-cobalt-600 mb-8">
        Here's a random fun fact:
      </p>

      <p class="text-lg text-cobalt-500 mb-12 font-serif italic">
        "{{ currentFact }}"
      </p>

      <!-- Random Facts Generator -->
      <button 
        @click="newFact"
        class="group inline-flex items-center gap-3 px-8 py-4 bg-cobalt-500 text-white rounded-full hover:bg-cobalt-600 transition-all duration-300 font-medium"
      >
        <svg viewBox="0 0 24 24" class="w-5 h-5 group-hover:rotate-180 transition-transform duration-500">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
        </svg>
        Get Another Fact
      </button>

      <!-- Back Link -->
      <div class="mt-12">
        <router-link 
          to="/"
          class="text-cobalt-500 hover:text-cobalt-700 transition-colors lowercase font-serif italic"
        >
          ← take me home
        </router-link>
      </div>
    </div>

    <!-- Decorative Elements -->
    <div class="absolute bottom-12 left-12 w-16 h-16 text-cobalt-300 rotate-12">
      <svg viewBox="0 0 50 50" class="w-full h-full fill-current">
        <polygon points="25,2 31,18 48,18 34,28 40,45 25,35 10,45 16,28 2,18 19,18"/>
      </svg>
    </div>

    <div class="absolute top-40 right-12 w-12 h-12 text-cobalt-300 -rotate-12">
      <svg viewBox="0 0 60 60" class="w-full h-full fill-current">
        <polygon points="30,5 35,20 50,15 40,28 55,35 38,38 40,55 30,42 20,55 22,38 5,35 20,28 10,15 25,20"/>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Extra',
  setup() {
    const facts = [
      "I can sail a boat but I still can't parallel park a car.",
      "My first computer was a Pentium III with 128MB of RAM.",
      "I've read the Vue.js documentation cover to cover at least 5 times.",
      "I drink approximately 4 cups of coffee per day while coding.",
      "My favorite CSS property is 'display: flex'.",
      "I once spent 6 hours debugging only to find a missing semicolon.",
      "I can type 100+ WPM but only when no one is watching.",
      "My code works on the first try about 10% of the time.",
      "I've contributed to open source projects at 3 AM more times than I can count.",
      "I still Google 'how to center a div' at least once a month."
    ];

    const currentFact = ref(facts[Math.floor(Math.random() * facts.length)]);

    const newFact = () => {
      let newIndex = Math.floor(Math.random() * facts.length);
      while (facts[newIndex] === currentFact.value) {
        newIndex = Math.floor(Math.random() * facts.length);
      }
      currentFact.value = facts[newIndex];
    };

    return {
      currentFact,
      newFact
    };
  }
});
</script>

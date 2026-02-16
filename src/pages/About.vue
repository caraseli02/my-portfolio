<template>
  <div class="bg-cream-100 min-h-screen pt-32">
    <div class="max-w-4xl mx-auto px-6 lg:px-12 pb-24">
      <!-- Hero -->
      <div class="mb-16">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-serif italic text-cobalt-500 leading-tight mb-4">
          I'm Vlad Caraseli,
        </h1>
        <h2 class="text-5xl md:text-6xl lg:text-7xl font-serif italic text-cobalt-500 leading-tight">
          it's nice to meet you
        </h2>
      </div>

      <!-- Bio Content -->
      <div class="space-y-6 text-lg md:text-xl text-cobalt-600 leading-relaxed mb-16">
        <p>
          I was born in Moldova and have spent the last decade crafting digital experiences 
          across Europe. Currently, I'm based in the beautiful Mediterranean city of 
          Palma de Mallorca, where I combine work with a passion for sailing and sunshine.
        </p>

        <p>
          My journey into web development started with a curiosity for how things work on 
          the internet. That curiosity led me to specialize in Vue.js and the modern 
          JavaScript ecosystem, where I've spent 6+ years building everything from 
          interactive dashboards to complex e-commerce platforms.
        </p>

        <p>
          I've worked with startups, agencies, and enterprise clients, helping them bring 
          their visions to life through clean code and thoughtful user interfaces. My 
          approach combines technical precision with creative problem-solving.
        </p>

        <p>
          When I'm not coding, you'll find me exploring Mallorca's coastline, contributing 
          to open-source projects, or diving deep into the latest frontend frameworks. I 
          believe in building software that's not just functional, but delightful to use.
        </p>

        <p class="font-serif italic text-cobalt-500">
          Let's create something amazing together.
        </p>
      </div>

      <!-- Decorative Elements -->
      <div class="relative flex items-center justify-center gap-8 py-12">
        <!-- Star -->
        <svg viewBox="0 0 50 50" class="w-16 h-16 text-cobalt-500 animate-pulse-slow">
          <polygon points="25,2 31,18 48,18 34,28 40,45 25,35 10,45 16,28 2,18 19,18" fill="currentColor"/>
        </svg>

        <!-- Snake -->
        <svg viewBox="0 0 80 40" class="w-24 h-12 text-cobalt-500">
          <path d="M5 20 Q15 5, 25 20 Q35 35, 45 20 Q55 5, 65 20 Q75 35, 75 20" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
        </svg>

        <!-- Profile Photo Placeholder -->
        <div class="w-48 h-64 bg-cobalt-500/10 border border-cobalt-500/30 rounded-lg flex items-center justify-center text-cobalt-500 font-serif italic">
          <span class="text-lg">photo</span>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Footer from '../components/layout/Footer.vue';

export default defineComponent({
  name: 'About',
  components: {
    Footer
  }
});
</script>

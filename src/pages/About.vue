<template>
  <div class="min-h-screen bg-cream-100 pt-32 dark:bg-charcoal">
    <div class="max-w-4xl mx-auto px-6 lg:px-12 pb-24">
      <!-- Hero -->
      <div class="mb-16 space-y-3">
        <p class="eyebrow-label">About</p>
        <h1 class="display-hero text-4xl md:text-6xl lg:text-7xl">
          I'm Vlad Caraseli,
        </h1>
        <h2 class="display-hero text-4xl md:text-6xl lg:text-7xl">
          it's nice to meet you
        </h2>
      </div>

      <!-- Bio Content -->
      <div class="body-lead mb-16 space-y-6">
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

        <p class="display-title text-2xl md:text-3xl">
          Let's create something amazing together.
        </p>
      </div>

      <!-- Decorative Elements -->
      <div class="relative flex items-center justify-center gap-8 py-12">
        <!-- Star -->
        <svg viewBox="0 0 50 50" class="w-16 h-16 text-cobalt-500 animate-pulse-slow" aria-hidden="true">
          <polygon points="25,2 31,18 48,18 34,28 40,45 25,35 10,45 16,28 2,18 19,18" fill="currentColor"/>
        </svg>

        <!-- Snake -->
        <svg viewBox="0 0 80 40" class="w-24 h-12 text-cobalt-500" aria-hidden="true">
          <path d="M5 20 Q15 5, 25 20 Q35 35, 45 20 Q55 5, 65 20 Q75 35, 75 20" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
        </svg>

        <!-- Profile Photo Placeholder -->
        <div class="flex h-64 w-48 items-center justify-center rounded-lg border border-cobalt-500/30 bg-cobalt-500/10 text-cobalt-500 dark:border-cobalt-300/30 dark:text-cobalt-300 font-display" role="img" aria-label="Vlad Caraseli profile photo">
          <span class="text-lg">photo</span>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from '../components/layout/Footer.vue';
</script>

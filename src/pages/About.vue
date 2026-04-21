<template>
  <div class="bg-cream-100 dark:bg-charcoal min-h-screen pt-32">
    <div class="max-w-4xl mx-auto px-6 lg:px-12 pb-24">
      <!-- Hero -->
      <div class="mb-16">
        <h1
          class="text-4xl md:text-6xl lg:text-7xl font-display text-cobalt-500 leading-tight mb-4"
        >
          I'm Vlad Caraseli,
        </h1>
        <h2 class="text-4xl md:text-6xl lg:text-7xl font-display text-cobalt-500 leading-tight">
          it's nice to meet you
        </h2>
      </div>

      <!-- Bio Content -->
      <div class="space-y-6 text-lg md:text-xl text-cobalt-600 leading-relaxed mb-16">
        <p>
          I was born in Moldova and have spent the last decade crafting digital experiences across
          Europe. Currently, I'm based in the beautiful Mediterranean city of Palma de Mallorca,
          where I combine work with a passion for sailing and sunshine.
        </p>

        <p>
          My journey into web development started with a curiosity for how things work on the
          internet. That curiosity led me to specialize in Vue.js and the modern JavaScript
          ecosystem, where I've spent 6+ years building everything from interactive dashboards to
          complex e-commerce platforms.
        </p>

        <p>
          I've worked with startups, agencies, and enterprise clients, helping them bring their
          visions to life through clean code and thoughtful user interfaces. My approach combines
          technical precision with creative problem-solving.
        </p>

        <p>
          When I'm not coding, you'll find me exploring Mallorca's coastline, contributing to
          open-source projects, or diving deep into the latest frontend frameworks. I believe in
          building software that's not just functional, but delightful to use.
        </p>

        <p class="font-display text-cobalt-500">Let's create something amazing together.</p>
      </div>

      <!-- Profile Panel -->
      <div class="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] items-start py-12">
        <div class="border border-cobalt-500/20 p-8 md:p-10">
          <p class="text-xs uppercase tracking-[0.3em] text-cobalt-500/70 mb-4">Currently</p>
          <div class="space-y-4 text-cobalt-600">
            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-cobalt-500/60 mb-1">Base</p>
              <p class="text-xl font-serif italic text-cobalt-500">Palma de Mallorca</p>
            </div>
            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-cobalt-500/60 mb-1">Focus</p>
              <p class="text-lg leading-relaxed">
                Vue 3 interfaces, component systems, and frontends that feel calm and considered.
              </p>
            </div>
            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-cobalt-500/60 mb-1">Off-screen</p>
              <p class="text-lg leading-relaxed">
                Sailing, open-source, and long walks that usually turn into product ideas.
              </p>
            </div>
          </div>
        </div>

        <div
          class="border border-cobalt-500/30 p-8 md:p-10 min-h-[22rem] flex flex-col justify-between"
        >
          <div>
            <p class="text-7xl md:text-8xl font-serif italic text-cobalt-500 leading-none">VC</p>
            <p class="mt-4 text-cobalt-600 leading-relaxed">
              I like interfaces with strong hierarchy, restrained motion, and enough personality to
              be remembered.
            </p>
          </div>

          <div class="flex items-center gap-5 pt-10 text-cobalt-500">
            <svg viewBox="0 0 50 50" class="w-12 h-12">
              <polygon
                points="25,2 31,18 48,18 34,28 40,45 25,35 10,45 16,28 2,18 19,18"
                fill="currentColor"
              />
            </svg>
            <svg viewBox="0 0 80 40" class="w-16 h-8">
              <path
                d="M5 20 Q15 5, 25 20 Q35 35, 45 20 Q55 5, 65 20 Q75 35, 75 20"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from "../components/layout/Footer.vue";
</script>

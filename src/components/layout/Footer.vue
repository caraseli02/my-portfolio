<template>
  <footer
    class="border-t border-cobalt-500/10 bg-cream-100/70 px-6 py-8 dark:bg-charcoal dark:border-cobalt-300/10"
  >
    <div class="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
      <div class="panel-surface rounded-[2rem] p-6 md:p-8">
        <p class="editorial-kicker mb-3">currently open to</p>
        <h2 class="max-w-xl text-3xl md:text-4xl font-display text-cobalt-500 dark:text-cobalt-200">
          Product-facing frontend work, design systems, and UI polish that ships clean.
        </h2>
        <div
          class="mt-6 flex flex-wrap items-center gap-4 text-sm text-cobalt-600 dark:text-cobalt-100/70"
        >
          <span>Based in Palma de Mallorca</span>
          <span aria-hidden="true">•</span>
          <span>Vue, React, Nuxt, TypeScript</span>
        </div>
      </div>

      <div class="flex flex-col justify-between gap-5 border border-cobalt-500/15 p-6 md:p-8">
        <div>
          <p class="editorial-kicker mb-4">find me fast</p>
          <div class="space-y-3">
            <a
              href="https://github.com/caraseli02"
              target="_blank"
              rel="noopener noreferrer"
              class="ink-link"
            >
              GitHub ↗
            </a>
            <a
              href="https://linkedin.com/in/vlad-caraseli"
              target="_blank"
              rel="noopener noreferrer"
              class="ink-link"
            >
              LinkedIn ↗
            </a>
            <router-link to="/contact" class="ink-link">Contact page →</router-link>
          </div>
        </div>

        <div class="editorial-rule"></div>

        <div
          class="flex items-center justify-between gap-4 text-sm text-cobalt-500/65 dark:text-cobalt-300/65"
        >
          <span class="font-mono lowercase">vlad caraseli © {{ year }}</span>
          <span class="uppercase tracking-[0.2em]">palma de mallorca</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>

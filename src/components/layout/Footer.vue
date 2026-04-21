<template>
  <footer
    class="border-t border-cobalt-500/10 bg-cream-100/70 px-6 py-8 dark:bg-charcoal dark:border-cobalt-300/10"
  >
    <div class="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
      <div
        class="relative overflow-hidden rounded-[2rem] border border-cobalt-500/20 bg-cobalt-700 p-6 text-cream-50 shadow-[0_28px_80px_rgba(17,27,143,0.22)] md:p-8 dark:border-cobalt-300/20 dark:bg-cobalt-700"
      >
        <div class="absolute inset-0 opacity-[0.08]" aria-hidden="true">
          <div class="paper-grid h-full w-full"></div>
        </div>
        <div class="relative">
          <p class="editorial-kicker mb-3 text-cobalt-100/82">currently open to</p>
          <h2 class="max-w-xl text-3xl font-display text-white md:text-4xl">
            Product-facing frontend work, design systems, and UI polish that ships clean.
          </h2>
          <p class="mt-4 max-w-lg text-base leading-relaxed text-cobalt-100/86">
            Best fit is a team that already has momentum, but wants the interface to read as
            sharper, calmer, and more trustworthy.
          </p>
          <div class="mt-6 flex flex-wrap items-center gap-4 text-sm text-cobalt-100/88">
            <span>Based in Palma de Mallorca</span>
            <span aria-hidden="true">•</span>
            <span>Vue, React, Nuxt, TypeScript</span>
          </div>
          <div class="mt-8 flex flex-wrap gap-3">
            <a
              href="https://linkedin.com/in/vlad-caraseli"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cobalt-700 transition-opacity hover:opacity-85"
            >
              Start on LinkedIn ↗
            </a>
            <router-link
              to="/contact"
              class="inline-flex items-center justify-center border border-cobalt-100/30 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-cobalt-700"
            >
              Contact page →
            </router-link>
          </div>
        </div>
      </div>

      <div class="flex flex-col justify-between gap-5 border border-cobalt-500/15 p-6 md:p-8">
        <div>
          <p class="editorial-kicker mb-4">find me fast</p>
          <p class="mb-5 max-w-sm text-sm leading-relaxed text-cobalt-600 dark:text-cobalt-100/82">
            Send the role, timeline, and where the product currently feels weak. That is usually
            enough to spot the leverage quickly.
          </p>
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
          class="flex items-center justify-between gap-4 text-sm text-cobalt-500/65 dark:text-cobalt-100/62"
        >
          <span class="lowercase font-medium">vlad caraseli © {{ year }}</span>
          <span class="uppercase tracking-[0.2em]">palma de mallorca</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<template>
  <footer
    class="border-t border-cobalt-500/10 bg-cream-100/70 px-6 py-8 dark:border-cobalt-300/10 dark:bg-charcoal"
  >
    <div class="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
      <div
        class="relative overflow-hidden border border-cobalt-500/20 bg-cobalt-700 p-6 text-cream-50 shadow-[0_20px_60px_-28px_rgba(17,27,143,0.55)] md:p-8 dark:border-cobalt-300/20"
      >
        <div class="relative">
          <p class="editorial-kicker mb-3 text-cobalt-100/80">currently open to</p>
          <h2 class="max-w-xl font-display text-3xl text-white md:text-4xl">
            Frontend roles and product UI work that needs to ship clean.
          </h2>
          <p class="mt-4 max-w-lg text-base leading-relaxed text-cobalt-100/85">
            Best first touch is LinkedIn. Send the role, timeline, and where the product currently
            feels weak.
          </p>
          <div class="mt-6 flex flex-wrap items-center gap-4 text-sm text-cobalt-100/85">
            <span>Palma de Mallorca</span>
            <span aria-hidden="true">•</span>
            <span>Vue · Nuxt · React · TypeScript</span>
          </div>
          <div class="mt-8 flex flex-wrap gap-3">
            <a
              :href="links.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cobalt-700 transition-opacity hover:opacity-85"
            >
              Start on LinkedIn ↗
            </a>
            <a
              :href="links.cv"
              download
              class="inline-flex min-h-11 items-center justify-center border border-cobalt-100/30 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-cobalt-700"
            >
              Download CV ↓
            </a>
          </div>
        </div>
      </div>

      <div class="flex flex-col justify-between gap-5 border border-cobalt-500/15 p-6 md:p-8">
        <div>
          <p class="editorial-kicker mb-4">find me fast</p>
          <div class="space-y-3">
            <a :href="`mailto:${links.email}`" class="ink-link">{{ links.email }}</a>
            <a :href="links.phoneHref" class="ink-link">{{ links.phone }}</a>
            <a :href="links.github" target="_blank" rel="noopener noreferrer" class="ink-link"
              >GitHub ↗</a
            >
            <a :href="links.linkedin" target="_blank" rel="noopener noreferrer" class="ink-link"
              >LinkedIn ↗</a
            >
          </div>
        </div>

        <div class="editorial-rule"></div>

        <div
          class="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-cobalt-500/60 dark:text-cobalt-100/60"
        >
          <span>vlad caraseli © {{ year }}</span>
          <span>palma de mallorca</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { links } from "../../data/cv";

const year = new Date().getFullYear();
</script>

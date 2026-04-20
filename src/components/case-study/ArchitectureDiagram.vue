<template>
  <div class="border border-cobalt-500/15 dark:border-charcoal-200/40 bg-cream-100 dark:bg-charcoal-50">
    <!-- Top Properties -->
    <template v-if="slug === 'topproperties'">
      <div class="grid grid-cols-3 gap-px bg-cobalt-500/10 dark:bg-charcoal-200/30">
        <div class="bg-cream-100 dark:bg-charcoal-50 p-4 md:p-5">
          <p class="text-xs font-mono text-cobalt-500/50 dark:text-cobalt-300/50 mb-2">client</p>
          <p class="text-sm font-display font-bold text-cobalt-500 dark:text-cobalt-300">Browser</p>
          <p class="text-xs text-cobalt-500/50 dark:text-cobalt-300/50 mt-1">interactive map view</p>
        </div>
        <div class="bg-cream-100 dark:bg-charcoal-50 p-4 md:p-5">
          <p class="text-xs font-mono text-cobalt-500/50 dark:text-cobalt-300/50 mb-2">frontend</p>
          <p class="text-sm font-display font-bold text-cobalt-500 dark:text-cobalt-300">React 18</p>
          <p class="text-xs text-cobalt-500/50 dark:text-cobalt-300/50 mt-1">shadcn/ui + Tailwind CSS</p>
        </div>
        <div class="bg-cream-100 dark:bg-charcoal-50 p-4 md:p-5">
          <p class="text-xs font-mono text-cobalt-500/50 dark:text-cobalt-300/50 mb-2">map</p>
          <p class="text-sm font-display font-bold text-cobalt-500 dark:text-cobalt-300">Leaflet</p>
          <p class="text-xs text-cobalt-500/50 dark:text-cobalt-300/50 mt-1">auto-fitting bounds</p>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-px bg-cobalt-500/10 dark:bg-charcoal-200/30 border-t border-cobalt-500/10 dark:border-charcoal-200/30">
        <div class="bg-cream-100 dark:bg-charcoal-50 p-4 md:p-5">
          <p class="text-xs font-mono text-cobalt-500/50 dark:text-cobalt-300/50 mb-2">services</p>
          <p class="text-sm font-display font-bold text-cobalt-500 dark:text-cobalt-300">Pure Functions</p>
          <p class="text-xs text-cobalt-500/50 dark:text-cobalt-300/50 mt-1">filtering, pricing, XSS protection</p>
        </div>
        <div class="bg-cream-100 dark:bg-charcoal-50 p-4 md:p-5">
          <p class="text-xs font-mono text-cobalt-500/50 dark:text-cobalt-300/50 mb-2">resilience</p>
          <p class="text-sm font-display font-bold text-cobalt-500 dark:text-cobalt-300">Portal Modals</p>
          <p class="text-xs text-cobalt-500/50 dark:text-cobalt-300/50 mt-1">z-index isolation + image fallback</p>
        </div>
      </div>
      <div class="bg-cream-100 dark:bg-charcoal-50 p-3 border-t border-cobalt-500/10 dark:border-charcoal-200/30 text-center">
        <p class="text-xs font-mono text-cobalt-500/40 dark:text-cobalt-300/40">TypeScript + Vite</p>
      </div>
    </template>

    <!-- ECAS -->
    <template v-else-if="slug === 'ecas'">
      <div class="grid grid-cols-3 gap-px bg-cobalt-500/10 dark:bg-charcoal-200/30">
        <div class="bg-cream-100 dark:bg-charcoal-50 p-4 md:p-5">
          <p class="text-xs font-mono text-cobalt-500/50 dark:text-cobalt-300/50 mb-2">frontend</p>
          <p class="text-sm font-display font-bold text-cobalt-500 dark:text-cobalt-300">Nuxt 3</p>
          <p class="text-xs text-cobalt-500/50 dark:text-cobalt-300/50 mt-1">Pinia + Shadcn/Vue + layers</p>
        </div>
        <div class="bg-cream-100 dark:bg-charcoal-50 p-4 md:p-5">
          <p class="text-xs font-mono text-cobalt-500/50 dark:text-cobalt-300/50 mb-2">auth</p>
          <p class="text-sm font-display font-bold text-cobalt-500 dark:text-cobalt-300">Firebase</p>
          <p class="text-xs text-cobalt-500/50 dark:text-cobalt-300/50 mt-1">email + Google OAuth → JWT</p>
        </div>
        <div class="bg-cream-100 dark:bg-charcoal-50 p-4 md:p-5">
          <p class="text-xs font-mono text-cobalt-500/50 dark:text-cobalt-300/50 mb-2">payments</p>
          <p class="text-sm font-display font-bold text-cobalt-500 dark:text-cobalt-300">Stripe</p>
          <p class="text-xs text-cobalt-500/50 dark:text-cobalt-300/50 mt-1">cards, credit, bank, COD</p>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-px bg-cobalt-500/10 dark:bg-charcoal-200/30 border-t border-cobalt-500/10 dark:border-charcoal-200/30">
        <div class="bg-cream-100 dark:bg-charcoal-50 p-4 md:p-5">
          <p class="text-xs font-mono text-cobalt-500/50 dark:text-cobalt-300/50 mb-2">api layer</p>
          <p class="text-sm font-display font-bold text-cobalt-500 dark:text-cobalt-300">HttpFactory</p>
          <p class="text-xs text-cobalt-500/50 dark:text-cobalt-300/50 mt-1">17 services, generic call&lt;T&gt;</p>
        </div>
        <div class="bg-cream-100 dark:bg-charcoal-50 p-4 md:p-5">
          <p class="text-xs font-mono text-cobalt-500/50 dark:text-cobalt-300/50 mb-2">security</p>
          <p class="text-sm font-display font-bold text-cobalt-500 dark:text-cobalt-300">Error Sanitizer</p>
          <p class="text-xs text-cobalt-500/50 dark:text-cobalt-300/50 mt-1">masks secrets in console + UI</p>
        </div>
      </div>
      <div class="bg-cream-100 dark:bg-charcoal-50 p-3 border-t border-cobalt-500/10 dark:border-charcoal-200/30 text-center">
        <p class="text-xs font-mono text-cobalt-500/40 dark:text-cobalt-300/40">74 granular permissions + mock payment mode</p>
      </div>
    </template>

    <!-- ABS Storybook -->
    <template v-else-if="slug === 'abs-storybook'">
      <div class="grid grid-cols-3 gap-px bg-cobalt-500/10 dark:bg-charcoal-200/30">
        <div class="bg-cream-100 dark:bg-charcoal-50 p-4 md:p-5">
          <p class="text-xs font-mono text-cobalt-500/50 dark:text-cobalt-300/50 mb-2">components</p>
          <p class="text-sm font-display font-bold text-cobalt-500 dark:text-cobalt-300">React 19</p>
          <p class="text-xs text-cobalt-500/50 dark:text-cobalt-300/50 mt-1">Radix UI primitives</p>
        </div>
        <div class="bg-cream-100 dark:bg-charcoal-50 p-4 md:p-5">
          <p class="text-xs font-mono text-cobalt-500/50 dark:text-cobalt-300/50 mb-2">catalog</p>
          <p class="text-sm font-display font-bold text-cobalt-500 dark:text-cobalt-300">Storybook 10</p>
          <p class="text-xs text-cobalt-500/50 dark:text-cobalt-300/50 mt-1">Chromatic + a11y addon</p>
        </div>
        <div class="bg-cream-100 dark:bg-charcoal-50 p-4 md:p-5">
          <p class="text-xs font-mono text-cobalt-500/50 dark:text-cobalt-300/50 mb-2">i18n</p>
          <p class="text-sm font-display font-bold text-cobalt-500 dark:text-cobalt-300">i18next</p>
          <p class="text-xs text-cobalt-500/50 dark:text-cobalt-300/50 mt-1">multi-language stories</p>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-px bg-cobalt-500/10 dark:bg-charcoal-200/30 border-t border-cobalt-500/10 dark:border-charcoal-200/30">
        <div class="bg-cream-100 dark:bg-charcoal-50 p-4 md:p-5">
          <p class="text-xs font-mono text-cobalt-500/50 dark:text-cobalt-300/50 mb-2">types</p>
          <p class="text-sm font-display font-bold text-cobalt-500 dark:text-cobalt-300">Discriminated Unions</p>
          <p class="text-xs text-cobalt-500/50 dark:text-cobalt-300/50 mt-1">variant-based rendering</p>
        </div>
        <div class="bg-cream-100 dark:bg-charcoal-50 p-4 md:p-5">
          <p class="text-xs font-mono text-cobalt-500/50 dark:text-cobalt-300/50 mb-2">layout</p>
          <p class="text-sm font-display font-bold text-cobalt-500 dark:text-cobalt-300">useDynamicMaxHeight</p>
          <p class="text-xs text-cobalt-500/50 dark:text-cobalt-300/50 mt-1">responsive sidebar pipeline</p>
        </div>
        <div class="bg-cream-100 dark:bg-charcoal-50 p-4 md:p-5">
          <p class="text-xs font-mono text-cobalt-500/50 dark:text-cobalt-300/50 mb-2">safety</p>
          <p class="text-sm font-display font-bold text-cobalt-500 dark:text-cobalt-300">Fearless Refactoring</p>
          <p class="text-xs text-cobalt-500/50 dark:text-cobalt-300/50 mt-1">type-safe story contracts</p>
        </div>
      </div>
      <div class="bg-cream-100 dark:bg-charcoal-50 p-3 border-t border-cobalt-500/10 dark:border-charcoal-200/30 text-center">
        <p class="text-xs font-mono text-cobalt-500/40 dark:text-cobalt-300/40">TypeScript + Tailwind CSS 4</p>
      </div>
    </template>

    <!-- Generic fallback -->
    <template v-else>
      <div class="p-8 text-center">
        <p class="text-sm font-display text-cobalt-500 dark:text-cobalt-300">system architecture</p>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ArchitectureDiagram',
  props: {
    slug: { type: String, required: true },
  },
})
</script>

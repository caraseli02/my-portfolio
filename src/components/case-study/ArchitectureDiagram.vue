<template>
  <div
    class="border border-cobalt-500/15 dark:border-charcoal-200/40 bg-cream-100 dark:bg-charcoal-50"
  >
    <!-- Top Properties -->
    <template v-if="slug === 'topproperties'">
      <div class="grid grid-cols-3 gap-px bg-cobalt-500/10 dark:bg-charcoal-200/30">
        <div class="bg-cream-100 dark:bg-charcoal-50 p-4 md:p-5">
          <p class="text-xs font-mono text-cobalt-500/50 dark:text-cobalt-300/50 mb-2">client</p>
          <p class="text-sm font-display font-bold text-cobalt-500 dark:text-cobalt-300">Browser</p>
          <p class="text-xs text-cobalt-500/70 dark:text-cobalt-100/72 mt-1">
            Interactive map view
          </p>
        </div>
        <div class="bg-cream-100 dark:bg-charcoal-50 p-4 md:p-5">
          <p class="text-xs font-mono text-cobalt-500/50 dark:text-cobalt-300/50 mb-2">frontend</p>
          <p class="text-sm font-display font-bold text-cobalt-500 dark:text-cobalt-300">
            React 18
          </p>
          <p class="text-xs text-cobalt-500/70 dark:text-cobalt-100/72 mt-1">
            UI components + styling
          </p>
        </div>
        <div class="bg-cream-100 dark:bg-charcoal-50 p-4 md:p-5">
          <p class="text-xs font-mono text-cobalt-500/50 dark:text-cobalt-300/50 mb-2">map</p>
          <p class="text-sm font-display font-bold text-cobalt-500 dark:text-cobalt-300">Leaflet</p>
          <p class="text-xs text-cobalt-500/70 dark:text-cobalt-100/72 mt-1">
            Auto-fitting map bounds
          </p>
        </div>
      </div>
      <div
        class="grid grid-cols-2 gap-px bg-cobalt-500/10 dark:bg-charcoal-200/30 border-t border-cobalt-500/10 dark:border-charcoal-200/30"
      >
        <div class="bg-cream-100 dark:bg-charcoal-50 p-4 md:p-5">
          <p class="text-xs font-mono text-cobalt-500/50 dark:text-cobalt-300/50 mb-2">services</p>
          <p class="text-sm font-display font-bold text-cobalt-500 dark:text-cobalt-300">
            Pure Functions
          </p>
          <p class="text-xs text-cobalt-500/70 dark:text-cobalt-100/72 mt-1">
            Filtering, pricing, security logic
          </p>
        </div>
        <div class="bg-cream-100 dark:bg-charcoal-50 p-4 md:p-5">
          <p class="text-xs font-mono text-cobalt-500/50 dark:text-cobalt-300/50 mb-2">
            resilience
          </p>
          <p class="text-sm font-display font-bold text-cobalt-500 dark:text-cobalt-300">
            Portal Modals
          </p>
          <p class="text-xs text-cobalt-500/70 dark:text-cobalt-100/72 mt-1">
            Layered popups + image fallbacks
          </p>
        </div>
      </div>
      <div
        class="bg-cream-100 dark:bg-charcoal-50 p-3 border-t border-cobalt-500/10 dark:border-charcoal-200/30 text-center"
      >
        <p class="text-xs font-mono text-cobalt-500/40 dark:text-cobalt-300/40">
          TypeScript + Vite
        </p>
      </div>
    </template>

    <!-- ECAS -->
    <template v-else-if="slug === 'ecas'">
      <div class="grid grid-cols-3 gap-px bg-cobalt-500/10 dark:bg-charcoal-200/30">
        <div class="bg-cream-100 dark:bg-charcoal-50 p-4 md:p-5">
          <p class="text-xs font-mono text-cobalt-500/50 dark:text-cobalt-300/50 mb-2">frontend</p>
          <p class="text-sm font-display font-bold text-cobalt-500 dark:text-cobalt-300">Nuxt 3</p>
          <p class="text-xs text-cobalt-500/70 dark:text-cobalt-100/72 mt-1">
            Vue framework + state management
          </p>
        </div>
        <div class="bg-cream-100 dark:bg-charcoal-50 p-4 md:p-5">
          <p class="text-xs font-mono text-cobalt-500/50 dark:text-cobalt-300/50 mb-2">auth</p>
          <p class="text-sm font-display font-bold text-cobalt-500 dark:text-cobalt-300">
            Firebase
          </p>
          <p class="text-xs text-cobalt-500/70 dark:text-cobalt-100/72 mt-1">
            Email + Google login
          </p>
        </div>
        <div class="bg-cream-100 dark:bg-charcoal-50 p-4 md:p-5">
          <p class="text-xs font-mono text-cobalt-500/50 dark:text-cobalt-300/50 mb-2">payments</p>
          <p class="text-sm font-display font-bold text-cobalt-500 dark:text-cobalt-300">Stripe</p>
          <p class="text-xs text-cobalt-500/70 dark:text-cobalt-100/72 mt-1">
            Cards, bank transfer, cash on delivery
          </p>
        </div>
      </div>
      <div
        class="grid grid-cols-2 gap-px bg-cobalt-500/10 dark:bg-charcoal-200/30 border-t border-cobalt-500/10 dark:border-charcoal-200/30"
      >
        <div class="bg-cream-100 dark:bg-charcoal-50 p-4 md:p-5">
          <p class="text-xs font-mono text-cobalt-500/50 dark:text-cobalt-300/50 mb-2">api layer</p>
          <p class="text-sm font-display font-bold text-cobalt-500 dark:text-cobalt-300">
            HttpFactory
          </p>
          <p class="text-xs text-cobalt-500/70 dark:text-cobalt-100/72 mt-1">
            Reusable API service pattern
          </p>
        </div>
        <div class="bg-cream-100 dark:bg-charcoal-50 p-4 md:p-5">
          <p class="text-xs font-mono text-cobalt-500/50 dark:text-cobalt-300/50 mb-2">security</p>
          <p class="text-sm font-display font-bold text-cobalt-500 dark:text-cobalt-300">
            Error Sanitizer
          </p>
          <p class="text-xs text-cobalt-500/70 dark:text-cobalt-100/72 mt-1">
            Hides sensitive data from errors
          </p>
        </div>
      </div>
      <div
        class="bg-cream-100 dark:bg-charcoal-50 p-3 border-t border-cobalt-500/10 dark:border-charcoal-200/30 text-center"
      >
        <p class="text-xs font-mono text-cobalt-500/40 dark:text-cobalt-300/40">
          74 permission levels + safe test payments
        </p>
      </div>
    </template>

    <!-- ABS Storybook -->
    <template v-else-if="slug === 'abs-storybook'">
      <div class="grid grid-cols-3 gap-px bg-cobalt-500/10 dark:bg-charcoal-200/30">
        <div class="bg-cream-100 dark:bg-charcoal-50 p-4 md:p-5">
          <p class="text-xs font-mono text-cobalt-500/50 dark:text-cobalt-300/50 mb-2">
            components
          </p>
          <p class="text-sm font-display font-bold text-cobalt-500 dark:text-cobalt-300">
            React 19
          </p>
          <p class="text-xs text-cobalt-500/70 dark:text-cobalt-100/72 mt-1">
            Accessible UI building blocks
          </p>
        </div>
        <div class="bg-cream-100 dark:bg-charcoal-50 p-4 md:p-5">
          <p class="text-xs font-mono text-cobalt-500/50 dark:text-cobalt-300/50 mb-2">catalog</p>
          <p class="text-sm font-display font-bold text-cobalt-500 dark:text-cobalt-300">
            Storybook 10
          </p>
          <p class="text-xs text-cobalt-500/70 dark:text-cobalt-100/72 mt-1">
            Visual component documentation
          </p>
        </div>
        <div class="bg-cream-100 dark:bg-charcoal-50 p-4 md:p-5">
          <p class="text-xs font-mono text-cobalt-500/50 dark:text-cobalt-300/50 mb-2">i18n</p>
          <p class="text-sm font-display font-bold text-cobalt-500 dark:text-cobalt-300">i18next</p>
          <p class="text-xs text-cobalt-500/70 dark:text-cobalt-100/72 mt-1">
            Multi-language story support
          </p>
        </div>
      </div>
      <div
        class="grid grid-cols-3 gap-px bg-cobalt-500/10 dark:bg-charcoal-200/30 border-t border-cobalt-500/10 dark:border-charcoal-200/30"
      >
        <div class="bg-cream-100 dark:bg-charcoal-50 p-4 md:p-5">
          <p class="text-xs font-mono text-cobalt-500/50 dark:text-cobalt-300/50 mb-2">types</p>
          <p class="text-sm font-display font-bold text-cobalt-500 dark:text-cobalt-300">
            Discriminated Unions
          </p>
          <p class="text-xs text-cobalt-500/70 dark:text-cobalt-100/72 mt-1">
            Type-safe component variants
          </p>
        </div>
        <div class="bg-cream-100 dark:bg-charcoal-50 p-4 md:p-5">
          <p class="text-xs font-mono text-cobalt-500/50 dark:text-cobalt-300/50 mb-2">layout</p>
          <p class="text-sm font-display font-bold text-cobalt-500 dark:text-cobalt-300">
            Dynamic Height Hook
          </p>
          <p class="text-xs text-cobalt-500/70 dark:text-cobalt-100/72 mt-1">
            Responsive sidebar sizing
          </p>
        </div>
        <div class="bg-cream-100 dark:bg-charcoal-50 p-4 md:p-5">
          <p class="text-xs font-mono text-cobalt-500/50 dark:text-cobalt-300/50 mb-2">safety</p>
          <p class="text-sm font-display font-bold text-cobalt-500 dark:text-cobalt-300">
            Type-safe Stories
          </p>
          <p class="text-xs text-cobalt-500/70 dark:text-cobalt-100/72 mt-1">
            Catch errors before production
          </p>
        </div>
      </div>
      <div
        class="bg-cream-100 dark:bg-charcoal-50 p-3 border-t border-cobalt-500/10 dark:border-charcoal-200/30 text-center"
      >
        <p class="text-xs font-mono text-cobalt-500/40 dark:text-cobalt-300/40">
          TypeScript + Tailwind CSS 4
        </p>
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

<script setup lang="ts">
defineProps<{
  slug: string;
}>();
</script>

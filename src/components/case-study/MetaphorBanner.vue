<template>
  <div class="relative py-12 md:py-16">
    <!-- Decorative frame -->
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
      <svg viewBox="0 0 600 200" class="w-full max-w-2xl text-cobalt-500/10 dark:text-cobalt-300/10" fill="none" stroke="currentColor">
        <!-- Corner brackets -->
        <path d="M20 20 L20 60" stroke-width="2" stroke-linecap="round"/>
        <path d="M20 20 L60 20" stroke-width="2" stroke-linecap="round"/>
        <path d="M580 20 L580 60" stroke-width="2" stroke-linecap="round"/>
        <path d="M580 20 L540 20" stroke-width="2" stroke-linecap="round"/>
        <path d="M20 180 L20 140" stroke-width="2" stroke-linecap="round"/>
        <path d="M20 180 L60 180" stroke-width="2" stroke-linecap="round"/>
        <path d="M580 180 L580 140" stroke-width="2" stroke-linecap="round"/>
        <path d="M580 180 L540 180" stroke-width="2" stroke-linecap="round"/>
        <!-- Center diamond -->
        <path d="M300 30 L310 40 L300 50 L290 40 Z" stroke-width="1.5"/>
        <!-- Horizontal rule accents -->
        <line x1="100" y1="100" x2="250" y2="100" stroke-width="1" stroke-dasharray="4,4"/>
        <line x1="350" y1="100" x2="500" y2="100" stroke-width="1" stroke-dasharray="4,4"/>
      </svg>
    </div>

    <div class="relative text-center">
      <!-- Text label in geometric container -->
      <div class="inline-flex items-center justify-center w-16 h-16 mb-6 relative">
        <svg viewBox="0 0 64 64" class="absolute inset-0 text-cobalt-500/20 dark:text-cobalt-300/20" aria-hidden="true">
          <polygon points="32,4 58,18 58,46 32,60 6,46 6,18" fill="none" stroke="currentColor" stroke-width="1.5"/>
        </svg>
        <span class="text-sm font-mono font-bold text-cobalt-500 dark:text-cobalt-300 relative z-10 tracking-wider">{{ icon }}</span>
      </div>

      <!-- Quoted phrase -->
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-cobalt-500 dark:text-cobalt-300 mb-4 tracking-tight">
        {{ phrase }}
      </h2>

      <!-- Thin rule -->
      <div class="flex items-center justify-center gap-3 mb-4" aria-hidden="true">
        <div class="w-8 h-px bg-cobalt-500/30 dark:bg-charcoal-200/30"></div>
        <div class="w-1.5 h-1.5 rotate-45 border border-cobalt-500/40 dark:border-cobalt-300/40"></div>
        <div class="w-8 h-px bg-cobalt-500/30 dark:bg-charcoal-200/30"></div>
      </div>

      <!-- Description -->
      <p class="text-cobalt-500/60 dark:text-cobalt-300/60 max-w-md mx-auto leading-relaxed text-sm md:text-base">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MetaphorBanner',
  props: {
    phrase: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String, required: true },
  },
})
</script>

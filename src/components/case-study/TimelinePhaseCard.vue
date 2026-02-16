<template>
  <div
    ref="cardRef"
    class="group bg-cream-100 border overflow-hidden transition-all duration-500 reveal"
    :class="{
      revealed: isRevealed,
      'border-cobalt-500 shadow-lg shadow-cobalt-500/10': isActive,
      'border-cobalt-500/30': !isActive && !isCompleted,
      'border-cobalt-500/20': isCompleted && !isActive,
    }"
    :style="{ transitionDelay: (index * 100) + 'ms' }"
    data-cursor="card"
  >
    <!-- Mobile phase icon + label -->
    <div class="lg:hidden flex items-center gap-3 px-6 pt-6">
      <span class="text-2xl">{{ phase.icon }}</span>
      <span class="text-xs font-semibold uppercase tracking-wider text-cobalt-500">{{ phase.label }}</span>
    </div>

    <div class="p-6 lg:p-8">
      <p class="text-xs font-semibold uppercase tracking-wider text-cobalt-500 mb-2 hidden lg:block">{{ phase.label }}</p>
      <h3 class="text-xl font-bold text-cobalt-500 mb-3">{{ phase.title }}</h3>
      <p class="text-cobalt-600 leading-relaxed mb-4">{{ phase.narrative }}</p>
      <p v-if="phase.detail" class="text-cobalt-500 text-sm leading-relaxed mb-4 pl-4 border-l-2 border-cobalt-500">{{ phase.detail }}</p>

      <div
        v-if="phase.highlight"
        class="inline-flex items-center gap-2 px-4 py-2 bg-cobalt-500/10 rounded-lg text-cobalt-500 text-sm font-medium"
      >
        <svg class="w-4 h-4 text-cobalt-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        {{ phase.highlight }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { TimelinePhase } from '../../types/projects'
import { useScrollReveal } from '../../composables/useScrollReveal'

export default defineComponent({
  name: 'TimelinePhaseCard',
  props: {
    phase: { type: Object as PropType<TimelinePhase>, required: true },
    isActive: { type: Boolean, default: false },
    isCompleted: { type: Boolean, default: false },
    index: { type: Number, default: 0 },
  },
  setup() {
    const { revealRef: cardRef, isVisible: isRevealed } = useScrollReveal({ threshold: 0.1 })
    return { cardRef, isRevealed }
  },
})
</script>

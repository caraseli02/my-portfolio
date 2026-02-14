<template>
  <div
    ref="cardRef"
    class="group bg-white rounded-2xl border overflow-hidden transition-all duration-500 reveal"
    :class="{
      revealed: isRevealed,
      'border-vue-500 shadow-lg shadow-vue-500/10': isActive,
      'border-gray-200': !isActive && !isCompleted,
      'border-gray-100': isCompleted && !isActive,
    }"
    :style="{ transitionDelay: (index * 100) + 'ms' }"
    data-cursor="card"
  >
    <!-- Mobile phase icon + label -->
    <div class="lg:hidden flex items-center gap-3 px-6 pt-6">
      <span class="text-2xl">{{ phase.icon }}</span>
      <span class="text-xs font-semibold uppercase tracking-wider text-vue-500">{{ phase.label }}</span>
    </div>

    <div class="p-6 lg:p-8">
      <p class="text-xs font-semibold uppercase tracking-wider text-vue-500 mb-2 hidden lg:block">{{ phase.label }}</p>
      <h3 class="text-xl font-bold text-gray-900 mb-3">{{ phase.title }}</h3>
      <p class="text-gray-600 leading-relaxed mb-4">{{ phase.narrative }}</p>
      <p v-if="phase.detail" class="text-gray-500 text-sm leading-relaxed mb-4 narrative-callout">{{ phase.detail }}</p>

      <div
        v-if="phase.highlight"
        class="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-lg text-vue-700 text-sm font-medium"
      >
        <svg class="w-4 h-4 text-vue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

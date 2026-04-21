<template>
  <section class="py-12">
    <div class="mb-10">
      <h2 class="text-sm font-mono text-cobalt-500 dark:text-cobalt-300 mb-2">### journey</h2>
      <p class="text-lg text-cobalt-600 dark:text-cobalt-200">How this project unfolded</p>
    </div>

    <div ref="containerRef" class="space-y-0">
      <div
        v-for="(phase, i) in phases"
        :key="phase.id"
        data-phase
        class="reveal"
        :class="{ revealed: true }"
        :style="{ transitionDelay: (i * 80) + 'ms' }"
      >
        <TimelinePhaseCard
          :phase="phase"
          :is-active="i === activeIndex"
          :is-completed="i < activeIndex"
          :index="i"
          :total="phases.length"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { TimelinePhase } from '../../types/projects'
import { useScrollProgress } from '../../composables/useScrollProgress'
import TimelinePhaseCard from './TimelinePhaseCard.vue'

export default defineComponent({
  name: 'JourneyTimeline',
  components: { TimelinePhaseCard },
  props: {
    phases: { type: Array as PropType<TimelinePhase[]>, required: true },
    accentColor: { type: String, default: 'cobalt-500' },
  },
  setup() {
    const { containerRef, activeIndex } = useScrollProgress({
      activationOffset: 0.4,
    })

    return { containerRef, activeIndex }
  },
})
</script>

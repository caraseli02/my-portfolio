<template>
  <section class="py-12">
    <div class="mb-12">
      <h2 class="text-3xl md:text-4xl font-serif italic text-cobalt-500 mb-4">The Journey</h2>
      <p class="text-lg text-cobalt-600">How this project unfolded, step by step</p>
    </div>

    <div ref="containerRef" class="relative">
      <!-- Progress line (desktop only) -->
      <div class="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-cobalt-500/20 rounded-full">
        <div
          class="absolute top-0 left-0 w-full bg-cobalt-500 rounded-full transition-all duration-300"
          :style="{ height: (progress * 100) + '%' }"
        ></div>
      </div>

      <!-- Phase cards -->
      <div class="space-y-8 lg:pl-24">
        <div
          v-for="(phase, i) in phases"
          :key="phase.id"
          data-phase
          class="relative"
        >
          <!-- Phase marker (desktop, on the line) -->
          <div class="hidden lg:flex absolute -left-24 top-6 w-16 h-16 items-center justify-center">
            <div
              class="w-10 h-10 rounded-full border-2 flex items-center justify-center text-lg transition-all duration-500"
              :class="{
                'border-cobalt-500 bg-cobalt-500 text-white scale-110': i === activeIndex,
                'border-cobalt-500 bg-cobalt-500 text-white': i < activeIndex,
                'border-cobalt-500/30 bg-cream-100 text-cobalt-500/50': i > activeIndex,
              }"
            >
              {{ phase.icon }}
            </div>
          </div>

          <TimelinePhaseCard
            :phase="phase"
            :is-active="i === activeIndex"
            :is-completed="i < activeIndex"
            :index="i"
          />
        </div>
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
    const { containerRef, activeIndex, progress } = useScrollProgress({
      activationOffset: 0.4,
    })

    return {
      containerRef,
      activeIndex,
      progress,
    }
  },
})
</script>

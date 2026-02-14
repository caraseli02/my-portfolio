<template>
  <section class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-6 lg:px-8">
      <div
        ref="headingRef"
        class="mb-16 reveal"
        :class="{ revealed: headingVisible }"
      >
        <h2 class="section-heading">The Journey</h2>
        <p class="section-subheading">How this project unfolded, step by step</p>
      </div>

      <div ref="containerRef" class="relative">
        <!-- Progress line (desktop only) -->
        <div class="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 rounded-full">
          <div
            class="timeline-progress-fill bg-gradient-to-b"
            :class="accentGradient"
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
                class="phase-marker"
                :class="{
                  'phase-marker--active': i === activeIndex,
                  'phase-marker--completed': i < activeIndex,
                  'phase-marker--upcoming': i > activeIndex,
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
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { TimelinePhase } from '../../types/projects'
import { useScrollReveal } from '../../composables/useScrollReveal'
import { useScrollProgress } from '../../composables/useScrollProgress'
import TimelinePhaseCard from './TimelinePhaseCard.vue'

export default defineComponent({
  name: 'JourneyTimeline',
  components: { TimelinePhaseCard },
  props: {
    phases: { type: Array as PropType<TimelinePhase[]>, required: true },
    accentGradient: { type: String, default: 'from-vue-500 to-emerald-400' },
  },
  setup() {
    const { revealRef: headingRef, isVisible: headingVisible } = useScrollReveal()
    const { containerRef, activeIndex, progress } = useScrollProgress({
      activationOffset: 0.4,
    })

    return {
      headingRef,
      headingVisible,
      containerRef,
      activeIndex,
      progress,
    }
  },
})
</script>

<template>
  <section class="py-12">
    <div class="mb-12">
      <h2 class="text-3xl md:text-4xl font-display text-cobalt-500 dark:text-cobalt-300 mb-4">The Impact</h2>
      <p class="text-lg text-cobalt-600 dark:text-cobalt-200">Measurable results from the project</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div
        v-for="(outcome, i) in outcomes"
        :key="outcome.label"
        :ref="el => { if (el) outcomeRefs[i] = el }"
        class="relative p-8 border border-cobalt-500/20 dark:border-charcoal-200/40 bg-cream-100 dark:bg-charcoal-50 reveal group"
        :class="{ revealed: outcomeVisibility[i] }"
        :style="{ transitionDelay: (i * 150) + 'ms' }"
      >
        <!-- Top accent line -->
        <div class="absolute top-0 left-0 right-0 h-1 bg-cobalt-500/20 dark:bg-cobalt-300/20 group-hover:bg-cobalt-500/60 dark:group-hover:bg-cobalt-300/60 transition-colors duration-300" aria-hidden="true"></div>

        <!-- Corner index number -->
        <span class="absolute top-3 right-4 text-xs font-mono text-cobalt-500/30 dark:text-cobalt-300/30" aria-hidden="true">
          {{ String(i + 1).padStart(2, '0') }}
        </span>

        <!-- Large metric -->
        <div class="text-4xl md:text-5xl font-display font-bold text-cobalt-500 dark:text-cobalt-300 mb-3">
          {{ outcome.metric }}
        </div>

        <!-- Label -->
        <p class="text-cobalt-600 dark:text-cobalt-200 font-medium text-sm uppercase tracking-wider">
          {{ outcome.label }}
        </p>

        <!-- Decorative bottom bar -->
        <div class="mt-4 flex gap-1" aria-hidden="true">
          <div
            v-for="n in 5"
            :key="n"
            class="h-0.5 flex-1 transition-colors duration-300"
            :class="n <= i + 2 ? 'bg-cobalt-500/40 dark:bg-cobalt-300/40' : 'bg-cobalt-500/10 dark:bg-charcoal-200/20'"
          ></div>
        </div>

        <!-- Description -->
        <p v-if="outcome.description" class="text-cobalt-500/70 dark:text-cobalt-300/70 text-sm mt-3">
          {{ outcome.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, onUnmounted, PropType } from 'vue'
import { Outcome } from '../../types/projects'

export default defineComponent({
  name: 'OutcomesGrid',
  props: {
    outcomes: { type: Array as PropType<Outcome[]>, required: true },
  },
  setup() {
    const outcomeRefs = reactive<Record<number, HTMLElement>>({})
    const outcomeVisibility = reactive<Record<number, boolean>>({})
    let observer: IntersectionObserver | null = null

    onMounted(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const idx = Object.values(outcomeRefs).indexOf(entry.target as HTMLElement)
              if (idx !== -1) outcomeVisibility[idx] = true
              observer?.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
      )
      Object.values(outcomeRefs).forEach((el) => observer?.observe(el))
    })

    onUnmounted(() => {
      observer?.disconnect()
      observer = null
    })

    return { outcomeRefs, outcomeVisibility }
  },
})
</script>

<template>
  <section>
    <div class="mb-10">
      <h2 class="text-sm font-mono text-cobalt-500 dark:text-cobalt-300 mb-2">### impact</h2>
      <p class="text-lg text-cobalt-600 dark:text-cobalt-200">Measurable results</p>
    </div>

    <!-- Horizontal metrics strip -->
    <div
      v-for="(outcome, i) in outcomes"
      :key="outcome.label"
      :ref="el => { if (el) outcomeRefs[i] = el }"
      class="flex items-baseline gap-6 py-4 border-b border-cobalt-500/10 dark:border-charcoal-200/20 reveal group last:border-b-0"
      :class="{ revealed: outcomeVisibility[i] }"
      :style="{ transitionDelay: (i * 100) + 'ms' }"
    >
      <!-- Index -->
      <span class="text-xs font-mono text-cobalt-500/30 dark:text-cobalt-300/30 w-6 shrink-0 tabular-nums">
        {{ String(i + 1).padStart(2, '0') }}
      </span>

      <!-- Metric -->
      <span class="text-2xl md:text-3xl font-display font-bold text-cobalt-500 dark:text-cobalt-300 shrink-0 tabular-nums w-24 md:w-32">
        {{ outcome.metric }}
      </span>

      <!-- Label + description -->
      <div class="flex-1 min-w-0">
        <span class="text-sm font-medium text-cobalt-600 dark:text-cobalt-200">{{ outcome.label }}</span>
        <p v-if="outcome.description" class="text-sm text-cobalt-500/60 dark:text-cobalt-300/60 mt-0.5">
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

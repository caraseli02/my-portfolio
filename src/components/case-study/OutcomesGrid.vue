<template>
  <section class="py-12">
    <div class="mb-12 text-center">
      <h2 class="text-3xl md:text-4xl font-serif italic text-cobalt-500 mb-4">The Impact</h2>
      <p class="text-lg text-cobalt-600">Measurable results from the project</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div
        v-for="(outcome, i) in outcomes"
        :key="outcome.label"
        :ref="el => { if (el) outcomeRefs[i] = el }"
        class="text-center p-8 bg-cream-100 border border-cobalt-500/30 reveal"
        :class="{ revealed: outcomeVisibility[i] }"
        :style="{ transitionDelay: (i * 150) + 'ms' }"
      >
        <div class="text-4xl md:text-5xl font-bold text-cobalt-500 mb-2">{{ outcome.metric }}</div>
        <p class="text-cobalt-600 font-medium text-sm uppercase tracking-wider">{{ outcome.label }}</p>
        <p v-if="outcome.description" class="text-cobalt-500/70 text-sm mt-2">{{ outcome.description }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, PropType } from 'vue'
import { Outcome } from '../../types/projects'

export default defineComponent({
  name: 'OutcomesGrid',
  props: {
    outcomes: { type: Array as PropType<Outcome[]>, required: true },
  },
  setup() {
    const outcomeRefs = reactive<Record<number, HTMLElement>>({})
    const outcomeVisibility = reactive<Record<number, boolean>>({})
    const observers: IntersectionObserver[] = []

    onMounted(() => {
      Object.keys(outcomeRefs).forEach((key) => {
        const idx = Number(key)
        const el = outcomeRefs[idx]
        if (!el) return
        const obs = new IntersectionObserver(
          (entries) => {
            if (entries[0]?.isIntersecting) {
              outcomeVisibility[idx] = true
              obs.unobserve(el)
            }
          },
          { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
        )
        obs.observe(el)
        observers.push(obs)
      })
    })

    return { outcomeRefs, outcomeVisibility }
  },
})
</script>

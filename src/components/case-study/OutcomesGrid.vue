<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-6xl mx-auto px-6 lg:px-8">
      <div
        ref="headingRef"
        class="mb-16 text-center reveal"
        :class="{ revealed: headingVisible }"
      >
        <h2 class="section-heading">The Impact</h2>
        <p class="section-subheading mx-auto">Measurable results from the project</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div
          v-for="(outcome, i) in outcomes"
          :key="outcome.label"
          :ref="el => { if (el) outcomeRefs[i] = el }"
          class="text-center p-8 bg-white rounded-2xl border border-gray-200 reveal"
          :class="{ revealed: outcomeVisibility[i] }"
          :style="{ transitionDelay: (i * 150) + 'ms' }"
        >
          <div class="outcome-metric mb-2">{{ outcome.metric }}</div>
          <p class="text-gray-600 font-medium text-sm uppercase tracking-wider">{{ outcome.label }}</p>
          <p v-if="outcome.description" class="text-gray-400 text-sm mt-2">{{ outcome.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, PropType } from 'vue'
import { Outcome } from '../../types/projects'
import { useScrollReveal } from '../../composables/useScrollReveal'

export default defineComponent({
  name: 'OutcomesGrid',
  props: {
    outcomes: { type: Array as PropType<Outcome[]>, required: true },
  },
  setup() {
    const { revealRef: headingRef, isVisible: headingVisible } = useScrollReveal()

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

    return { headingRef, headingVisible, outcomeRefs, outcomeVisibility }
  },
})
</script>

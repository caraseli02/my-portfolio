<template>
  <section class="py-20 bg-white">
    <div class="max-w-4xl mx-auto px-6 lg:px-8">
      <div
        ref="headingRef"
        class="mb-12 reveal"
        :class="{ revealed: headingVisible }"
      >
        <h2 class="section-heading">Key Takeaways</h2>
        <p class="section-subheading">What I learned building this project</p>
      </div>

      <div class="space-y-4">
        <div
          v-for="(lesson, i) in lessons"
          :key="i"
          :ref="el => { if (el) lessonRefs[i] = el }"
          class="flex items-start gap-4 p-6 bg-gray-50 rounded-xl reveal"
          :class="{ revealed: lessonVisibility[i] }"
          :style="{ transitionDelay: (i * 100) + 'ms' }"
        >
          <div class="w-8 h-8 bg-vue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <p class="text-gray-700 leading-relaxed">{{ lesson }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, PropType } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'

export default defineComponent({
  name: 'LessonsLearned',
  props: {
    lessons: { type: Array as PropType<string[]>, required: true },
  },
  setup() {
    const { revealRef: headingRef, isVisible: headingVisible } = useScrollReveal()

    const lessonRefs = reactive<Record<number, HTMLElement>>({})
    const lessonVisibility = reactive<Record<number, boolean>>({})
    const observers: IntersectionObserver[] = []

    onMounted(() => {
      Object.keys(lessonRefs).forEach((key) => {
        const idx = Number(key)
        const el = lessonRefs[idx]
        if (!el) return
        const obs = new IntersectionObserver(
          (entries) => {
            if (entries[0]?.isIntersecting) {
              lessonVisibility[idx] = true
              obs.unobserve(el)
            }
          },
          { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
        )
        obs.observe(el)
        observers.push(obs)
      })
    })

    return { headingRef, headingVisible, lessonRefs, lessonVisibility }
  },
})
</script>

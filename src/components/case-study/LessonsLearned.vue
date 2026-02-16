<template>
  <section class="py-12">
    <div class="mb-12">
      <h2 class="text-3xl md:text-4xl font-serif italic text-cobalt-500 mb-4">Key Takeaways</h2>
      <p class="text-lg text-cobalt-600">What I learned building this project</p>
    </div>

    <div class="space-y-4">
      <div
        v-for="(lesson, i) in lessons"
        :key="i"
        :ref="el => { if (el) lessonRefs[i] = el }"
        class="flex items-start gap-4 p-6 bg-cream-100 border border-cobalt-500/20 reveal"
        :class="{ revealed: lessonVisibility[i] }"
        :style="{ transitionDelay: (i * 100) + 'ms' }"
      >
        <div class="w-8 h-8 bg-cobalt-500 flex items-center justify-center flex-shrink-0 mt-0.5">
          <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <p class="text-cobalt-700 leading-relaxed">{{ lesson }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, onUnmounted, PropType } from 'vue'

export default defineComponent({
  name: 'LessonsLearned',
  props: {
    lessons: { type: Array as PropType<string[]>, required: true },
  },
  setup() {
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

    onUnmounted(() => {
      observers.forEach(obs => obs.disconnect())
      observers.length = 0
    })

    return { lessonRefs, lessonVisibility }
  },
})
</script>

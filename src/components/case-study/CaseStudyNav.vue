<template>
  <section class="py-16 bg-vue-700">
    <div class="max-w-6xl mx-auto px-6 lg:px-8">
      <div class="flex items-center" :class="prevSlug && nextSlug ? 'justify-between' : (nextSlug ? 'justify-end' : 'justify-start')">
        <router-link
          v-if="prevSlug"
          ref="prevRef"
          :to="{ name: 'case-study', params: { slug: prevSlug } }"
          class="group flex items-center gap-3 px-6 py-4 bg-white bg-opacity-10 rounded-xl hover:bg-opacity-20 transition-all text-white ripple-container"
          data-cursor="button"
        >
          <svg class="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path>
          </svg>
          <div class="text-left">
            <p class="text-xs text-gray-400 uppercase tracking-wider">Previous</p>
            <p class="font-semibold text-sm">{{ prevTitle }}</p>
          </div>
        </router-link>

        <router-link
          v-if="nextSlug"
          ref="nextRef"
          :to="{ name: 'case-study', params: { slug: nextSlug } }"
          class="group flex items-center gap-3 px-6 py-4 bg-white bg-opacity-10 rounded-xl hover:bg-opacity-20 transition-all text-white ripple-container"
          data-cursor="button"
        >
          <div class="text-right">
            <p class="text-xs text-gray-400 uppercase tracking-wider">Next</p>
            <p class="font-semibold text-sm">{{ nextTitle }}</p>
          </div>
          <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </router-link>
      </div>

      <div class="text-center mt-10">
        <router-link
          to="/projects"
          class="inline-flex items-center gap-2 text-gray-300 hover:text-white font-medium text-sm transition-colors"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path>
          </svg>
          Back to all projects
        </router-link>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CaseStudyNav',
  props: {
    prevSlug: { type: String, default: undefined },
    prevTitle: { type: String, default: undefined },
    nextSlug: { type: String, default: undefined },
    nextTitle: { type: String, default: undefined },
  },
})
</script>

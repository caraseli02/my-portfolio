<template>
  <div v-if="project && caseStudy" class="bg-cream-100 min-h-screen">
    <!-- Header Section -->
    <section class="pt-32 pb-16 px-6 lg:px-12 border-b border-cobalt-500/20">
      <div class="max-w-6xl mx-auto">
        <!-- Number and Title -->
        <div class="mb-8">
          <span class="text-6xl md:text-7xl lg:text-8xl font-serif text-cobalt-500 block mb-4">
            {{ formattedNumber }}
          </span>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-cobalt-500 leading-tight">
            {{ project.title }}
          </h1>
        </div>

        <!-- Tags -->
        <div class="flex flex-wrap gap-3 mb-8">
          <span 
            v-for="tag in project.tags" 
            :key="tag"
            class="pill-badge"
          >
            {{ tag }}
          </span>
        </div>

        <!-- Tagline -->
        <p class="text-xl md:text-2xl font-serif italic text-cobalt-500 max-w-3xl">
          {{ caseStudy.tagline }}
        </p>

        <!-- Down Arrow -->
        <div class="mt-8 flex justify-center">
          <svg viewBox="0 0 24 24" class="w-8 h-8 text-cobalt-500 animate-bounce">
            <path d="M12 5v14M5 12l7 7 7-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-16 px-6 lg:px-12 border-b border-cobalt-500/20">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-sm font-mono text-cobalt-500 mb-6">### about</h2>
        <p class="text-lg md:text-xl text-cobalt-600 leading-relaxed">
          {{ caseStudy.description || project.description }}
        </p>
      </div>
    </section>

    <!-- Section Marquees -->
    <section class="overflow-hidden border-b border-cobalt-500/20">
      <!-- Row 1 -->
      <Marquee :duration="15" class="py-4 border-b border-cobalt-500/10">
        <div class="flex items-center gap-8 px-8">
          <span class="text-3xl md:text-4xl font-bold text-cobalt-500">#01branding</span>
          <svg viewBox="0 0 40 24" class="w-10 h-6 text-cobalt-500">
            <path d="M5 12h20M20 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <span class="text-3xl md:text-4xl font-bold text-cobalt-500">#02website</span>
          <svg viewBox="0 0 40 24" class="w-10 h-6 text-cobalt-500">
            <path d="M5 12h20M20 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <span class="text-3xl md:text-4xl font-bold text-cobalt-500">#03motion</span>
          <svg viewBox="0 0 40 24" class="w-10 h-6 text-cobalt-500">
            <path d="M5 12h20M20 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <span class="text-3xl md:text-4xl font-bold text-cobalt-500">#04editorial</span>
          <svg viewBox="0 0 50 50" class="w-10 h-10 text-cobalt-500">
            <polygon points="25,2 31,18 48,18 34,28 40,45 25,35 10,45 16,28 2,18 19,18" fill="currentColor"/>
          </svg>
        </div>
      </Marquee>

      <!-- Row 2 -->
      <Marquee :duration="15" :reverse="true" class="py-4 border-b border-cobalt-500/10">
        <div class="flex items-center gap-8 px-8">
          <span class="text-3xl md:text-4xl font-bold text-cobalt-500">#01branding</span>
          <svg viewBox="0 0 40 24" class="w-10 h-6 text-cobalt-500">
            <path d="M5 12h20M20 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <span class="text-3xl md:text-4xl font-bold text-cobalt-500">#02website</span>
          <svg viewBox="0 0 40 24" class="w-10 h-6 text-cobalt-500">
            <path d="M5 12h20M20 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <span class="text-3xl md:text-4xl font-bold text-cobalt-500">#03motion</span>
          <svg viewBox="0 0 40 24" class="w-10 h-6 text-cobalt-500">
            <path d="M5 12h20M20 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <span class="text-3xl md:text-4xl font-bold text-cobalt-500">#04editorial</span>
          <svg viewBox="0 0 50 50" class="w-10 h-10 text-cobalt-500">
            <polygon points="25,2 31,18 48,18 34,28 40,45 25,35 10,45 16,28 2,18 19,18" fill="currentColor"/>
          </svg>
        </div>
      </Marquee>

      <!-- Row 3 -->
      <Marquee :duration="15" class="py-4 border-b border-cobalt-500/10">
        <div class="flex items-center gap-8 px-8">
          <span class="text-3xl md:text-4xl font-bold text-cobalt-500">#01branding</span>
          <svg viewBox="0 0 40 24" class="w-10 h-6 text-cobalt-500">
            <path d="M5 12h20M20 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <span class="text-3xl md:text-4xl font-bold text-cobalt-500">#02website</span>
          <svg viewBox="0 0 40 24" class="w-10 h-6 text-cobalt-500">
            <path d="M5 12h20M20 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <span class="text-3xl md:text-4xl font-bold text-cobalt-500">#03motion</span>
          <svg viewBox="0 0 40 24" class="w-10 h-6 text-cobalt-500">
            <path d="M5 12h20M20 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <span class="text-3xl md:text-4xl font-bold text-cobalt-500">#04editorial</span>
          <svg viewBox="0 0 50 50" class="w-10 h-10 text-cobalt-500">
            <polygon points="25,2 31,18 48,18 34,28 40,45 25,35 10,45 16,28 2,18 19,18" fill="currentColor"/>
          </svg>
        </div>
      </Marquee>

      <!-- Row 4 -->
      <Marquee :duration="15" :reverse="true" class="py-4">
        <div class="flex items-center gap-8 px-8">
          <span class="text-3xl md:text-4xl font-bold text-cobalt-500">#01branding</span>
          <svg viewBox="0 0 40 24" class="w-10 h-6 text-cobalt-500">
            <path d="M5 12h20M20 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <span class="text-3xl md:text-4xl font-bold text-cobalt-500">#02website</span>
          <svg viewBox="0 0 40 24" class="w-10 h-6 text-cobalt-500">
            <path d="M5 12h20M20 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <span class="text-3xl md:text-4xl font-bold text-cobalt-500">#03motion</span>
          <svg viewBox="0 0 40 24" class="w-10 h-6 text-cobalt-500">
            <path d="M5 12h20M20 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <span class="text-3xl md:text-4xl font-bold text-cobalt-500">#04editorial</span>
          <svg viewBox="0 0 50 50" class="w-10 h-10 text-cobalt-500">
            <polygon points="25,2 31,18 48,18 34,28 40,45 25,35 10,45 16,28 2,18 19,18" fill="currentColor"/>
          </svg>
        </div>
      </Marquee>
    </section>

    <!-- Content Sections -->
    <section class="py-16 px-6 lg:px-12">
      <div class="max-w-4xl mx-auto space-y-16">
        <!-- Journey Timeline -->
        <JourneyTimeline
          :phases="caseStudy.timeline"
          accent-color="cobalt-500"
        />

        <!-- Outcomes -->
        <OutcomesGrid :outcomes="caseStudy.outcomes" />

        <!-- Lessons -->
        <LessonsLearned :lessons="caseStudy.lessonsLearned" />
      </div>
    </section>

    <!-- Navigation -->
    <section class="py-12 px-6 lg:px-12 border-t border-cobalt-500/20">
      <div class="max-w-6xl mx-auto">
        <div class="flex items-center justify-between">
          <!-- Previous -->
          <router-link
            v-if="prevProject"
            :to="{ name: 'case-study', params: { slug: prevProject.slug } }"
            class="group flex items-center gap-4 text-cobalt-500 hover:opacity-70 transition-opacity"
          >
            <svg viewBox="0 0 80 40" class="w-16 h-8 text-cobalt-500 group-hover:-translate-x-2 transition-transform">
              <text x="10" y="25" font-family="Cormorant Garamond, serif" font-size="14" font-style="italic" fill="currentColor">This Way</text>
            </svg>
            <svg viewBox="0 0 24 24" class="w-6 h-6 text-cobalt-500 rotate-180">
              <path d="M12 5v14M5 12l7 7 7-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </router-link>
          <div v-else class="w-24"></div>

          <!-- Home -->
          <router-link
            to="/"
            class="font-serif italic text-cobalt-500 hover:opacity-70 transition-opacity"
          >
            take me home
          </router-link>

          <!-- Next -->
          <router-link
            v-if="nextProject"
            :to="{ name: 'case-study', params: { slug: nextProject.slug } }"
            class="group flex items-center gap-4 text-cobalt-500 hover:opacity-70 transition-opacity"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 text-cobalt-500">
              <path d="M12 5v14M5 12l7 7 7-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <svg viewBox="0 0 80 40" class="w-16 h-8 text-cobalt-500 group-hover:translate-x-2 transition-transform">
              <text x="10" y="25" font-family="Cormorant Garamond, serif" font-size="14" font-style="italic" fill="currentColor">That Way</text>
            </svg>
          </router-link>
          <div v-else class="w-24"></div>
        </div>
      </div>
    </section>

    <!-- Meet You Marquees -->
    <section class="py-6 overflow-hidden border-t border-cobalt-500/20">
      <Marquee :duration="20" class="py-2">
        <div class="flex items-center gap-6 px-4">
          <svg viewBox="0 0 40 40" class="w-8 h-8 text-cobalt-500"><polygon points="20,5 25,18 38,18 28,28 32,42 20,35 8,42 12,28 2,18 15,18" fill="currentColor"/></svg>
          <svg viewBox="0 0 60 80" class="w-6 h-8 text-cobalt-500"><path d="M10 70 Q10 10, 30 10 Q50 10, 50 70" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>
          <svg viewBox="0 0 80 40" class="w-14 h-6 text-cobalt-500"><path d="M5 20 Q15 5, 25 20 Q35 35, 45 20 Q55 5, 65 20 Q75 35, 75 20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>
          <svg viewBox="0 0 80 40" class="w-14 h-6 text-cobalt-500"><polygon points="60,20 55,8 65,14 70,2 72,15 82,12 74,20 82,28 72,25 70,38 65,26 55,32" fill="currentColor"/><path d="M5 20 L50 20" stroke="currentColor" stroke-width="2" stroke-dasharray="3,3"/></svg>
          <span class="text-xl md:text-2xl font-serif italic text-cobalt-500 whitespace-nowrap">it's nice to meet you</span>
        </div>
      </Marquee>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watchEffect } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getProjectBySlug, getProjectIndex } from '../data/projects'
import JourneyTimeline from '../components/case-study/JourneyTimeline.vue'
import OutcomesGrid from '../components/case-study/OutcomesGrid.vue'
import LessonsLearned from '../components/case-study/LessonsLearned.vue'
import Footer from '../components/layout/Footer.vue'
import Marquee from '../components/ui/Marquee.vue'

export default defineComponent({
  name: 'CaseStudy',
  components: {
    JourneyTimeline,
    OutcomesGrid,
    LessonsLearned,
    Footer,
    Marquee,
  },
  props: {
    slug: { type: String, required: true },
  },
  setup(props) {
    const router = useRouter()
    const route = useRoute()
    const project = computed(() => getProjectBySlug(props.slug))
    const caseStudy = computed(() => project.value?.caseStudy)

    const formattedNumber = computed(() => {
      const index = getProjectIndex(props.slug)
      return (index + 1).toString().padStart(2, '0')
    })

    watchEffect(() => {
      if (!project.value || !caseStudy.value) {
        router.replace({ name: 'home', hash: '#case-studies' })
      }
    })

    const prevProject = computed(() => {
      if (!caseStudy.value?.prevProject) return null
      const p = getProjectBySlug(caseStudy.value.prevProject)
      return p ? { slug: caseStudy.value.prevProject, title: p.title } : null
    })

    const nextProject = computed(() => {
      if (!caseStudy.value?.nextProject) return null
      const p = getProjectBySlug(caseStudy.value.nextProject)
      return p ? { slug: caseStudy.value.nextProject, title: p.title } : null
    })

    return { 
      project, 
      caseStudy, 
      prevProject, 
      nextProject,
      formattedNumber
    }
  },
})
</script>

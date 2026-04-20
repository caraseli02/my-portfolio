<template>
  <div v-if="project && caseStudy" class="bg-cream-100 dark:bg-charcoal min-h-screen">
    <!-- Header Section -->
    <section class="pt-32 pb-16 px-6 lg:px-12 border-b border-cobalt-500/20 dark:border-charcoal-200/40">
      <div class="max-w-6xl mx-auto">
        <!-- Number and Title -->
        <div class="mb-8">
          <span class="text-6xl md:text-7xl lg:text-8xl font-display text-cobalt-500 dark:text-cobalt-300 block mb-4">
            {{ formattedNumber }}
          </span>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-cobalt-500 dark:text-cobalt-300 leading-tight">
            {{ project.title }}
          </h1>
        </div>

        <!-- Tags -->
        <div class="flex flex-wrap gap-3 mb-8">
          <span
            v-for="tag in project.tech"
            :key="tag"
            class="pill-badge"
          >
            {{ tag }}
          </span>
        </div>

        <!-- Tagline -->
        <p class="text-xl md:text-2xl font-display text-cobalt-500 dark:text-cobalt-300 max-w-3xl">
          {{ caseStudy.tagline }}
        </p>

        <!-- Down Arrow -->
        <div class="mt-8 flex justify-center">
          <svg viewBox="0 0 24 24" class="w-8 h-8 text-cobalt-500 dark:text-cobalt-300 animate-float" aria-hidden="true">
            <path d="M12 5v14M5 12l7 7 7-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
      </div>
    </section>

    <!-- Hero Image -->
    <section class="border-b border-cobalt-500/20">
      <div class="max-w-6xl mx-auto px-6 lg:px-12 py-12">
        <img
          :src="`/project-images/${caseStudy.slug}.jpg`"
          :alt="`${project.title} screenshot`"
          class="w-full rounded-lg shadow-2xl"
          loading="eager"
        />
      </div>
    </section>

    <!-- About Section -->
    <section class="py-16 px-6 lg:px-12 border-b border-cobalt-500/20 dark:border-charcoal-200/40">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-sm font-mono text-cobalt-500 dark:text-cobalt-300 mb-6">### about</h2>
        <p class="text-lg md:text-xl text-cobalt-600 dark:text-cobalt-200 leading-relaxed">
          {{ caseStudy.description || project.description }}
        </p>
      </div>
    </section>

    <!-- Tech Stack -->
    <section class="py-10 px-6 lg:px-12 border-b border-cobalt-500/20 dark:border-charcoal-200/40">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-sm font-mono text-cobalt-500 dark:text-cobalt-300 mb-6">### tech stack</h2>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in project.tech"
            :key="tech"
            class="px-4 py-2.5 border border-cobalt-500/20 dark:border-charcoal-200/60 text-sm font-mono text-cobalt-500 dark:text-cobalt-300 lowercase hover:border-cobalt-500/50 dark:hover:border-cobalt-300/50 transition-colors duration-200"
          >{{ tech }}</span>
        </div>
      </div>
    </section>

    <!-- Project Metadata Grid -->
    <section class="py-8 px-6 lg:px-12 border-b border-cobalt-500/20 dark:border-charcoal-200/40">
      <div class="max-w-4xl mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="flex flex-col">
            <span class="text-xs font-mono text-cobalt-500/50 dark:text-cobalt-300/50 uppercase tracking-wider mb-1">Duration</span>
            <span class="text-lg font-display text-cobalt-500 dark:text-cobalt-300">{{ caseStudy.duration }}</span>
          </div>
          <div class="flex flex-col">
            <span class="text-xs font-mono text-cobalt-500/50 dark:text-cobalt-300/50 uppercase tracking-wider mb-1">Role</span>
            <span class="text-lg font-display text-cobalt-500 dark:text-cobalt-300">{{ caseStudy.role }}</span>
          </div>
          <div class="flex flex-col">
            <span class="text-xs font-mono text-cobalt-500/50 dark:text-cobalt-300/50 uppercase tracking-wider mb-1">Year</span>
            <span class="text-lg font-display text-cobalt-500 dark:text-cobalt-300">{{ caseStudy.year }}</span>
          </div>
          <div class="flex flex-col" v-if="project.github">
            <span class="text-xs font-mono text-cobalt-500/50 dark:text-cobalt-300/50 uppercase tracking-wider mb-1">Source</span>
            <a
              :href="project.github"
              target="_blank"
              rel="noopener noreferrer"
              class="text-lg font-display text-cobalt-500 dark:text-cobalt-300 hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt-500 dark:focus-visible:outline-cobalt-300 focus-visible:outline-offset-2 transition-opacity inline-flex items-center gap-1"
            >
              github
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Architecture Diagram -->
    <section class="py-12 px-6 lg:px-12 border-b border-cobalt-500/20 dark:border-charcoal-200/40">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-sm font-mono text-cobalt-500 dark:text-cobalt-300 mb-8">### architecture</h2>
        <ArchitectureDiagram :slug="slug" />
      </div>
    </section>

    <!-- Tech Stack Marquee -->
    <section class="overflow-hidden border-b border-cobalt-500/20 dark:border-charcoal-200/40 py-4">
      <Marquee :duration="20" class="py-2">
        <div class="flex items-center gap-6 px-4">
          <span
            v-for="tag in project.tech"
            :key="tag"
            class="text-xl md:text-2xl font-display font-bold text-cobalt-500 dark:text-cobalt-300 lowercase whitespace-nowrap"
          >{{ tag }}</span>
          <svg viewBox="0 0 40 24" class="w-8 h-5 text-cobalt-500/40 dark:text-cobalt-300/40" aria-hidden="true">
            <path d="M5 12h20M20 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
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

        <!-- Visual divider -->
        <div class="flex items-center justify-center gap-4" aria-hidden="true">
          <div class="h-px flex-1 bg-cobalt-500/15 dark:bg-charcoal-200/30"></div>
          <svg viewBox="0 0 20 20" class="w-4 h-4 text-cobalt-500/30 dark:text-cobalt-300/30">
            <polygon points="10,2 12,8 18,8 13,12 15,18 10,14 5,18 7,12 2,8 8,8" fill="currentColor"/>
          </svg>
          <div class="h-px flex-1 bg-cobalt-500/15 dark:bg-charcoal-200/30"></div>
        </div>

        <!-- Outcomes -->
        <OutcomesGrid :outcomes="caseStudy.outcomes" />

        <!-- Visual divider -->
        <div class="flex items-center justify-center gap-4" aria-hidden="true">
          <div class="h-px flex-1 bg-cobalt-500/15 dark:bg-charcoal-200/30"></div>
          <svg viewBox="0 0 40 20" class="w-6 h-3 text-cobalt-500/30 dark:text-cobalt-300/30">
            <path d="M0 10 Q10 0, 20 10 Q30 20, 40 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          <div class="h-px flex-1 bg-cobalt-500/15 dark:bg-charcoal-200/30"></div>
        </div>

        <!-- Lessons -->
        <LessonsLearned :lessons="caseStudy.lessonsLearned" />
      </div>
    </section>

    <!-- Navigation -->
    <section class="py-12 px-6 lg:px-12 border-t border-cobalt-500/20 dark:border-charcoal-200/40">
      <div class="max-w-6xl mx-auto">
        <div class="flex items-center justify-between">
          <!-- Previous -->
          <router-link
            v-if="prevProject"
            :to="{ name: 'case-study', params: { slug: prevProject.slug } }"
            class="group flex items-center gap-4 text-cobalt-500 dark:text-cobalt-300 hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt-500 dark:focus-visible:outline-cobalt-300 focus-visible:outline-offset-4 rounded-sm transition-opacity"
            aria-label="Previous project"
          >
            <svg viewBox="0 0 80 40" class="w-16 h-8 text-cobalt-500 dark:text-cobalt-300 group-hover:-translate-x-2 transition-transform" aria-hidden="true">
              <text x="10" y="25" font-family="Azeret Mono, monospace" font-size="14" fill="currentColor">This Way</text>
            </svg>
            <svg viewBox="0 0 24 24" class="w-6 h-6 text-cobalt-500 dark:text-cobalt-300 rotate-180" aria-hidden="true">
              <path d="M12 5v14M5 12l7 7 7-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </router-link>
          <div v-else class="w-24"></div>

          <!-- Home -->
          <router-link
            to="/"
            class="font-display text-cobalt-500 dark:text-cobalt-300 hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt-500 dark:focus-visible:outline-cobalt-300 focus-visible:outline-offset-4 rounded-sm transition-opacity"
          >
            take me home
          </router-link>

          <!-- Next -->
          <router-link
            v-if="nextProject"
            :to="{ name: 'case-study', params: { slug: nextProject.slug } }"
            class="group flex items-center gap-4 text-cobalt-500 dark:text-cobalt-300 hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt-500 dark:focus-visible:outline-cobalt-300 focus-visible:outline-offset-4 rounded-sm transition-opacity"
            aria-label="Next project"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 text-cobalt-500 dark:text-cobalt-300" aria-hidden="true">
              <path d="M12 5v14M5 12l7 7 7-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <svg viewBox="0 0 80 40" class="w-16 h-8 text-cobalt-500 dark:text-cobalt-300 group-hover:translate-x-2 transition-transform" aria-hidden="true">
              <text x="10" y="25" font-family="Azeret Mono, monospace" font-size="14" fill="currentColor">That Way</text>
            </svg>
          </router-link>
          <div v-else class="w-24"></div>
        </div>
      </div>
    </section>

    <!-- Meet You Marquees -->
    <section class="py-6 overflow-hidden border-t border-cobalt-500/20 dark:border-charcoal-200/40">
      <Marquee :duration="20" class="py-2">
        <div class="flex items-center gap-6 px-4">
          <svg viewBox="0 0 40 40" class="w-8 h-8 text-cobalt-500 dark:text-cobalt-300" aria-hidden="true"><polygon points="20,5 25,18 38,18 28,28 32,42 20,35 8,42 12,28 2,18 15,18" fill="currentColor"/></svg>
          <svg viewBox="0 0 60 80" class="w-6 h-8 text-cobalt-500 dark:text-cobalt-300" aria-hidden="true"><path d="M10 70 Q10 10, 30 10 Q50 10, 50 70" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>
          <svg viewBox="0 0 80 40" class="w-14 h-6 text-cobalt-500 dark:text-cobalt-300" aria-hidden="true"><path d="M5 20 Q15 5, 25 20 Q35 35, 45 20 Q55 5, 65 20 Q75 35, 75 20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>
          <span class="text-xl md:text-2xl font-display text-cobalt-500 dark:text-cobalt-300 whitespace-nowrap">it's nice to meet you</span>
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
import ArchitectureDiagram from '../components/case-study/ArchitectureDiagram.vue'
import Footer from '../components/layout/Footer.vue'
import Marquee from '../components/ui/Marquee.vue'

export default defineComponent({
  name: 'CaseStudy',
  components: {
    JourneyTimeline,
    OutcomesGrid,
    LessonsLearned,
    ArchitectureDiagram,
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
      formattedNumber,
    }
  },
})
</script>

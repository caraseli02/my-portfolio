<template>
  <div v-if="project && caseStudy" class="bg-cream-100 dark:bg-charcoal min-h-screen">

    <!-- 1. Hero Image — full-width, top of page -->
    <section class="px-6 pb-0 pt-24 lg:px-12">
      <div class="mx-auto max-w-6xl">
        <img
          :src="caseStudy.image || `/project-images/${caseStudy.slug}.jpg`"
          :alt="`${project.title} screenshot`"
          class="w-full border border-cobalt-500/15 object-cover object-top shadow-2xl dark:border-charcoal-200/30"
          style="max-height: 72vh;"
          loading="eager"
        />
      </div>
    </section>

    <!-- 2. Project Info — title, tags, overview, CTAs -->
    <section class="px-6 py-14 lg:px-12 lg:py-16">
      <div class="mx-auto max-w-4xl">
        <!-- Number + Title -->
        <div class="mb-8">
          <span class="text-sm font-mono text-cobalt-500/50 dark:text-cobalt-300/50 uppercase tracking-wider block mb-2">
            / {{ formattedNumber }}
          </span>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-cobalt-500 dark:text-cobalt-300 leading-tight">
            {{ project.title }}
          </h1>
        </div>

        <!-- Tech Tags -->
        <div class="mb-8 flex flex-wrap gap-2.5">
          <span
            v-for="tech in project.tech"
            :key="tech"
            class="px-3 py-1.5 border border-cobalt-500/20 dark:border-charcoal-200/60 text-xs font-mono text-cobalt-500 dark:text-cobalt-300 lowercase rounded"
          >
            {{ tech }}
          </span>
        </div>

        <!-- Project Overview — use metaphor description as the main overview -->
        <p class="text-lg md:text-xl text-cobalt-600 dark:text-cobalt-200 leading-relaxed mb-8 max-w-3xl">
          {{ caseStudy.metaphor.description }}
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-wrap gap-4">
          <a
            v-if="caseStudy.liveUrl"
            :href="caseStudy.liveUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-6 py-3 bg-cobalt-500 text-cream-100 dark:bg-cobalt-400 dark:text-charcoal rounded-lg hover:bg-cobalt-600 dark:hover:bg-cobalt-300 transition-colors duration-200 font-semibold text-sm"
          >
            Live Website
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a
            v-if="project.github"
            :href="project.github"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-6 py-3 border border-cobalt-500/30 dark:border-charcoal-200/60 text-cobalt-500 dark:text-cobalt-300 rounded-lg hover:border-cobalt-500/60 dark:hover:border-cobalt-300/60 transition-colors duration-200 font-semibold text-sm"
          >
            View Source
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        <!-- Metadata -->
        <div class="mt-10 grid grid-cols-1 gap-5 border-t border-cobalt-500/10 pt-8 dark:border-charcoal-200/30 sm:grid-cols-3 sm:gap-6">
          <div>
            <span class="text-xs font-mono text-cobalt-500/50 dark:text-cobalt-300/50 uppercase tracking-wider block mb-1">Duration</span>
            <span class="text-base font-display text-cobalt-500 dark:text-cobalt-300">{{ caseStudy.duration }}</span>
          </div>
          <div>
            <span class="text-xs font-mono text-cobalt-500/50 dark:text-cobalt-300/50 uppercase tracking-wider block mb-1">Role</span>
            <span class="text-base font-display text-cobalt-500 dark:text-cobalt-300">{{ caseStudy.role }}</span>
          </div>
          <div>
            <span class="text-xs font-mono text-cobalt-500/50 dark:text-cobalt-300/50 uppercase tracking-wider block mb-1">Year</span>
            <span class="text-base font-display text-cobalt-500 dark:text-cobalt-300">{{ caseStudy.year }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Tech Stack Marquee -->
    <section class="overflow-hidden border-y border-cobalt-500/20 py-4 dark:border-charcoal-200/40">
      <Marquee :duration="20" class="py-1.5">
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

    <!-- 4. Architecture Diagram -->
    <section class="border-b border-cobalt-500/20 px-6 py-14 dark:border-charcoal-200/40 lg:px-12 lg:py-16">
      <div class="mx-auto max-w-4xl">
        <h2 class="mb-8 text-sm font-mono uppercase tracking-widest text-cobalt-500/70 dark:text-cobalt-300/70">architecture</h2>
        <ArchitectureDiagram :slug="slug" />
      </div>
    </section>

    <!-- 5. Content Sections — Journey, Outcomes, Lessons -->
    <section class="px-6 py-14 lg:px-12 lg:py-16">
      <div class="mx-auto max-w-4xl space-y-16 lg:space-y-20">
        <JourneyTimeline
          :phases="caseStudy.timeline"
          accent-color="cobalt-500"
        />

        <div class="flex items-center justify-center gap-4" aria-hidden="true">
          <div class="h-px flex-1 bg-cobalt-500/15 dark:bg-charcoal-200/30"></div>
          <svg viewBox="0 0 20 20" class="w-4 h-4 text-cobalt-500/30 dark:text-cobalt-300/30">
            <polygon points="10,2 12,8 18,8 13,12 15,18 10,14 5,18 7,12 2,8 8,8" fill="currentColor"/>
          </svg>
          <div class="h-px flex-1 bg-cobalt-500/15 dark:bg-charcoal-200/30"></div>
        </div>

        <OutcomesGrid :outcomes="caseStudy.outcomes" />

        <div class="flex items-center justify-center gap-4" aria-hidden="true">
          <div class="h-px flex-1 bg-cobalt-500/15 dark:bg-charcoal-200/30"></div>
          <svg viewBox="0 0 40 20" class="w-6 h-3 text-cobalt-500/30 dark:text-cobalt-300/30">
            <path d="M0 10 Q10 0, 20 10 Q30 20, 40 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          <div class="h-px flex-1 bg-cobalt-500/15 dark:bg-charcoal-200/30"></div>
        </div>

        <LessonsLearned :lessons="caseStudy.lessonsLearned" />
      </div>
    </section>

    <!-- 6. Navigation — Next Project -->
    <section class="border-t border-cobalt-500/20 px-6 py-14 dark:border-charcoal-200/40 lg:px-12 lg:py-16">
      <div class="mx-auto max-w-4xl">
        <div class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <router-link
            v-if="prevProject"
            :to="{ name: 'case-study', params: { slug: prevProject.slug } }"
            class="group flex items-center gap-3 text-cobalt-500 dark:text-cobalt-300 hover:opacity-70 transition-opacity"
            aria-label="Previous project"
          >
            <svg viewBox="0 0 24 24" class="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <span class="text-sm font-mono">Previous</span>
          </router-link>
          <div v-else class="hidden sm:block"></div>

          <router-link
            to="/"
            class="text-sm font-mono text-cobalt-500/50 dark:text-cobalt-300/50 hover:text-cobalt-500 dark:hover:text-cobalt-300 transition-colors"
          >
            all projects
          </router-link>

          <router-link
            v-if="nextProject"
            :to="{ name: 'case-study', params: { slug: nextProject.slug } }"
            class="group flex items-center gap-3 text-cobalt-500 dark:text-cobalt-300 hover:opacity-70 transition-opacity"
            aria-label="Next project"
          >
            <span class="text-sm font-mono">Next Project</span>
            <svg viewBox="0 0 24 24" class="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </router-link>
          <div v-else class="hidden sm:block"></div>
        </div>
      </div>
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

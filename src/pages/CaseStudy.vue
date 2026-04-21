<template>
  <div class="bg-cream-100 dark:bg-charcoal min-h-screen">
    <!-- Error state -->
    <div v-if="!project || !caseStudy" class="flex flex-col items-center justify-center min-h-screen px-6">
      <span class="text-6xl font-display text-cobalt-500/20 dark:text-cobalt-300/20 mb-4">404</span>
      <p class="text-lg text-cobalt-500 dark:text-cobalt-300 mb-8">Project not found</p>
      <router-link
        to="/"
        class="font-mono text-sm text-cobalt-500 dark:text-cobalt-300 border border-cobalt-500/20 dark:border-cobalt-300/20 px-4 py-2 hover:bg-cobalt-500/5 dark:hover:bg-cobalt-300/5 transition-colors"
      >
        cd ~/
      </router-link>
    </div>

    <template v-else>
      <!-- Header Section -->
      <section class="pt-32 pb-16 px-6 lg:px-12 border-b border-cobalt-500/20 dark:border-charcoal-200/40">
        <div class="max-w-6xl mx-auto">
          <div class="mb-8">
            <span class="text-6xl md:text-7xl lg:text-8xl font-display text-cobalt-500 dark:text-cobalt-300 block mb-4">
              {{ formattedNumber }}
            </span>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-cobalt-500 dark:text-cobalt-300 leading-tight">
              {{ project.title }}
            </h1>
          </div>

          <div class="flex flex-wrap gap-3 mb-8">
            <span
              v-for="tag in project.tech"
              :key="tag"
              class="pill-badge"
            >
              {{ tag }}
            </span>
          </div>

          <p class="text-xl md:text-2xl font-display text-cobalt-500 dark:text-cobalt-300 max-w-3xl">
            {{ caseStudy.tagline }}
          </p>
        </div>
      </section>

      <!-- Hero Image -->
      <section class="border-b border-cobalt-500/20">
        <div class="max-w-6xl mx-auto px-6 lg:px-12 py-12">
          <img
            :src="caseStudy.image || `/project-images/${caseStudy.slug}.jpg`"
            :alt="`${project.title} screenshot`"
            class="w-full shadow-2xl"
            loading="eager"
            @error="($event.target as HTMLImageElement).style.display = 'none'"
          />
        </div>
      </section>

      <!-- About + Metadata — side by side -->
      <section class="py-16 px-6 lg:px-12 border-b border-cobalt-500/20 dark:border-charcoal-200/40">
        <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div class="lg:col-span-2">
            <h2 class="text-sm font-mono text-cobalt-500 dark:text-cobalt-300 mb-6">### about</h2>
            <p class="text-lg md:text-xl text-cobalt-600 dark:text-cobalt-200 leading-relaxed">
              {{ caseStudy.description || project.description }}
            </p>
          </div>
          <div class="lg:col-span-1">
            <h2 class="text-sm font-mono text-cobalt-500 dark:text-cobalt-300 mb-6">### details</h2>
            <dl class="space-y-4">
              <div class="flex justify-between border-b border-cobalt-500/10 dark:border-charcoal-200/20 pb-2">
                <dt class="text-sm font-mono text-cobalt-500/60 dark:text-cobalt-300/60">Duration</dt>
                <dd class="text-sm font-display text-cobalt-500 dark:text-cobalt-300">{{ caseStudy.duration }}</dd>
              </div>
              <div class="flex justify-between border-b border-cobalt-500/10 dark:border-charcoal-200/20 pb-2">
                <dt class="text-sm font-mono text-cobalt-500/60 dark:text-cobalt-300/60">Role</dt>
                <dd class="text-sm font-display text-cobalt-500 dark:text-cobalt-300">{{ caseStudy.role }}</dd>
              </div>
              <div class="flex justify-between border-b border-cobalt-500/10 dark:border-charcoal-200/20 pb-2">
                <dt class="text-sm font-mono text-cobalt-500/60 dark:text-cobalt-300/60">Year</dt>
                <dd class="text-sm font-display text-cobalt-500 dark:text-cobalt-300">{{ caseStudy.year }}</dd>
              </div>
              <div v-if="caseStudy.liveUrl" class="flex justify-between border-b border-cobalt-500/10 dark:border-charcoal-200/20 pb-2">
                <dt class="text-sm font-mono text-cobalt-500/60 dark:text-cobalt-300/60">Live</dt>
                <dd>
                  <a
                    :href="caseStudy.liveUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-sm font-display text-cobalt-500 dark:text-cobalt-300 hover:opacity-70 transition-opacity inline-flex items-center gap-1"
                  >
                    website
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </dd>
              </div>
              <div v-if="project.github" class="flex justify-between pb-2">
                <dt class="text-sm font-mono text-cobalt-500/60 dark:text-cobalt-300/60">Source</dt>
                <dd>
                  <a
                    :href="project.github"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-sm font-display text-cobalt-500 dark:text-cobalt-300 hover:opacity-70 transition-opacity inline-flex items-center gap-1"
                  >
                    github
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <!-- Architecture Diagram -->
      <section class="py-16 px-6 lg:px-12 border-b border-cobalt-500/20 dark:border-charcoal-200/40">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-sm font-mono text-cobalt-500 dark:text-cobalt-300 mb-8">### architecture</h2>
          <ArchitectureDiagram :slug="slug" />
        </div>
      </section>

      <!-- Journey Timeline — full bleed bg variation -->
      <section class="py-16 px-6 lg:px-12 bg-cobalt-500/[0.02] dark:bg-cobalt-300/[0.03]">
        <div class="max-w-4xl mx-auto">
          <JourneyTimeline
            :phases="caseStudy.timeline"
            accent-color="cobalt-500"
          />
        </div>
      </section>

      <!-- Outcomes — compact horizontal strip -->
      <section class="py-16 px-6 lg:px-12 border-t border-cobalt-500/20 dark:border-charcoal-200/40">
        <div class="max-w-4xl mx-auto">
          <OutcomesGrid :outcomes="caseStudy.outcomes" />
        </div>
      </section>

      <section class="py-8 px-6 lg:px-12 border-t border-cobalt-500/20 dark:border-charcoal-200/40">
        <div class="max-w-4xl mx-auto">
          <LessonsLearned :lessons="caseStudy.lessonsLearned" />
        </div>
      </section>

      <!-- Navigation — with project titles -->
      <section class="py-12 px-6 lg:px-12 border-t border-cobalt-500/20 dark:border-charcoal-200/40">
        <div class="max-w-6xl mx-auto">
          <div class="flex items-center justify-between">
            <router-link
              v-if="prevProject"
              :to="{ name: 'case-study', params: { slug: prevProject.slug } }"
              class="group flex items-center gap-4 text-cobalt-500 dark:text-cobalt-300 hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt-500 dark:focus-visible:outline-cobalt-300 focus-visible:outline-offset-4 rounded-sm transition-opacity"
              :aria-label="`Previous project: ${prevProject.title}`"
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 text-cobalt-500 dark:text-cobalt-300 group-hover:-translate-x-1 transition-transform" aria-hidden="true">
                <path d="M12 5v14M5 12l7 7 7-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <div>
                <span class="text-xs font-mono text-cobalt-500/50 dark:text-cobalt-300/50 block">Previous</span>
                <span class="font-display text-sm">{{ prevProject.title }}</span>
              </div>
            </router-link>
            <div v-else class="w-24"></div>

            <router-link
              to="/"
              class="font-mono text-sm text-cobalt-500 dark:text-cobalt-300 hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt-500 dark:focus-visible:outline-cobalt-300 focus-visible:outline-offset-4 rounded-sm transition-opacity"
            >
              cd ~/
            </router-link>

            <router-link
              v-if="nextProject"
              :to="{ name: 'case-study', params: { slug: nextProject.slug } }"
              class="group flex items-center gap-4 text-cobalt-500 dark:text-cobalt-300 hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt-500 dark:focus-visible:outline-cobalt-300 focus-visible:outline-offset-4 rounded-sm transition-opacity"
              :aria-label="`Next project: ${nextProject.title}`"
            >
              <div class="text-right">
                <span class="text-xs font-mono text-cobalt-500/50 dark:text-cobalt-300/50 block">Next</span>
                <span class="font-display text-sm">{{ nextProject.title }}</span>
              </div>
              <svg viewBox="0 0 24 24" class="w-6 h-6 text-cobalt-500 dark:text-cobalt-300 group-hover:translate-x-1 transition-transform" aria-hidden="true">
                <path d="M12 5v14M5 12l7 7 7-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </router-link>
            <div v-else class="w-24"></div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <Footer />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { getProjectBySlug, getProjectIndex } from '../data/projects'
import JourneyTimeline from '../components/case-study/JourneyTimeline.vue'
import OutcomesGrid from '../components/case-study/OutcomesGrid.vue'
import ArchitectureDiagram from '../components/case-study/ArchitectureDiagram.vue'
import LessonsLearned from '../components/case-study/LessonsLearned.vue'
import Footer from '../components/layout/Footer.vue'

export default defineComponent({
  name: 'CaseStudy',
  components: {
    JourneyTimeline,
    OutcomesGrid,
    ArchitectureDiagram,
    LessonsLearned,
    Footer,
  },
  props: {
    slug: { type: String, required: true },
  },
  setup(props) {
    const project = computed(() => getProjectBySlug(props.slug))
    const caseStudy = computed(() => project.value?.caseStudy)

    const formattedNumber = computed(() => {
      const index = getProjectIndex(props.slug)
      return (index + 1).toString().padStart(2, '0')
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

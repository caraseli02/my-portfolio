<template>
  <div v-if="project && caseStudy">
    <CaseStudyHero
      :title="project.title"
      :category="project.category"
      :tagline="caseStudy.tagline"
      :metaphor="caseStudy.metaphor"
      :tech="project.tech"
      :duration="caseStudy.duration"
      :role="caseStudy.role"
      :year="caseStudy.year"
      :github="project.github"
    />

    <JourneyTimeline
      :phases="caseStudy.timeline"
      :accent-gradient="caseStudy.metaphor.color"
    />

    <OutcomesGrid :outcomes="caseStudy.outcomes" />

    <LessonsLearned :lessons="caseStudy.lessonsLearned" />

    <CaseStudyNav
      :prev-slug="prevProject?.slug"
      :prev-title="prevProject?.title"
      :next-slug="nextProject?.slug"
      :next-title="nextProject?.title"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { getProjectBySlug } from '../data/projects'
import CaseStudyHero from '../components/case-study/CaseStudyHero.vue'
import JourneyTimeline from '../components/case-study/JourneyTimeline.vue'
import OutcomesGrid from '../components/case-study/OutcomesGrid.vue'
import LessonsLearned from '../components/case-study/LessonsLearned.vue'
import CaseStudyNav from '../components/case-study/CaseStudyNav.vue'

export default defineComponent({
  name: 'CaseStudy',
  components: {
    CaseStudyHero,
    JourneyTimeline,
    OutcomesGrid,
    LessonsLearned,
    CaseStudyNav,
  },
  props: {
    slug: { type: String, required: true },
  },
  setup(props) {
    const router = useRouter()
    const project = computed(() => getProjectBySlug(props.slug))
    const caseStudy = computed(() => project.value?.caseStudy)

    watchEffect(() => {
      if (!project.value || !caseStudy.value) {
        router.replace('/projects')
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

    return { project, caseStudy, prevProject, nextProject }
  },
})
</script>

<template>
  <div class="min-h-screen bg-cream-100 dark:bg-charcoal">
    <div
      v-if="!project || !caseStudy"
      class="flex min-h-screen flex-col items-center justify-center px-6"
    >
      <span class="mb-4 text-6xl font-display text-cobalt-500/20 dark:text-cobalt-300/20">404</span>
      <p class="mb-8 text-lg text-cobalt-700 dark:text-cobalt-100">Project not found</p>
      <router-link
        to="/"
        class="border border-cobalt-500/20 px-4 py-2 font-mono text-sm text-cobalt-700 transition-colors hover:bg-cobalt-500/5 dark:border-cobalt-300/20 dark:text-cobalt-100 dark:hover:bg-cobalt-300/5"
      >
        cd ~/
      </router-link>
    </div>

    <template v-else>
      <section
        class="relative overflow-hidden px-6 pb-12 pt-28 md:px-10 md:pb-16 md:pt-36 lg:px-12"
      >
        <div class="paper-grid absolute inset-x-4 inset-y-8 rounded-[2rem] opacity-50"></div>

        <div class="relative mx-auto max-w-7xl">
          <div class="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_22rem] lg:items-stretch">
            <div
              class="relative overflow-hidden rounded-[2rem] border border-cobalt-500/18 bg-cobalt-700 p-6 text-white shadow-[0_30px_90px_rgba(17,27,143,0.22)] md:p-8 lg:p-10"
            >
              <div class="absolute inset-0 opacity-[0.08]" aria-hidden="true">
                <div class="paper-grid h-full w-full"></div>
              </div>

              <div class="relative">
                <p
                  class="mb-4 text-[11px] font-mono uppercase tracking-[0.32em] text-cobalt-100/70"
                >
                  {{ formattedNumber }} • {{ project.category }}
                </p>

                <h1
                  class="max-w-4xl text-[3.2rem] leading-[0.92] font-display text-white sm:text-[4.2rem] md:text-[5.2rem] lg:text-[6rem]"
                >
                  {{ project.title }}
                </h1>

                <p class="mt-5 max-w-3xl text-xl leading-relaxed text-cobalt-100/82 md:text-2xl">
                  {{ caseStudy.tagline }}
                </p>

                <p class="mt-6 max-w-3xl text-base leading-relaxed text-cobalt-100/72 md:text-lg">
                  {{ caseStudy.description || project.description }}
                </p>

                <div class="mt-8 flex flex-wrap gap-2.5">
                  <span
                    v-for="tag in project.tech"
                    :key="tag"
                    class="border border-white/12 bg-white/7 px-3 py-1.5 text-xs font-mono uppercase tracking-[0.16em] text-cobalt-100/82"
                  >
                    {{ tag }}
                  </span>
                </div>

                <div class="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    v-if="caseStudy.liveUrl"
                    :href="caseStudy.liveUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center justify-center bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-cobalt-700 transition-opacity hover:opacity-85"
                  >
                    View live ↗
                  </a>
                  <a
                    v-if="project.github"
                    :href="project.github"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center justify-center border border-white/18 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-cobalt-700"
                  >
                    View source ↗
                  </a>
                </div>
              </div>
            </div>

            <aside class="panel-surface flex flex-col justify-between rounded-[2rem] p-6 md:p-8">
              <div>
                <p class="editorial-kicker mb-5">project facts</p>
                <dl class="space-y-4">
                  <div class="border-b border-cobalt-500/10 pb-4 dark:border-cobalt-300/12">
                    <dt
                      class="text-sm uppercase tracking-[0.18em] text-cobalt-500/70 dark:text-cobalt-100/72"
                    >
                      duration
                    </dt>
                    <dd class="mt-1 text-2xl font-display text-charcoal dark:text-cobalt-100">
                      {{ caseStudy.duration }}
                    </dd>
                  </div>
                  <div class="border-b border-cobalt-500/10 pb-4 dark:border-cobalt-300/12">
                    <dt
                      class="text-sm uppercase tracking-[0.18em] text-cobalt-500/70 dark:text-cobalt-100/72"
                    >
                      role
                    </dt>
                    <dd class="mt-1 text-lg text-charcoal-200 dark:text-cobalt-100/90">
                      {{ caseStudy.role }}
                    </dd>
                  </div>
                  <div class="border-b border-cobalt-500/10 pb-4 dark:border-cobalt-300/12">
                    <dt
                      class="text-sm uppercase tracking-[0.18em] text-cobalt-500/70 dark:text-cobalt-100/72"
                    >
                      year
                    </dt>
                    <dd class="mt-1 text-lg text-charcoal-200 dark:text-cobalt-100/90">
                      {{ caseStudy.year }}
                    </dd>
                  </div>
                </dl>
              </div>

              <div class="mt-8">
                <p class="editorial-kicker mb-4">top outcomes</p>
                <div class="space-y-3">
                  <div
                    v-for="outcome in heroOutcomes"
                    :key="outcome.label"
                    class="rounded-[1.5rem] border border-cobalt-500/12 bg-white/75 p-4 dark:border-cobalt-300/12 dark:bg-charcoal-50/75"
                  >
                    <p class="text-3xl font-display text-charcoal dark:text-cobalt-100">
                      {{ outcome.metric }}
                    </p>
                    <p
                      class="mt-1 text-sm leading-relaxed text-charcoal-200 dark:text-cobalt-100/84"
                    >
                      {{ outcome.label }}
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section class="px-6 pb-14 md:px-10 lg:px-12">
        <div class="mx-auto max-w-7xl">
          <div
            class="overflow-hidden rounded-[2rem] border border-cobalt-500/15 bg-white/75 shadow-[0_24px_70px_rgba(31,50,255,0.08)] dark:border-cobalt-300/15 dark:bg-charcoal-50/75"
          >
            <img
              :src="caseStudy.image || `/project-images/${caseStudy.slug}.jpg`"
              :alt="`${project.title} screenshot`"
              class="h-auto max-h-[70vh] w-full object-cover object-top"
              loading="eager"
              @error="handleImageError"
            />
          </div>
        </div>
      </section>

      <section class="px-6 pb-16 md:px-10 lg:px-12">
        <div class="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div class="panel-surface rounded-[2rem] p-6 md:p-8">
            <p class="editorial-kicker mb-4">why this project matters</p>
            <h2
              class="max-w-3xl text-3xl font-display text-charcoal dark:text-cobalt-100 md:text-4xl"
            >
              Built to show product judgment, not just implementation range.
            </h2>
            <p
              class="mt-5 max-w-2xl text-lg leading-relaxed text-charcoal-200 dark:text-cobalt-100/88"
            >
              {{ caseStudy.description || project.description }}
            </p>
            <p
              class="mt-5 max-w-2xl text-base leading-relaxed text-cobalt-700 dark:text-cobalt-100/90"
            >
              The goal was not just to make something work. It was to make complex logic feel
              legible, credible, and fast to trust on first scan.
            </p>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <article
              v-for="(highlight, index) in projectHighlights"
              :key="highlight"
              class="panel-surface rounded-[1.6rem] p-5"
            >
              <p class="editorial-kicker mb-3">0{{ index + 1 }} — what shipped</p>
              <p class="text-base leading-relaxed text-charcoal-200 dark:text-cobalt-100/88">
                {{ highlight }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section class="px-6 pb-16 md:px-10 lg:px-12">
        <div class="mx-auto max-w-7xl panel-surface rounded-[2rem] p-6 md:p-8">
          <p class="editorial-kicker mb-6">system view</p>
          <ArchitectureDiagram :slug="slug" />
        </div>
      </section>

      <section class="px-6 pb-16 md:px-10 lg:px-12">
        <div
          class="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[minmax(0,1.1fr)_22rem] lg:items-start"
        >
          <div class="panel-surface rounded-[2rem] p-6 md:p-8">
            <JourneyTimeline :phases="caseStudy.timeline" accent-color="cobalt-500" />
          </div>

          <aside
            v-if="caseStudy.metaphor"
            class="relative overflow-hidden rounded-[2rem] border border-cobalt-500/18 bg-cobalt-700 p-6 text-white shadow-[0_24px_70px_rgba(17,27,143,0.2)] md:p-8"
          >
            <div class="absolute inset-0 opacity-[0.08]" aria-hidden="true">
              <div class="paper-grid h-full w-full"></div>
            </div>
            <div class="relative">
              <p class="mb-4 text-[11px] font-mono uppercase tracking-[0.32em] text-cobalt-100/70">
                core idea
              </p>
              <p class="text-3xl font-display text-white md:text-4xl">
                {{ caseStudy.metaphor.phrase }}
              </p>
              <p class="mt-5 text-base leading-relaxed text-cobalt-100/78">
                {{ caseStudy.metaphor.description }}
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section class="px-6 pb-16 md:px-10 lg:px-12">
        <div class="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <div class="panel-surface rounded-[2rem] p-6 md:p-8">
            <OutcomesGrid :outcomes="caseStudy.outcomes" />
          </div>
          <div class="panel-surface rounded-[2rem] p-6 md:p-8">
            <LessonsLearned :lessons="caseStudy.lessonsLearned" />
          </div>
        </div>
      </section>

      <section class="px-6 pb-16 md:px-10 lg:px-12">
        <div class="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          <router-link
            v-if="prevProject"
            :to="{ name: 'case-study', params: { slug: prevProject.slug } }"
            class="panel-surface group rounded-[1.5rem] p-5 transition-transform hover:-translate-y-1"
          >
            <p class="editorial-kicker mb-3">previous project</p>
            <p
              class="text-2xl font-display text-charcoal transition-colors group-hover:text-cobalt-700 dark:text-cobalt-100 dark:group-hover:text-white"
            >
              {{ prevProject.title }}
            </p>
          </router-link>
          <div v-else class="hidden md:block"></div>

          <router-link
            to="/"
            class="panel-surface flex items-center justify-center rounded-[1.5rem] p-5 text-center text-sm font-semibold uppercase tracking-[0.18em] text-cobalt-700 transition-transform hover:-translate-y-1 dark:text-cobalt-100"
          >
            Back to work
          </router-link>

          <router-link
            v-if="nextProject"
            :to="{ name: 'case-study', params: { slug: nextProject.slug } }"
            class="panel-surface group rounded-[1.5rem] p-5 text-right transition-transform hover:-translate-y-1"
          >
            <p class="editorial-kicker mb-3">next project</p>
            <p
              class="text-2xl font-display text-charcoal transition-colors group-hover:text-cobalt-700 dark:text-cobalt-100 dark:group-hover:text-white"
            >
              {{ nextProject.title }}
            </p>
          </router-link>
          <div v-else class="hidden md:block"></div>
        </div>
      </section>

      <Footer />
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { getProjectBySlug, getProjectIndex } from "../data/projects";
import JourneyTimeline from "../components/case-study/JourneyTimeline.vue";
import OutcomesGrid from "../components/case-study/OutcomesGrid.vue";
import ArchitectureDiagram from "../components/case-study/ArchitectureDiagram.vue";
import LessonsLearned from "../components/case-study/LessonsLearned.vue";
import Footer from "../components/layout/Footer.vue";

const props = defineProps<{
  slug: string;
}>();

const project = computed(() => getProjectBySlug(props.slug));
const caseStudy = computed(() => project.value?.caseStudy);

const formattedNumber = computed(() => {
  const index = getProjectIndex(props.slug);
  return (index + 1).toString().padStart(2, "0");
});

const heroOutcomes = computed(() => caseStudy.value?.outcomes.slice(0, 3) ?? []);
const projectHighlights = computed(() => project.value?.highlights.slice(0, 4) ?? []);

const prevProject = computed(() => {
  if (!caseStudy.value?.prevProject) return null;
  const p = getProjectBySlug(caseStudy.value.prevProject);
  return p ? { slug: caseStudy.value.prevProject, title: p.title } : null;
});

const nextProject = computed(() => {
  if (!caseStudy.value?.nextProject) return null;
  const p = getProjectBySlug(caseStudy.value.nextProject);
  return p ? { slug: caseStudy.value.nextProject, title: p.title } : null;
});

const handleImageError = (event: Event) => {
  const image = event.target;
  if (image instanceof HTMLImageElement) {
    image.style.display = "none";
  }
};
</script>

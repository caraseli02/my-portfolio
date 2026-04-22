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
      <section class="px-6 pb-10 pt-28 md:px-10 md:pt-36 lg:px-12">
        <div class="mx-auto max-w-7xl">
          <div class="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_20rem] lg:items-start">
            <div>
              <p
                class="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-cobalt-500/72 dark:text-cobalt-100/76"
              >
                {{ formattedNumber }} • {{ project.category }}
              </p>
              <h1
                class="max-w-4xl text-[3.1rem] leading-[0.92] font-display text-charcoal dark:text-cobalt-100 sm:text-[4rem] md:text-[5rem] lg:text-[5.7rem]"
              >
                {{ project.title }}
              </h1>
              <p
                class="mt-5 max-w-3xl text-xl leading-relaxed text-cobalt-500 dark:text-cobalt-200 md:text-2xl"
              >
                {{ caseStudy.tagline }}
              </p>
              <p
                class="mt-5 max-w-3xl text-base leading-relaxed text-charcoal-200 dark:text-cobalt-100/84 md:text-lg"
              >
                {{ caseStudy.description || project.description }}
              </p>

              <div class="mt-8 flex flex-wrap gap-2.5">
                <span
                  v-for="tag in project.tech"
                  :key="tag"
                  class="inline-flex items-center rounded-md border border-cobalt-500/18 bg-cobalt-500/[0.04] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-cobalt-600 dark:border-cobalt-300/18 dark:bg-cobalt-300/[0.05] dark:text-cobalt-100"
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
                  class="inline-flex items-center justify-center bg-cobalt-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-85"
                >
                  View live ↗
                </a>
                <a
                  v-if="project.github"
                  :href="project.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center border border-cobalt-500/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-cobalt-500 transition-colors hover:bg-cobalt-500 hover:text-white dark:border-cobalt-300/20 dark:text-cobalt-200 dark:hover:bg-cobalt-300 dark:hover:text-charcoal"
                >
                  View source ↗
                </a>
              </div>
            </div>

            <aside class="border border-cobalt-500/14 p-6 md:p-8 dark:border-cobalt-300/16">
              <p
                class="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-cobalt-500/72 dark:text-cobalt-100/76"
              >
                project facts
              </p>
              <dl class="space-y-4">
                <div class="border-b border-cobalt-500/10 pb-4 dark:border-cobalt-300/12">
                  <dt
                    class="font-mono text-[11px] uppercase tracking-[0.2em] text-cobalt-500/72 dark:text-cobalt-100/76"
                  >
                    duration
                  </dt>
                  <dd class="mt-2 text-2xl font-display text-charcoal dark:text-cobalt-100">
                    {{ caseStudy.duration }}
                  </dd>
                </div>
                <div class="border-b border-cobalt-500/10 pb-4 dark:border-cobalt-300/12">
                  <dt
                    class="font-mono text-[11px] uppercase tracking-[0.2em] text-cobalt-500/72 dark:text-cobalt-100/76"
                  >
                    role
                  </dt>
                  <dd class="mt-2 text-base text-charcoal-200 dark:text-cobalt-100/86">
                    {{ caseStudy.role }}
                  </dd>
                </div>
                <div>
                  <dt
                    class="font-mono text-[11px] uppercase tracking-[0.2em] text-cobalt-500/72 dark:text-cobalt-100/76"
                  >
                    year
                  </dt>
                  <dd class="mt-2 text-base text-charcoal-200 dark:text-cobalt-100/86">
                    {{ caseStudy.year }}
                  </dd>
                </div>
              </dl>
            </aside>
          </div>

          <div
            class="mt-10 grid gap-px overflow-hidden border border-cobalt-500/14 bg-cobalt-500/10 dark:border-cobalt-300/14 dark:bg-cobalt-300/10 md:grid-cols-3"
          >
            <div
              v-for="outcome in heroOutcomes"
              :key="outcome.label"
              class="bg-cream-50 p-6 dark:bg-charcoal-50"
            >
              <p
                class="font-mono text-[11px] uppercase tracking-[0.2em] text-cobalt-500/72 dark:text-cobalt-100/76"
              >
                top outcome
              </p>
              <p class="mt-2 text-3xl font-display text-charcoal dark:text-cobalt-100">
                {{ outcome.metric }}
              </p>
              <p class="mt-2 text-sm leading-relaxed text-charcoal-200 dark:text-cobalt-100/82">
                {{ outcome.label }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section v-if="!heroImageFailed" class="px-6 pb-14 md:px-10 lg:px-12">
        <div class="mx-auto max-w-7xl">
          <div
            class="overflow-hidden border border-cobalt-500/15 bg-white dark:border-cobalt-300/15 dark:bg-charcoal-50"
          >
            <picture>
              <source
                :srcset="heroSrcset"
                sizes="(min-width: 1280px) 80rem, 100vw"
                type="image/webp"
              />
              <img
                :src="caseStudy.image || `/project-images/${caseStudy.slug}.jpg`"
                :alt="`${project.title} screenshot`"
                class="h-auto max-h-[70vh] w-full object-cover object-top"
                loading="eager"
                @error="handleImageError"
              />
            </picture>
          </div>
        </div>
      </section>

      <section class="px-6 pb-16 md:px-10 lg:px-12">
        <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div>
            <p class="editorial-kicker mb-4">why this project matters</p>
            <h2
              class="max-w-3xl text-3xl font-display text-charcoal dark:text-cobalt-100 md:text-4xl"
            >
              Built to show product judgment, not just implementation range.
            </h2>
            <p
              class="mt-5 max-w-2xl text-lg leading-relaxed text-charcoal-200 dark:text-cobalt-100/85"
            >
              {{ caseStudy.description || project.description }}
            </p>
            <p
              class="mt-5 max-w-2xl text-base leading-relaxed text-cobalt-700 dark:text-cobalt-100/85"
            >
              The goal was not just to make something work. It was to make complex logic feel
              legible, credible, and fast to trust on first scan.
            </p>
          </div>

          <div
            class="grid gap-0 border-t border-cobalt-500/12 dark:border-cobalt-300/12 sm:grid-cols-2"
          >
            <article
              v-for="(highlight, index) in projectHighlights"
              :key="highlight"
              class="border-b border-cobalt-500/12 px-1 py-5 dark:border-cobalt-300/12 sm:[&:not(:nth-child(2n))]:border-r sm:[&:not(:nth-child(2n))]:pr-5 sm:[&:nth-child(2n)]:pl-5"
            >
              <p class="editorial-kicker mb-3 font-mono">
                <span class="text-cobalt-500/50 dark:text-cobalt-300/50">0{{ index + 1 }}</span>
                <span class="mx-2 text-cobalt-500/30 dark:text-cobalt-300/30">—</span>
                <span>what shipped</span>
              </p>
              <p class="text-base leading-relaxed text-charcoal-200 dark:text-cobalt-100/85">
                {{ highlight }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section class="px-6 pb-16 md:px-10 lg:px-12">
        <div class="mx-auto max-w-7xl">
          <p class="editorial-kicker mb-6">system view</p>
          <div
            class="border border-cobalt-500/12 bg-white/70 p-6 dark:border-cobalt-300/12 dark:bg-charcoal-50/60 md:p-8"
          >
            <ArchitectureDiagram :slug="slug" />
          </div>
        </div>
      </section>

      <section class="px-6 pb-16 md:px-10 lg:px-12">
        <div
          class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.1fr)_22rem] lg:items-start"
        >
          <div>
            <JourneyTimeline :phases="caseStudy.timeline" accent-color="cobalt-500" />
          </div>

          <aside
            v-if="caseStudy.metaphor"
            class="relative overflow-hidden border border-cobalt-500/18 bg-cobalt-700 p-6 text-white shadow-[0_20px_60px_-28px_rgba(17,27,143,0.5)] md:p-8"
          >
            <div class="absolute inset-0 opacity-[0.08]" aria-hidden="true">
              <div class="paper-grid h-full w-full"></div>
            </div>
            <div class="relative">
              <p class="mb-4 font-mono text-[11px] uppercase tracking-[0.32em] text-cobalt-100/70">
                core idea
              </p>
              <p class="text-3xl font-display text-white md:text-4xl">
                {{ caseStudy.metaphor.phrase }}
              </p>
              <p class="mt-5 text-base leading-relaxed text-cobalt-100/80">
                {{ caseStudy.metaphor.description }}
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section class="px-6 pb-16 md:px-10 lg:px-12">
        <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <OutcomesGrid :outcomes="caseStudy.outcomes" />
          </div>
          <div>
            <LessonsLearned :lessons="caseStudy.lessonsLearned" />
          </div>
        </div>
      </section>

      <section class="px-6 pb-16 md:px-10 lg:px-12">
        <div class="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          <router-link
            v-if="prevProject"
            :to="{ name: 'case-study', params: { slug: prevProject.slug } }"
            class="panel-surface group p-5 transition-transform hover:-translate-y-1"
          >
            <p class="editorial-kicker mb-3 font-mono">← prev</p>
            <p
              class="text-2xl font-display text-charcoal transition-colors group-hover:text-cobalt-700 dark:text-cobalt-100 dark:group-hover:text-white"
            >
              {{ prevProject.title }}
            </p>
          </router-link>
          <div v-else class="hidden md:block"></div>

          <router-link
            to="/"
            class="panel-surface flex items-center justify-center p-5 text-center text-sm font-semibold uppercase tracking-[0.18em] text-cobalt-700 transition-transform hover:-translate-y-1 dark:text-cobalt-100"
          >
            Back to work
          </router-link>

          <router-link
            v-if="nextProject"
            :to="{ name: 'case-study', params: { slug: nextProject.slug } }"
            class="panel-surface group p-5 text-right transition-transform hover:-translate-y-1"
          >
            <p class="editorial-kicker mb-3 font-mono">next →</p>
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
import { computed, ref, watch } from "vue";
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

const heroImageFailed = ref(false);
const heroSrcset = computed(() => {
  const base = (caseStudy.value?.image || `/project-images/${caseStudy.value?.slug}.jpg`).replace(
    /\.(jpg|png|webp)$/,
    "",
  );
  return `${base}-320.webp 320w, ${base}-640.webp 640w, ${base}.webp 1280w`;
});

watch(
  () => props.slug,
  () => {
    heroImageFailed.value = false;
  },
);

const handleImageError = () => {
  heroImageFailed.value = true;
};
</script>

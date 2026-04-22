<template>
  <div class="relative min-h-screen overflow-hidden bg-[#f6f1e8] text-cobalt-500">
    <section class="relative isolate px-6 pb-20 pt-28 lg:px-12 lg:pb-24 lg:pt-32">
      <div class="pointer-events-none absolute inset-0 overflow-hidden">
        <div class="absolute left-[-10%] top-10 h-72 w-72 rounded-full bg-cobalt-500/8 blur-3xl"></div>
        <div class="absolute bottom-0 right-[-8%] h-96 w-96 rounded-full bg-cobalt-300/10 blur-3xl"></div>
        <div class="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cobalt-500/10"></div>
        <div class="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cobalt-500/10"></div>
      </div>

      <div class="relative mx-auto max-w-7xl">
        <div class="grid items-center gap-14 xl:grid-cols-[1.05fr_0.95fr] xl:gap-10">
          <div class="relative z-10 max-w-3xl">
            <p class="mb-5 inline-flex items-center gap-3 rounded-full border border-cobalt-500/20 bg-white/75 px-4 py-2 font-display text-xs uppercase tracking-[0.28em] text-cobalt-500/70 shadow-[0_14px_40px_rgba(24,39,75,0.08)] backdrop-blur">
              portfolio concept preview
            </p>

            <div class="space-y-6">
              <p class="text-xl text-cobalt-500/80 md:text-2xl">
                Hi, my name is
              </p>

              <h1 class="max-w-4xl text-5xl font-display leading-[0.95] tracking-[-0.05em] text-cobalt-500 sm:text-6xl md:text-7xl xl:text-[5.6rem]">
                Vlad Caraseli
              </h1>

              <p class="max-w-2xl text-lg leading-8 text-cobalt-500/72 md:text-xl">
                I design and build product experiences with a sharper point of view, mixing elegant interfaces, real delivery, and case studies that feel alive instead of archived.
              </p>
            </div>

            <div class="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#case-studies"
                class="inline-flex items-center gap-2 rounded-full bg-cobalt-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(0,0,255,0.22)] transition-transform duration-300 hover:-translate-y-1"
              >
                Explore case studies
                <span aria-hidden="true">↘</span>
              </a>
              <div class="rounded-full border border-cobalt-500/15 bg-white/70 px-5 py-3 text-sm text-cobalt-500/70 backdrop-blur">
                Product design, frontend systems, conversion-focused pages
              </div>
            </div>

            <div class="mt-12 grid max-w-2xl gap-4 sm:grid-cols-3">
              <article
                v-for="stat in heroStats"
                :key="stat.label"
                class="rounded-[1.5rem] border border-cobalt-500/12 bg-white/72 p-4 shadow-[0_18px_45px_rgba(29,35,96,0.08)] backdrop-blur"
              >
                <p class="font-display text-xs uppercase tracking-[0.24em] text-cobalt-500/45">{{ stat.label }}</p>
                <p class="mt-2 text-2xl font-semibold text-cobalt-500">{{ stat.value }}</p>
                <p class="mt-1 text-sm leading-6 text-cobalt-500/60">{{ stat.caption }}</p>
              </article>
            </div>
          </div>

          <div class="relative min-h-[34rem] xl:min-h-[42rem]">
            <div class="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/50 blur-3xl"></div>

            <article
              v-for="(card, index) in floatingCards"
              :key="card.title"
              class="absolute w-[17rem] max-w-[82vw] rounded-[1.7rem] border border-cobalt-500/12 bg-white/78 p-4 shadow-[0_22px_70px_rgba(22,30,84,0.16)] backdrop-blur-xl transition-transform duration-500 hover:scale-[1.02]"
              :class="[
                card.position,
                index % 2 === 0 ? 'animate-float' : 'animate-float animation-delay-400'
              ]"
            >
              <div class="mb-4 flex items-start justify-between gap-3">
                <div>
                  <p class="font-display text-[11px] uppercase tracking-[0.28em] text-cobalt-500/45">{{ card.kicker }}</p>
                  <h3 class="mt-2 text-lg font-semibold leading-tight text-cobalt-500">{{ card.title }}</h3>
                </div>
                <span class="rounded-full border border-cobalt-500/10 px-2.5 py-1 text-[11px] uppercase tracking-[0.2em] text-cobalt-500/55">
                  {{ card.badge }}
                </span>
              </div>

              <div class="overflow-hidden rounded-[1.15rem] border border-cobalt-500/10 bg-[#f8f4ec]">
                <img
                  :src="card.image"
                  :alt="card.title"
                  class="h-36 w-full object-cover object-top"
                  loading="eager"
                />
              </div>

              <p class="mt-4 text-sm leading-6 text-cobalt-500/62">{{ card.description }}</p>

              <div class="mt-4 flex flex-wrap gap-2">
                <span
                  v-for="tag in card.tags"
                  :key="tag"
                  class="rounded-full bg-cobalt-500/6 px-3 py-1 text-xs font-medium text-cobalt-500/65"
                >
                  {{ tag }}
                </span>
              </div>
            </article>

            <article class="absolute left-1/2 top-1/2 z-10 flex w-[18rem] max-w-[82vw] -translate-x-1/2 -translate-y-1/2 flex-col rounded-[2rem] border border-cobalt-500/12 bg-white/82 p-5 shadow-[0_30px_90px_rgba(17,24,64,0.18)] backdrop-blur-xl md:w-[20rem]">
              <div class="flex items-center justify-between text-[11px] uppercase tracking-[0.24em] text-cobalt-500/45">
                <span>Selected work</span>
                <span>2026 direction</span>
              </div>

              <div class="mt-5 rounded-[1.5rem] bg-cobalt-500 px-5 py-6 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
                <p class="font-display text-xs uppercase tracking-[0.28em] text-white/65">hero concept</p>
                <h2 class="mt-3 text-3xl font-semibold leading-tight">Floating proof, not floating decoration.</h2>
                <p class="mt-4 text-sm leading-6 text-white/78">
                  Use layered case-study fragments to show credibility before the visitor scrolls.
                </p>
              </div>

              <div class="mt-5 grid grid-cols-2 gap-3 text-sm text-cobalt-500/70">
                <div class="rounded-[1.2rem] bg-[#f8f4ec] p-4">
                  <p class="font-display text-[10px] uppercase tracking-[0.24em] text-cobalt-500/45">cards</p>
                  <p class="mt-2 text-xl font-semibold text-cobalt-500">4</p>
                  <p class="mt-1 leading-5">Project, metric, role, and testimonial.</p>
                </div>
                <div class="rounded-[1.2rem] bg-[#f8f4ec] p-4">
                  <p class="font-display text-[10px] uppercase tracking-[0.24em] text-cobalt-500/45">motion</p>
                  <p class="mt-2 text-xl font-semibold text-cobalt-500">subtle</p>
                  <p class="mt-1 leading-5">Drift and parallax, no noisy 3D gimmicks.</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section id="case-studies" class="relative px-6 pb-16 pt-4 lg:px-12 lg:pb-20">
      <div class="mx-auto max-w-6xl">
        <div class="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 class="text-lg font-display lowercase text-cobalt-500">case studies</h2>
            <p class="mt-3 max-w-2xl text-base leading-7 text-cobalt-500/65">
              This preview keeps your existing list, but the hero now frames the work as a system of proof-driven fragments rather than a static intro.
            </p>
          </div>
          <div class="rounded-full border border-cobalt-500/12 bg-white/70 px-4 py-2 text-sm text-cobalt-500/60 backdrop-blur">
            quick concept, not full refactor
          </div>
        </div>

        <CaseStudyListItem
          v-for="(project, index) in caseStudies"
          :key="project.slug"
          :number="index + 1"
          :title="project.title"
          :slug="project.slug"
          :tags="project.tags"
          :image="project.image"
          :description="project.description"
        />
      </div>
    </section>

    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CaseStudyListItem from '../components/case-study/CaseStudyListItem.vue';
import Footer from '../components/layout/Footer.vue';
import heroProjectOne from '../../casestudy-topproperties.png';
import heroProjectTwo from '../../casestudy-techstack-fixed.png';
import heroProjectThree from '../../casestudy-journey-redesign.png';
import heroProjectFour from '../../casestudy-full.png';

interface CaseStudy {
  title: string;
  slug: string;
  tags: string[];
  image: string;
  description: string;
}

interface FloatingCard {
  kicker: string;
  title: string;
  badge: string;
  image: string;
  description: string;
  tags: string[];
  position: string;
}

export default defineComponent({
  name: 'Home',
  components: {
    CaseStudyListItem,
    Footer,
  },
  setup() {
    const caseStudies: CaseStudy[] = [
      {
        title: 'Top Properties',
        slug: 'topproperties',
        tags: ['React 18', 'TypeScript', 'Leaflet'],
        image: '/project-images/topproperties.jpg',
        description: 'Luxury real estate browser with interactive map and multi-currency pricing'
      },
      {
        title: 'ECAS',
        slug: 'ecas',
        tags: ['Nuxt 3', 'Stripe', 'Firebase'],
        image: '/project-images/ecas.jpg',
        description: 'Full e-commerce platform with smart pricing engine and admin dashboard'
      },
      {
        title: 'ABS Storybook',
        slug: 'abs-storybook',
        tags: ['React 19', 'Storybook 10', 'Chromatic'],
        image: '/project-images/abs-storybook.jpg',
        description: 'Hotel booking component library with enforced UI/business logic separation'
      }
    ];

    const heroStats = [
      {
        label: 'Focus',
        value: 'Product-first',
        caption: 'Interfaces shaped around trust, clarity, and conversion.'
      },
      {
        label: 'Format',
        value: 'Case studies',
        caption: 'The work is shown as decisions, outcomes, and systems.'
      },
      {
        label: 'Tone',
        value: 'Refined motion',
        caption: 'Enough movement to feel alive, not enough to become noise.'
      }
    ];

    const floatingCards: FloatingCard[] = [
      {
        kicker: 'case study fragment',
        title: 'Top Properties launch system',
        badge: 'project',
        image: heroProjectOne,
        description: 'High-trust interface treatment with stronger visual hierarchy and premium framing.',
        tags: ['visual polish', 'real estate', 'conversion'],
        position: 'left-0 top-3 md:left-6'
      },
      {
        kicker: 'proof card',
        title: 'Component architecture clarity',
        badge: 'system',
        image: heroProjectTwo,
        description: 'A compact UI card that hints at structured frontend thinking before the user scrolls.',
        tags: ['frontend', 'design systems'],
        position: 'right-0 top-8 md:right-8'
      },
      {
        kicker: 'process snapshot',
        title: 'Journey redesign notes',
        badge: 'ux',
        image: heroProjectThree,
        description: 'Useful for showing thinking, not just glossy end states.',
        tags: ['journey map', 'iteration'],
        position: 'bottom-0 left-2 md:left-16'
      },
      {
        kicker: 'full spread',
        title: 'Editorial case study framing',
        badge: 'layout',
        image: heroProjectFour,
        description: 'This card sells the broader portfolio language: layered, editorial, and evidence-led.',
        tags: ['layout', 'storytelling'],
        position: 'bottom-8 right-0 md:right-10'
      }
    ];

    return {
      caseStudies,
      heroStats,
      floatingCards,
    };
  }
});
</script>

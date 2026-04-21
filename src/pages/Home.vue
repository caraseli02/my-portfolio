<template>
  <div class="min-h-screen bg-cream-100 dark:bg-charcoal">
    <section class="relative overflow-hidden px-6 pb-12 pt-28 md:px-10 md:pb-16 md:pt-36 lg:px-12">
      <div class="paper-grid absolute inset-x-4 inset-y-8 rounded-[2rem] opacity-60"></div>
      <div
        class="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.2fr)_22rem] lg:items-end"
      >
        <div>
          <p class="editorial-kicker mb-5">
            frontend engineer • product interfaces • design systems
          </p>
          <h1
            class="max-w-5xl text-[3.4rem] leading-[0.94] font-display text-cobalt-500 dark:text-cobalt-100 sm:text-[4.3rem] md:text-[5.4rem] lg:text-[6.5rem]"
          >
            I build interfaces that feel
            <span class="italic text-cobalt-400 dark:text-cobalt-200">decisive</span>
            before they feel decorative.
          </h1>
          <p
            class="mt-6 max-w-2xl text-lg leading-relaxed text-cobalt-600 dark:text-cobalt-100/88 md:text-xl"
          >
            Vlad Caraseli — frontend engineer for product teams that need sharper UX, cleaner
            systems, and case-study-worthy execution across Vue, React, Nuxt, and TypeScript.
          </p>

          <div class="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#case-studies"
              class="inline-flex items-center justify-center bg-cobalt-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-85"
            >
              View case studies
            </a>
            <router-link
              to="/contact"
              class="inline-flex items-center justify-center border border-cobalt-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-cobalt-500 transition-colors hover:bg-cobalt-500 hover:text-white dark:border-cobalt-300 dark:text-cobalt-200 dark:hover:bg-cobalt-300 dark:hover:text-charcoal"
            >
              Start a conversation
            </router-link>
          </div>

          <div class="mt-12 grid gap-4 sm:grid-cols-3">
            <div class="panel-surface p-5">
              <p class="editorial-kicker mb-2">based in</p>
              <p class="text-xl font-medium text-cobalt-500 dark:text-cobalt-200">
                Palma de Mallorca
              </p>
            </div>
            <div class="panel-surface p-5">
              <p class="editorial-kicker mb-2">focus</p>
              <p class="text-xl font-medium text-cobalt-500 dark:text-cobalt-200">
                Product UI + design systems
              </p>
            </div>
            <div class="panel-surface p-5">
              <p class="editorial-kicker mb-2">toolkit</p>
              <p class="text-xl font-medium text-cobalt-500 dark:text-cobalt-200">
                Vue, React, Nuxt, TypeScript
              </p>
            </div>
          </div>
        </div>

        <aside class="panel-surface relative overflow-hidden rounded-[2rem] p-6 md:p-8">
          <p class="editorial-kicker mb-4">why teams bring me in</p>
          <div class="space-y-5">
            <div>
              <p class="text-4xl font-display text-cobalt-500 dark:text-cobalt-200">6+</p>
              <p
                class="mt-1 text-sm uppercase tracking-[0.24em] text-cobalt-500/70 dark:text-cobalt-100/72"
              >
                years building product UI
              </p>
            </div>
            <div class="editorial-rule"></div>
            <ul class="space-y-3 text-base leading-relaxed text-cobalt-600 dark:text-cobalt-100/86">
              <li>Complex frontend systems without enterprise bloat.</li>
              <li>Interfaces with clear hierarchy, credible polish, and strong usability.</li>
              <li>Case studies that prove range: commerce, maps, component libraries.</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>

    <section
      class="border-y border-cobalt-500/12 bg-cobalt-500/[0.03] py-4 dark:border-cobalt-300/12 dark:bg-cobalt-300/[0.04]"
    >
      <Marquee :duration="24" pause-on-hover>
        <div
          class="flex items-center gap-4 pr-8 text-sm uppercase tracking-[0.22em] text-cobalt-500 dark:text-cobalt-200"
        >
          <span>Selected work</span>
          <span aria-hidden="true">✦</span>
          <span>Product UI</span>
          <span aria-hidden="true">✦</span>
          <span>Design Systems</span>
          <span aria-hidden="true">✦</span>
          <span>Frontend Architecture</span>
          <span aria-hidden="true">✦</span>
        </div>
      </Marquee>
    </section>

    <section id="case-studies" class="px-6 py-14 md:px-10 md:py-20 lg:px-12">
      <div class="mx-auto max-w-7xl">
        <div class="mb-10 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end">
          <div>
            <p class="editorial-kicker mb-3">selected case studies</p>
            <h2
              class="max-w-3xl text-4xl font-display text-cobalt-500 dark:text-cobalt-200 md:text-6xl"
            >
              Proof first. Three projects that show how I think, ship, and refine.
            </h2>
          </div>
          <p
            class="max-w-xl text-base leading-relaxed text-cobalt-600 dark:text-cobalt-100/86 md:text-lg lg:justify-self-end"
          >
            Each project highlights a different strength: product complexity, system design, or UI
            architecture. Fast scan on top. Deep dive if you want the engineering decisions.
          </p>
        </div>

        <div class="space-y-5">
          <CaseStudyListItem
            v-for="(project, index) in featuredProjects"
            :key="project.caseStudy?.slug || project.id"
            :number="index + 1"
            :title="project.title"
            :slug="project.caseStudy!.slug"
            :tags="project.tech.slice(0, 4)"
            :image="project.caseStudy?.image || ''"
            :description="project.description"
            :github="project.github"
          />
        </div>
      </div>
    </section>

    <section class="px-6 pb-16 md:px-10 lg:px-12">
      <div class="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
        <div class="panel-surface rounded-[2rem] p-6 md:p-8">
          <p class="editorial-kicker mb-3">beyond the featured work</p>
          <h3 class="text-3xl font-display text-cobalt-500 dark:text-cobalt-200 md:text-4xl">
            More repos, more experiments, more proof of range.
          </h3>
          <p
            class="mt-4 max-w-2xl text-base leading-relaxed text-cobalt-600 dark:text-cobalt-100/86"
          >
            Smaller builds cover inventory tools, job boards, starter templates, automation work,
            and dashboard-style products.
          </p>
        </div>

        <a
          href="https://github.com/caraseli02?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center border border-cobalt-500 px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-cobalt-500 transition-colors hover:bg-cobalt-500 hover:text-white dark:border-cobalt-300 dark:text-cobalt-200 dark:hover:bg-cobalt-300 dark:hover:text-charcoal"
        >
          Browse GitHub ↗
        </a>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from "../components/layout/Footer.vue";
import Marquee from "../components/ui/Marquee.vue";
import CaseStudyListItem from "../components/case-study/CaseStudyListItem.vue";
import { featuredProjects } from "../data/projects";
</script>

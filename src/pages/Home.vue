<template>
  <div class="min-h-screen bg-cream-100 dark:bg-charcoal">
    <section class="px-6 pb-12 pt-28 md:px-10 md:pb-16 md:pt-36 lg:px-12">
      <div class="mx-auto max-w-7xl">
        <div class="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_22rem] lg:items-end">
          <div>
            <p class="mono-label mb-5">frontend engineer • product interfaces • design systems</p>
            <h1
              class="max-w-5xl text-[3.25rem] leading-[0.94] font-display text-cobalt-500 dark:text-cobalt-100 sm:text-[4.1rem] md:text-[5rem] lg:text-[5.8rem]"
            >
              I build product interfaces that feel
              <span class="italic text-cobalt-400 dark:text-cobalt-200">decisive</span>
              under pressure.
            </h1>
            <p
              class="mt-6 max-w-3xl text-lg leading-relaxed text-cobalt-600 dark:text-cobalt-100/86 md:text-xl"
            >
              Vlad Caraseli — frontend engineer for teams that need clearer hierarchy, stronger
              system thinking, and UI that reads as trustworthy on the first scan.
            </p>

            <div class="mt-8 data-strip md:grid-cols-4">
              <div>
                <p class="mono-label">experience</p>
                <p class="mt-2 text-xl font-semibold text-charcoal dark:text-cobalt-100">
                  6+ years
                </p>
              </div>
              <div>
                <p class="mono-label">stack</p>
                <p class="mt-2 text-xl font-semibold text-charcoal dark:text-cobalt-100">
                  Vue / React / Nuxt
                </p>
              </div>
              <div>
                <p class="mono-label">focus</p>
                <p class="mt-2 text-xl font-semibold text-charcoal dark:text-cobalt-100">
                  Product UI + systems
                </p>
              </div>
              <div>
                <p class="mono-label">base</p>
                <p class="mt-2 text-xl font-semibold text-charcoal dark:text-cobalt-100">
                  Palma / remote
                </p>
              </div>
            </div>

            <div class="mt-8 flex flex-wrap items-center gap-4">
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
          </div>

          <aside class="rule-panel p-6 md:p-8">
            <p class="mono-label mb-4">recruiter scan</p>
            <div class="space-y-5">
              <div>
                <p
                  class="text-sm uppercase tracking-[0.2em] text-cobalt-500/68 dark:text-cobalt-100/72"
                >
                  what I get pulled into
                </p>
                <p class="mt-2 text-lg leading-relaxed text-charcoal-200 dark:text-cobalt-100/86">
                  Product surfaces that feel busy, inconsistent, or weaker than the engineering
                  behind them.
                </p>
              </div>
              <div class="editorial-rule"></div>
              <div>
                <p
                  class="text-sm uppercase tracking-[0.2em] text-cobalt-500/68 dark:text-cobalt-100/72"
                >
                  strongest signal
                </p>
                <p class="mt-2 text-lg leading-relaxed text-charcoal-200 dark:text-cobalt-100/86">
                  Complex frontend systems explained through concrete case studies, not vague
                  claims.
                </p>
              </div>
              <div class="editorial-rule"></div>
              <div class="flex flex-wrap gap-2">
                <span class="command-chip">⌘K palette</span>
                <span class="command-chip">? shortcuts</span>
                <span class="command-chip">J / K case studies</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <section class="section-shell py-4">
      <div class="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-6 md:px-10 lg:px-12">
        <span class="mono-label">proof first</span>
        <span class="command-chip">3 case studies</span>
        <span class="command-chip">Commerce</span>
        <span class="command-chip">Maps</span>
        <span class="command-chip">Component systems</span>
        <span class="command-chip">UI architecture</span>
      </div>
    </section>

    <section id="case-studies" class="px-6 py-14 md:px-10 md:py-20 lg:px-12">
      <div class="mx-auto max-w-7xl">
        <div class="mb-10 grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-end">
          <div>
            <p class="mono-label mb-3">selected case studies</p>
            <h2 class="section-heading max-w-3xl">
              Three builds that show product judgment, system depth, and clean implementation.
            </h2>
          </div>
          <p class="section-subheading lg:justify-self-end">
            Each one proves something different: hard product logic, frontend architecture, or
            interface systems that scale. Quick scan on top. Deep dive when you need the details.
          </p>
        </div>

        <div class="space-y-5">
          <CaseStudyListItem
            v-for="(project, index) in featuredProjects"
            :key="project.caseStudy?.slug || project.id"
            :number="index + 1"
            :reverse="index % 2 === 1"
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
      <div class="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)]">
        <div class="rule-panel p-6 md:p-8">
          <p class="mono-label mb-3">beyond the featured work</p>
          <h3 class="text-3xl font-display text-cobalt-500 dark:text-cobalt-200 md:text-4xl">
            More repos, more experiments, more proof of range.
          </h3>
          <p
            class="mt-4 max-w-2xl text-base leading-relaxed text-cobalt-600 dark:text-cobalt-100/84"
          >
            Smaller builds cover inventory tools, job boards, starter kits, automation work, and
            dashboard-style products. The consistent thread: practical UI, not portfolio theater.
          </p>

          <div class="mt-8 data-strip sm:grid-cols-3">
            <div>
              <p class="mono-label">product cleanup</p>
              <p class="mt-2 text-sm leading-relaxed text-charcoal-200 dark:text-cobalt-100/84">
                Stronger hierarchy, better states, fewer awkward edges in shipped surfaces.
              </p>
            </div>
            <div>
              <p class="mono-label">systems</p>
              <p class="mt-2 text-sm leading-relaxed text-charcoal-200 dark:text-cobalt-100/84">
                Components, tokens, and patterns that keep teams moving without drift.
              </p>
            </div>
            <div>
              <p class="mono-label">logic-heavy UI</p>
              <p class="mt-2 text-sm leading-relaxed text-charcoal-200 dark:text-cobalt-100/84">
                Commerce, maps, dashboards, and tools that still feel calm under complexity.
              </p>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-4">
          <div class="subtle-panel p-5">
            <p class="mono-label mb-2">what I usually fix</p>
            <p class="text-2xl font-display text-charcoal dark:text-cobalt-100">
              Hierarchy, systems, and trust.
            </p>
            <p class="mt-3 text-sm leading-relaxed text-cobalt-600 dark:text-cobalt-100/82">
              The work usually starts where the product feels busier, shakier, or harder to trust
              than it should.
            </p>
          </div>

          <a
            href="https://github.com/caraseli02?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex min-h-[9rem] items-end justify-between border border-cobalt-500 px-6 py-5 text-left text-sm font-semibold uppercase tracking-[0.18em] text-cobalt-500 transition-colors hover:bg-cobalt-500 hover:text-white dark:border-cobalt-300 dark:text-cobalt-200 dark:hover:bg-cobalt-300 dark:hover:text-charcoal"
          >
            <span>Browse GitHub</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from "../components/layout/Footer.vue";
import CaseStudyListItem from "../components/case-study/CaseStudyListItem.vue";
import { featuredProjects } from "../data/projects";
</script>

<template>
  <div class="min-h-screen bg-cream-100 dark:bg-charcoal">
    <section class="relative overflow-hidden px-6 pb-12 pt-28 md:px-10 md:pb-16 md:pt-36 lg:px-12">
      <div class="relative mx-auto max-w-7xl">
        <p class="editorial-kicker mb-5">projects index</p>
        <h1
          class="max-w-4xl text-[3rem] leading-[0.94] font-display text-cobalt-500 dark:text-cobalt-100 sm:text-[3.8rem] md:text-[4.6rem] lg:text-[5.4rem]"
        >
          Everything I've shipped — from case-studied builds to late-night experiments.
        </h1>
        <p
          class="mt-6 max-w-2xl text-lg leading-relaxed text-cobalt-600 dark:text-cobalt-100/85 md:text-xl"
        >
          Three featured projects with full case studies, plus a longer list of smaller builds:
          starter templates, component work, automation tools, and product experiments.
        </p>

        <div
          class="mt-10 flex flex-wrap items-center gap-4 font-mono text-xs tracking-[0.18em] uppercase text-cobalt-500/75 dark:text-cobalt-200/75"
        >
          <span>{{ featuredProjects.length }} case studies</span>
          <span aria-hidden="true" class="text-cobalt-500/30 dark:text-cobalt-300/30">·</span>
          <span>{{ otherProjects.length }} additional repos</span>
          <span aria-hidden="true" class="text-cobalt-500/30 dark:text-cobalt-300/30">·</span>
          <span>58+ public on github</span>
        </div>
      </div>
    </section>

    <section id="featured" class="px-6 py-14 md:px-10 md:py-20 lg:px-12">
      <div class="mx-auto max-w-7xl">
        <div class="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p class="editorial-kicker mb-3">case-studied work</p>
            <h2
              class="max-w-3xl text-4xl font-display text-cobalt-500 dark:text-cobalt-200 md:text-5xl"
            >
              Featured — with full context
            </h2>
          </div>
          <p class="max-w-md text-base leading-relaxed text-cobalt-600 dark:text-cobalt-100/85">
            Each has a long-form case study covering architecture, tradeoffs, and what shipped.
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

    <section
      class="border-y border-cobalt-500/12 bg-cream-50 px-6 py-14 md:px-10 md:py-20 lg:px-12 dark:border-cobalt-300/12 dark:bg-charcoal-50/40"
    >
      <div class="mx-auto max-w-7xl">
        <div class="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p class="editorial-kicker mb-3">additional repos</p>
            <h2
              class="max-w-3xl text-4xl font-display text-cobalt-500 dark:text-cobalt-200 md:text-5xl"
            >
              Smaller builds, starters, experiments
            </h2>
          </div>
          <p class="max-w-md text-base leading-relaxed text-cobalt-600 dark:text-cobalt-100/85">
            Components, automation, dashboards, and starter kits. Each one source-linked on GitHub.
          </p>
        </div>

        <ul
          class="grid grid-cols-1 border-t border-cobalt-500/12 dark:border-cobalt-300/12 sm:grid-cols-2 lg:grid-cols-3"
        >
          <li
            v-for="project in otherProjects"
            :key="project.id"
            class="border-b border-cobalt-500/12 dark:border-cobalt-300/12 sm:[&:not(:nth-child(2n))]:border-r lg:[&:not(:nth-child(3n))]:border-r lg:[&:nth-child(2n)]:border-r-0"
          >
            <a
              :href="project.github"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex h-full flex-col gap-4 px-5 py-7 transition-colors hover:bg-cobalt-500/[0.04] dark:hover:bg-cobalt-300/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt-500 focus-visible:outline-offset-[-2px]"
            >
              <div class="flex items-start justify-between gap-3">
                <h3 class="text-xl font-display leading-tight text-cobalt-500 dark:text-cobalt-200">
                  {{ project.title }}
                </h3>
                <span
                  aria-hidden="true"
                  class="mt-1 shrink-0 text-cobalt-500/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 dark:text-cobalt-300/50"
                >
                  ↗
                </span>
              </div>
              <p class="text-sm leading-relaxed text-cobalt-600 dark:text-cobalt-100/80">
                {{ project.description }}
              </p>
              <div
                class="mt-auto flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.14em] text-cobalt-500/70 dark:text-cobalt-200/70"
              >
                <span v-for="tech in project.tech" :key="tech">{{ tech }}</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>

    <section class="px-6 py-20 md:px-10 md:py-28 lg:px-12">
      <div class="mx-auto max-w-4xl text-center">
        <p class="editorial-kicker mb-4">still more</p>
        <h2
          class="mx-auto max-w-3xl text-3xl font-display text-cobalt-500 dark:text-cobalt-200 md:text-5xl"
        >
          58+ public repositories. Dig in wherever you want.
        </h2>
        <p
          class="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cobalt-600 dark:text-cobalt-100/85"
        >
          The full list lives on GitHub — Vue components, experimental projects, starter kits, and
          side work.
        </p>
        <a
          href="https://github.com/caraseli02?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-10 inline-flex items-center gap-3 border border-cobalt-500 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-cobalt-500 transition-colors hover:bg-cobalt-500 hover:text-white dark:border-cobalt-300 dark:text-cobalt-200 dark:hover:bg-cobalt-300 dark:hover:text-charcoal"
        >
          Browse all repositories
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import CaseStudyListItem from "../components/case-study/CaseStudyListItem.vue";
import Footer from "../components/layout/Footer.vue";
import { featuredProjects, otherProjects } from "../data/projects";
</script>

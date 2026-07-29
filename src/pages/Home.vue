<template>
  <div class="min-h-screen bg-cream-100 dark:bg-charcoal">
    <section class="relative overflow-hidden px-6 pb-12 pt-28 md:px-10 md:pb-16 md:pt-36 lg:px-12">
      <div class="paper-grid absolute inset-x-4 inset-y-8 rounded-2xl opacity-60"></div>
      <div class="relative mx-auto max-w-7xl">
        <div class="reveal-stagger max-w-4xl">
          <p class="editorial-kicker mb-6 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>vlad caraseli</span>
            <span aria-hidden="true" class="text-cobalt-500/40 dark:text-cobalt-300/40">·</span>
            <span>frontend developer</span>
            <span aria-hidden="true" class="text-cobalt-500/40 dark:text-cobalt-300/40">·</span>
            <span>palma de mallorca</span>
          </p>
          <h1
            class="font-display text-5xl leading-[0.96] text-cobalt-500 dark:text-cobalt-100 sm:text-6xl md:text-[4.25rem] lg:text-[4.75rem]"
          >
            Frontend developer with
            <span class="italic text-cobalt-400 dark:text-cobalt-200">4+ years</span>
            shipping product UI.
          </h1>
          <p
            class="mt-6 max-w-2xl text-lg leading-relaxed text-cobalt-600 dark:text-cobalt-100/85 md:text-xl"
          >
            Vue · Nuxt · React · TypeScript · AI-assisted development. Cross-functional agile teams,
            Figma-to-production interfaces, Core Web Vitals, REST APIs — with Claude Code and Codex
            in the delivery cycle.
          </p>

          <dl
            class="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 border-y border-cobalt-500/15 py-5 font-mono text-xs uppercase tracking-[0.16em] text-cobalt-500 dark:border-cobalt-300/15 dark:text-cobalt-200 sm:grid-cols-4"
          >
            <div class="flex flex-col gap-1">
              <dt class="text-cobalt-500/55 dark:text-cobalt-300/55">experience</dt>
              <dd class="text-sm font-semibold tracking-[0.12em]">04+ yrs</dd>
            </div>
            <div class="flex flex-col gap-1">
              <dt class="text-cobalt-500/55 dark:text-cobalt-300/55">recent</dt>
              <dd class="text-sm font-semibold tracking-[0.12em]">Hotelverse</dd>
            </div>
            <div class="flex flex-col gap-1">
              <dt class="text-cobalt-500/55 dark:text-cobalt-300/55">projects</dt>
              <dd class="text-sm font-semibold tracking-[0.12em]">
                {{ featuredProjects.length }} samples
              </dd>
            </div>
            <div class="flex flex-col gap-1">
              <dt class="text-cobalt-500/55 dark:text-cobalt-300/55">availability</dt>
              <dd class="text-sm font-semibold tracking-[0.12em]">
                <span
                  class="mr-1.5 inline-block h-2 w-2 -translate-y-[1px] rounded-full bg-emerald-500 align-middle"
                  aria-hidden="true"
                ></span>
                open to roles
              </dd>
            </div>
          </dl>

          <div class="mt-10 flex flex-wrap items-center gap-4">
            <router-link
              to="/contact"
              class="inline-flex items-center justify-center bg-cobalt-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-85"
            >
              Start a conversation
            </router-link>
            <a
              href="#work"
              class="inline-flex items-center justify-center border border-cobalt-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-cobalt-500 transition-colors hover:bg-cobalt-500 hover:text-white dark:border-cobalt-300 dark:text-cobalt-200 dark:hover:bg-cobalt-300 dark:hover:text-charcoal"
            >
              View work
            </a>
            <a
              :href="links.cv"
              download
              class="inline-flex min-h-11 items-center justify-center px-1 text-sm font-semibold uppercase tracking-[0.18em] text-cobalt-500 transition-opacity hover:opacity-75 dark:text-cobalt-200"
            >
              Download CV ↓
            </a>
          </div>
        </div>
      </div>
    </section>

    <section id="work" class="px-6 py-14 md:px-10 md:py-20 lg:px-12">
      <div class="mx-auto max-w-7xl">
        <div class="reveal mb-12 max-w-3xl">
          <p class="editorial-kicker mb-3">selected work</p>
          <h2 class="font-display text-4xl text-cobalt-500 dark:text-cobalt-200 md:text-5xl">
            The same story as the CV — with the visuals attached.
          </h2>
          <p
            class="mt-4 text-base leading-relaxed text-cobalt-600 dark:text-cobalt-100/85 md:text-lg"
          >
            {{ featuredProjects.length }} projects · {{ totalVisualAssets }} visual assets · grouped
            by employer like the CV.
          </p>
        </div>

        <div v-for="group in experienceGroups" :id="group.id" :key="group.id" class="reveal mb-14">
          <div
            class="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-cobalt-500/12 pb-5 dark:border-cobalt-300/12"
          >
            <div>
              <p class="editorial-kicker mb-2">{{ group.kicker }}</p>
              <h3 class="font-display text-3xl text-cobalt-500 dark:text-cobalt-200">
                {{ group.title }}
              </h3>
              <p class="mt-2 max-w-2xl text-base text-cobalt-600 dark:text-cobalt-100/80">
                {{ group.blurb }}
              </p>
            </div>
            <p
              class="font-mono text-xs uppercase tracking-[0.16em] text-cobalt-500/60 dark:text-cobalt-200/60"
            >
              {{ group.period }}
            </p>
          </div>

          <div
            class="grid gap-5"
            :class="
              projectsForGroup(group).length > 1 ? 'sm:grid-cols-2 xl:grid-cols-3' : 'max-w-xl'
            "
          >
            <WorkCard
              v-for="project in projectsForGroup(group)"
              :key="project.caseStudy.slug"
              :title="project.title"
              :slug="project.caseStudy.slug"
              :image="project.caseStudy.image"
              :description="project.description"
              :company="project.caseStudy.company"
              :period="project.caseStudy.year"
              :tags="project.tech"
              class="card-lift"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="px-6 pb-16 md:px-10 lg:px-12">
      <div
        class="reveal mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 border border-cobalt-500/14 p-6 md:flex-row md:items-center md:p-8"
      >
        <div>
          <p class="editorial-kicker mb-2">full CV</p>
          <p class="font-display text-2xl text-cobalt-500 dark:text-cobalt-200 md:text-3xl">
            Skills, education, and role details live on About.
          </p>
        </div>
        <router-link
          to="/about"
          class="inline-flex shrink-0 items-center gap-3 border border-cobalt-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-cobalt-500 transition-colors hover:bg-cobalt-500 hover:text-white dark:border-cobalt-300 dark:text-cobalt-200 dark:hover:bg-cobalt-300 dark:hover:text-charcoal"
        >
          Open About
          <span aria-hidden="true">→</span>
        </router-link>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from "../components/layout/Footer.vue";
import WorkCard from "../components/work/WorkCard.vue";
import {
  experienceGroups,
  featuredProjects,
  projectsForGroup,
  totalVisualAssets,
} from "../data/projects";
import { links } from "../data/cv";
import { useJsonLd } from "../composables/useJsonLd";

useJsonLd({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Vlad Caraseli",
  url: "https://vladcaraseli.com",
  description:
    "Frontend developer with 4+ years experience — Vue, Nuxt, React, TypeScript, and AI-assisted development.",
  author: {
    "@type": "Person",
    name: "Vlad Caraseli",
    jobTitle: "Frontend Developer",
    url: "https://vladcaraseli.com",
  },
});
</script>

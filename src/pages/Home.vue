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
            class="text-5xl leading-[0.96] font-display text-cobalt-500 dark:text-cobalt-100 sm:text-6xl md:text-[4.25rem] lg:text-[4.75rem]"
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
            class="mt-10 grid grid-cols-2 gap-y-4 gap-x-6 border-y border-cobalt-500/15 py-5 font-mono text-xs uppercase tracking-[0.16em] text-cobalt-500 dark:border-cobalt-300/15 dark:text-cobalt-200 sm:grid-cols-4"
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
              <dt class="text-cobalt-500/55 dark:text-cobalt-300/55">work samples</dt>
              <dd class="text-sm font-semibold tracking-[0.12em]">
                {{ featuredProjects.length }} visuals
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
              href="/Vladislav_Caraseli_CV_EN.pdf"
              download
              class="inline-flex items-center justify-center text-sm font-semibold uppercase tracking-[0.18em] text-cobalt-500 transition-opacity hover:opacity-75 dark:text-cobalt-200"
            >
              Download CV ↓
            </a>
          </div>
        </div>
      </div>
    </section>

    <section id="work" class="px-6 py-14 md:px-10 md:py-20 lg:px-12">
      <div class="mx-auto max-w-7xl">
        <div
          class="reveal mb-10 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end"
        >
          <div>
            <p class="editorial-kicker mb-3">selected work</p>
            <h2
              class="max-w-3xl text-4xl font-display text-cobalt-500 dark:text-cobalt-200 md:text-6xl"
            >
              The same story as the CV — with the visuals attached.
            </h2>
          </div>
          <p
            class="max-w-xl text-base leading-relaxed text-cobalt-600 dark:text-cobalt-100/85 md:text-lg lg:justify-self-end"
          >
            Hotelverse, Nezo Hub, and client work across TopProperties, Traffice, Moonflow, and
            Skipso. Click any card for gallery and role context.
          </p>
        </div>

        <div class="reveal-stagger grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          <WorkCard
            v-for="project in featuredProjects"
            :key="project.caseStudy.slug"
            :title="project.title"
            :slug="project.caseStudy.slug"
            :image="project.caseStudy.image || project.image || ''"
            :description="project.description"
            :company="project.caseStudy.company"
            :period="project.caseStudy.year"
            :tags="project.tech"
            class="card-lift"
          />
        </div>
      </div>
    </section>

    <section class="reveal px-6 pb-16 md:px-10 lg:px-12">
      <div
        class="mx-auto grid max-w-7xl gap-6 border border-cobalt-500/14 bg-white/70 p-6 dark:border-cobalt-300/14 dark:bg-charcoal-50/60 md:grid-cols-[1.2fr_0.8fr] md:p-8"
      >
        <div>
          <p class="editorial-kicker mb-3">core skills</p>
          <h3 class="text-3xl font-display text-cobalt-500 dark:text-cobalt-200 md:text-4xl">
            Stack from the CV, not a kitchen sink.
          </h3>
          <div class="mt-6 grid gap-4 sm:grid-cols-2">
            <div v-for="group in skillGroups" :key="group.label">
              <p
                class="mb-2 font-mono text-[11px] uppercase tracking-[0.16em] text-cobalt-500/60 dark:text-cobalt-200/60"
              >
                {{ group.label }}
              </p>
              <p class="text-sm leading-relaxed text-cobalt-600 dark:text-cobalt-100/85">
                {{ group.items }}
              </p>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col justify-between gap-4 border-t border-cobalt-500/12 pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-8 dark:border-cobalt-300/12"
        >
          <div>
            <p class="editorial-kicker mb-3">experience arc</p>
            <ul class="space-y-3 text-sm text-cobalt-600 dark:text-cobalt-100/85">
              <li>
                <strong class="font-semibold text-cobalt-500 dark:text-cobalt-200"
                  >Hotelverse</strong
                >
                — Nov 2024–Dec 2025
              </li>
              <li>
                <strong class="font-semibold text-cobalt-500 dark:text-cobalt-200">Nezo Hub</strong>
                — Apr 2023–Oct 2024
              </li>
              <li>
                <strong class="font-semibold text-cobalt-500 dark:text-cobalt-200"
                  >Skipso, TopProperties, Moonflow, Traffice</strong
                >
                — Sep 2021–Apr 2023
              </li>
            </ul>
          </div>
          <router-link
            to="/about"
            class="inline-flex items-center justify-between border border-cobalt-500 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-cobalt-500 transition-colors hover:bg-cobalt-500 hover:text-white dark:border-cobalt-300 dark:text-cobalt-200 dark:hover:bg-cobalt-300 dark:hover:text-charcoal"
          >
            Full CV on site
            <span aria-hidden="true">→</span>
          </router-link>
        </div>
      </div>
    </section>

    <Footer class="footer-reveal" />
  </div>
</template>

<script setup lang="ts">
import Footer from "../components/layout/Footer.vue";
import WorkCard from "../components/work/WorkCard.vue";
import { featuredProjects } from "../data/projects";
import { useJsonLd } from "../composables/useJsonLd";

const skillGroups = [
  {
    label: "Frontend",
    items: "Vue 3 · Vue.js · Nuxt · React · Next.js · TypeScript · JavaScript · Tailwind CSS",
  },
  {
    label: "UI and product",
    items:
      "Figma · Storybook · Responsive interfaces · Component-based architecture · Core Web Vitals",
  },
  {
    label: "Data and quality",
    items: "Pinia · Zustand · REST APIs · Firebase · CMS · Vitest · Playwright · Supabase",
  },
  {
    label: "Applied AI",
    items: "Claude Code · Codex",
  },
];

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

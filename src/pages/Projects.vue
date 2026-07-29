<template>
  <div class="min-h-screen bg-cream-100 dark:bg-charcoal">
    <section class="relative overflow-hidden px-6 pb-12 pt-28 md:px-10 md:pb-16 md:pt-36 lg:px-12">
      <div class="relative mx-auto max-w-7xl">
        <p class="editorial-kicker mb-5">work</p>
        <h1
          class="max-w-4xl text-[3rem] leading-[0.94] font-display text-cobalt-500 dark:text-cobalt-100 sm:text-[3.8rem] md:text-[4.6rem] lg:text-[5.4rem]"
        >
          Visual work samples that mirror the CV.
        </h1>
        <p
          class="mt-6 max-w-2xl text-lg leading-relaxed text-cobalt-600 dark:text-cobalt-100/85 md:text-xl"
        >
          Six products across three experience blocks — Hotelverse, Nezo Hub, and freelance client
          work. Every LinkedIn showcase image lives here.
        </p>

        <div
          class="mt-10 flex flex-wrap items-center gap-4 font-mono text-xs tracking-[0.18em] uppercase text-cobalt-500/75 dark:text-cobalt-200/75"
        >
          <span>{{ featuredProjects.length }} work samples</span>
          <span aria-hidden="true" class="text-cobalt-500/30 dark:text-cobalt-300/30">·</span>
          <span>{{ totalAssets }} visual assets</span>
          <span aria-hidden="true" class="text-cobalt-500/30 dark:text-cobalt-300/30">·</span>
          <a
            href="/Vladislav_Caraseli_CV_EN.pdf"
            download
            class="underline-offset-4 hover:underline"
          >
            download CV
          </a>
        </div>
      </div>
    </section>

    <section
      v-for="group in experienceGroups"
      :id="group.id"
      :key="group.id"
      class="px-6 py-12 md:px-10 md:py-16 lg:px-12"
    >
      <div class="mx-auto max-w-7xl">
        <div
          class="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-cobalt-500/12 pb-6 dark:border-cobalt-300/12"
        >
          <div>
            <p class="editorial-kicker mb-2">{{ group.kicker }}</p>
            <h2 class="text-3xl font-display text-cobalt-500 dark:text-cobalt-200 md:text-4xl">
              {{ group.title }}
            </h2>
            <p class="mt-2 max-w-2xl text-base text-cobalt-600 dark:text-cobalt-100/80">
              {{ group.blurb }}
            </p>
          </div>
          <p
            class="font-mono text-[11px] uppercase tracking-[0.16em] text-cobalt-500/60 dark:text-cobalt-200/60"
          >
            {{ group.period }}
          </p>
        </div>

        <div
          class="grid gap-5"
          :class="group.projects.length > 1 ? 'sm:grid-cols-2 xl:grid-cols-3' : 'max-w-xl'"
        >
          <WorkCard
            v-for="project in group.projects"
            :key="project.caseStudy.slug"
            :title="project.title"
            :slug="project.caseStudy.slug"
            :image="project.caseStudy.image || project.image || ''"
            :description="project.description"
            :company="project.caseStudy.company"
            :period="project.caseStudy.year"
            :tags="project.tech"
          />
        </div>
      </div>
    </section>

    <section class="px-6 py-16 md:px-10 md:py-24 lg:px-12">
      <div
        class="mx-auto flex max-w-4xl flex-col items-start gap-6 border border-cobalt-500/14 p-6 md:flex-row md:items-center md:justify-between md:p-8"
      >
        <div>
          <p class="editorial-kicker mb-2">source &amp; experiments</p>
          <p class="text-xl font-display text-cobalt-500 dark:text-cobalt-200 md:text-2xl">
            Smaller starters and side repos stay on GitHub — this page stays CV-focused.
          </p>
        </div>
        <a
          href="https://github.com/caraseli02?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex shrink-0 items-center gap-3 border border-cobalt-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-cobalt-500 transition-colors hover:bg-cobalt-500 hover:text-white dark:border-cobalt-300 dark:text-cobalt-200 dark:hover:bg-cobalt-300 dark:hover:text-charcoal"
        >
          Browse GitHub
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import WorkCard from "../components/work/WorkCard.vue";
import Footer from "../components/layout/Footer.vue";
import { featuredProjects } from "../data/projects";

const experienceGroups = computed(() => [
  {
    id: "hotelverse",
    kicker: "01 — recent role",
    title: "Hotelverse",
    period: "Nov 2024 — Dec 2025",
    blurb:
      "Multi-room booking and upselling — guest journey, front-desk recommendations, and order visibility.",
    projects: featuredProjects.filter((p) => p.caseStudy.company === "Hotelverse"),
  },
  {
    id: "nezo",
    kicker: "02 — previous role",
    title: "Nezo Hub",
    period: "Apr 2023 — Oct 2024",
    blurb: "SaaS and business app frontend — dashboards, auth, and crypto wallet / ecosystem UI.",
    projects: featuredProjects.filter((p) => p.caseStudy.company === "Nezo Hub"),
  },
  {
    id: "freelance",
    kicker: "03 — client work",
    title: "Skipso, TopProperties, Moonflow, Traffice",
    period: "Sep 2021 — Apr 2023",
    blurb:
      "SaaS, real estate, community, and marketing frontends — dashboards, landing pages, and custom flows.",
    projects: featuredProjects.filter((p) =>
      ["TopProperties", "Traffice", "Moonflow Club", "Skipso"].includes(p.caseStudy.company),
    ),
  },
]);

const totalAssets = computed(() =>
  featuredProjects.reduce((sum, p) => sum + (p.caseStudy.gallery?.length ?? 1), 0),
);
</script>

<template>
  <div class="min-h-screen bg-cream-100 dark:bg-charcoal">
    <!-- Registration line — reading progress -->
    <div class="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5" aria-hidden="true">
      <div
        class="h-full w-full origin-left bg-cobalt-500 dark:bg-cobalt-300"
        :style="{ transform: `scaleX(${progress})` }"
      ></div>
    </div>

    <section class="relative overflow-hidden px-6 pb-16 pt-28 md:px-10 md:pb-20 md:pt-36 lg:px-12">
      <div
        class="paper-grid absolute inset-x-4 inset-y-8 rounded-2xl opacity-60"
        :style="{ transform: `translate3d(0, ${gridDrift}px, 0)` }"
      ></div>
      <div v-in class="relative mx-auto max-w-7xl">
        <p
          class="editorial-kicker mv mb-6 flex flex-wrap items-center gap-x-3 gap-y-1"
          style="--d: 0ms"
        >
          <span>vlad caraseli</span>
          <span aria-hidden="true" class="text-cobalt-500/40 dark:text-cobalt-300/40">·</span>
          <span>frontend developer</span>
          <span aria-hidden="true" class="text-cobalt-500/40 dark:text-cobalt-300/40">·</span>
          <span>palma de mallorca</span>
        </p>
        <WordMask
          tag="h1"
          :words="headlineWords"
          :base-delay="120"
          :step="55"
          class="font-display text-5xl leading-[0.96] text-cobalt-500 dark:text-cobalt-100 sm:text-6xl md:text-[4.25rem] lg:text-[4.75rem]"
        />
        <p
          class="mv mt-6 max-w-2xl text-lg leading-relaxed text-cobalt-600 dark:text-cobalt-100/85 md:text-xl"
          style="--d: 550ms"
        >
          Vue · Nuxt · React · TypeScript · AI-assisted development. Cross-functional agile teams,
          Figma-to-production interfaces, Core Web Vitals, REST APIs — with Claude Code and Codex in
          the delivery cycle.
        </p>

        <dl
          class="relative mt-10 grid grid-cols-2 gap-x-6 gap-y-4 py-5 font-mono text-xs uppercase tracking-[0.16em] text-cobalt-500 dark:text-cobalt-200 sm:grid-cols-4"
        >
          <span
            aria-hidden="true"
            class="rule absolute inset-x-0 top-0 h-px bg-cobalt-500/15 dark:bg-cobalt-300/15"
            style="--d: 700ms"
          ></span>
          <span
            aria-hidden="true"
            class="rule absolute inset-x-0 bottom-0 h-px bg-cobalt-500/15 dark:bg-cobalt-300/15"
            style="--d: 700ms"
          ></span>
          <div class="mv flex flex-col gap-1" style="--d: 780ms">
            <dt class="text-cobalt-500/55 dark:text-cobalt-300/55">experience</dt>
            <dd class="text-sm font-semibold tracking-[0.12em]">04+ yrs</dd>
          </div>
          <div class="mv flex flex-col gap-1" style="--d: 840ms">
            <dt class="text-cobalt-500/55 dark:text-cobalt-300/55">recent</dt>
            <dd class="text-sm font-semibold tracking-[0.12em]">Hotelverse</dd>
          </div>
          <div class="mv flex flex-col gap-1" style="--d: 900ms">
            <dt class="text-cobalt-500/55 dark:text-cobalt-300/55">projects</dt>
            <dd class="text-sm font-semibold tracking-[0.12em]">
              {{ featuredProjects.length }} samples
            </dd>
          </div>
          <div class="mv flex flex-col gap-1" style="--d: 960ms">
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
            class="mv inline-flex items-center justify-center bg-cobalt-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-85"
            style="--d: 1040ms"
          >
            Start a conversation
          </router-link>
          <a
            href="#work"
            class="mv inline-flex items-center justify-center border border-cobalt-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-cobalt-500 transition-colors hover:bg-cobalt-500 hover:text-white dark:border-cobalt-300 dark:text-cobalt-200 dark:hover:bg-cobalt-300 dark:hover:text-charcoal"
            style="--d: 1120ms"
          >
            View work
          </a>
          <a
            :href="links.cv"
            download
            class="mv inline-flex min-h-11 items-center justify-center px-1 text-sm font-semibold uppercase tracking-[0.18em] text-cobalt-500 transition-opacity hover:opacity-75 dark:text-cobalt-200"
            style="--d: 1200ms"
          >
            Download CV ↓
          </a>
        </div>

        <div class="mv mt-14" style="--d: 1300ms">
          <div class="scroll-cue flex items-center gap-3" :class="{ 'cue-off': !cueVisible }">
            <span
              aria-hidden="true"
              class="cue-line relative block h-10 w-px bg-cobalt-500/20 dark:bg-cobalt-300/20"
            ></span>
            <span
              class="font-mono text-[10px] uppercase tracking-[0.22em] text-cobalt-500/60 dark:text-cobalt-200/60"
              >scroll — {{ featuredProjects.length }} samples below</span
            >
          </div>
        </div>
      </div>
    </section>

    <section id="work" class="px-6 py-14 md:px-10 md:py-20 lg:px-12">
      <div class="mx-auto max-w-7xl">
        <div v-in class="mb-12 max-w-3xl">
          <p class="editorial-kicker mv mb-3">selected work</p>
          <WordMask
            tag="h2"
            :words="workHeadingWords"
            :step="40"
            class="font-display text-4xl text-cobalt-500 dark:text-cobalt-200 md:text-5xl"
          />
          <p
            class="mv mt-4 text-base leading-relaxed text-cobalt-600 dark:text-cobalt-100/85 md:text-lg"
            style="--d: 260ms"
          >
            {{ featuredProjects.length }} projects · {{ totalVisualAssets }} visual assets · ordered
            like the CV — recent roles first.
          </p>
        </div>

        <WorkShowcase v-in :projects="featuredProjects" class="mv" style="--d: 0ms" />
      </div>
    </section>

    <section class="px-6 pb-16 md:px-10 lg:px-12">
      <div
        v-in
        class="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 border border-cobalt-500/14 p-6 md:flex-row md:items-center md:p-8"
      >
        <div>
          <p class="editorial-kicker mv mb-2">full CV</p>
          <p
            class="mv font-display text-2xl text-cobalt-500 dark:text-cobalt-200 md:text-3xl"
            style="--d: 100ms"
          >
            Skills, education, and role details live on About.
          </p>
        </div>
        <router-link
          to="/about"
          class="mv inline-flex shrink-0 items-center gap-3 border border-cobalt-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-cobalt-500 transition-colors hover:bg-cobalt-500 hover:text-white dark:border-cobalt-300 dark:text-cobalt-200 dark:hover:bg-cobalt-300 dark:hover:text-charcoal"
          style="--d: 220ms"
        >
          Open About
          <span aria-hidden="true">→</span>
        </router-link>
      </div>
    </section>

    <Footer v-in class="mv" />
  </div>
</template>

<script setup lang="ts">
import Footer from "../components/layout/Footer.vue";
import WorkShowcase from "../components/work/WorkShowcase.vue";
import WordMask from "../components/motion/WordMask.vue";
import { vIn } from "../composables/useInView";
import { useScrollMotion } from "../composables/useScrollMotion";
import { featuredProjects, totalVisualAssets } from "../data/projects";
import { links } from "../data/cv";
import { useJsonLd } from "../composables/useJsonLd";

const { progress, gridDrift, cueVisible } = useScrollMotion();

const headlineWords = [
  { t: "Frontend" },
  { t: "developer" },
  { t: "with" },
  { t: "4+ years", accent: true },
  { t: "shipping" },
  { t: "product" },
  { t: "UI." },
];

const workHeadingWords = [
  "The",
  "same",
  "story",
  "as",
  "the",
  "CV",
  "—",
  "with",
  "the",
  "visuals",
  "attached.",
].map((t) => ({ t }));

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

<style scoped>
/* Rise — shared entrance for text and panels */
.mv {
  opacity: 0;
  transform: translateY(22px);
  transition:
    opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: var(--d, 0ms);
}

.in .mv,
.mv.in {
  opacity: 1;
  transform: translateY(0);
}

/* Draw — editorial hairlines that set themselves */
.rule {
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: var(--d, 0ms);
}

.in .rule {
  transform: scaleX(1);
}

/* Plate settle — work cards rise, prints settle into their frames */
.mv-card {
  opacity: 0;
  transform: translateY(30px);
  transition:
    opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: var(--d, 0ms);
}

.mv-card.in {
  opacity: 1;
  transform: translateY(0);
}

.mv-card :deep(img) {
  transform: translateY(16px) scale(1.06);
  transition:
    transform 1.05s cubic-bezier(0.16, 1, 0.3, 1) calc(var(--d, 0ms) + 90ms),
    scale 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.mv-card.in :deep(img) {
  transform: none;
}

/* Scroll cue — dissolves once the reader starts moving */
.scroll-cue {
  transition: opacity 0.45s ease;
}

.scroll-cue.cue-off {
  opacity: 0;
}

.cue-line::after {
  content: "";
  position: absolute;
  inset: 0;
  background: var(--color-cobalt-500);
  transform: scaleY(0);
  transform-origin: top;
  animation: cue-drop 2.2s cubic-bezier(0.65, 0, 0.35, 1) infinite;
}

.dark .cue-line::after {
  background: var(--color-cobalt-300);
}

@keyframes cue-drop {
  0% {
    transform: scaleY(0);
    transform-origin: top;
  }
  49.9% {
    transform: scaleY(1);
    transform-origin: top;
  }
  50% {
    transform: scaleY(1);
    transform-origin: bottom;
  }
  100% {
    transform: scaleY(0);
    transform-origin: bottom;
  }
}

@media (prefers-reduced-motion: reduce) {
  .mv,
  .mv-card,
  .mv-card :deep(img) {
    opacity: 1;
    transform: none;
    transition: none;
  }

  .rule {
    transform: none;
    transition: none;
  }

  .cue-line::after {
    animation: none;
    transform: scaleY(1);
  }
}
</style>

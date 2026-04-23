<template>
  <div class="min-h-screen bg-cream-100 dark:bg-charcoal">
    <section class="relative overflow-hidden px-6 pb-12 pt-28 md:px-10 md:pb-16 md:pt-36 lg:px-12">
      <div class="paper-grid absolute inset-x-4 inset-y-8 rounded-[2rem] opacity-60"></div>
      <!-- Hero visual anchor — animated gradient orbs -->
      <div class="absolute top-16 right-4 hidden lg:block" aria-hidden="true">
        <div class="hero-orb-container relative h-80 w-80">
          <div class="hero-orb hero-orb-1"></div>
          <div class="hero-orb hero-orb-2"></div>
          <div class="hero-orb hero-orb-3"></div>
        </div>
      </div>
      <div
        class="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1.25fr)_20rem] lg:items-start"
      >
        <div class="reveal-stagger">
          <p
            class="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-cobalt-500/80 dark:text-cobalt-100"
          >
            <span>vlad caraseli</span>
            <span aria-hidden="true" class="text-cobalt-500/40 dark:text-cobalt-300/50">·</span>
            <span>frontend engineer</span>
            <span aria-hidden="true" class="text-cobalt-500/40 dark:text-cobalt-300/50">·</span>
            <span>palma de mallorca</span>
          </p>
          <h1
            class="max-w-4xl text-5xl leading-[0.96] font-display text-cobalt-500 dark:text-white sm:text-6xl md:text-[4.25rem] lg:text-[4.75rem]"
          >
            Interfaces that feel
            <span class="italic text-cobalt-400 dark:text-cobalt-100">decisive</span>
            before they feel decorative.
          </h1>
          <p
            class="mt-6 max-w-2xl text-lg leading-relaxed text-cobalt-600 dark:text-cobalt-100 md:text-xl"
          >
            Product frontend for teams that need sharper UX, cleaner systems, and case-study-worthy
            execution across Vue, React, Nuxt, and TypeScript.
          </p>

          <dl
            class="mt-10 grid grid-cols-2 gap-y-4 gap-x-6 border-y border-cobalt-500/15 py-5 font-mono text-xs uppercase tracking-[0.16em] text-cobalt-500 dark:border-cobalt-300/20 dark:text-white sm:grid-cols-4"
          >
            <div class="flex flex-col gap-1">
              <dt class="text-cobalt-500/55 dark:text-cobalt-200/80">experience</dt>
              <dd class="text-sm font-semibold tracking-[0.12em]">06 yrs</dd>
            </div>
            <div class="flex flex-col gap-1">
              <dt class="text-cobalt-500/55 dark:text-cobalt-200/80">stack</dt>
              <dd class="text-sm font-semibold tracking-[0.12em]">Vue · React · Nuxt · TS</dd>
            </div>
            <div class="flex flex-col gap-1">
              <dt class="text-cobalt-500/55 dark:text-cobalt-200/80">case studies</dt>
              <dd class="text-sm font-semibold tracking-[0.12em]">03 shipped</dd>
            </div>
            <div class="flex flex-col gap-1">
              <dt class="text-cobalt-500/55 dark:text-cobalt-200/80">availability</dt>
              <dd
                class="text-sm font-semibold tracking-[0.12em] text-cobalt-500 dark:text-cobalt-100"
              >
                <span
                  class="mr-1.5 inline-block h-2 w-2 -translate-y-[1px] rounded-full bg-emerald-500 align-middle"
                  aria-hidden="true"
                ></span>
                open to roles
              </dd>
            </div>
          </dl>

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
        </div>

        <aside
          class="reveal relative border border-cobalt-500/14 bg-white/60 p-6 dark:border-cobalt-300/15 dark:bg-charcoal-50/60 md:p-7"
        >
          <p class="editorial-kicker mb-4">why teams bring me in</p>
          <ul class="space-y-4 text-base leading-relaxed text-cobalt-600 dark:text-cobalt-100">
            <li>Complex frontend systems without enterprise bloat.</li>
            <li>Interfaces with clear hierarchy, credible polish, and strong usability.</li>
            <li>Case studies that prove range: commerce, maps, component libraries.</li>
          </ul>
          <div
            class="mt-6 border-t border-cobalt-500/12 pt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-cobalt-500/60 dark:border-cobalt-300/12 dark:text-cobalt-200/70"
          >
            scroll for 03 case studies ↓
          </div>
        </aside>
      </div>
    </section>

    <section
      class="border-y border-cobalt-500/12 bg-cobalt-500/[0.02] py-3 dark:border-cobalt-300/12 dark:bg-cobalt-300/[0.03]"
    >
      <Marquee :duration="36" pause-on-hover>
        <div
          class="flex items-center gap-10 pr-10 font-mono text-xs tracking-[0.14em] text-cobalt-500/80 dark:text-cobalt-200/80"
        >
          <span
            ><span class="text-cobalt-500/50 dark:text-cobalt-300/50">shipped &gt;</span>
            topproperties · ecas · component library</span
          >
          <span class="text-cobalt-500/30 dark:text-cobalt-300/30">//</span>
          <span
            ><span class="text-cobalt-500/50 dark:text-cobalt-300/50">stack &gt;</span> vue 3.5 ·
            vite 8 · tailwind 4 · typescript 5.8</span
          >
          <span class="text-cobalt-500/30 dark:text-cobalt-300/30">//</span>
          <span
            ><span class="text-cobalt-500/50 dark:text-cobalt-300/50">repos &gt;</span> 58+ public
            on github</span
          >
          <span class="text-cobalt-500/30 dark:text-cobalt-300/30">//</span>
          <span
            ><span class="text-cobalt-500/50 dark:text-cobalt-300/50">now &gt;</span> open to senior
            frontend roles</span
          >
          <span class="text-cobalt-500/30 dark:text-cobalt-300/30">//</span>
        </div>
      </Marquee>
    </section>

    <section id="case-studies" class="px-6 py-14 md:px-10 md:py-20 lg:px-12">
      <div class="mx-auto max-w-7xl">
        <div
          class="reveal mb-10 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end"
        >
          <div>
            <p class="editorial-kicker mb-3">selected case studies</p>
            <h2
              class="max-w-3xl text-4xl font-display text-cobalt-500 dark:text-cobalt-200 md:text-6xl"
            >
              Proof first. Three projects that show how I think, ship, and refine.
            </h2>
          </div>
          <p
            class="max-w-xl text-base leading-relaxed text-cobalt-600 dark:text-cobalt-100 md:text-lg lg:justify-self-end"
          >
            Each project highlights a different strength: product complexity, system design, or UI
            architecture. Fast scan on top. Deep dive if you want the engineering decisions.
          </p>
        </div>

        <div class="reveal-stagger space-y-5">
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
            class="card-lift"
          />
        </div>
      </div>
    </section>

    <section class="reveal px-6 pb-16 md:px-10 lg:px-12">
      <div class="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)]">
        <div
          class="border border-cobalt-500/14 bg-white/70 p-6 dark:border-cobalt-300/14 dark:bg-charcoal-50/60 md:p-8"
        >
          <p class="editorial-kicker mb-3">beyond the featured work</p>
          <h3 class="text-3xl font-display text-cobalt-500 dark:text-cobalt-200 md:text-4xl">
            More repos, more experiments, more proof of range.
          </h3>
          <p class="mt-4 max-w-2xl text-base leading-relaxed text-cobalt-600 dark:text-cobalt-100">
            Smaller builds cover inventory tools, job boards, starter templates, automation work,
            and dashboard-style products.
          </p>

          <div class="mt-8 grid gap-4 sm:grid-cols-3">
            <div
              class="border border-cobalt-500/12 bg-cobalt-500/[0.03] p-4 dark:border-cobalt-300/12 dark:bg-cobalt-300/[0.04]"
            >
              <p class="editorial-kicker mb-2">product UI cleanup</p>
              <p class="text-sm leading-relaxed text-cobalt-600 dark:text-cobalt-100">
                Sharper hierarchy, cleaner states, fewer awkward edges in shipped product surfaces.
              </p>
            </div>
            <div
              class="border border-cobalt-500/12 bg-cobalt-500/[0.03] p-4 dark:border-cobalt-300/12 dark:bg-cobalt-300/[0.04]"
            >
              <p class="editorial-kicker mb-2">design systems</p>
              <p class="text-sm leading-relaxed text-cobalt-600 dark:text-cobalt-100">
                Components, tokens, and interaction patterns that make teams move faster without
                drift.
              </p>
            </div>
            <div
              class="border border-cobalt-500/12 bg-cobalt-500/[0.03] p-4 dark:border-cobalt-300/12 dark:bg-cobalt-300/[0.04]"
            >
              <p class="editorial-kicker mb-2">complex frontend builds</p>
              <p class="text-sm leading-relaxed text-cobalt-600 dark:text-cobalt-100">
                Maps, commerce flows, dashboards, and logic-heavy interfaces that still feel calm.
              </p>
            </div>
          </div>
        </div>

        <div class="grid gap-4 self-stretch sm:grid-cols-2 lg:grid-cols-1">
          <div
            class="border border-cobalt-500/15 bg-white/70 p-5 dark:border-cobalt-300/16 dark:bg-charcoal-50/72"
          >
            <p class="editorial-kicker mb-2">what I usually help fix</p>
            <p class="text-xl font-display text-cobalt-500 dark:text-cobalt-200">
              Hierarchy, systems, and trust.
            </p>
            <p class="mt-3 text-sm leading-relaxed text-cobalt-600 dark:text-cobalt-100">
              The work usually starts where the product feels busy, inconsistent, or harder to trust
              than it should.
            </p>
          </div>

          <a
            href="https://github.com/caraseli02?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex min-h-[9.5rem] items-end justify-between border border-cobalt-500 px-6 py-5 text-left text-sm font-semibold uppercase tracking-[0.18em] text-cobalt-500 transition-colors hover:bg-cobalt-500 hover:text-white dark:border-cobalt-300 dark:text-cobalt-200 dark:hover:bg-cobalt-300 dark:hover:text-charcoal"
          >
            <span>Browse GitHub</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>

    <Footer class="footer-reveal" />
  </div>
</template>

<script setup lang="ts">
import Footer from "../components/layout/Footer.vue";
import Marquee from "../components/ui/Marquee.vue";
import CaseStudyListItem from "../components/case-study/CaseStudyListItem.vue";
import { featuredProjects } from "../data/projects";
import { useJsonLd } from "../composables/useJsonLd";

useJsonLd({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Vlad Caraseli",
  url: "https://vladcaraseli.com",
  description:
    "Frontend engineer building polished product interfaces, design systems, and high-trust web experiences.",
  author: {
    "@type": "Person",
    name: "Vlad Caraseli",
    jobTitle: "Frontend Engineer",
    url: "https://vladcaraseli.com",
  },
});
</script>

<style scoped>
.hero-orb-container {
  filter: blur(1px);
}

.hero-orb {
  position: absolute;
  border-radius: 50%;
  will-change: transform;
}

.hero-orb-1 {
  inset: 0;
  background: radial-gradient(circle, oklch(0.5 0.2 270 / 0.12), transparent 70%);
  animation: orb-float-1 12s ease-in-out infinite;
}

.hero-orb-2 {
  top: 20%;
  left: 15%;
  width: 60%;
  height: 60%;
  background: radial-gradient(circle, oklch(0.6 0.15 200 / 0.08), transparent 65%);
  animation: orb-float-2 16s ease-in-out infinite;
}

.hero-orb-3 {
  top: 30%;
  left: 30%;
  width: 40%;
  height: 40%;
  background: radial-gradient(circle, oklch(0.7 0.12 300 / 0.1), transparent 60%);
  animation: orb-float-3 10s ease-in-out infinite;
}

:global(.dark) .hero-orb-1 {
  background: radial-gradient(circle, oklch(0.65 0.18 270 / 0.15), transparent 70%);
}

:global(.dark) .hero-orb-2 {
  background: radial-gradient(circle, oklch(0.7 0.14 200 / 0.1), transparent 65%);
}

:global(.dark) .hero-orb-3 {
  background: radial-gradient(circle, oklch(0.75 0.12 300 / 0.12), transparent 60%);
}

@keyframes orb-float-1 {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(20px, -15px) scale(1.05);
  }
  66% {
    transform: translate(-10px, 10px) scale(0.97);
  }
}

@keyframes orb-float-2 {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(-18px, 12px) scale(1.08);
  }
}

@keyframes orb-float-3 {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  40% {
    transform: translate(12px, 18px) scale(1.04);
  }
  80% {
    transform: translate(-8px, -10px) scale(0.96);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-orb {
    animation: none;
  }
}
</style>

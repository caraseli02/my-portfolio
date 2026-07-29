<template>
  <div class="min-h-screen bg-cream-100 dark:bg-charcoal">
    <section class="relative overflow-hidden px-6 pb-12 pt-28 md:px-10 md:pb-16 md:pt-36 lg:px-12">
      <div class="paper-grid absolute inset-x-4 inset-y-8 rounded-2xl opacity-60"></div>
      <!-- Hero visual anchor -->
      <div class="absolute top-20 right-10 hidden lg:block" aria-hidden="true">
        <div class="relative h-72 w-72">
          <div
            class="absolute inset-0 rounded-full bg-cobalt-500/[0.06] dark:bg-cobalt-300/[0.08] blur-3xl"
          ></div>
          <div
            class="absolute top-8 left-8 h-56 w-56 rotate-12 rounded-2xl border border-cobalt-500/10 dark:border-cobalt-300/10"
          ></div>
          <div
            class="absolute top-16 left-16 h-40 w-40 -rotate-6 rounded-xl border border-cobalt-500/15 dark:border-cobalt-300/15 bg-cobalt-500/[0.02] dark:bg-cobalt-300/[0.03]"
          ></div>
        </div>
      </div>
      <div
        class="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1.25fr)_20rem] lg:items-start"
      >
        <div class="reveal-stagger">
          <p class="editorial-kicker mb-6 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>vlad caraseli</span>
            <span aria-hidden="true" class="text-cobalt-500/40 dark:text-cobalt-300/40">·</span>
            <span>frontend developer</span>
            <span aria-hidden="true" class="text-cobalt-500/40 dark:text-cobalt-300/40">·</span>
            <span>palma de mallorca</span>
          </p>
          <h1
            class="max-w-4xl text-5xl leading-[0.96] font-display text-cobalt-500 dark:text-cobalt-100 sm:text-6xl md:text-[4.25rem] lg:text-[4.75rem]"
          >
            Interfaces that feel
            <span class="italic text-cobalt-400 dark:text-cobalt-200">decisive</span>
            before they feel decorative.
          </h1>
          <p
            class="mt-6 max-w-2xl text-lg leading-relaxed text-cobalt-600 dark:text-cobalt-100/85 md:text-xl"
          >
            Frontend developer with 4+ years shipping product UI — Vue, Nuxt, React, TypeScript, and
            an AI-assisted workflow with Claude Code and Codex.
          </p>

          <dl
            class="mt-10 grid grid-cols-2 gap-y-4 gap-x-6 border-y border-cobalt-500/15 py-5 font-mono text-xs uppercase tracking-[0.16em] text-cobalt-500 dark:border-cobalt-300/15 dark:text-cobalt-200 sm:grid-cols-6"
          >
            <div class="flex flex-col gap-1">
              <dt class="text-cobalt-500/55 dark:text-cobalt-300/55">experience</dt>
              <dd class="text-sm font-semibold tracking-[0.12em]">04+ yrs</dd>
            </div>
            <div class="flex flex-col gap-1">
              <dt class="text-cobalt-500/55 dark:text-cobalt-300/55">stack</dt>
              <dd class="text-sm font-semibold tracking-[0.12em]">Vue · React · Nuxt · TS</dd>
            </div>
            <div class="flex flex-col gap-1">
              <dt class="text-cobalt-500/55 dark:text-cobalt-300/55">shipped</dt>
              <dd class="text-sm font-semibold tracking-[0.12em]">Hotelverse · Nezo · Traffice</dd>
            </div>
            <div class="flex flex-col gap-1">
              <dt class="text-cobalt-500/55 dark:text-cobalt-300/55">repos</dt>
              <dd class="text-sm font-semibold tracking-[0.12em]">58+ public</dd>
            </div>
            <div class="flex flex-col gap-1">
              <dt class="text-cobalt-500/55 dark:text-cobalt-300/55">case studies</dt>
              <dd class="text-sm font-semibold tracking-[0.12em]">03 shipped</dd>
            </div>
            <div class="flex flex-col gap-1">
              <dt class="text-cobalt-500/55 dark:text-cobalt-300/55">availability</dt>
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
            <router-link
              to="/contact"
              class="inline-flex items-center justify-center bg-cobalt-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-85"
            >
              Start a conversation
            </router-link>
            <a
              href="#case-studies"
              class="inline-flex items-center justify-center border border-cobalt-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-cobalt-500 transition-colors hover:bg-cobalt-500 hover:text-white dark:border-cobalt-300 dark:text-cobalt-200 dark:hover:bg-cobalt-300 dark:hover:text-charcoal"
            >
              View case studies
            </a>
          </div>
        </div>

        <aside
          class="reveal relative border border-cobalt-500/14 bg-white/60 p-6 dark:border-cobalt-300/15 dark:bg-charcoal-50/60 md:p-7"
        >
          <p class="editorial-kicker mb-4">why teams bring me in</p>
          <ul class="space-y-4 text-base leading-relaxed text-cobalt-600 dark:text-cobalt-100/85">
            <li>Complex frontend systems without enterprise bloat.</li>
            <li>AI-native workflow: Claude Code and Codex integrated into the dev cycle.</li>
            <li>Interfaces with clear hierarchy, credible polish, and strong usability.</li>
          </ul>
          <div
            class="mt-6 border-t border-cobalt-500/12 pt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-cobalt-500/60 dark:border-cobalt-300/12 dark:text-cobalt-200/70"
          >
            scroll for 03 case studies ↓
          </div>
        </aside>
      </div>
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
            class="max-w-xl text-base leading-relaxed text-cobalt-600 dark:text-cobalt-100/85 md:text-lg lg:justify-self-end"
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
          <p
            class="mt-4 max-w-2xl text-base leading-relaxed text-cobalt-600 dark:text-cobalt-100/85"
          >
            Smaller builds cover traffic dashboards, DeFi trading UIs, crypto wallets, inventory
            tools, job boards, and starter templates.
          </p>

          <div class="mt-8 grid gap-4 sm:grid-cols-3">
            <div
              class="border border-cobalt-500/12 bg-cobalt-500/[0.03] p-4 dark:border-cobalt-300/12 dark:bg-cobalt-300/[0.04]"
            >
              <p class="editorial-kicker mb-2">product UI cleanup</p>
              <p class="text-sm leading-relaxed text-cobalt-600 dark:text-cobalt-100/80">
                Sharper hierarchy, cleaner states, fewer awkward edges in shipped product surfaces.
              </p>
            </div>
            <div
              class="border border-cobalt-500/12 bg-cobalt-500/[0.03] p-4 dark:border-cobalt-300/12 dark:bg-cobalt-300/[0.04]"
            >
              <p class="editorial-kicker mb-2">design systems</p>
              <p class="text-sm leading-relaxed text-cobalt-600 dark:text-cobalt-100/80">
                Components, tokens, and interaction patterns that make teams move faster without
                drift.
              </p>
            </div>
            <div
              class="border border-cobalt-500/12 bg-cobalt-500/[0.03] p-4 dark:border-cobalt-300/12 dark:bg-cobalt-300/[0.04]"
            >
              <p class="editorial-kicker mb-2">complex frontend builds</p>
              <p class="text-sm leading-relaxed text-cobalt-600 dark:text-cobalt-100/80">
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
            <p class="mt-3 text-sm leading-relaxed text-cobalt-600 dark:text-cobalt-100/80">
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
import CaseStudyListItem from "../components/case-study/CaseStudyListItem.vue";
import { featuredProjects } from "../data/projects";
import { useJsonLd } from "../composables/useJsonLd";

useJsonLd({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Vlad Caraseli",
  url: "https://vladcaraseli.com",
  description:
    "Frontend engineer building polished product interfaces, design systems, and high-trust web experiences with an AI-native workflow.",
  author: {
    "@type": "Person",
    name: "Vlad Caraseli",
    jobTitle: "Frontend Developer",
    url: "https://vladcaraseli.com",
  },
});
</script>

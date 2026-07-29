<template>
  <div class="min-h-screen bg-cream-100 pt-28 dark:bg-charcoal md:pt-32">
    <div class="mx-auto max-w-7xl px-6 pb-20 md:px-10 lg:px-12">
      <section
        class="reveal-stagger grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_22rem] lg:items-start"
      >
        <div>
          <p class="editorial-kicker mb-4">about vlad caraseli</p>
          <h1
            class="max-w-5xl text-[3.3rem] leading-[0.95] font-display text-charcoal dark:text-cobalt-100 sm:text-[4.2rem] md:text-[5.6rem]"
          >
            I like product interfaces with strong hierarchy, useful tension, and zero fake polish.
          </h1>
          <p
            class="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal-200 dark:text-cobalt-100/85 md:text-xl"
          >
            Born in Moldova, now based in Palma de Mallorca. I build frontend systems that stay calm
            under complexity — commerce flows, dashboard interfaces, component libraries, and the UI
            layers teams actually rely on. AI-assisted development workflow with Claude Code and
            Codex baked into every project cycle.
          </p>
        </div>

        <aside class="panel-surface rounded-[2rem] p-6 md:p-8">
          <p class="editorial-kicker mb-4">snapshot</p>
          <div class="space-y-5 text-cobalt-600 dark:text-cobalt-100/85">
            <div>
              <p
                class="text-sm uppercase tracking-[0.22em] text-cobalt-500/70 dark:text-cobalt-100/70"
              >
                base
              </p>
              <p class="mt-1 text-2xl font-display text-cobalt-500 dark:text-cobalt-200">
                Palma de Mallorca
              </p>
            </div>
            <div class="editorial-rule"></div>
            <div>
              <p
                class="text-sm uppercase tracking-[0.22em] text-cobalt-500/70 dark:text-cobalt-100/70"
              >
                specialty
              </p>
              <p class="mt-1">
                Frontend architecture, UX clarity, design systems, AI-powered development, and
                product-facing implementation.
              </p>
            </div>
            <div class="editorial-rule"></div>
            <div>
              <p
                class="text-sm uppercase tracking-[0.22em] text-cobalt-500/70 dark:text-cobalt-100/70"
              >
                languages
              </p>
              <p class="mt-1">
                Moldovan (native) · Russian (full professional) · English (professional working) ·
                Spanish (professional working)
              </p>
            </div>
            <div class="editorial-rule"></div>
            <div>
              <p
                class="text-sm uppercase tracking-[0.22em] text-cobalt-500/70 dark:text-cobalt-100/70"
              >
                off-screen
              </p>
              <p class="mt-1">
                Sailing, long walks, open-source rabbit holes, and interface references I probably
                should not be collecting.
              </p>
            </div>
          </div>
        </aside>
      </section>

      <section class="reveal mt-14 grid gap-5 md:grid-cols-3">
        <article class="panel-surface p-6">
          <p class="editorial-kicker mb-3">01 — what I do best</p>
          <p class="text-lg leading-relaxed text-cobalt-600 dark:text-cobalt-100/85">
            Turn vague product needs into sharp, production-ready interfaces with real hierarchy and
            better decision-making built into the layout.
          </p>
        </article>
        <article class="panel-surface p-6">
          <p class="editorial-kicker mb-3">02 — how I work</p>
          <p class="text-lg leading-relaxed text-cobalt-600 dark:text-cobalt-100/85">
            AI-native engineering: Claude Code and Codex in the dev cycle, thoughtful systems, clean
            implementation, and enough visual restraint that the important moments hit harder.
          </p>
        </article>
        <article class="panel-surface p-6">
          <p class="editorial-kicker mb-3">03 — where I add leverage</p>
          <p class="text-lg leading-relaxed text-cobalt-600 dark:text-cobalt-100/85">
            Complex frontends, refactors that improve trust, and design-system work that keeps teams
            shipping without turning every screen into a one-off.
          </p>
        </article>
      </section>

      <!-- Work Experience -->
      <section class="reveal mt-16">
        <p class="editorial-kicker mb-6">experience</p>
        <div class="space-y-6">
          <div class="border border-cobalt-500/12 p-6 md:p-8 dark:border-cobalt-300/12">
            <div class="flex flex-wrap items-start justify-between gap-3 mb-3">
              <div>
                <h3 class="text-2xl font-display text-cobalt-500 dark:text-cobalt-200">
                  Hotelverse
                </h3>
                <p
                  class="text-sm uppercase tracking-[0.18em] text-cobalt-500/70 dark:text-cobalt-100/70 mt-1"
                >
                  Frontend Developer
                </p>
              </div>
              <p class="text-sm text-cobalt-500/60 dark:text-cobalt-100/60">
                Nov 2024 — Dec 2025 · Palma, Spain
              </p>
            </div>
            <p class="text-base leading-relaxed text-cobalt-600 dark:text-cobalt-100/85">
              Built the multi-room booking and upselling experience — room upgrades, stay
              customizations, special offers, and front-desk recommendation tools. Shipped
              responsive React and TypeScript components with Storybook, i18n, and Playwright/Vitest
              coverage for critical booking flows.
            </p>
            <p
              class="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-cobalt-500/55 dark:text-cobalt-200/60"
            >
              React · Next.js · TypeScript · Zustand · Tailwind · Storybook · Playwright · Supabase
            </p>
          </div>

          <div class="border border-cobalt-500/12 p-6 md:p-8 dark:border-cobalt-300/12">
            <div class="flex flex-wrap items-start justify-between gap-3 mb-3">
              <div>
                <h3 class="text-2xl font-display text-cobalt-500 dark:text-cobalt-200">Nezo Hub</h3>
                <p
                  class="text-sm uppercase tracking-[0.18em] text-cobalt-500/70 dark:text-cobalt-100/70 mt-1"
                >
                  Frontend Developer
                </p>
              </div>
              <p class="text-sm text-cobalt-500/60 dark:text-cobalt-100/60">Apr 2023 — Oct 2024</p>
            </div>
            <p class="text-base leading-relaxed text-cobalt-600 dark:text-cobalt-100/85">
              Developed and maintained frontend features for SaaS and business applications using
              Vue 3, TypeScript, Nuxt, Pinia, and Tailwind. Built reusable UI components, integrated
              backend services, and shipped dashboards, forms, auth interfaces, and data-driven
              flows.
            </p>
            <p
              class="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-cobalt-500/55 dark:text-cobalt-200/60"
            >
              Vue 3 · Nuxt · TypeScript · Pinia · Tailwind · REST APIs
            </p>
          </div>

          <div class="border border-cobalt-500/12 p-6 md:p-8 dark:border-cobalt-300/12">
            <div class="flex flex-wrap items-start justify-between gap-3 mb-3">
              <div>
                <h3 class="text-2xl font-display text-cobalt-500 dark:text-cobalt-200">
                  Skipso, TopProperties, Kassebil, Moonflow Club, Traffice
                </h3>
                <p
                  class="text-sm uppercase tracking-[0.18em] text-cobalt-500/70 dark:text-cobalt-100/70 mt-1"
                >
                  Frontend Developer
                </p>
              </div>
              <p class="text-sm text-cobalt-500/60 dark:text-cobalt-100/60">Sep 2021 — Apr 2023</p>
            </div>
            <p class="text-base leading-relaxed text-cobalt-600 dark:text-cobalt-100/85">
              Delivered frontend for client projects across SaaS platforms, real estate, community
              products, and marketing sites. Built reusable Vue.js/Nuxt components, dashboards,
              landing pages, and custom UI flows connected to backend services, CMS platforms, and
              data sources.
            </p>
            <p
              class="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-cobalt-500/55 dark:text-cobalt-200/60"
            >
              Vue.js · Nuxt · TypeScript · Tailwind · REST APIs · Firebase · CMS
            </p>
          </div>
        </div>
      </section>

      <!-- Education & Certifications -->
      <section
        class="reveal mt-16 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start"
      >
        <div>
          <p class="editorial-kicker mb-4">education</p>
          <div class="space-y-5">
            <div>
              <h3 class="text-xl font-display text-cobalt-500 dark:text-cobalt-200">
                Ibecon Palma
              </h3>
              <p class="text-sm text-cobalt-600 dark:text-cobalt-100/80">
                Web Application Development · Apr 2019 — Feb 2020
              </p>
            </div>
            <div>
              <h3 class="text-xl font-display text-cobalt-500 dark:text-cobalt-200">Vue School</h3>
              <p class="text-sm text-cobalt-600 dark:text-cobalt-100/80">
                Mastering Web Application Development with Vue.js
              </p>
            </div>
            <div>
              <h3 class="text-xl font-display text-cobalt-500 dark:text-cobalt-200">Vue Mastery</h3>
              <p class="text-sm text-cobalt-600 dark:text-cobalt-100/80">
                From Vue.js Basics to Deep Dive
              </p>
            </div>
            <div>
              <h3 class="text-xl font-display text-cobalt-500 dark:text-cobalt-200">
                DesignCourse
              </h3>
              <p class="text-sm text-cobalt-600 dark:text-cobalt-100/80">
                Foundations of UI/UX Design, HTML/CSS
              </p>
            </div>
          </div>
        </div>

        <div class="border border-cobalt-500/15 p-6 md:p-8">
          <p class="editorial-kicker mb-5">certifications</p>
          <ul class="space-y-3 text-cobalt-600 dark:text-cobalt-100/85">
            <li class="flex items-start gap-2">
              <span class="text-cobalt-500/50 dark:text-cobalt-300/50 mt-1">✓</span>
              <span>Certified Nuxt Master</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-cobalt-500/50 dark:text-cobalt-300/50 mt-1">✓</span>
              <span>Certified Pinia Master</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-cobalt-500/50 dark:text-cobalt-300/50 mt-1">✓</span>
              <span>Certified Web Professional — Site Designer (CWP)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-cobalt-500/50 dark:text-cobalt-300/50 mt-1">✓</span>
              <span>Advanced Frontend Course Completion</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-cobalt-500/50 dark:text-cobalt-300/50 mt-1">✓</span>
              <span>UI/UX Course</span>
            </li>
          </ul>
          <a
            href="/Vladislav_Caraseli_CV_EN.pdf"
            download
            class="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-cobalt-500 transition-opacity hover:opacity-75 dark:text-cobalt-200"
          >
            Download CV
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>
    </div>

    <Footer class="footer-reveal" />
  </div>
</template>

<script setup lang="ts">
import Footer from "../components/layout/Footer.vue";
import { useJsonLd } from "../composables/useJsonLd";

useJsonLd({
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vlad Caraseli",
  jobTitle: "Frontend Developer",
  url: "https://vladcaraseli.com",
  sameAs: ["https://github.com/caraseli02", "https://linkedin.com/in/caraseli"],
  knowsAbout: [
    "Vue",
    "Nuxt",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Design Systems",
    "Frontend Architecture",
    "AI-assisted development",
    "Claude Code",
    "Codex",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Palma de Mallorca",
    addressCountry: "ES",
  },
});
</script>

<template>
  <div class="min-h-screen bg-cream-100 pt-28 dark:bg-charcoal md:pt-32">
    <div class="mx-auto max-w-7xl px-6 pb-20 md:px-10 lg:px-12">
      <section
        class="reveal-stagger grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_22rem] lg:items-start"
      >
        <div>
          <p class="editorial-kicker mb-4">about vlad caraseli</p>
          <h1
            class="max-w-5xl font-display text-[3.3rem] leading-[0.95] text-charcoal dark:text-cobalt-100 sm:text-[4.2rem] md:text-[5.6rem]"
          >
            Frontend Developer.
          </h1>
          <p
            class="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal-200 dark:text-cobalt-100/85 md:text-xl"
          >
            More than 4 years in cross-functional agile teams, collaborating with designers, product
            managers, and backend developers. Translating Figma designs into production-ready
            interfaces, optimizing Core Web Vitals, and integrating REST APIs — with Claude Code and
            Codex in the delivery cycle.
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
              <p class="mt-1 font-display text-2xl text-cobalt-500 dark:text-cobalt-200">
                Palma de Mallorca
              </p>
            </div>
            <div class="editorial-rule"></div>
            <div>
              <p
                class="text-sm uppercase tracking-[0.22em] text-cobalt-500/70 dark:text-cobalt-100/70"
              >
                focus
              </p>
              <p class="mt-1">Vue · Nuxt · React · TypeScript · AI-assisted development</p>
            </div>
            <div class="editorial-rule"></div>
            <div>
              <p
                class="text-sm uppercase tracking-[0.22em] text-cobalt-500/70 dark:text-cobalt-100/70"
              >
                languages
              </p>
              <p class="mt-1">
                Moldovan (native / bilingual) · Russian (full professional) · English (professional
                working) · Spanish (professional working)
              </p>
            </div>
            <div class="editorial-rule"></div>
            <div>
              <p
                class="text-sm uppercase tracking-[0.22em] text-cobalt-500/70 dark:text-cobalt-100/70"
              >
                contact
              </p>
              <p class="mt-1">
                <a :href="`mailto:${links.email}`" class="underline-offset-4 hover:underline">{{
                  links.email
                }}</a>
                ·
                <a :href="links.phoneHref" class="underline-offset-4 hover:underline">{{
                  links.phone
                }}</a>
              </p>
            </div>
          </div>
        </aside>
      </section>

      <section class="reveal mt-14">
        <p class="editorial-kicker mb-4">core skills</p>
        <div class="grid gap-4 md:grid-cols-2">
          <article
            v-for="group in skillGroups"
            :key="group.label"
            class="border border-cobalt-500/12 p-5 dark:border-cobalt-300/12"
          >
            <p
              class="mb-2 font-mono text-xs uppercase tracking-[0.16em] text-cobalt-500/60 dark:text-cobalt-200/60"
            >
              {{ group.label }}
            </p>
            <p class="text-base leading-relaxed text-cobalt-600 dark:text-cobalt-100/85">
              {{ group.items }}
            </p>
          </article>
        </div>
      </section>

      <section class="reveal mt-16">
        <p class="editorial-kicker mb-6">experience</p>
        <div class="space-y-6">
          <div
            v-for="role in experienceRoles"
            :key="role.company"
            class="border border-cobalt-500/12 p-6 md:p-8 dark:border-cobalt-300/12"
          >
            <div class="mb-3 flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 class="font-display text-2xl text-cobalt-500 dark:text-cobalt-200">
                  {{ role.company }}
                </h3>
                <p
                  class="mt-1 text-sm uppercase tracking-[0.18em] text-cobalt-500/70 dark:text-cobalt-100/70"
                >
                  {{ role.role }}
                </p>
              </div>
              <p class="text-sm text-cobalt-500/60 dark:text-cobalt-100/60">{{ role.period }}</p>
            </div>
            <p class="text-base leading-relaxed text-cobalt-600 dark:text-cobalt-100/85">
              {{ role.summary }}
            </p>
            <p
              class="mt-3 font-mono text-xs uppercase tracking-[0.16em] text-cobalt-500/55 dark:text-cobalt-200/60"
            >
              {{ role.tech }}
            </p>
          </div>
        </div>
      </section>

      <section
        class="reveal mt-16 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start"
      >
        <div>
          <p class="editorial-kicker mb-4">education</p>
          <div class="space-y-5">
            <div>
              <h3 class="font-display text-xl text-cobalt-500 dark:text-cobalt-200">
                Ibecon Palma
              </h3>
              <p class="text-sm text-cobalt-600 dark:text-cobalt-100/80">
                Web Application Development · Apr 2019 — Feb 2020
              </p>
            </div>
            <div>
              <h3 class="font-display text-xl text-cobalt-500 dark:text-cobalt-200">
                CWP Site Designer
              </h3>
              <p class="text-sm text-cobalt-600 dark:text-cobalt-100/80">
                Certified Web Professional · Apr 2018 — Feb 2019
              </p>
            </div>
            <div>
              <h3 class="font-display text-xl text-cobalt-500 dark:text-cobalt-200">Vue School</h3>
              <p class="text-sm text-cobalt-600 dark:text-cobalt-100/80">
                Mastering Web Application Development with Vue.js
              </p>
            </div>
            <div>
              <h3 class="font-display text-xl text-cobalt-500 dark:text-cobalt-200">Vue Mastery</h3>
              <p class="text-sm text-cobalt-600 dark:text-cobalt-100/80">
                From Vue.js Basics to Deep Dive
              </p>
            </div>
            <div>
              <h3 class="font-display text-xl text-cobalt-500 dark:text-cobalt-200">
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
            <li v-for="item in certifications" :key="item" class="flex items-start gap-2">
              <span class="mt-1 text-cobalt-500/50 dark:text-cobalt-300/50">✓</span>
              <span>{{ item }}</span>
            </li>
          </ul>
          <a
            :href="links.cv"
            download
            class="mt-6 inline-flex min-h-11 items-center gap-2 px-1 text-sm font-semibold uppercase tracking-[0.18em] text-cobalt-500 transition-opacity hover:opacity-75 dark:text-cobalt-200"
          >
            Download CV
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from "../components/layout/Footer.vue";
import { experienceRoles, links, skillGroups } from "../data/cv";
import { useJsonLd } from "../composables/useJsonLd";

const certifications = [
  "Certified Nuxt Master",
  "Certified Pinia Master",
  "Certified Web Professional — Site Designer (CWP)",
  "Advanced Frontend Course Completion",
  "UI/UX Course",
];

useJsonLd({
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vlad Caraseli",
  jobTitle: "Frontend Developer",
  url: "https://vladcaraseli.com",
  email: links.email,
  telephone: links.phoneHref.replace("tel:", ""),
  sameAs: [links.github, links.linkedin],
  knowsAbout: [
    "Vue",
    "Nuxt",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Storybook",
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

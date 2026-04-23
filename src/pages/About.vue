<template>
  <div class="min-h-screen bg-cream-100 pt-28 dark:bg-charcoal md:pt-32">
    <div class="mx-auto max-w-7xl px-6 pb-20 md:px-10 lg:px-12">
      <section class="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_22rem] lg:items-start">
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
            layers teams actually rely on.
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
                Frontend architecture, UX clarity, design systems, and product-facing
                implementation.
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

      <section class="mt-14 grid gap-5 md:grid-cols-3">
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
            Design-minded engineering: thoughtful systems, clean implementation, and enough visual
            restraint that the important moments hit harder.
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

      <section class="mt-16 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
        <div>
          <p class="editorial-kicker mb-4">working style</p>
          <h2 class="text-3xl font-display text-cobalt-500 dark:text-cobalt-200 md:text-4xl">
            I care about interfaces that earn trust fast.
          </h2>
          <div
            class="mt-6 space-y-5 text-lg leading-relaxed text-cobalt-600 dark:text-cobalt-100/85"
          >
            <p>
              That usually means fewer gimmicks, stronger copy hierarchy, and components that feel
              like they belong to the same product universe.
            </p>
            <p>
              I enjoy the work between “looks good” and “actually holds up” — accessibility,
              resilience, edge states, motion restraint, and making dense product logic feel
              legible.
            </p>
          </div>
        </div>

        <div class="border border-cobalt-500/15 p-6 md:p-8">
          <p class="editorial-kicker mb-5">good fit projects</p>
          <div class="space-y-4 text-cobalt-600 dark:text-cobalt-100/85">
            <div>
              <p
                class="text-sm uppercase tracking-[0.22em] text-cobalt-500/70 dark:text-cobalt-100/70"
              >
                product UI
              </p>
              <p class="mt-1 text-lg">Dashboards, commerce flows, account areas, internal tools.</p>
            </div>
            <div>
              <p
                class="text-sm uppercase tracking-[0.22em] text-cobalt-500/70 dark:text-cobalt-100/70"
              >
                systems
              </p>
              <p class="mt-1 text-lg">
                Component libraries, design systems, typed frontend architecture.
              </p>
            </div>
            <div>
              <p
                class="text-sm uppercase tracking-[0.22em] text-cobalt-500/70 dark:text-cobalt-100/70"
              >
                polish
              </p>
              <p class="mt-1 text-lg">
                UX cleanup, visual hierarchy, interaction refinement, and handoff-ready frontend
                implementation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from "../components/layout/Footer.vue";
import { useJsonLd } from "../composables/useJsonLd";

useJsonLd({
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vlad Caraseli",
  jobTitle: "Frontend Engineer",
  url: "https://vladcaraseli.com",
  sameAs: ["https://github.com/caraseli02", "https://linkedin.com/in/vlad-caraseli"],
  knowsAbout: ["Vue", "React", "TypeScript", "Nuxt", "Design Systems", "Frontend Architecture"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Palma de Mallorca",
    addressCountry: "ES",
  },
});
</script>

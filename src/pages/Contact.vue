<template>
  <div class="min-h-screen bg-cream-100 pt-28 dark:bg-charcoal md:pt-32">
    <div class="mx-auto max-w-3xl px-6 pb-20 md:px-10 lg:px-12">
      <section class="reveal">
        <p class="editorial-kicker mb-4">contact</p>
        <h1
          class="font-display text-[3rem] leading-[0.94] text-charcoal dark:text-cobalt-100 sm:text-[3.8rem] md:text-[4.6rem]"
        >
          Let’s talk.
        </h1>
        <p
          class="mt-6 max-w-xl text-lg leading-relaxed text-charcoal-200 dark:text-cobalt-100/85 md:text-xl"
        >
          Best first touch is LinkedIn. Email and phone work too — send the role, timeline, and
          where the product currently feels weak.
        </p>

        <div class="mt-10 space-y-4">
          <a
            :href="links.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="ink-link text-base"
            >LinkedIn ↗</a
          >
          <a :href="`mailto:${links.email}`" class="ink-link text-base">{{ links.email }}</a>
          <a :href="links.phoneHref" class="ink-link text-base">{{ links.phone }}</a>
          <a
            :href="links.github"
            target="_blank"
            rel="noopener noreferrer"
            class="ink-link text-base"
            >GitHub ↗</a
          >
          <a :href="links.cv" download class="ink-link inline-flex min-h-11 items-center text-base"
            >Download CV ↓</a
          >
        </div>

        <p
          class="mt-12 font-mono text-xs uppercase tracking-[0.18em] text-cobalt-500/60 dark:text-cobalt-200/60"
        >
          Palma de Mallorca · open to roles
        </p>
      </section>
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from "../components/layout/Footer.vue";
import { links } from "../data/cv";
</script>

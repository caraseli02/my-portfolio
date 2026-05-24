<template>
  <div class="min-h-screen bg-cream-100 pt-24 dark:bg-charcoal md:pt-32">
    <div
      class="mx-auto grid max-w-7xl gap-10 px-4 pb-20 sm:px-6 md:px-10 lg:grid-cols-[minmax(0,1.1fr)_24rem] lg:px-12"
    >
      <section class="reveal">
        <p class="editorial-kicker mb-4">contact</p>
        <h1
          class="max-w-4xl text-[clamp(2.65rem,12vw,5.4rem)] leading-[0.94] font-display text-charcoal dark:text-cobalt-100"
        >
          Bring me in when the interface needs to feel
          <span class="italic">sharper</span>, <span class="italic">clearer</span>, and harder to
          forget.
        </h1>

        <div class="mt-8 flex flex-wrap gap-3">
          <span
            v-for="word in words"
            :key="word"
            class="pill-badge"
            :class="
              currentWord === word
                ? '!bg-cobalt-500 !text-white dark:!bg-cobalt-300 dark:!text-charcoal'
                : ''
            "
          >
            {{ word }}
          </span>
        </div>

        <p
          class="mt-8 max-w-2xl text-lg leading-relaxed text-charcoal-200 dark:text-cobalt-100/85 md:text-xl"
        >
          Best first touch is LinkedIn. Send the project, the role, the timeline, and where the
          product currently feels weak. I can tell pretty quickly where the leverage is.
        </p>

        <div class="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="https://linkedin.com/in/caraseli"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex min-h-12 w-full items-center justify-center bg-cobalt-500 px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.16em] text-white transition-opacity hover:opacity-85 sm:w-auto sm:px-6 sm:tracking-[0.18em]"
          >
            Start on LinkedIn ↗
          </a>
          <a
            href="https://github.com/caraseli02?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex min-h-12 w-full items-center justify-center border border-cobalt-500 px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.16em] text-cobalt-500 transition-colors hover:bg-cobalt-500 hover:text-white dark:border-cobalt-300 dark:text-cobalt-200 dark:hover:bg-cobalt-300 dark:hover:text-charcoal sm:w-auto sm:px-6 sm:tracking-[0.18em]"
          >
            Browse GitHub ↗
          </a>
        </div>
      </section>

      <aside class="panel-surface rounded-2xl p-5 sm:p-6 md:rounded-[2rem] md:p-8">
        <p class="editorial-kicker mb-4">good first message</p>
        <div class="space-y-5 text-cobalt-600 dark:text-cobalt-100/85">
          <div>
            <p
              class="text-sm uppercase tracking-[0.22em] text-cobalt-500/70 dark:text-cobalt-100/70"
            >
              tell me
            </p>
            <p class="mt-1">
              What you are building, who it is for, and what is not clicking in the current UX.
            </p>
          </div>
          <div class="editorial-rule"></div>
          <div>
            <p
              class="text-sm uppercase tracking-[0.22em] text-cobalt-500/70 dark:text-cobalt-100/70"
            >
              best fit
            </p>
            <p class="mt-1">
              Frontend builds, product UI cleanup, design systems, complex component work, and
              thoughtful refactors.
            </p>
          </div>
          <div class="editorial-rule"></div>
          <div>
            <p
              class="text-sm uppercase tracking-[0.22em] text-cobalt-500/70 dark:text-cobalt-100/70"
            >
              location
            </p>
            <p class="mt-1 text-xl font-display text-cobalt-500 dark:text-cobalt-200">
              Palma de Mallorca
            </p>
          </div>
        </div>
      </aside>
    </div>

    <Footer class="footer-reveal" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import Footer from "../components/layout/Footer.vue";

const words = ["decisive", "editorial", "usable", "faster", "clearer", "credible", "memorable"];
const currentWord = ref(words[0]);
let interval: ReturnType<typeof setInterval> | null = null;
let currentIndex = 0;

const startInterval = () => {
  interval = window.setInterval(() => {
    currentIndex = (currentIndex + 1) % words.length;
    currentWord.value = words[currentIndex];
  }, 1600);
};

const stopInterval = () => {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }
};

const handleVisibilityChange = () => {
  if (document.hidden) {
    stopInterval();
  } else if (!interval) {
    startInterval();
  }
};

onMounted(() => {
  startInterval();
  document.addEventListener("visibilitychange", handleVisibilityChange);
});

onUnmounted(() => {
  stopInterval();
  document.removeEventListener("visibilitychange", handleVisibilityChange);
});
</script>

<template>
  <section class="py-12">
    <div
      class="mb-10 flex flex-col gap-5 border-b border-cobalt-500/10 pb-8 dark:border-cobalt-300/12 md:flex-row md:items-end md:justify-between"
    >
      <div class="max-w-2xl">
        <p class="mono-label mb-3">project journey</p>
        <h2 class="text-3xl font-display text-charcoal dark:text-cobalt-100 md:text-4xl">
          How the build unfolded from problem to payoff
        </h2>
      </div>

      <p
        class="max-w-sm text-sm leading-relaxed text-cobalt-600 dark:text-cobalt-100/72 md:text-right"
      >
        A clearer step-by-step read: stronger phase breaks, a visible progress rail, and motion that
        tracks the story instead of floating around it.
      </p>
    </div>

    <div class="relative pl-8 md:pl-12">
      <div
        class="absolute bottom-4 left-3 top-2 w-px bg-cobalt-500/10 dark:bg-cobalt-300/12 md:left-5"
      ></div>
      <div
        class="absolute left-3 top-2 w-px bg-cobalt-500/45 transition-[height] duration-500 ease-out dark:bg-cobalt-300/55 md:left-5"
        :style="{ height: `${Math.max(progress * 100, 8)}%` }"
        aria-hidden="true"
      ></div>

      <div ref="containerRef" class="space-y-5 md:space-y-6">
        <div
          v-for="(phase, i) in phases"
          :key="phase.id"
          data-phase
          class="reveal"
          :class="{ revealed: i <= activeIndex + 1 }"
          :style="{ transitionDelay: i * 80 + 'ms' }"
        >
          <TimelinePhaseCard
            :phase="phase"
            :is-active="i === activeIndex"
            :is-completed="i < activeIndex"
            :index="i"
            :total="phases.length"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { TimelinePhase } from "../../types/projects";
import { useScrollProgress } from "../../composables/useScrollProgress";
import TimelinePhaseCard from "./TimelinePhaseCard.vue";

withDefaults(
  defineProps<{
    phases: TimelinePhase[];
    accentColor?: string;
  }>(),
  {
    accentColor: "cobalt-500",
  },
);

const { containerRef, activeIndex, progress } = useScrollProgress({
  activationOffset: 0.4,
});
</script>

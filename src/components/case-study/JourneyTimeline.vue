<template>
  <section class="py-12">
    <div class="mb-10">
      <p class="editorial-kicker mb-3">project journey</p>
      <h2 class="text-3xl font-display text-charcoal dark:text-cobalt-100 md:text-4xl">
        How the build unfolded from problem to payoff
      </h2>
    </div>

    <div ref="containerRef" class="space-y-0">
      <div
        v-for="(phase, i) in phases"
        :key="phase.id"
        data-phase
        class="reveal"
        :class="{ revealed: true }"
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

const { containerRef, activeIndex } = useScrollProgress({
  activationOffset: 0.4,
});
</script>

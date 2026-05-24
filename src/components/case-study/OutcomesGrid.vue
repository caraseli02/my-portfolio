<template>
  <section>
    <div class="mb-10">
      <p class="editorial-kicker mb-3">measurable impact</p>
      <h2 class="text-3xl font-display text-charcoal dark:text-cobalt-100 md:text-4xl">
        The proof points that matter on a fast scan
      </h2>
    </div>

    <!-- Horizontal metrics strip -->
    <div
      v-for="(outcome, i) in outcomes"
      :key="outcome.label"
      :ref="
        (el) => {
          if (el) outcomeRefs[i] = el as HTMLElement;
        }
      "
      class="reveal group flex flex-col gap-2 border-b border-cobalt-500/10 py-4 last:border-b-0 dark:border-charcoal-200/20 sm:flex-row sm:items-baseline sm:gap-6"
      :class="{ revealed: outcomeVisibility[i] }"
      :style="{ transitionDelay: i * 100 + 'ms' }"
    >
      <!-- Index -->
      <span
        class="text-xs font-mono text-cobalt-500/30 dark:text-cobalt-300/30 w-6 shrink-0 tabular-nums"
      >
        {{ String(i + 1).padStart(2, "0") }}
      </span>

      <!-- Metric -->
      <span
        class="w-full shrink-0 font-display text-2xl font-bold tabular-nums text-cobalt-500 dark:text-cobalt-300 sm:w-24 md:w-32 md:text-3xl"
      >
        {{ outcome.metric }}
      </span>

      <!-- Label + description -->
      <div class="flex-1 min-w-0">
        <span class="text-sm font-medium text-cobalt-600 dark:text-cobalt-200">{{
          outcome.label
        }}</span>
        <p
          v-if="outcome.description"
          class="text-sm text-cobalt-500/60 dark:text-cobalt-300/60 mt-0.5"
        >
          {{ outcome.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, onMounted, onUnmounted } from "vue";
import { Outcome } from "../../types/projects";

defineProps<{
  outcomes: Outcome[];
}>();

const outcomeRefs = reactive<Record<number, HTMLElement>>({});
const outcomeVisibility = reactive<Record<number, boolean>>({});
let observer: IntersectionObserver | null = null;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = Object.values(outcomeRefs).indexOf(entry.target as HTMLElement);
          if (idx !== -1) outcomeVisibility[idx] = true;
          observer?.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
  );
  Object.values(outcomeRefs).forEach((el) => observer?.observe(el));
});

onUnmounted(() => {
  observer?.disconnect();
  observer = null;
});
</script>

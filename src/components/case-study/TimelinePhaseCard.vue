<template>
  <div
    ref="cardRef"
    class="group relative reveal"
    :class="{ revealed: isRevealed }"
    :style="{ transitionDelay: index * 80 + 'ms' }"
  >
    <div class="absolute left-[-1.65rem] top-7 z-10 md:left-[-2.6rem]">
      <span
        class="timeline-dot flex h-5 w-5 items-center justify-center rounded-full border transition-all duration-300"
        :class="{
          'timeline-dot--active border-cobalt-500 bg-cobalt-500 shadow-[0_0_0_6px_rgba(52,101,164,0.12)] dark:border-cobalt-300 dark:bg-cobalt-300 dark:shadow-[0_0_0_6px_rgba(191,219,254,0.12)]':
            isActive,
          'border-cobalt-500/60 bg-cobalt-500/85 dark:border-cobalt-300/60 dark:bg-cobalt-300/80':
            isCompleted && !isActive,
          'border-cobalt-500/25 bg-cream-50 dark:border-cobalt-300/20 dark:bg-charcoal-50':
            !isActive && !isCompleted,
        }"
        aria-hidden="true"
      >
        <span
          class="h-1.5 w-1.5 rounded-full transition-colors duration-300"
          :class="{
            'bg-white dark:bg-charcoal': isActive || isCompleted,
            'bg-cobalt-500/35 dark:bg-cobalt-300/30': !isActive && !isCompleted,
          }"
        ></span>
      </span>
    </div>

    <article
      class="rounded-[1.6rem] border border-cobalt-500/12 bg-white/88 px-5 py-5 shadow-[0_18px_60px_-44px_rgba(31,41,55,0.35)] transition-all duration-300 dark:border-cobalt-300/12 dark:bg-charcoal-50/88 md:px-6 md:py-6"
      :class="{
        'translate-x-0 border-cobalt-500/24 bg-cobalt-500/[0.05] shadow-[0_28px_80px_-46px_rgba(52,101,164,0.45)] ring-1 ring-cobalt-500/12 dark:border-cobalt-300/24 dark:bg-cobalt-300/[0.07] dark:shadow-[0_28px_80px_-46px_rgba(59,130,246,0.35)] dark:ring-cobalt-300/12':
          isActive,
        'md:translate-x-2': isActive,
        'border-cobalt-500/16 dark:border-cobalt-300/16': isCompleted,
      }"
    >
      <div class="flex flex-col gap-4 md:grid md:grid-cols-[9rem_minmax(0,1fr)] md:gap-6">
        <div class="space-y-2">
          <p
            class="text-sm font-mono tabular-nums"
            :class="{
              'text-cobalt-500 dark:text-cobalt-300': isActive || isCompleted,
              'text-cobalt-500/35 dark:text-cobalt-300/35': !isActive && !isCompleted,
            }"
          >
            {{ String(index + 1).padStart(2, "0") }}
          </p>
          <p
            class="inline-flex w-fit rounded-full border px-2.5 py-1 text-[11px] font-mono uppercase tracking-[0.18em]"
            :class="{
              'border-cobalt-500/24 bg-cobalt-500/[0.06] text-cobalt-600 dark:border-cobalt-300/24 dark:bg-cobalt-300/[0.08] dark:text-cobalt-100':
                isActive || isCompleted,
              'border-cobalt-500/10 bg-cobalt-500/[0.025] text-cobalt-500/55 dark:border-cobalt-300/12 dark:bg-cobalt-300/[0.03] dark:text-cobalt-300/55':
                !isActive && !isCompleted,
            }"
          >
            {{ phase.label }}
          </p>
        </div>

        <div
          class="flex-1 border-t border-cobalt-500/10 pt-4 dark:border-cobalt-300/12 md:border-l md:border-t-0 md:pl-6 md:pt-0"
        >
          <div class="flex flex-col gap-3 md:gap-4">
            <h3 class="text-xl font-semibold text-charcoal dark:text-cobalt-100 md:text-2xl">
              {{ phase.title }}
            </h3>
            <p class="text-sm leading-relaxed text-cobalt-600 dark:text-cobalt-200 md:text-base">
              {{ phase.narrative }}
            </p>

            <p
              v-if="phase.detail"
              class="border-l border-cobalt-500/14 pl-3 text-sm text-cobalt-500/68 dark:border-cobalt-300/18 dark:text-cobalt-300/68"
            >
              {{ phase.detail }}
            </p>

            <p
              v-if="phase.highlight"
              class="font-display text-sm text-cobalt-500/88 dark:text-cobalt-200/88"
            >
              → {{ phase.highlight }}
            </p>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { TimelinePhase } from "../../types/projects";
import { useScrollReveal } from "../../composables/useScrollReveal";

withDefaults(
  defineProps<{
    phase: TimelinePhase;
    isActive?: boolean;
    isCompleted?: boolean;
    index?: number;
    total?: number;
  }>(),
  {
    isActive: false,
    isCompleted: false,
    index: 0,
    total: 6,
  },
);

const { revealRef: cardRef, isVisible: isRevealed } = useScrollReveal({ threshold: 0.1 });
</script>

<style scoped>
.timeline-dot {
  transform: scale(1);
}

.group:hover .timeline-dot {
  transform: scale(1.06);
}

.timeline-dot--active {
  animation: timeline-pulse 2.2s ease-in-out infinite;
}

@keyframes timeline-pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08);
  }
}

@media (prefers-reduced-motion: reduce) {
  .timeline-dot,
  .group:hover .timeline-dot,
  .timeline-dot--active {
    animation: none;
    transform: none;
  }
}
</style>

<template>
  <div
    ref="cardRef"
    class="group reveal"
    :class="{ revealed: isRevealed }"
    :style="{ transitionDelay: index * 80 + 'ms' }"
  >
    <!-- Phase entry -->
    <div
      class="rounded-2xl border border-cobalt-500/12 bg-white/72 px-4 py-5 transition-colors duration-200 dark:border-cobalt-300/12 dark:bg-charcoal-50/72 md:flex md:items-start md:gap-0 md:rounded-[1.5rem] md:px-5"
      :class="{
        'shadow-[0_18px_40px_rgba(31,50,255,0.08)] ring-1 ring-cobalt-500/12 dark:ring-cobalt-300/12':
          isActive,
      }"
    >
      <!-- Index + label column -->
      <div class="mb-3 flex items-baseline gap-3 md:mb-0 md:w-40 md:shrink-0">
        <span
          class="text-sm font-mono tabular-nums"
          :class="{
            'text-cobalt-500 dark:text-cobalt-300': isActive || isCompleted,
            'text-cobalt-500/30 dark:text-cobalt-300/30': !isActive && !isCompleted,
          }"
          >{{ String(index + 1).padStart(2, "0") }}</span
        >
        <span class="text-xs font-mono tracking-wider text-cobalt-500/50 dark:text-cobalt-300/50">{{
          phase.label
        }}</span>
      </div>

      <!-- Content column -->
      <div class="flex-1 md:border-l md:border-cobalt-500/10 md:pl-6 dark:md:border-cobalt-300/12">
        <h3 class="mb-2 text-xl font-semibold text-charcoal dark:text-cobalt-100 md:text-2xl">
          {{ phase.title }}
        </h3>
        <p class="text-cobalt-600 dark:text-cobalt-200 leading-relaxed text-sm md:text-base mb-3">
          {{ phase.narrative }}
        </p>

        <!-- Detail -->
        <p v-if="phase.detail" class="text-cobalt-500/60 dark:text-cobalt-300/60 text-sm mb-3">
          <span class="font-mono text-xs text-cobalt-500/40 dark:text-cobalt-300/40 mr-1"
            >&gt;</span
          >
          {{ phase.detail }}
        </p>

        <!-- Highlight -->
        <p
          v-if="phase.highlight"
          class="text-sm font-display text-cobalt-500/80 dark:text-cobalt-300/80"
        >
          &#x2192; {{ phase.highlight }}
        </p>
      </div>
    </div>

    <!-- Separator -->
    <div
      v-if="index < total - 1"
      class="mx-4 md:mx-0 md:ml-[11.5rem] h-px bg-cobalt-500/8 dark:bg-charcoal-200/20"
      aria-hidden="true"
    ></div>
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

<template>
  <section class="py-12">
    <div class="mb-12">
      <p class="editorial-kicker mb-3">takeaways</p>
      <h2 class="mb-4 text-3xl font-display text-charcoal dark:text-cobalt-100 md:text-4xl">
        What this project sharpened
      </h2>
      <p class="text-lg text-charcoal-200 dark:text-cobalt-100/80">
        Actionable lessons pulled from the build, not filler reflection.
      </p>
    </div>

    <div class="space-y-4">
      <div
        v-for="(lesson, i) in lessons"
        :key="i"
        :ref="
          (el) => {
            if (el) lessonRefs[i] = el as HTMLElement;
          }
        "
        class="flex items-start gap-5 p-6 border border-cobalt-500/15 dark:border-charcoal-200/40 bg-cream-100 dark:bg-charcoal-50 reveal group"
        :class="{ revealed: lessonVisibility[i] }"
        :style="{ transitionDelay: i * 100 + 'ms' }"
      >
        <!-- Numbered marker -->
        <div class="flex-shrink-0 mt-0.5 relative" aria-hidden="true">
          <span
            class="text-2xl font-display font-bold text-cobalt-500 dark:text-cobalt-300 group-hover:scale-110 transition-transform duration-200 inline-block"
          >
            {{ String(i + 1).padStart(2, "0") }}
          </span>
        </div>

        <!-- Divider -->
        <div class="w-px self-stretch bg-cobalt-500/15 dark:bg-charcoal-200/30 flex-shrink-0"></div>

        <!-- Content -->
        <p class="text-cobalt-700 dark:text-cobalt-100 leading-relaxed pt-1">{{ lesson }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, onMounted, onUnmounted } from "vue";

defineProps<{
  lessons: string[];
}>();

const lessonRefs = reactive<Record<number, HTMLElement>>({});
const lessonVisibility = reactive<Record<number, boolean>>({});
let observer: IntersectionObserver | null = null;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = Object.values(lessonRefs).indexOf(entry.target as HTMLElement);
          if (idx !== -1) lessonVisibility[idx] = true;
          observer?.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
  );
  Object.values(lessonRefs).forEach((el) => observer?.observe(el));
});

onUnmounted(() => {
  observer?.disconnect();
  observer = null;
});
</script>

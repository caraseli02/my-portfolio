<template>
  <div
    ref="root"
    class="grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] md:items-stretch md:gap-8 lg:gap-10"
    role="region"
    aria-roledescription="carousel"
    aria-label="Work samples"
    @pointerenter="onPointerEnter"
    @pointerleave="onPointerLeave"
    @focusin="onFocusIn"
    @focusout="onFocusOut"
  >
    <ol class="order-2 flex h-full list-none flex-col md:order-1 md:justify-end">
      <li v-for="(project, i) in projects" :key="project.caseStudy.slug">
        <router-link
          :to="{ name: 'case-study', params: { slug: project.caseStudy.slug } }"
          class="flex h-12 items-center justify-between gap-3 border-b border-cobalt-500/12 px-1 transition-colors duration-500 md:h-[4.5rem] md:flex-col md:items-start md:justify-center md:gap-0 md:pl-4 md:pr-0 dark:border-cobalt-300/12"
          :class="
            current === i
              ? 'text-cobalt-500 dark:text-cobalt-200'
              : 'text-cobalt-500/35 dark:text-cobalt-100/35'
          "
          @pointerenter="goTo(i)"
        >
          <span class="text-base leading-tight tracking-[-0.02em] md:text-xl lg:text-2xl">
            {{ project.caseStudy.company }}
          </span>
          <span
            class="text-right font-mono text-[10px] uppercase tracking-[0.08em] transition-colors duration-500 md:mt-1 md:text-left md:text-xs"
            :class="
              current === i
                ? 'text-cobalt-500/70 dark:text-cobalt-100/70'
                : 'text-cobalt-500/40 dark:text-cobalt-100/40'
            "
          >
            {{ project.category }}
          </span>
        </router-link>
      </li>
    </ol>

    <div class="panel-surface relative order-1 self-start overflow-hidden md:order-2 md:self-end">
      <div class="grid">
        <div
          v-for="(slide, i) in slides"
          :key="slide.slug"
          class="showcase-slide bg-white dark:bg-charcoal-50"
          :class="{ 'is-active': current === i }"
          :aria-hidden="current !== i || undefined"
        >
          <router-link
            :to="{ name: 'case-study', params: { slug: slide.slug } }"
            :tabindex="current === i ? undefined : -1"
            class="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt-500 md:grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]"
          >
            <div
              class="relative aspect-[4/5] overflow-hidden border-b border-cobalt-500/12 bg-cobalt-500/[0.03] md:border-r md:border-b-0 dark:border-cobalt-300/12"
            >
              <picture>
                <source
                  type="image/webp"
                  :srcset="`${slide.webpBase}-320.webp 320w, ${slide.webpBase}-640.webp 640w, ${slide.webpBase}.webp 1280w`"
                  sizes="(max-width: 768px) calc(100vw - 3rem), (max-width: 1280px) 30vw, 368px"
                />
                <img
                  :src="slide.image"
                  :alt="`${slide.title} preview`"
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="1000"
                  class="showcase-slide__media h-full w-full object-cover"
                />
              </picture>
            </div>

            <div class="flex flex-col justify-center gap-2 p-4 sm:gap-3 sm:p-5 md:p-6 lg:p-8">
              <div
                class="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-cobalt-500/65 md:text-xs dark:text-cobalt-200/65"
              >
                <span>{{ slide.role }}</span>
                <span aria-hidden="true">·</span>
                <span>{{ slide.year }}</span>
              </div>
              <h3
                class="font-display text-xl leading-tight text-cobalt-500 sm:text-2xl md:text-3xl dark:text-cobalt-200"
              >
                {{ slide.title }}
              </h3>
              <p
                class="line-clamp-2 text-sm leading-relaxed text-cobalt-600 md:line-clamp-3 dark:text-cobalt-100/80"
              >
                {{ slide.description }}
              </p>
              <div class="hidden flex-wrap gap-2 pt-1 md:flex">
                <span v-for="tag in slide.tags" :key="tag" class="pill-badge">{{ tag }}</span>
              </div>
              <span class="ink-link mt-1 w-fit text-xs md:mt-2">Open work →</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import type { FeaturedProject } from "../../types/projects";

const props = defineProps<{
  projects: FeaturedProject[];
}>();

const ADVANCE_MS = 4000;

const count = props.projects.length;
const root = ref<HTMLElement>();
const current = ref(0);
const hovering = ref(false);
const focused = ref(false);
const onScreen = ref(true);
const reducedMotion = ref(false);

let timer: number | undefined;
let observer: IntersectionObserver | undefined;
let motionQuery: MediaQueryList | undefined;

const slides = computed(() =>
  props.projects.map((project) => ({
    slug: project.caseStudy.slug,
    title: project.title,
    image: project.caseStudy.image,
    webpBase: project.caseStudy.image.replace(/\.[^.]+$/, ""),
    role: project.caseStudy.role,
    year: project.caseStudy.year,
    description: project.description,
    tags: project.tech.slice(0, 4),
  })),
);

function canAutoAdvance() {
  return (
    !reducedMotion.value && !hovering.value && !focused.value && onScreen.value && !document.hidden
  );
}

function stopTimer() {
  if (timer !== undefined) {
    clearInterval(timer);
    timer = undefined;
  }
}

function startTimer() {
  stopTimer();
  if (canAutoAdvance()) {
    timer = window.setInterval(next, ADVANCE_MS);
  }
}

function next() {
  current.value = (current.value + 1) % count;
}

function goTo(i: number) {
  current.value = i;
  startTimer();
}

function onPointerEnter() {
  hovering.value = true;
  stopTimer();
}

function onPointerLeave() {
  hovering.value = false;
  startTimer();
}

function onFocusIn() {
  focused.value = true;
  stopTimer();
}

function onFocusOut(event: FocusEvent) {
  if ((event.currentTarget as HTMLElement).contains(event.relatedTarget as Node)) return;
  focused.value = false;
  startTimer();
}

function onVisibilityChange() {
  if (document.hidden) stopTimer();
  else startTimer();
}

function onMotionChange() {
  reducedMotion.value = motionQuery?.matches ?? false;
  if (reducedMotion.value) stopTimer();
  else startTimer();
}

onMounted(() => {
  motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  reducedMotion.value = motionQuery.matches;
  motionQuery.addEventListener("change", onMotionChange);
  document.addEventListener("visibilitychange", onVisibilityChange);

  observer = new IntersectionObserver(
    ([entry]) => {
      onScreen.value = entry.isIntersecting;
      if (entry.isIntersecting) startTimer();
      else stopTimer();
    },
    { threshold: 0.2 },
  );
  if (root.value) observer.observe(root.value);

  startTimer();
});

onBeforeUnmount(() => {
  stopTimer();
  observer?.disconnect();
  document.removeEventListener("visibilitychange", onVisibilityChange);
  motionQuery?.removeEventListener("change", onMotionChange);
});
</script>

<style scoped>
.showcase-slide {
  grid-area: 1 / 1;
  opacity: 0;
  visibility: hidden;
  transform: translateY(16px);
  transition:
    opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    visibility 0s linear 0.4s;
}

.showcase-slide.is-active {
  position: relative;
  z-index: 1;
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
  transition:
    opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.05s,
    transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.05s,
    visibility 0s;
}

.showcase-slide__media {
  transform: scale(1.045);
  transition: transform 1.1s cubic-bezier(0.16, 1, 0.3, 1);
}

.showcase-slide.is-active .showcase-slide__media {
  transform: scale(1);
}

.showcase-slide.is-active .group:hover .showcase-slide__media {
  transform: scale(1.02);
  transition-duration: 0.5s;
}

@media (prefers-reduced-motion: reduce) {
  .showcase-slide,
  .showcase-slide__media {
    transition: none;
  }

  .showcase-slide__media,
  .showcase-slide.is-active .group:hover .showcase-slide__media {
    transform: none;
  }
}
</style>

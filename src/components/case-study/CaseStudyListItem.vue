<template>
  <article class="group card-case-study relative overflow-hidden [contain:layout_style_paint]">
    <router-link
      :to="{ name: 'case-study', params: { slug } }"
      class="grid gap-6 px-5 py-6 md:px-7 md:py-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt-500 focus-visible:outline-offset-2"
      :class="
        reverse
          ? 'md:grid-cols-[auto_minmax(0,0.95fr)_minmax(0,1.15fr)]'
          : 'md:grid-cols-[auto_minmax(0,1.3fr)_minmax(0,0.9fr)]'
      "
    >
      <div class="flex items-start gap-4 md:block md:pr-3">
        <span
          class="block text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-[-0.04em] text-cobalt-500 leading-none tabular-nums"
        >
          {{ formattedNumber }}
        </span>
        <span class="editorial-kicker mt-2 block">selected case study</span>
      </div>

      <div class="min-w-0 space-y-4" :class="reverse ? 'md:order-3' : 'md:order-2'">
        <div>
          <h3
            class="text-2xl md:text-3xl font-display leading-[0.96] text-cobalt-500 dark:text-cobalt-200"
          >
            {{ title }}
          </h3>
          <p class="mt-3 max-w-2xl text-base md:text-lg text-cobalt-600 dark:text-cobalt-100">
            {{ description }}
          </p>
        </div>

        <div class="flex flex-wrap gap-2">
          <span v-for="tag in tags" :key="tag" class="pill-badge">
            {{ tag }}
          </span>
        </div>

        <div class="flex flex-wrap items-center gap-5 pt-2">
          <span class="ink-link">
            open case study
            <span aria-hidden="true">↗</span>
          </span>

          <a
            v-if="github"
            :href="github"
            target="_blank"
            rel="noopener noreferrer"
            class="ink-link"
            @click.stop
          >
            source
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div
        v-if="image"
        class="overflow-hidden rounded-[1.5rem] border border-cobalt-500/15 bg-cobalt-500/[0.04] md:self-start"
        :class="reverse ? 'md:order-2' : 'md:order-3'"
      >
        <picture>
          <source
            type="image/webp"
            :srcset="`${webpBase}-320.webp 320w, ${webpBase}-640.webp 640w, ${webpBase}.webp 1280w`"
            sizes="(max-width: 640px) 320px, (max-width: 1024px) 640px, 1280px"
          />
          <img
            :src="image"
            :alt="`${title} preview`"
            loading="lazy"
            width="640"
            height="400"
            class="aspect-[16/10] h-auto max-h-[18rem] w-full object-cover object-top transition-all duration-500 group-hover:scale-[1.06] md:max-h-[16rem]"
          />
        </picture>
      </div>
    </router-link>
  </article>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    number: number;
    title: string;
    slug: string;
    reverse?: boolean;
    tags?: string[];
    image?: string;
    description?: string;
    github?: string;
  }>(),
  {
    reverse: false,
    tags: () => [],
    image: "",
    description: "",
    github: "",
  },
);

const formattedNumber = computed(() => props.number.toString().padStart(2, "0"));

const webpBase = computed(() => {
  // e.g. "/project-images/topproperties" → strip extension from image path
  if (!props.image) return "";
  return props.image.replace(/\.[^.]+$/, "");
});
</script>

<style scoped>
.card-case-study {
  background: rgb(255 255 255 / 0.92);
  border: 1px solid rgb(31 50 255 / 0.12);
  box-shadow: 0 10px 30px -12px rgb(17 27 143 / 0.1);
  transition:
    transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.4s ease;
}

:global(.dark) .card-case-study {
  background: rgb(20 26 42 / 0.92);
  border-color: rgb(204 209 255 / 0.12);
  box-shadow: 0 10px 28px -14px rgb(0 0 0 / 0.32);
}

.card-case-study:hover {
  transform: translateY(-6px);
  border-color: rgb(31 50 255 / 0.3);
  box-shadow:
    0 24px 56px -16px rgb(17 27 143 / 0.2),
    0 8px 20px -10px rgb(17 27 143 / 0.12);
}

:global(.dark) .card-case-study:hover {
  border-color: rgb(153 161 255 / 0.3);
  box-shadow:
    0 24px 56px -16px rgb(0 0 0 / 0.45),
    0 8px 20px -10px rgb(0 0 0 / 0.3);
}

/* Animated accent line at bottom on hover */
.card-case-study::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    oklch(0.44 0.23 270),
    oklch(0.6 0.18 200),
    transparent
  );
  opacity: 0;
  transform: scaleX(0.3);
  transition:
    opacity 0.4s ease,
    transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

:global(.dark) .card-case-study::after {
  background: linear-gradient(
    90deg,
    transparent,
    oklch(0.72 0.18 270),
    oklch(0.65 0.14 200),
    transparent
  );
}

.card-case-study:hover::after {
  opacity: 1;
  transform: scaleX(1);
}
</style>

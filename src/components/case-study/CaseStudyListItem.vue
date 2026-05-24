<template>
  <article class="group panel-surface relative overflow-hidden [contain:layout_style_paint]">
    <router-link
      :to="{ name: 'case-study', params: { slug } }"
      class="grid min-h-12 gap-6 px-4 py-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt-500 focus-visible:outline-offset-2 sm:px-5 sm:py-6 md:px-7 md:py-8"
      :class="
        reverse
          ? 'md:grid-cols-[auto_minmax(0,0.95fr)_minmax(0,1.15fr)]'
          : 'md:grid-cols-[auto_minmax(0,1.3fr)_minmax(0,0.9fr)]'
      "
    >
      <div class="flex min-w-0 items-start gap-4 md:block md:pr-3">
        <span
          class="block text-4xl font-display font-medium tracking-[-0.04em] text-cobalt-500 leading-none tabular-nums md:text-5xl lg:text-6xl"
        >
          {{ formattedNumber }}
        </span>
        <span class="editorial-kicker mt-2 block">selected case study</span>
      </div>

      <div class="min-w-0 space-y-4" :class="reverse ? 'md:order-3' : 'md:order-2'">
        <div>
          <h3
            class="text-2xl font-display leading-[0.98] text-cobalt-500 dark:text-cobalt-200 md:text-3xl"
          >
            {{ title }}
          </h3>
          <p class="mt-3 max-w-2xl text-base md:text-lg text-cobalt-600 dark:text-cobalt-100/85">
            {{ description }}
          </p>
        </div>

        <div class="flex flex-wrap gap-2">
          <span v-for="tag in tags" :key="tag" class="pill-badge">
            {{ tag }}
          </span>
        </div>

        <div class="flex flex-wrap items-center gap-x-5 gap-y-3 pt-2">
          <span class="ink-link">
            open case study
            <span aria-hidden="true">↗</span>
          </span>

          <a
            v-if="github"
            :href="github"
            target="_blank"
            rel="noopener noreferrer"
            class="ink-link min-h-11"
            @click.stop
          >
            source
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div
        v-if="image"
        class="overflow-hidden rounded-2xl border border-cobalt-500/15 bg-cobalt-500/[0.04] md:self-start md:rounded-[1.5rem]"
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
            class="aspect-[16/10] h-auto max-h-[18rem] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04] md:max-h-[16rem]"
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

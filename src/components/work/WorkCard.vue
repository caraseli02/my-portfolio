<template>
  <article
    class="group panel-surface relative overflow-hidden transition-transform duration-300 hover:-translate-y-1"
  >
    <router-link
      :to="{ name: 'case-study', params: { slug } }"
      class="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt-500 focus-visible:outline-offset-2"
    >
      <div
        class="relative overflow-hidden border-b border-cobalt-500/12 bg-cobalt-500/[0.03] dark:border-cobalt-300/12"
      >
        <img
          :src="image"
          :alt="`${title} preview`"
          loading="lazy"
          width="800"
          height="1000"
          class="aspect-[4/5] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div
          class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/55 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          <p class="font-mono text-[11px] uppercase tracking-[0.18em] text-white">Open work →</p>
        </div>
      </div>

      <div class="space-y-3 p-5 md:p-6">
        <div
          class="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-cobalt-500/65 dark:text-cobalt-200/65"
        >
          <span>{{ company }}</span>
          <span aria-hidden="true">·</span>
          <span>{{ period }}</span>
        </div>
        <h3 class="text-2xl font-display leading-tight text-cobalt-500 dark:text-cobalt-200">
          {{ title }}
        </h3>
        <p class="text-sm leading-relaxed text-cobalt-600 dark:text-cobalt-100/80 line-clamp-3">
          {{ description }}
        </p>
        <div class="flex flex-wrap gap-2 pt-1">
          <span v-for="tag in tags.slice(0, 4)" :key="tag" class="pill-badge">{{ tag }}</span>
        </div>
      </div>
    </router-link>
  </article>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string;
    slug: string;
    image: string;
    description: string;
    company: string;
    period: string;
    tags?: string[];
  }>(),
  {
    tags: () => [],
  },
);
</script>

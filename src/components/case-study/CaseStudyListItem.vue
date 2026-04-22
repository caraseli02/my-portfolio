<template>
  <div class="mb-4 border border-cobalt-500/60 transition-colors duration-200 hover:border-cobalt-500 hover:bg-cobalt-500/5 dark:border-cobalt-300/35 dark:hover:border-cobalt-300">
    <router-link
      :to="{ name: 'case-study', params: { slug } }"
      class="group flex items-start gap-4 px-4 py-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt-500 focus-visible:outline-offset-2 md:gap-5 md:px-6 md:py-7 lg:items-center lg:gap-6"
    >
      <!-- Number -->
      <span class="w-12 shrink-0 font-display text-3xl font-medium tabular-nums tracking-[-0.05em] text-cobalt-500 md:w-16 md:text-4xl lg:text-5xl dark:text-cobalt-300">
        {{ formattedNumber }}
      </span>

      <!-- Title + Description -->
      <div class="min-w-0 flex-1 pr-2 md:pr-4">
        <h3 class="display-title text-lg transition-colors group-hover:text-cobalt-600 md:text-xl lg:text-2xl dark:group-hover:text-cobalt-100">
          {{ title }}
        </h3>
        <p v-if="description" class="mt-2 hidden max-w-xl text-[0.95rem] leading-relaxed text-cobalt-500/70 md:block dark:text-cobalt-300/70">
          {{ description }}
        </p>
      </div>

      <!-- Tags -->
      <div class="hidden max-w-xs shrink-0 flex-wrap justify-end gap-2 md:flex lg:max-w-sm">
        <span 
          v-for="tag in tags" 
          :key="tag"
          class="pill-badge"
        >
          {{ tag }}
        </span>
      </div>

      <!-- Image -->
      <div 
        v-if="image"
        class="hidden h-28 w-44 shrink-0 overflow-hidden border border-cobalt-500/20 lg:block dark:border-cobalt-300/20"
      >
        <img
          :src="image"
          :alt="title"
          loading="lazy"
          width="160"
          height="96"
          class="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';

export default defineComponent({
  name: 'CaseStudyListItem',
  props: {
    number: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    tags: {
      type: Array as PropType<string[]>,
      default: () => []
    },
    image: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const formattedNumber = computed(() => {
      return props.number.toString().padStart(2, '0');
    });

    return {
      formattedNumber
    };
  }
});
</script>

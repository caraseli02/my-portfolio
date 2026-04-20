<template>
  <div class="border border-cobalt-500 mb-4 hover:bg-cobalt-500/5 transition-colors">
    <router-link
      :to="{ name: 'case-study', params: { slug } }"
      class="group flex items-center py-6 px-4 md:px-6 gap-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt-500 focus-visible:outline-offset-2"
    >
      <!-- Number -->
      <span class="text-3xl md:text-4xl lg:text-5xl font-display text-cobalt-500 w-12 md:w-16 shrink-0 tabular-nums">
        {{ formattedNumber }}
      </span>

      <!-- Title + Description -->
      <div class="flex-1 min-w-0 px-2">
        <h3 class="text-lg md:text-xl lg:text-2xl font-bold text-cobalt-500 truncate">
          {{ title }}
        </h3>
        <p v-if="description" class="hidden md:block text-sm text-cobalt-500/60 mt-1 truncate">
          {{ description }}
        </p>
      </div>

      <!-- Tags -->
      <div class="hidden md:flex items-center gap-2 shrink-0">
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
        class="hidden lg:block shrink-0 w-40 h-24 rounded overflow-hidden border border-cobalt-500/20"
      >
        <img
          :src="image"
          :alt="title"
          loading="lazy"
          width="160"
          height="96"
          class="w-full h-full object-cover"
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

<template>
  <div class="border border-cobalt-500 mb-4 hover:bg-cobalt-500/5 transition-colors">
    <router-link
      :to="{ name: 'case-study', params: { slug } }"
      class="group flex items-center py-6 px-4 md:px-6 relative"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <!-- Number -->
      <span class="text-3xl md:text-4xl lg:text-5xl font-serif text-cobalt-500 w-16 md:w-20 shrink-0 tabular-nums">
        {{ formattedNumber }}
      </span>

      <!-- Title -->
      <h3 class="text-lg md:text-xl lg:text-2xl font-bold text-cobalt-500 flex-1 px-4">
        {{ title }}
      </h3>

      <!-- Tags -->
      <div class="hidden md:flex items-center gap-2 px-4">
        <span 
          v-for="tag in tags" 
          :key="tag"
          class="pill-badge"
        >
          {{ tag }}
        </span>
      </div>

      <!-- Hover Image -->
      <div 
        v-if="image"
        class="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-56 h-36 rounded overflow-hidden shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 border border-cobalt-500/20"
      >
        <img
          :src="image"
          :alt="title"
          loading="lazy"
          width="224"
          height="144"
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

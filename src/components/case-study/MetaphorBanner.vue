<template>
  <div class="text-center py-8">
    <span class="text-4xl mb-4 block">{{ icon }}</span>
    <h2
      class="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r mb-3"
      :class="gradientClass"
    >
      "{{ phrase }}"
    </h2>
    <p class="text-gray-400 mt-3 max-w-lg mx-auto leading-relaxed">{{ description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MetaphorBanner',
  props: {
    phrase: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String, required: true },
    gradientClass: { type: String, required: true },
  },
})
</script>

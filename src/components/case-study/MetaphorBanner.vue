<template>
  <div class="text-center py-8">
    <span class="text-4xl mb-4 block">{{ icon }}</span>
    <h2
      class="text-3xl sm:text-4xl font-extrabold text-cobalt-500 mb-3"
    >
      "{{ phrase }}"
    </h2>
    <p class="text-cobalt-500/60 mt-3 max-w-lg mx-auto leading-relaxed">{{ description }}</p>
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
  },
})
</script>

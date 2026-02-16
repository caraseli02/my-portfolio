<template>
  <div 
    class="overflow-hidden whitespace-nowrap"
    :class="{ 'hover:[&>*]:pause': pauseOnHover }"
  >
    <div
      class="inline-flex items-center gap-8 animate-marquee"
      :class="{ 'animate-marquee-reverse': reverse }"
      :style="{ animationDuration: duration + 's' }"
    >
      <!-- Content repeated twice for seamless loop -->
      <slot></slot>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Marquee',
  props: {
    reverse: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 30
    },
    pauseOnHover: {
      type: Boolean,
      default: false
    }
  }
});
</script>

<style scoped>
/* Pause animation on hover */
.overflow-hidden:hover .animate-marquee,
.overflow-hidden:hover .animate-marquee-reverse {
  animation-play-state: paused;
}
</style>

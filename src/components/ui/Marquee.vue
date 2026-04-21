<template>
  <div class="overflow-hidden whitespace-nowrap" :class="{ 'hover:[&>*]:pause': pauseOnHover }">
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

<script setup lang="ts">
withDefaults(
  defineProps<{
    reverse?: boolean;
    duration?: number;
    pauseOnHover?: boolean;
  }>(),
  {
    reverse: false,
    duration: 30,
    pauseOnHover: false,
  },
);
</script>

<style scoped>
/* Pause animation on hover */
.overflow-hidden:hover .animate-marquee,
.overflow-hidden:hover .animate-marquee-reverse {
  animation-play-state: paused;
}
</style>

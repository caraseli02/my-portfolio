<template>
  <div class="perspective-1000 inline-flex">
    <div 
      class="border-2 border-cobalt-500 rounded-full px-4 py-1 font-serif italic text-lg relative overflow-hidden"
      style="min-width: 100px;"
    >
      <div 
        class="text-rotator-inner"
        :style="{ transform: `rotateX(${currentRotation}deg)` }"
      >
        <div 
          v-for="(word, index) in words" 
          :key="index"
          class="text-rotator-face"
          :style="getFaceStyle(index)"
        >
          {{ word }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted, PropType } from 'vue';

export default defineComponent({
  name: 'TextRotator',
  props: {
    words: {
      type: Array as PropType<string[]>,
      required: true
    },
    interval: {
      type: Number,
      default: 2000
    }
  },
  setup(props) {
    const currentIndex = ref(0);
    const currentRotation = ref(0);
    let intervalId: number | null = null;

    const rotate = () => {
      currentIndex.value = (currentIndex.value + 1) % props.words.length;
      currentRotation.value = -currentIndex.value * 90;
    };

    const getFaceStyle = (index: number) => {
      const angle = index * 90;
      return {
        transform: `rotateX(${angle}deg) translateZ(20px)`,
        opacity: index === currentIndex.value ? 1 : 0.3,
      };
    };

    const startInterval = () => {
      intervalId = window.setInterval(rotate, props.interval);
    };

    const stopInterval = () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopInterval();
      } else {
        startInterval();
      }
    };

    onMounted(() => {
      startInterval();
      document.addEventListener('visibilitychange', handleVisibilityChange);
    });

    onUnmounted(() => {
      stopInterval();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    });

    return {
      currentRotation,
      currentIndex,
      getFaceStyle
    };
  }
});
</script>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}

.text-rotator-inner {
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  height: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-rotator-face {
  position: absolute;
  backface-visibility: hidden;
  transition: opacity 0.3s ease;
  white-space: nowrap;
}
</style>

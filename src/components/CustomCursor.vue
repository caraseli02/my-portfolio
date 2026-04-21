<template>
  <div v-if="!isTouchDevice" class="custom-cursor-wrapper" aria-hidden="true">
    <!-- Outer ring (trails with smooth position) -->
    <div
      class="cursor-ring"
      :class="`cursor-ring--${cursorType}`"
      :style="{
        transform: `translate3d(${smoothCursorX - 16}px, ${smoothCursorY - 16}px, 0)`,
        opacity: cursorVisible ? 1 : 0,
      }"
    ></div>
    <!-- Inner dot (snappy raw position) -->
    <div
      class="cursor-dot"
      :class="`cursor-dot--${cursorType}`"
      :style="{
        transform: `translate3d(${cursorX - 4}px, ${cursorY - 4}px, 0)`,
        opacity: cursorVisible ? 1 : 0,
      }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { useCustomCursor } from "../composables/useCustomCursor";

const { isTouchDevice, cursorX, cursorY, smoothCursorX, smoothCursorY, cursorVisible, cursorType } =
  useCustomCursor();
</script>

<style>
.custom-cursor-wrapper {
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  mix-blend-mode: difference;
}

.cursor-ring {
  position: fixed;
  top: 0;
  left: 0;
  width: 32px;
  height: 32px;
  border: 2px solid white;
  border-radius: 50%;
  pointer-events: none;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    opacity 0.3s ease;
  will-change: transform;
}

.cursor-dot {
  position: fixed;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;
  pointer-events: none;
  transition:
    background-color 0.2s ease,
    opacity 0.3s ease;
  will-change: transform;
}

/* Link state */
.cursor-ring--link {
  width: 48px;
  height: 48px;
  border-color: oklch(0.45 0.2 265);
  background: oklch(0.45 0.2 265 / 0.08);
}
.cursor-ring--link + .cursor-dot--link,
.cursor-dot--link {
  width: 4px;
  height: 4px;
  background: oklch(0.45 0.2 265);
}

/* Button state */
.cursor-ring--button {
  width: 56px;
  height: 56px;
  border-color: oklch(0.45 0.2 265);
  background: oklch(0.45 0.2 265 / 0.12);
}
.cursor-dot--button {
  width: 4px;
  height: 4px;
  background: oklch(0.45 0.2 265);
}

/* Card state */
.cursor-ring--card {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  border-color: rgba(255, 255, 255, 0.6);
}
.cursor-dot--card {
  width: 6px;
  height: 6px;
}

/* Text state */
.cursor-ring--text {
  width: 4px;
  height: 28px;
  border-radius: 2px;
  border: none;
  background: white;
}
.cursor-dot--text {
  opacity: 0 !important;
}

/* Hidden state */
.cursor-ring--hidden {
  width: 0;
  height: 0;
  opacity: 0 !important;
}
.cursor-dot--hidden {
  opacity: 0 !important;
}
</style>

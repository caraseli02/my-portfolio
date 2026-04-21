<template>
  <div class="min-h-screen flex flex-col bg-cream-100 dark:bg-charcoal custom-cursor-active">
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-cobalt-500 focus:text-white focus:rounded"
      >Skip to content</a
    >
    <CustomCursor />
    <Header />
    <main id="main-content" class="flex-grow">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from "./components/layout/Header.vue";
import CustomCursor from "./components/CustomCursor.vue";
</script>

<style>
/* Hide default cursor when custom cursor is active */
.custom-cursor-active,
.custom-cursor-active * {
  cursor: none !important;
}

/* But show default cursor on touch devices */
@media (hover: none) and (pointer: coarse) {
  .custom-cursor-active,
  .custom-cursor-active * {
    cursor: auto !important;
  }
}
</style>

<template>
  <div
    class="min-h-screen flex flex-col bg-cream-100 dark:bg-charcoal"
    :class="{ 'custom-cursor-active': cursorEnabled }"
  >
    <!-- Full-app grid background — uncomment to evaluate site-wide squares -->
    <!-- <div class="paper-grid pointer-events-none fixed inset-0 z-0 opacity-40" aria-hidden="true"></div> -->
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-cobalt-500 focus:text-white focus:rounded"
      >Skip to content</a
    >
    <CustomCursor v-if="cursorEnabled" />
    <Header @open-palette="openPalette" @open-shortcuts="openShortcuts" />
    <main id="main-content" class="flex-grow">
      <router-view />
    </main>

    <CommandPalette ref="paletteRef" @open-shortcuts="openShortcuts" />
    <ShortcutLegend :open="shortcutsOpen" @close="shortcutsOpen = false" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Header from "./components/layout/Header.vue";
import CustomCursor from "./components/CustomCursor.vue";
import CommandPalette from "./components/ui/CommandPalette.vue";
import ShortcutLegend from "./components/ui/ShortcutLegend.vue";
import { useCursorPreference } from "./composables/useCursorPreference";
import { useGlobalShortcuts } from "./composables/useGlobalShortcuts";

const { enabled: cursorEnabled } = useCursorPreference();
const { shortcutsOpen } = useGlobalShortcuts();

const paletteRef = ref<InstanceType<typeof CommandPalette> | null>(null);

function openPalette() {
  paletteRef.value?.open();
}

function openShortcuts() {
  shortcutsOpen.value = true;
}
</script>

<style>
.custom-cursor-active,
.custom-cursor-active * {
  cursor: none !important;
}

@media (hover: none) and (pointer: coarse) {
  .custom-cursor-active,
  .custom-cursor-active * {
    cursor: auto !important;
  }
}

html {
  transition: background-color 0.3s ease;
}

html.theme-transition,
html.theme-transition *,
html.theme-transition *::before,
html.theme-transition *::after {
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    color 0.3s ease,
    fill 0.3s ease,
    stroke 0.3s ease !important;
}

@media (prefers-reduced-motion: reduce) {
  html.theme-transition,
  html.theme-transition *,
  html.theme-transition *::before,
  html.theme-transition *::after {
    transition: none !important;
  }
}
</style>

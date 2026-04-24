<template>
  <div
    class="min-h-screen flex flex-col bg-cream-100 dark:bg-charcoal grain-overlay"
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
      <router-view v-slot="{ Component, route }">
        <Transition name="page" mode="out-in">
          <component :is="Component" :key="route.path" />
        </Transition>
      </router-view>
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

/* Button press states */
button:active:not(:disabled),
a:active:not(:disabled) {
  transform: scale(0.97);
  transition-duration: 0.1s;
}

/* Card lift on hover */
.card-lift {
  transition:
    transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.card-lift:hover {
  transform: translateY(-4px);
  box-shadow:
    0 20px 50px -16px rgba(17, 27, 143, 0.18),
    0 8px 20px -10px rgba(17, 27, 143, 0.1);
}

.dark .card-lift:hover {
  box-shadow:
    0 20px 50px -16px rgba(0, 0, 0, 0.4),
    0 8px 20px -10px rgba(0, 0, 0, 0.25);
}

/* Footer parallax reveal */
.footer-reveal {
  transform: translateY(20px);
  opacity: 0;
  transition:
    transform 0.8s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.footer-reveal.revealed {
  transform: translateY(0);
  opacity: 1;
}

html {
  transition: background-color 0.3s ease;
}

/* Page transitions — Vue <Transition> */
.page-leave-active {
  transition: opacity 180ms ease-out;
}

.page-enter-active {
  transition: opacity 200ms ease-in, transform 200ms ease-in;
}

.page-leave-to {
  opacity: 0;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(6px);
}

@media (prefers-reduced-motion: reduce) {
  .page-leave-active,
  .page-enter-active {
    transition: none;
  }
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

<template>
  <div class="flex min-h-screen flex-col bg-cream-100 grain-overlay dark:bg-charcoal">
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded focus:bg-cobalt-500 focus:px-4 focus:py-2 focus:text-white"
      >Skip to content</a
    >
    <Header />
    <main id="main-content" class="flex-grow">
      <router-view v-slot="{ Component, route }">
        <transition name="page" mode="out-in" @enter="refreshReveals">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from "./components/layout/Header.vue";
import { refreshReveals } from "./composables/reveal";
</script>

<style>
.page-enter-active {
  transition:
    opacity 0.32s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.32s cubic-bezier(0.16, 1, 0.3, 1);
}

.page-leave-active {
  transition: opacity 0.18s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.page-leave-to {
  opacity: 0;
}

button:active:not(:disabled),
a:active:not(:disabled) {
  transform: scale(0.97);
  transition-duration: 0.1s;
}

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
  .page-enter-active,
  .page-leave-active {
    transition: none;
  }

  .page-enter-from {
    transform: none;
  }

  html.theme-transition,
  html.theme-transition *,
  html.theme-transition *::before,
  html.theme-transition *::after {
    transition: none !important;
  }

  .card-lift,
  .card-lift:hover {
    transition: none;
    transform: none;
    box-shadow: none;
  }
}
</style>

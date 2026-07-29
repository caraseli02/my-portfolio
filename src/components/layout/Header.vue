<template>
  <header
    class="fixed top-0 right-0 left-0 z-50 border-b border-cobalt-500/10 bg-cream-100/95 backdrop-blur-sm dark:border-charcoal-200/30 dark:bg-charcoal/95"
  >
    <div class="mx-auto max-w-7xl px-6 lg:px-12">
      <nav class="flex h-20 items-center justify-between">
        <router-link
          to="/"
          class="group flex items-center rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt-500 dark:focus-visible:outline-cobalt-300"
          aria-label="Home"
        >
          <span
            class="font-display text-2xl font-medium tracking-[-0.04em] text-cobalt-500 lowercase transition-opacity group-hover:opacity-70 dark:text-cobalt-300"
            >vlad</span
          >
        </router-link>

        <div class="hidden items-center gap-8 md:flex">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="relative inline-flex min-h-11 items-center rounded-sm pb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-cobalt-500 transition-colors hover:text-cobalt-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt-500 dark:text-cobalt-300 dark:hover:text-cobalt-100 dark:focus-visible:outline-cobalt-300"
            :class="{ 'border-b-2 border-cobalt-500 dark:border-cobalt-300': isActive(link.path) }"
            :aria-current="isActive(link.path) ? 'page' : undefined"
          >
            {{ link.label }}
          </router-link>
        </div>

        <div class="hidden items-center gap-2 md:flex">
          <button
            type="button"
            class="flex h-11 w-11 items-center justify-center border border-cobalt-500/20 text-cobalt-500 transition-colors hover:bg-cobalt-500/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt-500 dark:border-charcoal-200/60 dark:text-cobalt-300 dark:hover:bg-cobalt-300/[0.08] dark:focus-visible:outline-cobalt-300"
            :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
            @click="toggle"
          >
            <svg
              v-if="theme === 'dark'"
              viewBox="0 0 24 24"
              class="h-4 w-4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
            <svg
              v-else
              viewBox="0 0 24 24"
              class="h-4 w-4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>
        </div>

        <button
          type="button"
          class="flex h-11 w-11 items-center justify-center text-cobalt-500 dark:text-cobalt-300 md:hidden"
          :aria-label="mobileOpen ? 'Close menu' : 'Open menu'"
          :aria-expanded="mobileOpen"
          @click="mobileOpen = !mobileOpen"
        >
          <svg
            v-if="!mobileOpen"
            viewBox="0 0 24 24"
            class="h-5 w-5"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          <svg
            v-else
            viewBox="0 0 24 24"
            class="h-5 w-5"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </nav>
    </div>

    <Transition name="mobile-nav">
      <div
        v-if="mobileOpen"
        class="fixed inset-0 top-20 z-40 bg-cream-100/98 backdrop-blur-sm dark:bg-charcoal/98 md:hidden"
      >
        <nav class="flex flex-col items-center gap-6 pt-12">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="inline-flex min-h-11 items-center text-sm font-semibold uppercase tracking-[0.2em] text-cobalt-500 dark:text-cobalt-300"
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </router-link>
          <button
            type="button"
            class="mt-4 flex h-11 w-11 items-center justify-center border border-cobalt-500/20 text-cobalt-500 dark:border-charcoal-200/60 dark:text-cobalt-300"
            :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
            @click="toggle"
          >
            <svg
              v-if="theme === 'dark'"
              viewBox="0 0 24 24"
              class="h-4 w-4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
            <svg
              v-else
              viewBox="0 0 24 24"
              class="h-4 w-4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useTheme } from "../../composables/useTheme";

const route = useRoute();
const { theme, toggle } = useTheme();
const mobileOpen = ref(false);

watch(route, () => {
  mobileOpen.value = false;
});

const navLinks = [
  { label: "work", path: "/#work" },
  { label: "about", path: "/about" },
  { label: "contact", path: "/contact" },
];

const isActive = (path: string): boolean => {
  if (path === "/#work") {
    return route.path === "/" || route.path.startsWith("/projects/");
  }
  return route.path.startsWith(path);
};
</script>

<style scoped>
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: opacity 0.2s ease;
}
.mobile-nav-enter-from,
.mobile-nav-leave-to {
  opacity: 0;
}
</style>

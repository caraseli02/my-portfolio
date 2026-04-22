<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-cream-100/95 dark:bg-charcoal/95 backdrop-blur-sm border-b border-cobalt-500/10 dark:border-charcoal-200/30"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <nav class="flex items-center justify-between h-20">
        <!-- Logo Mark -->
        <router-link
          to="/"
          class="flex items-center group focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt-500 dark:focus-visible:outline-cobalt-300 focus-visible:outline-offset-4 rounded-sm"
          aria-label="Home"
        >
          <span
            class="text-2xl font-display font-medium tracking-[-0.04em] text-cobalt-500 dark:text-cobalt-300 lowercase group-hover:opacity-70 transition-opacity"
            >vlad</span
          >
        </router-link>

        <!-- Navigation Links -->
        <div class="flex items-center gap-8">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="relative inline-flex min-h-[44px] items-center pb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-cobalt-500 transition-colors hover:text-cobalt-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt-500 focus-visible:outline-offset-4 rounded-sm dark:text-cobalt-300 dark:hover:text-cobalt-100"
            :class="{ 'border-b-2 border-cobalt-500 dark:border-cobalt-300': isActive(link.path) }"
            :aria-current="isActive(link.path) ? 'page' : undefined"
          >
            {{ link.label }}
          </router-link>
        </div>

        <!-- Theme Toggle -->
        <button
          @click="toggle"
          class="w-9 h-9 flex items-center justify-center border border-cobalt-500/20 dark:border-charcoal-200/60 text-cobalt-500 dark:text-cobalt-300 hover:bg-cobalt-500/[0.06] dark:hover:bg-cobalt-300/[0.08] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt-500 dark:focus-visible:outline-cobalt-300 focus-visible:outline-offset-2"
          :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <svg
            v-if="theme === 'dark'"
            viewBox="0 0 24 24"
            class="w-4 h-4"
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
            class="w-4 h-4"
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
  </header>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useTheme } from "../../composables/useTheme";

const route = useRoute();
const { theme, toggle } = useTheme();

interface NavLink {
  label: string;
  path: string;
}

const navLinks: NavLink[] = [
  { label: "work", path: "/" },
  { label: "about", path: "/about" },
  { label: "contact", path: "/contact" },
];

const isActive = (path: string): boolean => {
  if (path === "/") {
    return route.path === "/";
  }
  return route.path.startsWith(path);
};
</script>

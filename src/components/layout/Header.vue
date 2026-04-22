<template>
  <header
    class="fixed left-0 right-0 top-0 z-50 border-b border-cobalt-500/10 bg-cream-100/96 backdrop-blur-sm dark:border-cobalt-300/12 dark:bg-charcoal/94"
  >
    <div class="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6 lg:px-12">
      <div class="flex items-center gap-6">
        <router-link
          to="/"
          class="flex items-center gap-3 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt-500 focus-visible:outline-offset-4"
          aria-label="Home"
        >
          <span
            class="font-display text-2xl tracking-[-0.04em] text-cobalt-500 dark:text-cobalt-300"
          >
            vlad
          </span>
          <span
            class="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-cobalt-500/65 dark:text-cobalt-100/70 md:inline"
          >
            product ui systems
          </span>
        </router-link>
      </div>

      <nav class="hidden items-center gap-7 md:flex" aria-label="Primary">
        <router-link
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="rounded-sm pb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-cobalt-500 transition-colors hover:text-cobalt-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt-500 focus-visible:outline-offset-4 dark:text-cobalt-300 dark:hover:text-cobalt-100"
          :class="{ 'border-b-2 border-cobalt-500 dark:border-cobalt-300': isActive(link.path) }"
          :aria-current="isActive(link.path) ? 'page' : undefined"
        >
          {{ link.label }}
        </router-link>
      </nav>

      <div class="flex items-center gap-2">
        <button
          type="button"
          class="hidden rounded-md border border-cobalt-500/16 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-cobalt-600 transition-colors hover:bg-cobalt-500/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt-500 focus-visible:outline-offset-2 dark:border-cobalt-300/18 dark:text-cobalt-100 dark:hover:bg-cobalt-300/[0.08] md:inline-flex"
          @click="$emit('open-command-palette')"
          aria-label="Open command palette"
        >
          ⌘K
        </button>

        <button
          type="button"
          class="hidden rounded-md border border-cobalt-500/16 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-cobalt-600 transition-colors hover:bg-cobalt-500/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt-500 focus-visible:outline-offset-2 dark:border-cobalt-300/18 dark:text-cobalt-100 dark:hover:bg-cobalt-300/[0.08] md:inline-flex"
          @click="$emit('open-shortcuts')"
          aria-label="Open shortcuts help"
        >
          ?
        </button>

        <button
          @click="toggle"
          class="flex h-9 w-9 items-center justify-center border border-cobalt-500/20 text-cobalt-500 transition-colors hover:bg-cobalt-500/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt-500 focus-visible:outline-offset-2 dark:border-charcoal-200/60 dark:text-cobalt-300 dark:hover:bg-cobalt-300/[0.08]"
          :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
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
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useTheme } from "../../composables/useTheme";

defineEmits<{
  (e: "open-command-palette"): void;
  (e: "open-shortcuts"): void;
}>();

const route = useRoute();
const { theme, toggle } = useTheme();

interface NavLink {
  label: string;
  path: string;
}

const navLinks: NavLink[] = [
  { label: "work", path: "/" },
  { label: "projects", path: "/projects" },
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

<template>
  <div
    class="flex min-h-screen flex-col items-center justify-center bg-cream-100 px-6 pt-32 dark:bg-charcoal"
  >
    <div class="max-w-xl text-center">
      <p
        class="mb-4 font-mono text-sm uppercase tracking-widest text-cobalt-500/50 dark:text-cobalt-300/50"
      >
        404
      </p>
      <h1
        class="mb-6 font-display text-5xl leading-none text-cobalt-500 italic dark:text-cobalt-300 md:text-7xl"
      >
        Page not found
      </h1>
      <p class="mb-10 text-cobalt-500/60 dark:text-cobalt-300/60">
        This URL doesn't exist. Maybe it moved, or maybe it never did.
      </p>
      <router-link
        to="/"
        class="inline-flex items-center gap-2 rounded-sm font-display text-cobalt-500 lowercase transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt-500 dark:text-cobalt-300"
      >
        ← back to work
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

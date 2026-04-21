<template>
  <div
    class="bg-cream-100 dark:bg-charcoal min-h-screen pt-32 flex flex-col items-center justify-center px-6"
  >
    <div class="text-center max-w-xl">
      <p
        class="font-mono text-sm text-cobalt-500/50 dark:text-cobalt-300/50 mb-4 uppercase tracking-widest"
      >
        404
      </p>
      <h1
        class="font-serif italic text-5xl md:text-7xl text-cobalt-500 dark:text-cobalt-300 mb-6 leading-none"
      >
        Page not found
      </h1>
      <p class="text-cobalt-500/60 dark:text-cobalt-300/60 mb-10">
        This URL doesn't exist. Maybe it moved, or maybe it never did.
      </p>
      <router-link
        to="/"
        class="inline-flex items-center gap-2 text-cobalt-500 dark:text-cobalt-300 hover:opacity-70 transition-opacity font-display lowercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt-500 focus-visible:outline-offset-4 rounded-sm"
      >
        ← back to work
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NotFound",
});
</script>

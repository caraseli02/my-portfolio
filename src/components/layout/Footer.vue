<template>
  <footer class="border-t border-cobalt-500/10 bg-cream-100 px-6 py-8 dark:border-charcoal-200/30 dark:bg-charcoal">
    <div class="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-cobalt-500/60 dark:text-cobalt-300/65 md:flex-row md:items-center md:justify-between">
      <span class="font-mono text-[0.72rem] uppercase tracking-[0.2em]">vlad caraseli &copy; {{ year }}</span>

      <div class="flex items-center gap-6 md:justify-center">
        <a
          href="https://github.com/caraseli02"
          target="_blank"
          rel="noopener noreferrer"
          class="font-mono text-[0.72rem] uppercase tracking-[0.2em] transition-colors hover:text-cobalt-500 dark:hover:text-cobalt-200"
        >
          github
        </a>
        <a
          href="https://linkedin.com/in/vlad-caraseli"
          target="_blank"
          rel="noopener noreferrer"
          class="font-mono text-[0.72rem] uppercase tracking-[0.2em] transition-colors hover:text-cobalt-500 dark:hover:text-cobalt-200"
        >
          linkedin
        </a>
      </div>

      <span class="font-display text-lg font-medium tracking-[-0.04em] lowercase text-cobalt-500/80 dark:text-cobalt-300/80">palma de mallorca</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-cobalt-500/10 bg-cream-100 px-6 py-8 dark:border-charcoal-200/30 dark:bg-charcoal">
    <div class="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-cobalt-500/60 dark:text-cobalt-300/65 md:flex-row md:items-center md:justify-between">
      <span class="font-mono lowercase tracking-wide">vlad caraseli &copy; {{ year }}</span>

      <div class="flex items-center gap-6 md:justify-center">
        <a
          href="https://github.com/caraseli02"
          target="_blank"
          rel="noopener noreferrer"
          class="transition-colors hover:text-cobalt-500 dark:hover:text-cobalt-200"
        >
          github
        </a>
        <a
          href="https://linkedin.com/in/vlad-caraseli"
          target="_blank"
          rel="noopener noreferrer"
          class="transition-colors hover:text-cobalt-500 dark:hover:text-cobalt-200"
        >
          linkedin
        </a>
      </div>

      <span class="font-display lowercase text-cobalt-500/80 dark:text-cobalt-300/80">palma de mallorca</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

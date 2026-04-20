<template>
  <footer class="py-8 px-6 border-t border-cobalt-500/10 bg-cream-100">
    <div class="max-w-6xl mx-auto flex items-center justify-between text-sm text-cobalt-500/60">
      <span class="font-mono lowercase">vlad caraseli &copy; {{ year }}</span>
      <div class="flex items-center gap-6">
        <a href="https://github.com/caraseli02" target="_blank" rel="noopener noreferrer" class="hover:text-cobalt-500 transition-colors">github</a>
        <a href="https://linkedin.com/in/vlad-caraseli" target="_blank" rel="noopener noreferrer" class="hover:text-cobalt-500 transition-colors">linkedin</a>
      </div>
      <span class="font-display">palma de mallorca</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

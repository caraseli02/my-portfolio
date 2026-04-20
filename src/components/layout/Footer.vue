<template>
  <footer class="py-8 px-6 border-t border-cobalt-500/10 bg-cream-100">
    <div class="max-w-6xl mx-auto flex items-center justify-between text-sm text-cobalt-500/60">
      <span class="font-mono lowercase">vc &copy; {{ year }}</span>
      <span class="font-display">palma de mallorca</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

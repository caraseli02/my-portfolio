<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-cream-100/95 backdrop-blur-sm border-b border-cobalt-500/10">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <nav class="flex items-center justify-between h-20">
        <!-- Logo Mark -->
        <router-link to="/" class="flex items-center group focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt-500 focus-visible:outline-offset-4 rounded-sm" aria-label="Home">
          <span class="text-2xl font-display font-bold text-cobalt-500 lowercase group-hover:opacity-70 transition-opacity">vlad</span>
        </router-link>

        <!-- Navigation Links -->
        <div class="flex items-center gap-8">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="text-cobalt-500 hover:text-cobalt-700 text-base font-normal lowercase relative transition-colors pb-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt-500 focus-visible:outline-offset-4 rounded-sm"
            :class="{ 'border-b-2 border-cobalt-500': isActive(link.path) }"
            :aria-current="isActive(link.path) ? 'page' : undefined"
          >
            {{ link.label }}
          </router-link>
        </div>

      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';

interface NavLink {
  label: string;
  path: string;
}

export default defineComponent({
  name: 'Header',
  setup() {
    const route = useRoute();

    const navLinks: NavLink[] = [
      { label: 'work', path: '/' },
      { label: 'about', path: '/about' },
      { label: 'contact', path: '/contact' }
    ];

    const isActive = (path: string): boolean => {
      if (path === '/') {
        return route.path === '/';
      }
      return route.path.startsWith(path);
    };

    return {
      navLinks,
      isActive
    };
  }
});
</script>

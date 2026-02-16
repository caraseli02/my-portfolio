<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-cream-100/95 backdrop-blur-sm border-b border-cobalt-500/10">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <nav class="flex items-center justify-between h-20">
        <!-- Logo Mark (Stylized VC) -->
        <router-link to="/" class="flex items-center group">
          <svg viewBox="0 0 80 80" class="w-14 h-14 text-cobalt-500 group-hover:scale-105 transition-transform">
            <!-- Stylized VC monogram -->
            <text x="10" y="55" font-family="Cormorant Garamond, serif" font-size="48" font-weight="600" font-style="italic" fill="currentColor">V</text>
            <text x="35" y="55" font-family="Cormorant Garamond, serif" font-size="48" font-weight="600" font-style="italic" fill="currentColor">C</text>
          </svg>
        </router-link>

        <!-- Navigation Links -->
        <div class="flex items-center gap-8">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="text-cobalt-500 hover:text-cobalt-700 text-base font-normal lowercase relative transition-colors pb-1"
            :class="{ 'border-b-2 border-cobalt-500': isActive(link.path) }"
          >
            {{ link.label }}
          </router-link>
        </div>

        <!-- Dark Circle Element -->
        <div class="w-5 h-5 rounded-full bg-cobalt-500/80"></div>
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
      { label: 'index', path: '/' },
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

<template>
  <footer class="bg-cream-100">
    <!-- Extra! Badge Section -->
    <div class="py-12 flex justify-center">
      <router-link to="/extra" class="group relative">
        <svg viewBox="0 0 200 100" class="w-48 h-24 text-cobalt-500 group-hover:rotate-6 transition-transform">
          <!-- Decorative badge shape -->
          <ellipse cx="100" cy="50" rx="90" ry="40" fill="none" stroke="currentColor" stroke-width="2"/>
          <text x="100" y="45" text-anchor="middle" font-family="Cormorant Garamond, serif" font-size="28" font-style="italic" font-weight="600" fill="currentColor">extra!</text>
          <text x="100" y="65" text-anchor="middle" font-family="Cormorant Garamond, serif" font-size="28" font-style="italic" font-weight="600" fill="currentColor">extra!</text>
        </svg>
      </router-link>
    </div>

    <!-- Main Footer Content -->
    <div class="border-t border-b border-cobalt-500 py-12">
      <div class="max-w-6xl mx-auto px-6 lg:px-12">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-8">
          <!-- Personality Description -->
          <p class="font-serif italic text-xl md:text-2xl text-cobalt-500 max-w-md text-center lg:text-left">
            compulsive coder + open source contributor + vue enthusiast + coffee drinker + bug hunter
          </p>

          <!-- Social Links with Sunburst -->
          <div class="flex items-center gap-6">
            <!-- Email Sunburst -->
            <a 
              href="mailto:vlad@example.com"
              class="group relative w-28 h-28 md:w-32 md:h-32"
            >
              <svg viewBox="0 0 100 100" class="w-full h-full text-cobalt-500 group-hover:rotate-45 transition-transform duration-700">
                <!-- Sunburst rays -->
                <g v-for="n in 16" :key="n" :transform="`rotate(${n * 22.5} 50 50)`">
                  <line x1="50" y1="5" x2="50" y2="20" stroke="currentColor" stroke-width="1.5"/>
                </g>
                <circle cx="50" cy="50" r="18" fill="none" stroke="currentColor" stroke-width="1.5"/>
              </svg>
              <span class="absolute inset-0 flex items-center justify-center font-serif italic text-cobalt-500 text-sm md:text-base">
                email
              </span>
            </a>

            <!-- LinkedIn Sunburst -->
            <a 
              href="https://www.linkedin.com/in/caraseli/"
              target="_blank"
              rel="noopener noreferrer"
              class="group relative w-28 h-28 md:w-32 md:h-32"
            >
              <svg viewBox="0 0 100 100" class="w-full h-full text-cobalt-500 group-hover:rotate-45 transition-transform duration-700">
                <!-- Sunburst rays -->
                <g v-for="n in 16" :key="n" :transform="`rotate(${n * 22.5} 50 50)`">
                  <line x1="50" y1="5" x2="50" y2="20" stroke="currentColor" stroke-width="1.5"/>
                </g>
                <circle cx="50" cy="50" r="18" fill="none" stroke="currentColor" stroke-width="1.5"/>
              </svg>
              <span class="absolute inset-0 flex items-center justify-center font-serif italic text-cobalt-500 text-sm md:text-base">
                linkedin
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Don't Be Shy Section -->
    <div class="py-16 text-center">
      <h2 class="font-serif italic text-5xl md:text-6xl lg:text-7xl text-cobalt-500 mb-8">
        don't be shy
      </h2>
      
      <!-- Arch SVG -->
      <div class="flex justify-center">
        <svg viewBox="0 0 60 80" class="w-16 h-20 text-cobalt-500">
          <path d="M10 70 Q10 10, 30 10 Q50 10, 50 70" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
        </svg>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Footer'
});
</script>

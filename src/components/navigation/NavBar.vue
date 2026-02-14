<template>
  <nav class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <router-link to="/" class="flex items-center">
          <span class="text-2xl font-bold text-blue-600">Vlad C</span>
        </router-link>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-8">
          <router-link
            to="/"
            class="text-gray-700 hover:text-blue-600 transition"
            :class="{ 'text-blue-600 font-semibold': $route.path === '/' }"
          >
            Home
          </router-link>
          <router-link
            to="/projects"
            class="text-gray-700 hover:text-blue-600 transition"
            :class="{ 'text-blue-600 font-semibold': $route.path === '/projects' }"
          >
            Projects
          </router-link>
          <router-link
            to="/about"
            class="text-gray-700 hover:text-blue-600 transition"
            :class="{ 'text-blue-600 font-semibold': $route.path === '/about' }"
          >
            About
          </router-link>
          <a
            href="https://linkedin.com/in/vlad"
            target="_blank"
            class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            LinkedIn
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="open = !open"
          class="md:hidden flex flex-col gap-1"
        >
          <span :class="['w-6 h-0.5 bg-gray-700 transition', { 'rotate-45 translate-y-1.5': open }]"></span>
          <span :class="['w-6 h-0.5 bg-gray-700 transition', { 'opacity-0': open }]"></span>
          <span :class="['w-6 h-0.5 bg-gray-700 transition', { '-rotate-45 -translate-y-1.5': open }]"></span>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="open" class="md:hidden pb-4">
        <router-link to="/" class="block py-2 text-gray-700 hover:text-blue-600">Home</router-link>
        <router-link to="/projects" class="block py-2 text-gray-700 hover:text-blue-600">Projects</router-link>
        <router-link to="/about" class="block py-2 text-gray-700 hover:text-blue-600">About</router-link>
        <a href="https://linkedin.com/in/vlad" target="_blank" class="block py-2 text-gray-700 hover:text-blue-600">LinkedIn</a>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
});
</script>

<style scoped></style>

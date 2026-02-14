<template>
  <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
       :class="scrolled ? 'bg-white shadow-sm border-b border-gray-100' : 'bg-transparent'">
    <div class="max-w-6xl mx-auto px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-2 group">
          <div class="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
               :class="scrolled ? 'bg-vue-700' : 'bg-white bg-opacity-20'">
            VC
          </div>
          <span class="font-bold text-lg tracking-tight"
                :class="scrolled ? 'text-gray-900' : 'text-white'">
            vlad<span class="text-vue-500">.</span>dev
          </span>
        </router-link>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-1">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            :class="[
              $route.path === link.path
                ? (scrolled ? 'text-vue-500 bg-green-50' : 'text-white bg-white bg-opacity-20')
                : (scrolled ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-50' : 'text-gray-200 hover:text-white hover:bg-white hover:bg-opacity-10')
            ]"
          >
            {{ link.label }}
          </router-link>

          <a
            href="https://github.com/caraseli02"
            target="_blank"
            data-cursor="button"
            class="ml-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
            :class="scrolled
              ? 'bg-vue-700 text-white hover:bg-vue-800'
              : 'bg-white text-vue-700 hover:bg-gray-100'"
          >
            GitHub
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="open = !open"
          class="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span :class="['w-5 h-0.5 transition-all duration-300 origin-center',
            scrolled ? 'bg-gray-700' : 'bg-white',
            open ? 'rotate-45 translate-y-2' : '']"></span>
          <span :class="['w-5 h-0.5 transition-all duration-300',
            scrolled ? 'bg-gray-700' : 'bg-white',
            open ? 'opacity-0 scale-0' : '']"></span>
          <span :class="['w-5 h-0.5 transition-all duration-300 origin-center',
            scrolled ? 'bg-gray-700' : 'bg-white',
            open ? '-rotate-45 -translate-y-2' : '']"></span>
        </button>
      </div>

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        leave-active-class="transition-all duration-200 ease-in"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="open" class="md:hidden pb-4 pt-2">
          <div class="bg-white rounded-xl shadow-lg border border-gray-100 p-2 space-y-1">
            <router-link
              v-for="link in navLinks"
              :key="link.path"
              :to="link.path"
              @click="open = false"
              class="block px-4 py-3 rounded-lg text-sm font-medium transition-colors"
              :class="$route.path === link.path
                ? 'text-vue-500 bg-green-50'
                : 'text-gray-700 hover:bg-gray-50'"
            >
              {{ link.label }}
            </router-link>
            <a
              href="https://github.com/caraseli02"
              target="_blank"
              class="block px-4 py-3 rounded-lg text-sm font-medium text-vue-700 hover:bg-green-50 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      open: false,
      scrolled: false,
      navLinks: [
        { path: "/", label: "Home" },
        { path: "/projects", label: "Projects" },
        { path: "/about", label: "About" },
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 50;
    },
  },
});
</script>

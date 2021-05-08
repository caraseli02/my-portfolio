<template>
  <NavBar />
  <Home />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import NavBar from '/src/components/navigation/NavBar.vue'
import Home from '/src/views/Home.vue'

export default defineComponent({
  name: 'App',
  components: { NavBar, Home },
  setup() {
    const theme = ref('')
    function themeInit() {
      if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }

    onMounted(themeInit) // on `mounted` call `getUserRepositories`

    return {
      theme,
      themeInit,
    }
  },
})
</script>

<style>
#app {
  background: linear-gradient(to right, #ffd756, #038631);
  min-width: 100vw;
  min-height: 100vh;
}
</style>

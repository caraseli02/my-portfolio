<template>
  <div class="min-h-screen flex flex-col" :class="{ 'custom-cursor-active': !isTouchDevice }">
    <CustomCursor />
    <NavBar />
    <main class="flex-grow">
      <router-view :key="$route.fullPath" />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/navigation/NavBar.vue";
import Footer from "./components/Footer.vue";
import CustomCursor from "./components/CustomCursor.vue";
import { useDeviceDetection } from "./composables/useDeviceDetection";

export default defineComponent({
  name: "App",
  components: { NavBar, Footer, CustomCursor },
  setup() {
    const { isTouchDevice } = useDeviceDetection();
    return { isTouchDevice };
  },
});
</script>

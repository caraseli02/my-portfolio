<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <NavBar />
    <main class="flex-grow">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/navigation/NavBar.vue";
import Footer from "./components/Footer.vue";

export default defineComponent({
  name: "App",
  components: { NavBar, Footer },
});
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <NavBar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/navigation/NavBar.vue";

export default defineComponent({
  name: "App",
  components: { NavBar },
});
</script>

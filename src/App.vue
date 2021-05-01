<template>
  <NavBar />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "/src/components/navigation/NavBar.vue";

export default defineComponent({
  name: "App",
  components: { NavBar },
});
</script>

<style>
.gradient {
  background: linear-gradient(to right, #16c0b0, #84cf6a);
}
</style>

<template>
  <div class="min-h-screen flex flex-col bg-cream-100 custom-cursor-active">
    <CustomCursor />
    <Header />
    <main class="flex-grow">
      <router-view :key="$route.fullPath" />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/layout/Header.vue";
import CustomCursor from "./components/CustomCursor.vue";

export default defineComponent({
  name: "App",
  components: { Header, CustomCursor },
});
</script>

<style>
/* Hide default cursor when custom cursor is active */
.custom-cursor-active,
.custom-cursor-active * {
  cursor: none !important;
}

/* But show default cursor on touch devices */
@media (hover: none) and (pointer: coarse) {
  .custom-cursor-active,
  .custom-cursor-active * {
    cursor: auto !important;
  }
}
</style>

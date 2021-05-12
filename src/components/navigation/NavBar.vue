<template>
  <div class="font-sans antialiased gradient rounded-b-lg">
    <nav class="flex items-center justify-between flex-wrap bg-teal p-6">
      <div class="flex items-center flex-no-shrink text-white mr-6">
        <span class="text-xl tracking-tight text-primary p-2"
          ><i class="mr-2">👋</i> My name is Vlad</span
        >
      </div>
      <themeSwitch />
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import themeSwitch from "/src/components/themeSwitch.vue";

export default defineComponent({
  setup(props) {
    const theme = inject("theme");
    return { theme };
  },
  components: {
    themeSwitch,
  },
});
</script>

<style scoped></style>

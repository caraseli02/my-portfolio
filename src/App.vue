<template>
  <NavBar />
  <Home />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, provide } from "vue";
import NavBar from "/src/components/navigation/NavBar.vue";
import Home from "/src/views/Home.vue";

export default defineComponent({
  name: "App",
  components: { NavBar, Home },
  setup() {
    const theme = ref("");
    function themeInit() {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
        theme.value = "dark";
      } else {
        document.documentElement.classList.remove("dark");
        theme.value = "light";
      }
    }
    provide("theme", theme);
    onMounted(themeInit); // on `mounted` call `getUserRepositories`

    return {
      theme,
      themeInit,
    };
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Oxygen:wght@300;700&display=swap");

* {
  font-family: "Oxygen", sans-serif;
}

html {
  min-width: 100vw;
  min-height: 100vh;
  background: radial-gradient(
    circle at top right,
    #f9f9f9 0%,
    #edd05f 15%,
    #00c6fb 18%,
    #005bea 100%
  );
  transition: background 0.3s ease-in-out;
}

.dark {
  background: radial-gradient(
    circle at top right,
    #86bbfc 0%,
    #6e8fc2 15%,
    #020c6b 16%,
    #010948 100%
  );
  transition: background 0.3s ease-in-out;
}

.glass-error,
.glass-success,
.glass-light,
.glass-gray,
.glass-dark {
  border: 2px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  z-index: 2;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

.glass-dark {
  border: 2px solid rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.5);
}

.glass-success {
  background: rgba(1, 130, 11, 0.6);
  border: 2px solid rgba(0, 255, 170, 0.2);
}

.glass-error {
  background: rgba(216, 1, 1, 0.6);
  border: 2px solid rgba(238, 4, 4, 0.2);
}

.glass-gray {
  background: rgba(138, 136, 136, 0.2);
  padding: 15px;
  border: none;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
  .slide-fade-leave-to

  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}

.neo-light {
  border-radius: 35px;
  background: linear-gradient(225deg, #0abef1, #08a0cb);
  box-shadow: -9px 9px 6px #0897bf, 9px -9px 6px #0acdff;
}

.neo-dark {
  border-radius: 35px;
  background: #020c6b;
  box-shadow: -5px 5px 10px #010742, 5px -5px 10px #031194;
}
</style>

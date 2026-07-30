import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "@fontsource/figtree/400.css";
import "@fontsource/figtree/500.css";
import "@fontsource/figtree/600.css";
import "@fontsource/figtree/700.css";
import "@fontsource/figtree/800.css";
import "@fontsource/figtree/400-italic.css";
import "@fontsource/young-serif/400.css";
import "@fontsource/jetbrains-mono/latin-400.css";

import "./assets/index.css";
import { initReveals, refreshReveals } from "./composables/reveal";

createApp(App).use(router).mount("#app");

// Global scroll reveal for .reveal / .reveal-stagger
initReveals();

router.afterEach(() => {
  requestAnimationFrame(() => {
    requestAnimationFrame(refreshReveals);
  });
});

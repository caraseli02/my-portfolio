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

createApp(App).use(router).mount("#app");

// Global scroll reveal observer — handles .reveal, .reveal-stagger, .footer-reveal
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  );

  const observeReveals = () => {
    document.querySelectorAll(".reveal, .reveal-stagger, .footer-reveal").forEach((el) => {
      if (!el.classList.contains("revealed")) {
        revealObserver.observe(el);
      }
    });
  };

  observeReveals();
  router.afterEach(() => {
    setTimeout(observeReveals, 100);
  });
}

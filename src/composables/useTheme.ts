import { ref, onMounted } from "vue";

type Theme = "light" | "dark";

const theme = ref<Theme>("light");
let initialized = false;
let transitionTimer: number | null = null;

function apply(t: Theme, withTransition = false) {
  theme.value = t;
  localStorage.setItem("theme", t);

  const root = document.documentElement;
  if (withTransition) {
    root.classList.add("theme-transition");
    if (transitionTimer) window.clearTimeout(transitionTimer);
    transitionTimer = window.setTimeout(() => {
      root.classList.remove("theme-transition");
      transitionTimer = null;
    }, 320);
  }

  root.classList.toggle("dark", t === "dark");
}

export function useTheme() {
  onMounted(() => {
    if (initialized) return;
    initialized = true;
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored) {
      apply(stored);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      apply(prefersDark ? "dark" : "light");
    }
  });

  function toggle() {
    apply(theme.value === "dark" ? "light" : "dark", true);
  }

  return { theme, toggle };
}

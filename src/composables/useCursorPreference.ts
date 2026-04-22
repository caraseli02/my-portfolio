import { ref, onMounted } from "vue";

const STORAGE_KEY = "custom-cursor-enabled";

const enabled = ref(false);
let initialized = false;

function readStored(): boolean | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === "true") return true;
    if (raw === "false") return false;
    return null;
  } catch {
    return null;
  }
}

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isCoarsePointer(): boolean {
  return window.matchMedia("(hover: none) and (pointer: coarse)").matches;
}

function apply(value: boolean, persist: boolean) {
  enabled.value = value;
  if (persist) {
    try {
      localStorage.setItem(STORAGE_KEY, String(value));
    } catch {
      /* ignore quota / private mode */
    }
  }
}

export function useCursorPreference() {
  onMounted(() => {
    if (initialized) return;
    initialized = true;

    if (prefersReducedMotion() || isCoarsePointer()) {
      apply(false, false);
      return;
    }

    const stored = readStored();
    apply(stored ?? false, false);

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    motionQuery.addEventListener("change", (e) => {
      if (e.matches) apply(false, false);
    });
  });

  function toggle() {
    if (prefersReducedMotion() || isCoarsePointer()) return;
    apply(!enabled.value, true);
  }

  return { enabled, toggle };
}

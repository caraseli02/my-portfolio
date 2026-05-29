import { ref, onMounted, onUnmounted } from "vue";

const isTouchDevice = ref(false);
const prefersReducedMotion = ref(false);
const supportsHover = ref(true);
let activeCount = 0;
let hoverQuery: MediaQueryList | null = null;
let motionQuery: MediaQueryList | null = null;

function handleHoverChange(e: MediaQueryListEvent) {
  supportsHover.value = e.matches;
  isTouchDevice.value = !e.matches;
}

function handleMotionChange(e: MediaQueryListEvent) {
  prefersReducedMotion.value = e.matches;
}

function init() {
  if (typeof window === "undefined") return;

  if (activeCount === 0) {
    hoverQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    supportsHover.value = hoverQuery.matches;
    isTouchDevice.value = !hoverQuery.matches;
    prefersReducedMotion.value = motionQuery.matches;

    hoverQuery.addEventListener("change", handleHoverChange);
    motionQuery.addEventListener("change", handleMotionChange);
  }

  activeCount++;
}

function cleanup() {
  activeCount--;
  if (activeCount === 0) {
    if (hoverQuery) {
      hoverQuery.removeEventListener("change", handleHoverChange);
      hoverQuery = null;
    }
    if (motionQuery) {
      motionQuery.removeEventListener("change", handleMotionChange);
      motionQuery = null;
    }
  }
}

export function useDeviceDetection() {
  onMounted(init);
  onUnmounted(cleanup);
  return { isTouchDevice, prefersReducedMotion, supportsHover };
}

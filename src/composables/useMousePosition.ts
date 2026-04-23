import { ref, onMounted, onUnmounted } from "vue";
import { useDeviceDetection } from "./useDeviceDetection";

const x = ref(0);
const y = ref(0);
const smoothX = ref(0);
const smoothY = ref(0);

let refCount = 0;
let rafId: number | null = null;
const LERP = 0.15;
let isVisible = true;

function onMouseMove(e: MouseEvent) {
  x.value = e.clientX;
  y.value = e.clientY;
}

function tick() {
  if (!isVisible) return;
  smoothX.value += (x.value - smoothX.value) * LERP;
  smoothY.value += (y.value - smoothY.value) * LERP;
  rafId = requestAnimationFrame(tick);
}

function start() {
  document.addEventListener("mousemove", onMouseMove, { passive: true });
  document.addEventListener("visibilitychange", onVisibilityChange);
  rafId = requestAnimationFrame(tick);
}

function stop() {
  document.removeEventListener("mousemove", onMouseMove);
  document.removeEventListener("visibilitychange", onVisibilityChange);
  if (rafId !== null) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
}

function onVisibilityChange() {
  isVisible = !document.hidden;
  if (isVisible && refCount > 0) {
    // Restart the rAF loop and re-add listeners
    document.addEventListener("mousemove", onMouseMove, { passive: true });
    if (rafId === null) rafId = requestAnimationFrame(tick);
  } else if (!isVisible) {
    // Remove listeners to allow bfcache restoration
    document.removeEventListener("mousemove", onMouseMove);
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  }
}

export function useMousePosition() {
  const { isTouchDevice } = useDeviceDetection();

  onMounted(() => {
    refCount++;
    if (refCount === 1 && !isTouchDevice.value) {
      start();
    }
  });

  onUnmounted(() => {
    refCount--;
    if (refCount === 0) {
      stop();
    }
  });

  return { x, y, smoothX, smoothY };
}

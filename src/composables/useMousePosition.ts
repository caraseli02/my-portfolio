import { ref, onMounted, onUnmounted } from "vue";
import { useDeviceDetection } from "./useDeviceDetection";

const x = ref(0);
const y = ref(0);
const smoothX = ref(0);
const smoothY = ref(0);

let refCount = 0;
let rafId: number | null = null;
let idleFrames = 0;
const LERP = 0.15;
const CONVERGE_THRESHOLD = 0.1;
const MAX_IDLE_FRAMES = 3;

function onMouseMove(e: MouseEvent) {
  x.value = e.clientX;
  y.value = e.clientY;
  idleFrames = 0;
  if (rafId === null) {
    rafId = requestAnimationFrame(tick);
  }
}

function tick() {
  const dx = x.value - smoothX.value;
  const dy = y.value - smoothY.value;
  smoothX.value += dx * LERP;
  smoothY.value += dy * LERP;

  if (Math.abs(dx) < CONVERGE_THRESHOLD && Math.abs(dy) < CONVERGE_THRESHOLD) {
    idleFrames++;
    if (idleFrames >= MAX_IDLE_FRAMES) {
      smoothX.value = x.value;
      smoothY.value = y.value;
      rafId = null;
      return;
    }
  } else {
    idleFrames = 0;
  }

  rafId = requestAnimationFrame(tick);
}

function start() {
  document.addEventListener("mousemove", onMouseMove, { passive: true });
}

function stop() {
  document.removeEventListener("mousemove", onMouseMove);
  if (rafId !== null) {
    cancelAnimationFrame(rafId);
    rafId = null;
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

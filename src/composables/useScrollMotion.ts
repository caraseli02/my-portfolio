import { computed, onMounted, onUnmounted, readonly, ref } from "vue";

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * RAF-throttled document scroll state for scroll-linked motion:
 * the registration line (progress), hero grid drift, and scroll-cue dissolve.
 */
export function useScrollMotion() {
  const progress = ref(0);
  const scrollY = ref(0);

  let rafId = 0;
  let queued = false;

  const update = () => {
    queued = false;
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    scrollY.value = y;
    progress.value = max > 0 ? Math.min(1, y / max) : 0;
  };

  const requestUpdate = () => {
    if (queued) return;
    queued = true;
    rafId = requestAnimationFrame(update);
  };

  onMounted(() => {
    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", requestUpdate);
    window.removeEventListener("resize", requestUpdate);
    cancelAnimationFrame(rafId);
  });

  const gridDrift = computed(() => (prefersReducedMotion ? 0 : Math.min(scrollY.value * 0.08, 48)));

  const cueVisible = computed(() => scrollY.value < 60);

  return { progress: readonly(progress), gridDrift, cueVisible };
}

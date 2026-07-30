import type { Directive } from "vue";

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let observer: IntersectionObserver | null = null;

const getObserver = (): IntersectionObserver => {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer?.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
  }
  return observer;
};

/**
 * v-in — adds `.in` once the element scrolls into view.
 * Motion utility classes (.mv, .rule, .mv-card, .wm-inner) respond to it.
 */
export const vIn: Directive<HTMLElement> = {
  mounted(el) {
    if (prefersReducedMotion) {
      el.classList.add("in");
      return;
    }
    getObserver().observe(el);
  },
  unmounted(el) {
    observer?.unobserve(el);
  },
};

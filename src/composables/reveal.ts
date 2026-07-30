const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let revealObserver: IntersectionObserver | null = null;

function revealImmediately(el: Element) {
  el.classList.add("revealed");
}

export function refreshReveals() {
  if (prefersReducedMotion) {
    document.querySelectorAll(".reveal, .reveal-stagger").forEach(revealImmediately);
    return;
  }

  document.querySelectorAll(".reveal, .reveal-stagger").forEach((el) => {
    if (el.classList.contains("revealed")) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      revealImmediately(el);
    } else {
      revealObserver?.observe(el);
    }
  });
}

export function initReveals() {
  if (prefersReducedMotion) {
    refreshReveals();
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealImmediately(entry.target);
          revealObserver?.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.05, rootMargin: "0px 0px -20px 0px" },
  );

  refreshReveals();
}

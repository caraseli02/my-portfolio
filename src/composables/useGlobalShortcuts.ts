import { onMounted, onUnmounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { featuredProjects } from "../data/projects";

const GO_TIMEOUT_MS = 900;

function inEditable(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  if (target.tagName === "INPUT") return true;
  if (target.tagName === "TEXTAREA") return true;
  if (target.isContentEditable) return true;
  return false;
}

function caseStudySlugs(): string[] {
  return featuredProjects.filter((p) => p.caseStudy).map((p) => p.caseStudy!.slug);
}

export function useGlobalShortcuts() {
  const router = useRouter();
  const route = useRoute();

  const shortcutsOpen = ref(false);

  let gHeld = false;
  let gTimer: number | null = null;

  function armG() {
    gHeld = true;
    if (gTimer) window.clearTimeout(gTimer);
    gTimer = window.setTimeout(() => {
      gHeld = false;
      gTimer = null;
    }, GO_TIMEOUT_MS);
  }

  function disarmG() {
    gHeld = false;
    if (gTimer) {
      window.clearTimeout(gTimer);
      gTimer = null;
    }
  }

  function jumpCaseStudy(delta: number) {
    const slugs = caseStudySlugs();
    if (!slugs.length) return;

    if (route.name === "case-study" && typeof route.params.slug === "string") {
      const idx = slugs.indexOf(route.params.slug);
      if (idx === -1) return;
      const nextIdx = (idx + delta + slugs.length) % slugs.length;
      void router.push({ name: "case-study", params: { slug: slugs[nextIdx] } });
      return;
    }

    const firstIdx = delta >= 0 ? 0 : slugs.length - 1;
    void router.push({ name: "case-study", params: { slug: slugs[firstIdx] } });
  }

  function handleKey(e: KeyboardEvent) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (inEditable(e.target)) return;

    const key = e.key;

    if (key === "?" || (key === "/" && e.shiftKey)) {
      e.preventDefault();
      shortcutsOpen.value = true;
      return;
    }

    if (key === "Escape" && shortcutsOpen.value) {
      e.preventDefault();
      shortcutsOpen.value = false;
      return;
    }

    if (gHeld) {
      if (key === "h" || key === "H") {
        e.preventDefault();
        disarmG();
        void router.push("/");
        return;
      }
      if (key === "p" || key === "P") {
        e.preventDefault();
        disarmG();
        void router.push({ name: "projects" });
        return;
      }
      disarmG();
      return;
    }

    if (key === "g" || key === "G") {
      armG();
      return;
    }

    if (key === "j" || key === "J") {
      e.preventDefault();
      jumpCaseStudy(1);
      return;
    }

    if (key === "k" || key === "K") {
      e.preventDefault();
      jumpCaseStudy(-1);
      return;
    }
  }

  onMounted(() => {
    window.addEventListener("keydown", handleKey);
  });

  onUnmounted(() => {
    window.removeEventListener("keydown", handleKey);
    disarmG();
  });

  return { shortcutsOpen };
}

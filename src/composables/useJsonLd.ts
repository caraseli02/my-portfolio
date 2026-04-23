import { onMounted, onUnmounted } from "vue";

export function useJsonLd(schema: Record<string, unknown>) {
  let el: HTMLScriptElement | null = null;

  onMounted(() => {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.textContent = JSON.stringify(schema);
    document.head.appendChild(el);
  });

  onUnmounted(() => {
    if (el) {
      document.head.removeChild(el);
      el = null;
    }
  });
}

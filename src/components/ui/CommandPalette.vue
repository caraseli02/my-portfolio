<template>
  <Teleport to="body">
    <Transition name="palette">
      <div
        v-if="open"
        class="fixed inset-0 z-[200] flex items-start justify-center px-4 pt-[15vh] backdrop-blur-sm"
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        @click.self="close"
        @keydown.esc="close"
      >
        <div class="absolute inset-0 bg-charcoal/40 dark:bg-charcoal/70" aria-hidden="true"></div>

        <div
          ref="panelRef"
          class="relative w-full max-w-xl border border-cobalt-500/25 bg-cream-50 shadow-[0_30px_80px_-24px_rgba(17,27,143,0.35)] dark:border-cobalt-300/25 dark:bg-charcoal-50"
        >
          <div
            class="flex items-center gap-3 border-b border-cobalt-500/15 px-4 py-3 dark:border-cobalt-300/15"
          >
            <span
              class="font-mono text-[11px] uppercase tracking-[0.24em] text-cobalt-500/60 dark:text-cobalt-300/60"
              >cmd</span
            >
            <input
              ref="inputRef"
              v-model="query"
              type="text"
              placeholder="Jump to… case study, page, action"
              class="flex-1 bg-transparent font-mono text-sm text-cobalt-700 placeholder:text-cobalt-500/40 focus:outline-none dark:text-cobalt-100 dark:placeholder:text-cobalt-300/40"
              @keydown.down.prevent="move(1)"
              @keydown.up.prevent="move(-1)"
              @keydown.enter.prevent="select()"
              @keydown.esc="close"
            />
            <kbd
              class="font-mono text-[10px] uppercase tracking-[0.16em] text-cobalt-500/50 dark:text-cobalt-300/50"
            >
              esc
            </kbd>
          </div>

          <ul v-if="filtered.length" ref="listRef" class="max-h-[50vh] overflow-y-auto py-2">
            <li
              v-for="(item, index) in filtered"
              :key="item.id"
              :data-index="index"
              :class="[
                'flex cursor-pointer items-center justify-between gap-3 px-4 py-2.5 font-mono text-sm transition-colors',
                index === activeIndex
                  ? 'bg-cobalt-500/10 text-cobalt-700 dark:bg-cobalt-300/12 dark:text-cobalt-100'
                  : 'text-cobalt-600 dark:text-cobalt-100 hover:bg-cobalt-500/5 dark:hover:bg-cobalt-300/5',
              ]"
              @click="runItem(item)"
              @mouseenter="activeIndex = index"
            >
              <div class="flex min-w-0 items-center gap-3">
                <span
                  class="shrink-0 text-[10px] uppercase tracking-[0.18em]"
                  :class="
                    index === activeIndex
                      ? 'text-cobalt-500 dark:text-cobalt-300'
                      : 'text-cobalt-500/40 dark:text-cobalt-300/40'
                  "
                >
                  {{ item.group }}
                </span>
                <span class="truncate">{{ item.label }}</span>
              </div>
              <span
                v-if="item.hint"
                class="shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-cobalt-500/45 dark:text-cobalt-300/45"
              >
                {{ item.hint }}
              </span>
            </li>
          </ul>

          <div
            v-else
            class="px-4 py-8 text-center font-mono text-xs uppercase tracking-[0.18em] text-cobalt-500/50 dark:text-cobalt-300/50"
          >
            no match · esc to close
          </div>

          <div
            class="flex items-center justify-between border-t border-cobalt-500/15 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-cobalt-500/55 dark:border-cobalt-300/15 dark:text-cobalt-200/80"
          >
            <span>↑↓ navigate</span>
            <span>↵ select</span>
            <span>? shortcuts</span>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { featuredProjects } from "../../data/projects";
import { useTheme } from "../../composables/useTheme";
import { useCursorPreference } from "../../composables/useCursorPreference";

interface Item {
  id: string;
  group: string;
  label: string;
  hint?: string;
  run: () => void;
  keywords?: string;
}

const router = useRouter();
const { toggle: toggleTheme } = useTheme();
const { toggle: toggleCursor } = useCursorPreference();

const open = ref(false);
const query = ref("");
const activeIndex = ref(0);
const inputRef = ref<HTMLInputElement | null>(null);
const panelRef = ref<HTMLElement | null>(null);
const listRef = ref<HTMLElement | null>(null);

const emit = defineEmits<{ (e: "open-shortcuts"): void }>();

const baseItems = computed<Item[]>(() => {
  const caseStudyItems: Item[] = featuredProjects
    .filter((p) => p.caseStudy)
    .map((p, i) => ({
      id: `case-${p.caseStudy!.slug}`,
      group: "case",
      label: p.title,
      hint: `0${i + 1}`,
      keywords: `${p.tech.join(" ")} ${p.description}`,
      run: () => router.push({ name: "case-study", params: { slug: p.caseStudy!.slug } }),
    }));

  const nav: Item[] = [
    { id: "nav-home", group: "nav", label: "Home", hint: "/", run: () => router.push("/") },
    {
      id: "nav-projects",
      group: "nav",
      label: "All projects",
      hint: "/projects",
      run: () => router.push({ name: "projects" }),
    },
    {
      id: "nav-about",
      group: "nav",
      label: "About",
      hint: "/about",
      run: () => router.push("/about"),
    },
    {
      id: "nav-contact",
      group: "nav",
      label: "Contact",
      hint: "/contact",
      run: () => router.push("/contact"),
    },
  ];

  const external: Item[] = [
    {
      id: "ext-github",
      group: "ext",
      label: "GitHub profile",
      hint: "↗",
      run: () => window.open("https://github.com/caraseli02", "_blank", "noopener,noreferrer"),
    },
    {
      id: "ext-linkedin",
      group: "ext",
      label: "LinkedIn",
      hint: "↗",
      run: () =>
        window.open("https://linkedin.com/in/vlad-caraseli", "_blank", "noopener,noreferrer"),
    },
  ];

  const actions: Item[] = [
    {
      id: "act-theme",
      group: "act",
      label: "Toggle theme",
      hint: "light/dark",
      run: () => toggleTheme(),
    },
    {
      id: "act-cursor",
      group: "act",
      label: "Toggle custom cursor",
      hint: "on/off",
      run: () => toggleCursor(),
    },
    {
      id: "act-shortcuts",
      group: "act",
      label: "Keyboard shortcuts",
      hint: "?",
      run: () => emit("open-shortcuts"),
    },
  ];

  return [...caseStudyItems, ...nav, ...external, ...actions];
});

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase();
  if (!q) return baseItems.value;
  return baseItems.value.filter((item) => {
    const hay =
      `${item.label} ${item.group} ${item.hint ?? ""} ${item.keywords ?? ""}`.toLowerCase();
    return hay.includes(q);
  });
});

watch(filtered, () => {
  activeIndex.value = 0;
});

function move(delta: number) {
  const len = filtered.value.length;
  if (!len) return;
  activeIndex.value = (activeIndex.value + delta + len) % len;
  scrollIntoView();
}

function scrollIntoView() {
  nextTick(() => {
    const el = listRef.value?.querySelector(`[data-index="${activeIndex.value}"]`);
    if (el instanceof HTMLElement) {
      el.scrollIntoView({ block: "nearest" });
    }
  });
}

function select() {
  const item = filtered.value[activeIndex.value];
  if (item) runItem(item);
}

function runItem(item: Item) {
  item.run();
  close();
}

function close() {
  open.value = false;
  if (triggerEl) {
    triggerEl.focus();
    triggerEl = null;
  }
}

let triggerEl: HTMLElement | null = null;

function openPalette() {
  triggerEl = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  open.value = true;
  query.value = "";
  activeIndex.value = 0;
  nextTick(() => inputRef.value?.focus());
}

function handleTabTrap(e: KeyboardEvent) {
  if (e.key !== "Tab" || !panelRef.value) return;
  const focusable = panelRef.value.querySelectorAll<HTMLElement>(
    'input, button, [tabindex]:not([tabindex="-1"])',
  );
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

function handleKey(e: KeyboardEvent) {
  const target = e.target as HTMLElement | null;
  const isInEditable =
    target &&
    (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable);

  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    if (open.value) close();
    else openPalette();
    return;
  }

  if (e.key === "Escape" && open.value) {
    e.preventDefault();
    close();
    return;
  }

  if (isInEditable || open.value) return;

  if (e.key === "?" || (e.key === "/" && e.shiftKey)) {
    e.preventDefault();
    emit("open-shortcuts");
  }
}

onMounted(() => {
  window.addEventListener("keydown", handleKey);
  window.addEventListener("keydown", handleTabTrap);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKey);
  window.removeEventListener("keydown", handleTabTrap);
});

defineExpose({ open: openPalette, close });
</script>

<style scoped>
.palette-enter-active,
.palette-leave-active {
  transition: opacity 0.15s ease;
}

.palette-enter-active > div:last-child,
.palette-leave-active > div:last-child {
  transition:
    opacity 0.2s ease,
    transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.palette-enter-from,
.palette-leave-to {
  opacity: 0;
}

.palette-enter-from > div:last-child,
.palette-leave-to > div:last-child {
  opacity: 0;
  transform: translateY(-8px);
}

@media (prefers-reduced-motion: reduce) {
  .palette-enter-active,
  .palette-leave-active,
  .palette-enter-active > div:last-child,
  .palette-leave-active > div:last-child {
    transition: none;
  }
}
</style>

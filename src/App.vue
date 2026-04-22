<template>
  <div class="min-h-screen flex flex-col bg-cream-100 dark:bg-charcoal">
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-cobalt-500 focus:px-4 focus:py-2 focus:text-white"
    >
      Skip to content
    </a>

    <Header @open-command-palette="openPalette" @open-shortcuts="showShortcuts = true" />

    <main id="main-content" class="flex-grow">
      <router-view />
    </main>

    <Teleport to="body">
      <div
        v-if="showPalette"
        class="fixed inset-0 z-[120] bg-charcoal/45 px-4 py-20 backdrop-blur-sm"
        @click.self="closePalette"
      >
        <div class="mx-auto max-w-2xl overflow-hidden rounded-[1.5rem] panel-surface">
          <div class="border-b border-cobalt-500/10 px-5 py-4 dark:border-cobalt-300/12">
            <p class="mono-label mb-3">command palette</p>
            <input
              ref="paletteInput"
              v-model="query"
              type="text"
              class="w-full bg-transparent text-lg text-charcoal outline-none placeholder:text-cobalt-500/45 dark:text-cobalt-100 dark:placeholder:text-cobalt-100/38"
              placeholder="Jump to page, case study, or action"
            />
          </div>

          <div class="max-h-[26rem] overflow-y-auto p-2">
            <button
              v-for="(item, index) in filteredCommands"
              :key="item.id"
              type="button"
              class="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-xl px-4 py-3 text-left transition-colors"
              :class="
                index === selectedIndex
                  ? 'bg-cobalt-500 text-white dark:bg-cobalt-300 dark:text-charcoal'
                  : 'hover:bg-cobalt-500/[0.05] dark:hover:bg-cobalt-300/[0.08]'
              "
              @mouseenter="selectedIndex = index"
              @click="runCommand(item)"
            >
              <div>
                <p class="text-sm font-semibold uppercase tracking-[0.12em]">
                  {{ item.label }}
                </p>
                <p
                  class="mt-1 text-sm"
                  :class="
                    index === selectedIndex
                      ? 'text-white/82 dark:text-charcoal/82'
                      : 'text-cobalt-600 dark:text-cobalt-100/76'
                  "
                >
                  {{ item.group }}
                </p>
              </div>
              <span
                v-if="item.shortcut"
                class="font-mono text-[11px] uppercase tracking-[0.16em]"
                :class="
                  index === selectedIndex
                    ? 'text-white/80 dark:text-charcoal/80'
                    : 'text-cobalt-500/60 dark:text-cobalt-100/62'
                "
              >
                {{ item.shortcut }}
              </span>
            </button>

            <p
              v-if="filteredCommands.length === 0"
              class="px-4 py-6 text-sm text-cobalt-600 dark:text-cobalt-100/72"
            >
              No matches. Try "case", "contact", or a project name.
            </p>
          </div>
        </div>
      </div>

      <div
        v-if="showShortcuts"
        class="fixed inset-0 z-[120] bg-charcoal/45 px-4 py-20 backdrop-blur-sm"
        @click.self="showShortcuts = false"
      >
        <div class="mx-auto max-w-xl rounded-[1.5rem] panel-surface p-6 md:p-8">
          <div class="flex items-start justify-between gap-4">
            <div>
              <p class="mono-label mb-3">keyboard shortcuts</p>
              <h2 class="text-3xl font-display text-charcoal dark:text-cobalt-100">Fast paths</h2>
            </div>
            <button type="button" class="command-chip" @click="showShortcuts = false">esc</button>
          </div>

          <div class="mt-6 space-y-3">
            <div
              class="flex items-center justify-between gap-4 border-b border-cobalt-500/10 pb-3 dark:border-cobalt-300/12"
            >
              <span class="text-sm text-cobalt-600 dark:text-cobalt-100/84"
                >Open command palette</span
              >
              <span class="command-chip">⌘K / Ctrl+K</span>
            </div>
            <div
              class="flex items-center justify-between gap-4 border-b border-cobalt-500/10 pb-3 dark:border-cobalt-300/12"
            >
              <span class="text-sm text-cobalt-600 dark:text-cobalt-100/84"
                >Open shortcuts help</span
              >
              <span class="command-chip">?</span>
            </div>
            <div
              class="flex items-center justify-between gap-4 border-b border-cobalt-500/10 pb-3 dark:border-cobalt-300/12"
            >
              <span class="text-sm text-cobalt-600 dark:text-cobalt-100/84">Close overlays</span>
              <span class="command-chip">Esc</span>
            </div>
            <div class="flex items-center justify-between gap-4">
              <span class="text-sm text-cobalt-600 dark:text-cobalt-100/84"
                >Previous / next case study</span
              >
              <span class="command-chip">J / K</span>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import Header from "./components/layout/Header.vue";
import { featuredProjects, getProjectIndex } from "./data/projects";
import { useTheme } from "./composables/useTheme";

type CommandItem = {
  id: string;
  label: string;
  group: string;
  shortcut?: string;
  action: () => void;
};

const router = useRouter();
const route = useRoute();
const { toggle } = useTheme();

const showPalette = ref(false);
const showShortcuts = ref(false);
const query = ref("");
const selectedIndex = ref(0);
const paletteInput = ref<HTMLInputElement | null>(null);

const caseStudyCommands: CommandItem[] = featuredProjects
  .filter((project) => project.caseStudy)
  .map((project, index) => ({
    id: project.caseStudy!.slug,
    label: project.title,
    group: `case study ${String(index + 1).padStart(2, "0")}`,
    action: () => router.push({ name: "case-study", params: { slug: project.caseStudy!.slug } }),
  }));

const commands = computed<CommandItem[]>(() => [
  {
    id: "home",
    label: "Home",
    group: "navigation",
    shortcut: "g h",
    action: () => router.push({ name: "home" }),
  },
  {
    id: "projects",
    label: "Jump to case studies",
    group: "navigation",
    shortcut: "g p",
    action: () => router.push({ name: "home", hash: "#case-studies" }),
  },
  {
    id: "about",
    label: "About",
    group: "navigation",
    action: () => router.push({ name: "about" }),
  },
  {
    id: "contact",
    label: "Contact",
    group: "navigation",
    action: () => router.push({ name: "contact" }),
  },
  {
    id: "theme",
    label: "Toggle theme",
    group: "actions",
    shortcut: "t",
    action: () => toggle(),
  },
  ...caseStudyCommands,
]);

const filteredCommands = computed(() => {
  const search = query.value.trim().toLowerCase();

  if (!search) return commands.value;

  return commands.value.filter((item) => {
    const haystack = `${item.label} ${item.group}`.toLowerCase();
    return haystack.includes(search);
  });
});

const isTypingTarget = (target: EventTarget | null) => {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || target.isContentEditable;
};

const closePalette = () => {
  showPalette.value = false;
  query.value = "";
  selectedIndex.value = 0;
};

const openPalette = async () => {
  showShortcuts.value = false;
  showPalette.value = true;
  query.value = "";
  selectedIndex.value = 0;
  await nextTick();
  paletteInput.value?.focus();
};

const runCommand = async (item: CommandItem) => {
  closePalette();
  showShortcuts.value = false;
  await item.action();
};

const navigateCaseStudy = (direction: -1 | 1) => {
  if (route.name !== "case-study" || typeof route.params.slug !== "string") return;

  const currentIndex = getProjectIndex(route.params.slug);
  if (currentIndex < 0) return;

  const nextProject = featuredProjects[currentIndex + direction];
  if (!nextProject?.caseStudy?.slug) return;

  router.push({ name: "case-study", params: { slug: nextProject.caseStudy.slug } });
};

const handleKeydown = (event: KeyboardEvent) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    if (showPalette.value) {
      closePalette();
    } else {
      void openPalette();
    }
    return;
  }

  if (event.key === "Escape") {
    closePalette();
    showShortcuts.value = false;
    return;
  }

  if (showPalette.value) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      selectedIndex.value = Math.min(selectedIndex.value + 1, filteredCommands.value.length - 1);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      selectedIndex.value = Math.max(selectedIndex.value - 1, 0);
      return;
    }

    if (event.key === "Enter") {
      const item = filteredCommands.value[selectedIndex.value];
      if (item) {
        event.preventDefault();
        void runCommand(item);
      }
    }

    return;
  }

  if (isTypingTarget(event.target)) return;

  if (event.key === "?") {
    event.preventDefault();
    showShortcuts.value = true;
    return;
  }

  if (event.key.toLowerCase() === "j") {
    navigateCaseStudy(-1);
    return;
  }

  if (event.key.toLowerCase() === "k") {
    navigateCaseStudy(1);
  }
};

watch(query, () => {
  selectedIndex.value = 0;
});

watch(
  () => route.fullPath,
  () => {
    closePalette();
    showShortcuts.value = false;
  },
);

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeydown);
});
</script>

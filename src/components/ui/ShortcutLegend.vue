<template>
  <Teleport to="body">
    <Transition name="legend">
      <div
        v-if="open"
        class="fixed inset-0 z-[200] flex items-center justify-center px-4"
        role="dialog"
        aria-modal="true"
        aria-label="Keyboard shortcuts"
        @click.self="$emit('close')"
        @keydown.esc="$emit('close')"
      >
        <div
          class="absolute inset-0 bg-charcoal/45 backdrop-blur-sm dark:bg-charcoal/70"
          aria-hidden="true"
          @click="$emit('close')"
        ></div>

        <div
          class="relative w-full max-w-md border border-cobalt-500/25 bg-cream-50 p-6 shadow-[0_30px_80px_-24px_rgba(17,27,143,0.35)] dark:border-cobalt-300/25 dark:bg-charcoal-50 md:p-7"
        >
          <div
            class="flex items-center justify-between gap-4 border-b border-cobalt-500/15 pb-3 dark:border-cobalt-300/15"
          >
            <p class="editorial-kicker">keyboard shortcuts</p>
            <button
              type="button"
              class="flex min-h-11 items-center px-2 font-mono text-[11px] uppercase tracking-[0.16em] text-cobalt-500/60 transition-colors hover:text-cobalt-700 dark:text-cobalt-300/60 dark:hover:text-cobalt-100"
              aria-label="Close"
              @click="$emit('close')"
            >
              esc
            </button>
          </div>

          <dl class="mt-5 grid grid-cols-[auto_minmax(0,1fr)] gap-x-6 gap-y-3 font-mono text-sm">
            <dt class="flex items-center gap-1">
              <kbd class="kbd">⌘</kbd><kbd class="kbd">K</kbd>
            </dt>
            <dd class="self-center text-cobalt-600 dark:text-cobalt-100/80">
              open command palette
            </dd>

            <dt><kbd class="kbd">J</kbd></dt>
            <dd class="self-center text-cobalt-600 dark:text-cobalt-100/80">next case study</dd>

            <dt><kbd class="kbd">K</kbd></dt>
            <dd class="self-center text-cobalt-600 dark:text-cobalt-100/80">previous case study</dd>

            <dt><kbd class="kbd">G</kbd> <kbd class="kbd">H</kbd></dt>
            <dd class="self-center text-cobalt-600 dark:text-cobalt-100/80">go home</dd>

            <dt><kbd class="kbd">G</kbd> <kbd class="kbd">P</kbd></dt>
            <dd class="self-center text-cobalt-600 dark:text-cobalt-100/80">go to all projects</dd>

            <dt><kbd class="kbd">?</kbd></dt>
            <dd class="self-center text-cobalt-600 dark:text-cobalt-100/80">show this legend</dd>

            <dt><kbd class="kbd">esc</kbd></dt>
            <dd class="self-center text-cobalt-600 dark:text-cobalt-100/80">close overlay</dd>
          </dl>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
defineProps<{ open: boolean }>();
defineEmits<{ (e: "close"): void }>();
</script>

<style scoped>
.kbd {
  display: inline-flex;
  min-width: 1.75rem;
  height: 1.75rem;
  align-items: center;
  justify-content: center;
  padding: 0 0.4rem;
  border: 1px solid color-mix(in oklch, var(--color-primary) 25%, transparent);
  background: color-mix(in oklch, var(--color-surface) 70%, transparent);
  color: var(--color-primary);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

:global(.dark) .kbd {
  border-color: color-mix(in oklch, var(--color-primary) 30%, transparent);
  background: color-mix(in oklch, var(--color-primary) 8%, transparent);
  color: var(--color-primary);
}

.legend-enter-active,
.legend-leave-active {
  transition: opacity 0.15s ease;
}

.legend-enter-active > div:last-child,
.legend-leave-active > div:last-child {
  transition:
    opacity 0.2s ease,
    transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.legend-enter-from,
.legend-leave-to {
  opacity: 0;
}

.legend-enter-from > div:last-child,
.legend-leave-to > div:last-child {
  opacity: 0;
  transform: scale(0.96);
}

@media (prefers-reduced-motion: reduce) {
  .legend-enter-active,
  .legend-leave-active,
  .legend-enter-active > div:last-child,
  .legend-leave-active > div:last-child {
    transition: none;
  }
}
</style>

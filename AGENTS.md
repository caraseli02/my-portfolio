# AGENTS.md

Guidance for agents working in this repository.

## Project Overview

Personal portfolio for Vlad Caraseli — a CV-aligned Vue 3 site with visual work samples from LinkedIn showcases.

## Development Commands

```bash
vp install   # Install dependencies
vp dev       # Start development server
vp build     # Production build
vp check     # Format, lint, and typecheck
vp test      # Run tests
vp preview   # Preview production build
```

Do not use npm/pnpm/yarn directly — use `vp`.

## Architecture

### Tech Stack

- **Framework**: Vue 3 with Composition API (`<script setup lang="ts">`)
- **Build**: Vite+ (`vite-plus`)
- **Styling**: Tailwind CSS v4 with cobalt/cream/charcoal palette
- **Routing**: Vue Router (history mode) with route-level metadata
- **State**: Local composables; no global store
- **Testing**: Vitest with Happy DOM

### Routes

- `/` — Home: hero + work grouped by CV employer blocks
- `/projects/:slug` — Work detail with gallery lightbox
- `/about` — CV: skills, experience, education, certifications
- `/contact` — Contact links
- `/projects` redirects to `/#work`

### Structure

- `src/pages/` — route pages
- `src/components/layout/` — Header, Footer
- `src/components/work/` — WorkCard, WorkGallery, ImageLightbox
- `src/data/projects.ts` — work samples + experience groups
- `src/data/cv.ts` — skills, experience roles, contact links
- `src/composables/` — `useTheme`, `useJsonLd`
- `src/router/index.ts` — route definitions and metadata
- `src/assets/index.css` — global styles and utilities

### Styling Conventions

Reusable classes in `src/assets/index.css`:

- `.panel-surface`, `.editorial-kicker`, `.editorial-rule`, `.ink-link`, `.pill-badge`, `.paper-grid`
- `.reveal`, `.reveal-stagger` (scroll reveal; reduced-motion safe)

Respect `prefers-reduced-motion` when adding animations.

### Component Patterns

- Composition API with `<script setup lang="ts">`
- Shared CV/work data imported from `src/data/`
- Prefer simplifying over adding chrome (no chat widget, custom cursor, or command palette)
- Use typed props/emits (`defineProps`, `defineEmits`) for component boundaries

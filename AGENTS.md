# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Personal portfolio website built with Vue 3, TypeScript, Vite Plus, and Tailwind CSS v4.

## Development Commands

```bash
pnpm dev       # Start development server (Vite Plus)
pnpm build     # Type-check and production build
pnpm test      # Run Vitest smoke tests
pnpm preview   # Preview production build
```

## Architecture

### Tech Stack

- **Framework**: Vue 3 with Composition API and `<script setup lang="ts">`
- **Build Tool**: Vite Plus on Vite
- **Styling**: Tailwind CSS v4 with global custom tokens and utilities in `src/assets/index.css`
- **Routing**: Vue Router with history mode and route-level metadata
- **State**: Local composables; no global store is currently configured
- **Testing**: Vitest with Happy DOM

### Structure

- `src/pages/` - Route-level components (Home, Projects, About, Contact, CaseStudy, Extra, NotFound)
- `src/components/` - Shared UI, layout, chat, and case-study components
- `src/composables/` - Reusable Vue Composition API behavior
- `src/data/` - Portfolio project and case-study content
- `src/router/index.ts` - Route definitions and metadata updates
- `src/assets/index.css` - Global styles with Tailwind layers and custom utility classes
- `api/` - Serverless API endpoints

### Styling Conventions

- Prefer existing semantic colors and utility classes from `src/assets/index.css` before adding new one-off styles.
- Reusable CSS classes include `.section-shell`, `.section-label`, `.editorial-card`, `.magnetic-link`, `.reveal`, `.reveal-stagger`, `.footer-reveal`, `.gradient-orb`, `.grain-overlay`, and `.paper-grid`.
- Respect reduced-motion preferences when adding animations or scroll effects.

### Component Patterns

- Use Vue 3 Composition API with `<script setup lang="ts">` for new or updated Vue SFCs.
- Keep route-level pages focused on composition and move reusable UI into `src/components/`.
- Keep stateful or side-effect-heavy behavior in typed composables under `src/composables/`.
- Use typed props/emits contracts (`defineProps`, `defineEmits`) for component boundaries.

# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Personal portfolio website built with Vue 3, TypeScript, Vite, and Tailwind CSS.

## Development Commands

```bash
npm run dev      # Start development server (Vite)
npm run build    # Production build
npm run serve    # Preview production build
```

No test framework is configured.

## Architecture

### Tech Stack
- **Framework**: Vue 3 with Options API (`defineComponent`)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom `vue-*` color palette
- **Routing**: Vue Router with history mode
- **State**: Vuex (store.ts exists but is not actively used)

### Structure
- `src/pages/` - Route-level components (Home, Projects, About)
- `src/components/` - Shared components (NavBar, Footer)
- `src/router/index.ts` - Route definitions
- `src/assets/index.css` - Global styles with Tailwind layers and custom utility classes

### Styling Conventions
- Custom color palette: `vue-50` through `vue-900` (defined in `tailwind.config.js`)
- Reusable CSS classes: `.card-hover`, `.section-heading`, `.section-subheading`, `.tech-badge`, `.glass`, `.gradient-text`
- Custom animations: `animate-fade-in`, `animate-slide-up`, `animate-float`, `animate-pulse-slow`
- Animation delays: `.animation-delay-200`, `.animation-delay-400`, `.animation-delay-600`

### Component Patterns
- TypeScript interfaces defined inline within `<script lang="ts">` blocks
- Data typed via function return annotation: `data(): { ... }`
- Components use Options API with `defineComponent`

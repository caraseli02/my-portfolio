# Vlad Caraseli — Portfolio

Personal portfolio for Vlad Caraseli, Frontend Developer (Vue · Nuxt · React · TypeScript) based in Palma de Mallorca. The site mirrors the CV and adds visual work samples for each role.

Live: [vladcaraseli.com](https://vladcaraseli.com)

## Stack

- Vue 3 (Composition API, `<script setup lang="ts">`)
- TypeScript
- Vite+ (`vite-plus`)
- Tailwind CSS v4
- Vue Router (history mode, per-route meta for SEO)
- Vitest + Happy DOM

## Routes

- `/` — hero and work samples, ordered like the CV
- `/projects/:slug` — work detail with gallery lightbox
- `/about` — skills, experience, education, certifications
- `/contact` — email, LinkedIn, phone, CV download

## Project structure

```
src/
  pages/          route pages
  components/     layout, work showcase/gallery, motion primitives
  composables/    theme, JSON-LD, in-view and scroll motion helpers
  data/           cv.ts (skills, roles, links) and projects.ts (work samples)
  router/         routes and metadata
```

Content lives in `src/data/` — update the CV and work samples there.

## Development

```bash
vp install   # install dependencies
vp dev       # start dev server
vp check     # format, lint, typecheck
vp test      # run tests
vp build     # production build
vp preview   # preview production build
```

## Design

- Young Serif (display), Figtree (body), JetBrains Mono (labels)
- Cream paper background with cobalt accents, plus dark mode
- Scroll reveals and transitions that respect `prefers-reduced-motion`

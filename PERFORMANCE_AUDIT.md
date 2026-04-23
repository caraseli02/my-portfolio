# Web Vitals & Performance Audit

**Branch:** `feat/web-vitals-audit`
**Date:** 2026-04-22
**Tool:** Lighthouse 13.1 (mobile simulation)

---

## Lighthouse Scores

| Page                                   | Score  | LCP  | FCP  | CLS | TBT  | SI   |
| -------------------------------------- | ------ | ---- | ---- | --- | ---- | ---- |
| `/` (Home)                             | **95** | 2.6s | 2.0s | 0   | 0ms  | 2.0s |
| `/projects/topproperties` (Case Study) | **96** | 2.4s | 1.9s | 0   | 60ms | 1.9s |

Both pages score green across all Core Web Vitals. CLS is perfect (0).

---

## Issues Found (Prioritized)

### P0 — Images (biggest win: ~3.5 MB savings)

**`topproperties.jpg` is 3.6 MB PNG-in-JPEG clothing (1280×4107!)**

- `public/project-images/topproperties.jpg` → actual PNG data at 1280×4107px
- Served for a 320×200 display → **95% wasted bytes**
- `ecas.jpg` (620 KB, 1280×2525) → also massively oversized for thumbnails
- `abs-storybook.jpg` (170 KB, 1280×720) → mild oversize
- None are WebP/AVIF
- Lighthouse est. savings: **4.1 MB** on home page alone

**Fix:**

1. Re-export all project images as proper JPEG/WebP at actual display sizes
2. For topproperties: the image is 4107px tall but displayed at ~200px — needs a proper crop
3. Generate responsive `srcset` with 320w, 640w, 1280w variants
4. Case study hero can keep 1280px wide, but should be WebP

### P1 — Render-Blocking Resources (~900ms wasted)

**Font CSS from Google Fonts blocks render for ~864ms**

The app imports fonts via `@fontsource` npm packages (good!), but Lighthouse detected a Google Fonts CSS call. This might be from a browser extension or stale reference — needs verification. The main CSS bundle (15 KB) blocks for ~454ms.

**Fix:**

1. Verify no Google Fonts `<link>` tags exist (check `index.html`)
2. Font files are self-hosted via `@fontsource` ✓ — just need to confirm no external calls leak
3. Consider `font-display: swap` (already likely set by `@fontsource`)

### P2 — Font Bundle Size (68 KB fonts)

| Font                         | Size (woff2)                |
| ---------------------------- | --------------------------- |
| JetBrains Mono Variable      | 40.4 KB                     |
| Young Serif                  | 27.0 KB                     |
| Figtree (5 weights + italic) | ~55 KB total (woff + woff2) |

JetBrains Mono is the heaviest. Consider:

- Subsetting to only Latin characters
- Using `unicode-range` to lazy-load
- The variable font is efficient, but 40 KB for a mono font used for small labels is heavy

### P3 — JS Bundle

| Chunk                     | Size (gzip) |
| ------------------------- | ----------- |
| `index.js` (Vue + router) | 26.8 KB     |
| `runtime-core`            | 24.3 KB     |
| `CaseStudy.js`            | 6.2 KB      |
| `Home.js`                 | 3.3 KB      |

**Total JS: ~68 KB gzipped** — this is excellent. Routes are lazy-loaded ✓.

### P4 — Runtime Performance Notes

**CustomCursor runs a continuous `requestAnimationFrame` loop**

- `useMousePosition` starts a rAF tick loop that never stops (even when cursor is disabled)
- The rAF runs 60fps even on pages where no cursor element exists
- With ref-counting, it only stops when all consumers unmount
- **Fix:** Pause rAF when tab is hidden (`visibilitychange`), and consider only running when cursor is actually enabled

**Marquee uses CSS animation** ✓ — no JS overhead, good

**Scroll listeners use rAF throttling** ✓ — `useScrollProgress` and `useScrollReveal` both use `requestAnimationFrame` for throttling

**IntersectionObserver cleanup** ✓ — `useScrollReveal` disconnects on unmount

**Media query listeners** — `useDeviceDetection` has proper cleanup ✓ (TODO 003 resolved)

**Scroll listener** — `useScrollProgress` cleans up ✓

### P5 — bfcache Failure

Lighthouse reports bfcache restoration fails ("Internal error — IgnoreEventAndEvict"). This is common with:

- `mousemove`/`mouseover` global listeners (from custom cursor)
- `beforeunload` or similar handlers

The custom cursor registers `document.addEventListener("mousemove")` and `document.addEventListener("mouseover")` — these may interfere with bfcache.

**Fix:** Consider removing listeners on `visibilitychange` and re-adding on focus.

---

## What's Already Good ✓

- **Lazy-loaded routes** — all pages use `() => import()`
- **Code splitting** — Vite splits per-route automatically
- **`loading="lazy"`** on list images
- **Passive scroll listeners** — `{ passive: true }` everywhere
- **`will-change: transform`** on cursor elements (GPU composited)
- **No CLS** — images have explicit dimensions and `aspect-ratio`
- **IntersectionObserver with `once`** — unobserves after reveal
- **Module-level refs** — shared composables use singleton refs (no duplication)
- **Build time** — 416ms, excellent

---

## Action Plan

| #   | Priority | Task                                                   | Impact              |
| --- | -------- | ------------------------------------------------------ | ------------------- |
| 1   | P0       | Convert project images to WebP at proper sizes         | -3.5 MB payload     |
| 2   | P0       | Fix topproperties.jpg (not actually JPEG, 4107px tall) | Critical            |
| 3   | P1       | Verify no Google Fonts leak                            | -864ms render block |
| 4   | P2       | Subset JetBrains Mono or defer                         | -30 KB              |
| 5   | P3       | Pause cursor rAF when tab hidden                       | Battery/CPU         |
| 6   | P4       | Improve bfcache support                                | Faster back-nav     |

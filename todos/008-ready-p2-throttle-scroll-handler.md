---
status: ready
priority: p2
issue_id: "008"
tags:
  - performance
  - scroll
  - throttling
dependencies: []
---

# Add RequestAnimationFrame Throttling to Scroll Handler

## Problem Statement

NavBar.vue scroll event handler runs on every scroll event (~60fps) without throttling, causing unnecessary CPU usage and potential jank during scrolling. This impacts user experience on lower-end devices.

## Findings

- Current implementation in NavBar.vue:117-127 lacks any throttling mechanism
- `window.addEventListener("scroll", this.handleScroll)` runs synchronously on every scroll frame
- Missing `passive: true` flag prevents browser optimizations for scroll events
- Handler checks navbar visibility on every frame regardless of actual scroll position changes

## Proposed Solutions

### Option 1: RequestAnimationFrame + Passive Flag (Recommended)

**Approach:** Wrap scroll handler in `requestAnimationFrame` for throttling and add `passive: true` flag to the event listener.

**Pros:**
- Synchronizes with browser repaint cycle for smooth 60fps
- Passive flag allows browser to optimize scroll performance
- Minimal code change, high performance gain
- No external dependencies needed

**Cons:**
- Still runs at 60fps maximum (which is usually sufficient)
- Slightly more complex cleanup logic needed

**Effort:** 15 minutes

**Risk:** Low

---

### Option 2: Debounce with Custom Delay

**Approach:** Use a debounce function with a small delay (e.g., 16ms or 100ms) to limit scroll event handling.

**Pros:**
- More control over execution frequency
- Simpler implementation with lodash or custom utility

**Cons:**
- Adds latency to navbar visibility changes
- May feel unresponsive if delay is too long
- Requires debounce utility dependency

**Effort:** 20 minutes

**Risk:** Low

---

### Option 3: Intersection Observer

**Approach:** Replace scroll listener entirely with Intersection Observer API to detect when navbar should show/hide.

**Pros:**
- Most performant option
- Native browser API designed for visibility detection
- No scroll event overhead

**Cons:**
- Requires more significant refactoring
- May need additional marker element in DOM
- Overkill for simple show/hide on scroll

**Effort:** 45 minutes

**Risk:** Medium

## Recommended Action

Implement Option 1: Add `requestAnimationFrame` throttling and `passive: true` flag to the scroll event listener in NavBar.vue. This provides optimal performance with minimal code changes.

Implementation steps:
1. Add `ticking` flag to component data
2. Modify `handleScroll` to use `requestAnimationFrame`
3. Update `addEventListener` call to include `{ passive: true }`
4. Ensure proper cleanup in `beforeDestroy`

## Technical Details

**Affected files:**
- `src/components/NavBar.vue:117-127` - scroll event listener and handler

**Related components:**
- NavBar.vue - main component

**Database changes:**
- None

## Resources

- **MDN requestAnimationFrame:** https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
- **Passive Event Listeners:** https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#improving_scrolling_performance_with_passive_listeners
- **Similar patterns:** TextRotator.vue (uses animation frames)

## Acceptance Criteria

- [ ] Scroll handler uses `requestAnimationFrame` for throttling
- [ ] Event listener includes `{ passive: true }` option
- [ ] Navbar visibility transitions remain smooth and responsive
- [ ] CPU usage during scrolling is reduced
- [ ] No jank or stuttering observed on scroll
- [ ] Proper cleanup prevents memory leaks

## Work Log

### 2026-02-16 - Todo Created

**By:** Claude Code

**Actions:**
- Analyzed NavBar.vue scroll handling code
- Identified lack of throttling and passive flag
- Documented three solution options
- Recommended requestAnimationFrame approach

**Learnings:**
- Current implementation fires at 60fps continuously during scroll
- Browser optimization via passive flag is a quick win
- requestAnimationFrame provides natural throttling aligned with repaint cycle

## Notes

- Consider combining with will-change CSS property on navbar for additional GPU optimization
- Monitor actual performance impact after implementation
- May want to add prefers-reduced-motion check in the future for accessibility

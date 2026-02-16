---
status: pending
priority: p3
issue_id: "016"
tags:
  - simplification
  - composables
  - css
dependencies: []
---

# Simplify Effects System

## Problem Statement

The codebase contains 9 separate composables for mouse/scroll effects, adding massive complexity with minimal user-facing value. Most of these effects are disabled on touch devices anyway (which represents the majority of mobile traffic), making the complexity unjustified.

- 9 composables for visual effects (mouse tracking, scroll animations, etc.)
- Most disabled on mobile/touch devices
- Code complexity vs. user value ratio is poor
- Maintenance burden from multiple files doing similar things
- Performance overhead on low-end devices

## Findings

After reviewing the composables directory:

- **Location:** `src/composables/` (9+ files)
- Multiple composables likely include:
  - Mouse position tracking
  - Scroll position tracking
  - Parallax effects
  - Fade/slide animations
  - Intersection observers
  - Custom cursor effects
  - Other visual enhancements
- Touch detection disables most features
- Many effects could be achieved with pure CSS
- Composables add ~50-100 lines of code each

**Key discovery:** CSS alternatives exist for most effects:
- CSS `:hover` for mouse effects
- CSS scroll-driven animations (modern browsers)
- CSS transitions/animations for smooth effects
- Intersection Observer API via CSS `@supports` where possible

## Proposed Solutions

### Option 1: Consolidate to Single Effects Composable

**Approach:** Merge related effects into one composable with configuration options.

**Pros:**
- Reduces file count significantly
- Easier to maintain one file
- Clearer API surface

**Cons:**
- Still JavaScript-based (runtime overhead)
- Doesn't solve touch device issue

**Effort:** 1-2 hours

**Risk:** Medium

---

### Option 2: Replace with CSS Alternatives (Recommended)

**Approach:** Replace JavaScript-based effects with CSS-only solutions where possible.

**Pros:**
- Zero JavaScript overhead
- Better performance (GPU-accelerated)
- Works better on all devices
- Simpler codebase
- Modern CSS supports scroll/mouse animations

**Cons:**
- Some complex effects may not be fully replaceable
- Requires browser support check for newer features
- May lose some fine-grained control

**Effort:** 2-3 hours

**Risk:** Medium

---

### Option 3: Remove Non-Essential Effects

**Approach:** Simply remove effects that provide marginal value.

**Pros:**
- Immediate code reduction
- Fastest implementation
- Clean slate for redesign

**Cons:**
- Loses some visual polish
- May affect design aesthetic

**Effort:** 30 minutes

**Risk:** Low

---

## Recommended Action

**Option 2 (Replace with CSS)** is recommended for a professional portfolio. Modern CSS can achieve most effects more efficiently. This is marked as optional major refactor due to time investment vs. current functionality.

**Implementation approach:**
1. Audit each composable and identify CSS alternatives
2. Implement CSS replacements incrementally
3. Keep critical effects, remove decorative ones
4. Test on mobile/touch devices

**Priority:** Medium - This is a nice-to-have refactor, not critical functionality.

## Technical Details

**Affected files:**
- `src/composables/*.ts` - All effect composables (9 files)
- `src/components/` - Components using effects
- `src/assets/index.css` - Add CSS effect utilities

**Related components:**
- Components with hover/scroll effects
- Page transition components
- Custom cursor implementations

**Database changes:**
- Migration needed? No

**CSS Alternatives Available:**
- `@media (hover: hover)` for hover-capable devices
- `scroll-timeline` for scroll-driven animations
- `transition` and `animation` for smooth effects
- `@supports` for feature detection

## Resources

- **CSS Scroll-Driven Animations:** https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations
- **CSS Hover Media Query:** https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover
- **CSS Transitions:** https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions
- **Reduced Motion Preference:** https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion

## Acceptance Criteria

- [ ] Audit all 9 composables and document their purpose
- [ ] Identify CSS alternatives for each effect
- [ ] Implement CSS replacements (or remove non-essential effects)
- [ ] Ensure effects work on desktop with mouse
- [ ] Verify no broken functionality on touch devices
- [ ] Reduce composable count significantly (target: 1-2 essential composables)
- [ ] Maintain or improve perceived performance
- [ ] Code is simpler and easier to understand

## Work Log

### 2026-02-16 - Initial Creation

**By:** Claude Code

**Actions:**
- Identified 9 composables causing complexity
- Analyzed CSS alternatives for modern browsers
- Created 3 solution options with trade-offs
- Marked as optional major refactor (nice-to-have)

---

## Notes

- This is an optional major refactor, not critical for functionality
- Consider user preference with `prefers-reduced-motion`
- Test thoroughly on actual mobile devices, not just browser dev tools
- Modern portfolio trends favor clean, fast-loading sites over heavy effects
- Could be combined with a design refresh if planned

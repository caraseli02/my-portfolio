---
status: ready
priority: p2
issue_id: "009"
tags:
  - performance
  - images
  - lazy-loading
dependencies: []
---

# Add Lazy Loading to Case Study Images

## Problem Statement

Images in CaseStudyListItem.vue load immediately even when below the fold, causing unnecessary network requests and impacting page load performance. This is particularly wasteful for users who may not scroll through all case studies.

## Findings

- Current implementation in CaseStudyListItem.vue:35-39 uses standard `<img>` tag
- No `loading` attribute present, defaults to eager loading
- Missing image dimensions may cause layout shift during load
- All images on page fetch simultaneously on initial load

## Proposed Solutions

### Option 1: Native Lazy Loading with Loading Attribute (Recommended)

**Approach:** Add `loading="lazy"` attribute to image tags and include explicit width/height attributes for layout stability.

**Pros:**
- Native browser support (90%+ of modern browsers)
- Zero JavaScript overhead
- Respects user scrolling behavior naturally
- Simple, one-line change per image

**Cons:**
- Safari only added support in 2022 (iOS 15.4+)
- No complex control over loading thresholds

**Effort:** 10 minutes

**Risk:** Low

---

### Option 2: Intersection Observer with Fallback

**Approach:** Use JavaScript Intersection Observer API to manually control when images load, with fallback for older browsers.

**Pros:**
- Full control over loading triggers
- Can add fancy loading animations
- Works in older browsers with polyfill

**Cons:**
- More code complexity
- Requires JavaScript execution
- Overkill for simple lazy loading needs

**Effort:** 45 minutes

**Risk:** Low

---

### Option 3: Progressive Enhancement with Data Attributes

**Approach:** Use `data-src` attributes and swap to `src` when images enter viewport.

**Pros:**
- Complete control over loading logic
- Can implement complex loading strategies
- Works everywhere with JavaScript

**Cons:**
- No images load without JavaScript
- More complex implementation
- Higher maintenance burden

**Effort:** 1 hour

**Risk:** Medium

## Recommended Action

Implement Option 1: Add `loading="lazy"` attribute to images and include explicit dimensions. This is the most maintainable solution with excellent browser support and zero overhead.

## Technical Details

**Affected files:**
- `src/components/CaseStudyListItem.vue:35-39` - image element

**Related components:**
- CaseStudyListItem.vue - displays case study cards
- Any other components displaying project thumbnails

**Database changes:**
- None

## Resources

- **MDN Lazy Loading:** https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading
- **Can I Use:** https://caniuse.com/loading-lazy-attr
- **Web Vitals CLS:** https://web.dev/articles/cls

## Acceptance Criteria

- [ ] `loading="lazy"` attribute added to case study images
- [ ] Explicit `width` and `height` attributes added for CLS prevention
- [ ] Images load progressively as user scrolls
- [ ] Network tab shows deferred image loading
- [ ] No layout shift observed when images load
- [ ] Fallback behavior acceptable in browsers without native support

## Work Log

### 2026-02-16 - Todo Created

**By:** Claude Code

**Actions:**
- Analyzed CaseStudyListItem.vue image implementation
- Confirmed lack of lazy loading attributes
- Documented three solution options
- Recommended native lazy loading for simplicity

**Learnings:**
- Native lazy loading is now widely supported (Chrome, Firefox, Safari)
- Adding dimensions prevents Cumulative Layout Shift
- Small change with significant performance impact

## Notes

- Consider adding `decoding="async"` for additional parsing optimization
- May want to add skeleton loader or blur-up placeholder in future
- Monitor Core Web Vitals (LCP and CLS) metrics after implementation

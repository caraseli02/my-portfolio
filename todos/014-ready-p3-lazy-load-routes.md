---
status: pending
priority: p3
issue_id: "014"
tags:
  - performance
  - routing
  - code-splitting
dependencies: []
---

# Lazy Load All Route Components

## Problem Statement

Only /extra route uses lazy loading, while all other routes load eagerly, unnecessarily increasing the initial bundle size. This impacts first-page load performance and user experience.

- Current eager loading causes entire application code to be loaded upfront
- Routes for Home, Projects, and About are loaded even if not immediately needed
- Inefficient code-splitting opportunity missed

## Findings

After reviewing the router configuration:

- **File:** `router/index.ts`
- Only the `/extra` route uses dynamic `() => import()` syntax
- Other routes (`/`, `/projects`, `/about`) use static imports
- All route components are Vue pages in `src/pages/` directory
- No complex route-level data dependencies that would prevent lazy loading

## Proposed Solutions

### Option 1: Add () => import() for All Route Components

**Approach:** Convert all static route imports to dynamic imports using `() => import()` syntax.

**Pros:**
- Reduces initial bundle size significantly
- Only loads code when routes are accessed
- Standard Vue Router optimization pattern
- Quick implementation (single file change)

**Cons:**
- Slight delay on first navigation (acceptable trade-off)
- Minimal complexity added to router file

**Effort:** 15 minutes

**Risk:** Low

---

## Recommended Action

Convert all static route imports in `router/index.ts` to dynamic imports. This is a straightforward optimization with immediate performance benefits.

**Example change:**
```typescript
// Before:
import Home from '../pages/Home.vue'

// After:
const Home = () => import('../pages/Home.vue')
```

## Technical Details

**Affected files:**
- `src/router/index.ts` - Route definitions and imports

**Related components:**
- `src/pages/Home.vue`
- `src/pages/Projects.vue`
- `src/pages/About.vue`
- `src/pages/Extra.vue` (already lazy loaded)

**Database changes:**
- Migration needed? No

## Resources

- **Vue Router docs:** https://router.vuejs.org/guide/advanced/lazy-loading.html
- **Related patterns:** Issue #013 (if exists, for reference)

## Acceptance Criteria

- [ ] All route components converted to dynamic imports
- [ ] Development server starts without errors
- [ ] All routes still load correctly when navigated
- [ ] Build produces separate chunks for each route component
- [ ] Initial bundle size is reduced (verify via bundle analysis if possible)

## Work Log

### 2026-02-16 - Initial Creation

**By:** Claude Code

**Actions:**
- Identified eager loading issue in router configuration
- Documented current state and proposed solution
- Created todo with implementation plan

---

## Notes

- This is a quick win for performance with minimal risk
- No breaking changes expected
- Consider testing on slower networks to verify perceived performance improvement

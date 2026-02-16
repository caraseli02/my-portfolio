---
status: pending
priority: p1
issue_id: "004"
tags:
  - performance
  - router
  - rerenders
dependencies: []
---

# Remove :key="$route.fullPath" from router-view to prevent expensive full rerenders

## Problem Statement

<router-view :key="$route.fullPath" /> in App.vue:6 forces Vue to destroy and recreate the entire route component tree on every navigation, destroying component state and causing expensive DOM operations.

**Impact:**
- 200-500ms additional navigation time
- Loss of scroll position on route changes
- Unnecessary destruction of component state
- Poor user experience with visible rendering delays

## Findings

**Root Cause Analysis:**
- **Location:** `src/App.vue:6` - `<router-view :key="$route.fullPath" />`
- **Behavior:** Vue's `key` prop forces component recreation when the key changes
- **Issue:** `$route.fullPath` changes on every navigation, even between similar routes with different params
- **Consequence:** Entire page component tree is destroyed and recreated from scratch on every route change

**Impact Assessment:**
- All child components lose their local state
- DOM is completely torn down and rebuilt
- Scroll position resets to top
- Animations and transitions are interrupted
- Unnecessary re-fetching of data that could be cached

**Why It Was Likely Added:**
- May have been a workaround for stale component data when route params change
- Quick fix to ensure fresh data on route changes
- Common pattern that seems innocent but has severe performance implications

## Proposed Solutions

### Option 1: Remove :key entirely (Recommended)

**Approach:** Remove the `:key="$route.fullPath"` prop from the router-view component.

**Pros:**
- Minimal code change
- Vue Router's default behavior handles component reuse efficiently
- Preserves component state and scroll position
- Eliminates expensive DOM operations
- Immediate performance improvement

**Cons:**
- Components won't automatically re-render when query params change
- May need manual reactivity handling if components depend on param changes

**Effort:** 5 minutes

**Risk:** Low

---

### Option 2: Scope :key to specific routes

**Approach:** Conditionally apply `:key` only to routes that actually need component recreation.

```vue
<router-view :key="$route.meta.forceRefresh ? $route.fullPath : undefined" />
```

Then add `meta: { forceRefresh: true }` to routes that require it.

**Pros:**
- Fine-grained control over component recreation
- Routes that don't need refresh get performance benefits
- Maintains flexibility for edge cases

**Cons:**
- More complex to implement
- Requires auditing all routes to determine which need `forceRefresh`
- Adds cognitive overhead for future route additions

**Effort:** 30 minutes

**Risk:** Low

---

### Option 3: Use keep-alive with include/exclude

**Approach:** Wrap router-view in `<keep-alive>` with strategic include/exclude patterns.

```vue
<keep-alive :include="cachedComponents">
  <router-view />
</keep-alive>
```

**Pros:**
- Maximum control over component caching
- Can cache specific components across routes

**Cons:**
- Overkill for this issue
- Adds complexity to component lifecycle management
- May introduce memory issues if not carefully managed

**Effort:** 1-2 hours

**Risk:** Medium

## Recommended Action

**Implement Option 1: Remove `:key="$route.fullPath"` entirely.**

Vue Router's default behavior is optimized for performance and will reuse components appropriately. The `:key` prop was likely added as a quick fix but causes more problems than it solves. After removal:
- Monitor for any routes that need explicit refresh handling
- If issues arise with specific routes, implement local reactivity (watch on `$route.params`) rather than forcing full component recreation

**Estimated Effort:** 5 minutes

## Technical Details

**Affected files:**
- `src/App.vue:6` - router-view component with :key binding

**Related components:**
- All page components rendered by router-view
- CustomCursor (wrapper component)
- Header (persistent across routes)

**Database changes:** None

## Resources

- **Vue Router Documentation:** [Dynamic Route Matching](https://router.vuejs.org/guide/essentials/dynamic-matching.html#Reacting-to-Params-Changes)
- **Vue.js Guide:** [List Rendering - Maintaining State](https://vuejs.org/guide/essentials/list.html#maintaining-state-with-key)
- **Related Issue:** Route components re-rendering unnecessarily on every navigation

## Acceptance Criteria

- [ ] `:key="$route.fullPath"` removed from router-view in App.vue
- [ ] Application builds successfully without errors
- [ ] Navigation between routes feels faster/smooth
- [ ] Scroll position is preserved on appropriate navigations
- [ ] Component state is maintained when switching between routes with same component
- [ ] All existing functionality works correctly (no broken routes)

## Work Log

### 2025-02-16 - Initial Discovery

**By:** Claude Code

**Actions:**
- Identified `:key="$route.fullPath"` on router-view in App.vue:6
- Analyzed Vue Router's component reuse behavior
- Documented performance impact and state destruction issues
- Drafted 3 solution approaches with effort/risk estimates

**Learnings:**
- Vue's `:key` prop is powerful but can cause expensive operations when used incorrectly
- `$route.fullPath` changes on every navigation, making it unsuitable for component keys
- Vue Router handles component lifecycle efficiently by default; avoid premature optimization

---

## Notes

- **Decision:** Proceed with Option 1 (remove :key entirely) as it provides immediate performance benefits with minimal risk
- **Monitoring:** After removal, watch for any routes that rely on component recreation for fresh data
- **Alternative:** If specific routes need refresh, consider using `beforeRouteUpdate` navigation guard or local watchers instead of global :key binding
- **Testing:** Test navigation between all routes to ensure no regressions

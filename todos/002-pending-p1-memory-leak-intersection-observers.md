---
status: pending
priority: p1
issue_id: "002"
tags: [memory-leak, performance, observers]
dependencies: []
---

# Fix Memory Leak in IntersectionObserver Components

## Problem Statement

IntersectionObservers are created in `onMounted` hooks but never disconnected in `onUnmounted`, causing memory leaks. Each time these components are mounted and unmounted (e.g., during navigation), a new observer is created without cleaning up the previous one, leading to accumulating memory usage over time.

**Impact:**
- Memory leak increases with each page navigation
- Performance degradation over extended sessions
- Potential browser tab crash on long-running sessions
- Affects scroll-triggered animations and visibility detection

## Findings

Investigation identified three components creating IntersectionObservers without proper cleanup:

- **LessonsLearned.vue:41-57** - Scroll-triggered animations for lesson cards
- **OutcomesGrid.vue:39-55** - Grid item visibility detection for stagger animations
- **Projects.vue:233-265** - Project card intersection detection for lazy loading/animations

**Key discovery:** All three components follow the same anti-pattern:
```javascript
onMounted(() => {
  const observer = new IntersectionObserver(...)
  // Observe elements
})
// Missing: onUnmounted(() => { observer.disconnect() })
```

**Impact assessment:** Medium-High - These are core components rendered on multiple pages. Each navigation creates new observers.

## Proposed Solutions

### Option 1: Add onUnmounted Cleanup

**Approach:** Store observer reference and disconnect it in `onUnmounted` hook.

```javascript
const observer = ref<IntersectionObserver | null>(null)

onMounted(() => {
  observer.value = new IntersectionObserver(...)
})

onUnmounted(() => {
  observer.value?.disconnect()
})
```

**Pros:**
- Direct fix for the memory leak
- Minimal code changes
- Follows Vue 3 lifecycle best practices

**Cons:**
- Manual cleanup required for each component
- Easy to forget in future components

**Effort:** 20 minutes

**Risk:** Low

---

### Option 2: Create useIntersectionObserver Composable

**Approach:** Create a reusable composable that handles observer lifecycle automatically.

```javascript
export function useIntersectionObserver(callback, options) {
  const observer = ref<IntersectionObserver | null>(null)
  
  const observe = (element) => {
    observer.value = new IntersectionObserver(callback, options)
    observer.value.observe(element)
  }
  
  onUnmounted(() => {
    observer.value?.disconnect()
  })
  
  return { observe }
}
```

**Pros:**
- Automatic cleanup handling
- Reusable across components
- Centralized observer logic
- Easier to maintain and test

**Cons:**
- Requires refactoring existing components
- Additional abstraction layer

**Effort:** 1 hour

**Risk:** Low

---

## Recommended Action

Implement Option 1 (add `onUnmounted` cleanup) as immediate fix. The pattern is straightforward and requires minimal changes. Consider Option 2 for future refactoring to improve maintainability.

## Technical Details

**Affected files:**
- `src/components/LessonsLearned.vue:41-57` - Scroll-triggered animations
- `src/components/OutcomesGrid.vue:39-55` - Grid visibility detection
- `src/components/Projects.vue:233-265` - Project card intersection detection

**Related components:**
- Any component using scroll-based animations
- Components with lazy loading patterns
- Visibility-based feature toggles

**Database changes:** None

## Resources

- **MDN:** https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/disconnect
- **Vue 3 Lifecycle:** https://vuejs.org/api/composition-api-lifecycle.html
- **Memory Leak Patterns:** https://vuejs.org/guide/best-practices/performance.html#memory-leaks

## Acceptance Criteria

- [ ] All acceptance criteria checked
- [ ] LessonsLearned.vue observer disconnected in onUnmounted (lines 41-57)
- [ ] OutcomesGrid.vue observer disconnected in onUnmounted (lines 39-55)
- [ ] Projects.vue observer disconnected in onUnmounted (lines 233-265)
- [ ] All observer references properly typed with TypeScript
- [ ] No TypeScript errors introduced
- [ ] Animations still work correctly after fix
- [ ] Memory profiling shows no accumulating observers

## Work Log

### 2026-02-16 - Initial Discovery

**By:** Claude Code

**Actions:**
- Identified 3 components with IntersectionObserver memory leaks
- Analyzed observer lifecycle in each component
- Classified as P1 priority performance issue
- Drafted solution approaches

**Learnings:**
- IntersectionObservers must be explicitly disconnected to prevent memory leaks
- Vue 3's `onUnmounted` is the correct lifecycle hook for cleanup
- Composables can encapsulate cleanup logic for better maintainability

---

## Notes

- **Testing:** Use Chrome DevTools Memory tab to verify observers are cleaned up
- **Future:** Consider extracting to composable for reuse across the application
- **Pattern:** Always pair resource creation in onMounted with cleanup in onUnmounted

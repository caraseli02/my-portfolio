---
status: ready
priority: p2
issue_id: "013"
tags: [typescript, type-safety, cleanup]
dependencies: []
---

# Fix TypeScript Issues Across Codebase

Systematically fix multiple TypeScript issues identified in the codebase.

## Problem Statement

Multiple TypeScript issues have been identified that reduce type safety and code quality.

**Issues identified:**
1. `any` type in `shims-vue.d.ts` - should use proper Vue component types
2. Redundant default export in `TextRotator.vue` - component uses both default export and named export
3. Inconsistent `PropType` patterns across components - some use `as PropType<T>`, others don't
4. `interval` type should use `ReturnType<typeof setInterval>` instead of `number`
5. Unused `isHovered` in `CaseStudyListItem.vue` - dead code

## Findings

- shims-vue.d.ts uses `any` type which bypasses TypeScript checking
- TextRotator.vue has unnecessary default export pattern
- PropType usage is inconsistent - some components cast, others rely on inference
- setInterval returns different types in Node vs browser; `ReturnType<typeof setInterval>` handles both
- isHovered is declared but never used in CaseStudyListItem.vue

## Proposed Solutions

### Option 1: Fix All Issues Systematically

**Approach:** Go through each identified issue and fix them one by one.

**Pros:**
- Addresses all type safety issues
- Improves code consistency
- Removes dead code

**Cons:**
- Requires multiple file changes
- Need to test after each change

**Effort:** 30 minutes

**Risk:** Low

---

### Option 2: Fix Critical Issues Only

**Approach:** Only fix the `any` type and unused variable, leave PropType patterns as-is if they work.

**Pros:**
- Less invasive changes
- Faster to implement

**Cons:**
- Leaves inconsistency in codebase
- Doesn't fully address type safety

**Effort:** 15 minutes

**Risk:** Low

---

## Recommended Action

Fix all identified TypeScript issues systematically for maximum type safety and code quality.

## Technical Details

**Affected files:**
- `src/shims-vue.d.ts` - fix `any` type
- `src/components/TextRotator.vue` - remove redundant default export
- Multiple components - standardize PropType patterns
- Components using setInterval - fix interval type
- `src/components/CaseStudyListItem.vue` - remove unused isHovered

**Related components:**
- All Vue components using props
- Components with timers/intervals

**Database changes:**
- None

## Resources

- TypeScript PropType docs: https://vuejs.org/api/utility-types.html#proptype-t
- ReturnType utility: https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype

## Acceptance Criteria

- [ ] shims-vue.d.ts uses proper types instead of `any`
- [ ] TextRotator.vue has no redundant default export
- [ ] PropType patterns are consistent across all components
- [ ] All interval variables use `ReturnType<typeof setInterval>`
- [ ] Unused `isHovered` removed from CaseStudyListItem.vue
- [ ] No TypeScript errors (`npm run build` or `npx vue-tsc` passes)
- [ ] All components still function correctly

## Work Log

### 2026-02-16 - Initial Discovery

**By:** Claude Code

**Actions:**
- Identified 5 TypeScript issues across the codebase
- Documented each issue with location and fix approach
- Prioritized issues by impact

## Notes

- Can be done incrementally - each fix is independent
- Run TypeScript checker after each file change
- Consider adding strict TypeScript rules to prevent future issues

---
status: ready
priority: p2
issue_id: "006"
tags: [dependencies, cleanup, vuex]
dependencies: [005-ready-p2-remove-dead-code.md]
---

# Remove Vuex Dependency

Remove the unused Vuex state management library and all related configuration files.

## Problem Statement

Vuex store exists in the codebase but is never actually used. The main.ts file never calls `.use(store)`, and store.ts only contains a basic counter example. This creates unnecessary dependencies and bundle bloat.

**Specific Issues:**
- Vuex is installed but never initialized in main.ts
- store.ts contains only a placeholder counter example
- vuex.d.ts type declarations exist but serve no purpose
- Unnecessary dependency in package.json

## Findings

Investigation confirmed Vuex is completely unused:

- `src/store.ts` - Only exports a basic counter store with state, mutations, actions
- `src/main.ts` - Never imports or uses the store
- `src/vuex.d.ts` - Type declarations for unused store
- `package.json` - Lists "vuex" as a dependency

**Impact:**
- Smaller bundle size (~10KB+ saved)
- Fewer dependencies to maintain
- Less confusion for new developers
- Aligns with Vue 3 Composition API patterns (props/composables preferred)

## Proposed Solutions

### Option 1: Complete Removal (Recommended)

**Approach:** Remove all Vuex files and uninstall the dependency.

**Steps:**
1. Delete `src/store.ts`
2. Delete `src/vuex.d.ts`
3. Remove vuex import from package.json
4. Run `npm uninstall vuex`

**Pros:**
- Clean removal of dead code
- Reduces bundle size
- Aligns with modern Vue 3 patterns
- No breaking changes (feature wasn't used)

**Cons:**
- None (feature was never used)

**Effort:** 10 minutes

**Risk:** Low

---

### Option 2: Keep for Future Use

**Approach:** Leave Vuex installed but document that it's available.

**Pros:**
- Easy to start using if needed later

**Cons:**
- Unnecessary bundle size increase
- Creates confusion about state management approach
- Better alternatives exist for Vue 3 (Pinia, composables)

**Effort:** 0 minutes (do nothing)

**Risk:** Low (but adds technical debt)

---

## Recommended Action

Complete removal of Vuex:
1. Verify store.ts is deleted (see todo 005)
2. Delete `src/vuex.d.ts`
3. Remove "vuex" from dependencies in package.json
4. Run `npm uninstall vuex`
5. Run `npm run build` to verify no errors
6. Test application functionality

## Technical Details

**Affected files:**
- `src/store.ts` - To be removed (handled in todo 005)
- `src/vuex.d.ts` - Type declarations to remove
- `package.json` - Remove vuex from dependencies

**Related components:**
- None (Vuex was never integrated)

**Database changes:**
- Migration needed? No

**Bundle impact:**
- Estimated savings: ~10KB+ minified

## Resources

- Vue 3 State Management: https://vuejs.org/guide/scaling-up/state-management.html
- Pinia (recommended Vuex alternative): https://pinia.vuejs.org/

## Acceptance Criteria

- [ ] src/store.ts deleted
- [ ] src/vuex.d.ts deleted
- [ ] vuex removed from package.json dependencies
- [ ] npm uninstall vuex executed
- [ ] package-lock.json updated
- [ ] npm run build completes successfully
- [ ] npm run dev starts without errors
- [ ] All pages function correctly
- [ ] No Vuex references remain in codebase

## Work Log

### 2025-02-16 - Initial Discovery

**By:** Claude Code

**Actions:**
- Confirmed store.ts is never imported in main.ts
- Verified store contains only placeholder counter code
- Checked for any Vuex usage across codebase (none found)
- Identified vuex.d.ts type file as unnecessary

**Learnings:**
- Vuex was likely added during project setup but never used
- Project uses props and inline state management instead
- Modern Vue 3 prefers composables or Pinia over Vuex

## Notes

- Depends on todo 005 (removing store.ts)
- If state management is needed later, consider Pinia instead of Vuex
- Check for any other unused dependencies while cleaning up

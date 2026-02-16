---
status: ready
priority: p2
issue_id: "005"
tags: [cleanup, dead-code, maintenance]
dependencies: []
---

# Remove Dead Code - Unused Files Cleanup

Delete all unused files that are cluttering the codebase and causing confusion during development.

## Problem Statement

Multiple unused files are cluttering the codebase and causing confusion for developers. These files are never imported, empty, or duplicated, making it harder to understand the actual project structure and maintain the codebase.

**Specific Issues:**
- `src/store.ts` (27 lines) - Vuex store file that is never used
- `src/views/Home.vue` - Empty file serving no purpose
- `src/components/navigation/NavBar.vue` - Unused duplicate navigation component
- `src/components/Footer.vue` - Duplicate footer component
- `src/composables/useParallaxDepth.ts` - Never imported composable

## Findings

Investigation confirmed these files are safe to remove:

- `src/store.ts` - Only exports a basic counter example store, never mounted in main.ts
- `src/views/Home.vue` - Completely empty file with no content
- `src/components/navigation/NavBar.vue` - Navigation exists in `src/components/NavBar.vue` instead
- `src/components/Footer.vue` - Main footer is in `src/pages/Home.vue` and `src/pages/About.vue` directly
- `src/composables/useParallaxDepth.ts` - No imports found across entire codebase

**Impact:** No functionality loss, cleaner codebase, reduced bundle size

## Proposed Solutions

### Option 1: Delete All Unused Files at Once

**Approach:** Remove all identified unused files in a single commit.

**Pros:**
- Clean, atomic change
- Immediate codebase improvement
- Single commit for easy rollback if needed

**Cons:**
- Slightly higher risk if any file is actually used

**Effort:** 10 minutes

**Risk:** Low

---

### Option 2: Delete Files Individually with Separate Commits

**Approach:** Remove each file in its own commit for granular tracking.

**Pros:**
- Easier to identify which file caused issues if problems arise
- More detailed git history

**Cons:**
- More overhead
- Unnecessary for clearly unused files

**Effort:** 15 minutes

**Risk:** Low

---

## Recommended Action

Delete all unused files in a single commit:
1. Remove `src/store.ts`
2. Remove `src/views/Home.vue`
3. Remove `src/components/navigation/NavBar.vue`
4. Remove `src/components/Footer.vue`
5. Remove `src/composables/useParallaxDepth.ts`
6. Run build to verify no errors
7. Test navigation and all pages

## Technical Details

**Affected files:**
- `src/store.ts:1-27` - Unused Vuex store
- `src/views/Home.vue` - Empty file
- `src/components/navigation/NavBar.vue` - Unused navigation
- `src/components/Footer.vue` - Duplicate footer
- `src/composables/useParallaxDepth.ts` - Never imported composable

**Related components:**
- Main navigation uses `src/components/NavBar.vue` instead
- Footer is inline in page components

**Database changes:**
- Migration needed? No

## Resources

- None (internal cleanup task)

## Acceptance Criteria

- [ ] All identified unused files deleted
- [ ] `npm run build` completes without errors
- [ ] `npm run dev` starts successfully
- [ ] All pages load correctly
- [ ] Navigation works properly
- [ ] No console errors in browser

## Work Log

### 2025-02-16 - Initial Discovery

**By:** Claude Code

**Actions:**
- Scanned codebase for unused files
- Verified no imports exist for target files
- Confirmed duplicate/empty file status
- Created cleanup todo

**Learnings:**
- Store.ts is completely unused - Vuex dependency can also be removed
- Navigation component exists in two locations, only one used
- No composables from useParallaxDepth are imported anywhere

## Notes

- Related to todo 006 (removing Vuex dependency)
- Consider running a dead code detection tool periodically
- Could create an eslint rule to catch unused exports

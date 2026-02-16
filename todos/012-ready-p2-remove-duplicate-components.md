---
status: ready
priority: p2
issue_id: "012"
tags: [cleanup, components, organization]
dependencies: []
---

# Remove Duplicate Footer Components

Consolidate duplicate Footer components into a single canonical location.

## Problem Statement

Two Footer components exist in the codebase - one is now empty and unused, the other contains the full implementation.

**Duplicate components:**
- `src/components/layout/Footer.vue` - now empty/unused
- `src/components/Footer.vue` - full implementation

This creates confusion about which component is canonical and clutters the codebase.

## Findings

- `src/components/layout/Footer.vue` exists but appears to be empty or minimal
- `src/components/Footer.vue` contains the full Footer implementation
- Only one Footer component is needed
- The `layout/` subdirectory may be unnecessary if it only contains empty files

## Proposed Solutions

### Option 1: Remove layout/ subdirectory Footer

**Approach:** Delete the empty `src/components/layout/Footer.vue` and keep `src/components/Footer.vue`.

**Pros:**
- Simple cleanup
- Keeps the working component in the standard location
- Reduces directory complexity

**Cons:**
- Need to verify no imports reference layout/Footer.vue

**Effort:** 10 minutes

**Risk:** Low

---

### Option 2: Move to layout/ directory and update imports

**Approach:** Keep the `layout/` subdirectory structure, delete the duplicate in `components/`, and update all imports.

**Pros:**
- Maintains layout/ organization if planned for future use
- Consistent with some organizational patterns

**Cons:**
- Requires updating import statements
- More effort for same outcome

**Effort:** 15 minutes

**Risk:** Low

---

## Recommended Action

Remove the empty `src/components/layout/Footer.vue` file and keep the full implementation in `src/components/Footer.vue`. Verify no imports need updating.

## Technical Details

**Affected files:**
- `src/components/layout/Footer.vue` - delete
- `src/components/Footer.vue` - keep (verify it's the full version)

**Related components:**
- Any files importing Footer components

**Database changes:**
- None

## Resources

- Check imports: `grep -r "from.*Footer" src/`

## Acceptance Criteria

- [ ] layout/Footer.vue deleted
- [ ] components/Footer.vue verified as the canonical version
- [ ] No broken imports
- [ ] Build passes successfully
- [ ] Footer renders correctly in all pages

## Work Log

### 2026-02-16 - Initial Discovery

**By:** Claude Code

**Actions:**
- Identified duplicate Footer components
- Confirmed layout/Footer.vue is empty/minimal
- Documented cleanup approach

## Notes

- Check if layout/ directory serves any purpose or can be removed entirely
- Quick grep for imports before deleting

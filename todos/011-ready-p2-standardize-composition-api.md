---
status: ready
priority: p2
issue_id: "011"
tags: [refactoring, consistency, vue3]
dependencies: []
---

# Standardize All Components to Composition API

Convert all Options API components to <script setup> syntax for consistency.

## Problem Statement

3 components use Options API while 13 use Composition API - inconsistent patterns across the codebase.

**Components using Options API (data(), mounted()):**
- `src/components/NavBar.vue`
- `src/components/Footer.vue`
- `src/pages/About.vue`

This inconsistency makes the codebase harder to maintain and understand. New developers need to learn two patterns instead of one.

## Findings

- NavBar.vue uses `defineComponent` with Options API pattern
- Footer.vue uses `defineComponent` with Options API pattern
- About.vue uses `defineComponent` with Options API pattern
- 13 other components already use `<script setup>` syntax
- Composition API is the modern Vue 3 standard and provides better TypeScript support

## Proposed Solutions

### Option 1: Convert to <script setup>

**Approach:** Convert all three Options API components to Composition API using `<script setup>` syntax.

**Pros:**
- Consistent with the rest of the codebase
- Better TypeScript inference
- Less boilerplate code
- Vue 3 standard

**Cons:**
- Requires manual conversion and testing
- Small risk of introducing bugs during refactor

**Effort:** 45 minutes

**Risk:** Low

---

### Option 2: Convert to defineComponent with setup()

**Approach:** Use `defineComponent` with explicit `setup()` function instead of `<script setup>`.

**Pros:**
- More explicit component structure
- Easier to see what's exported

**Cons:**
- Still more verbose than `<script setup>`
- Not the most modern pattern

**Effort:** 45 minutes

**Risk:** Low

---

## Recommended Action

Convert all three components to `<script setup>` syntax for maximum consistency and modern Vue 3 patterns. Test each component after conversion.

## Technical Details

**Affected files:**
- `src/components/NavBar.vue`
- `src/components/Footer.vue`
- `src/pages/About.vue`

**Related components:**
- None (these are standalone components)

**Database changes:**
- None

## Resources

- Vue 3 Composition API docs: https://vuejs.org/guide/extras/composition-api-faq.html
- Script Setup docs: https://vuejs.org/api/sfc-script-setup.html

## Acceptance Criteria

- [ ] NavBar.vue converted to <script setup>
- [ ] Footer.vue converted to <script setup>
- [ ] About.vue converted to <script setup>
- [ ] All components still function correctly
- [ ] No TypeScript errors introduced
- [ ] Build passes successfully

## Work Log

### 2026-02-16 - Initial Discovery

**By:** Claude Code

**Actions:**
- Analyzed all Vue components in the codebase
- Identified 3 components using Options API vs 13 using Composition API
- Documented affected files

## Notes

- Can be done incrementally (one component at a time)
- Test each component thoroughly after conversion
- Consider updating component patterns documentation

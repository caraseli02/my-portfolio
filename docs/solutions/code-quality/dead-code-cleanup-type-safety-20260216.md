---
module: Portfolio Website
date: 2026-02-16
problem_type: developer_experience
component: development_workflow
symptoms:
  - "Dead code files cluttering codebase (store.ts, unused components)"
  - "Vuex store imported but never used"
  - "Duplicate Footer components causing confusion"
  - "Hardcoded slugs in Home.vue not matching projects.ts data"
  - "TypeScript 'any' types bypassing type safety"
root_cause: incomplete_setup
resolution_type: code_fix
severity: medium
tags: [cleanup, dead-code, vuex, typescript, consistency]
---

# Code Quality Cleanup - Dead Code Removal & Type Safety

## Problem Summary

The codebase had accumulated dead code, unused dependencies, duplicate files, and inconsistent patterns that created confusion and maintenance overhead.

## Issues Fixed

### 1. Dead Code Files

**Removed Files:**
- `src/store.ts` - Vuex store never imported in main.ts
- `src/views/Home.vue` - Empty component, not in router
- `src/components/navigation/NavBar.vue` - Unused, Header.vue used instead
- `src/components/Footer.vue` - Duplicate (layout/Footer.vue used)
- `src/composables/useParallaxDepth.ts` - Never imported anywhere
- `src/vuex.d.ts` - TypeScript definitions for unused Vuex

**Impact:** ~400 lines of dead code removed

### 2. Unused Vuex Dependency

**Problem:** Vuex was included in package.json but never used:

```typescript
// main.ts - No .use(store) call
createApp(App)
  .use(router)  // ❌ No .use(store)
  .mount('#app')
```

**Solution:**

```bash
# Remove from package.json dependencies
npm uninstall vuex

# Remove files
rm src/store.ts src/vuex.d.ts
```

**Benefits:**
- Smaller bundle size
- One less dependency to maintain
- Clearer architecture (state handled via props/composables)

### 3. Slug Mismatch Bug

**Problem:** Home.vue had hardcoded slugs that didn't match projects.ts:

```typescript
// Home.vue (WRONG)
slug: 'vue-dashboard'      // Should be: 'vue3-dashboard'
slug: 'nuxt-ecommerce'     // Should be: 'nuxt-travel-bookings'
slug: 'chat-app'          // Should be: 'fastapi-realworld'
```

**Impact:** Navigation to case studies returned 404/redirect errors

**Solution:** Updated Home.vue to use correct slugs matching projects.ts data

### 4. TypeScript Issues

**Fixed Issues:**

#### a) `any` Type in shims-vue.d.ts
```typescript
// BEFORE
const component: DefineComponent<{}, {}, any>

// AFTER
const component: DefineComponent<Record<string, never>, Record<string, never>, unknown>
```

#### b) Inconsistent PropType Pattern
```typescript
// BEFORE (Vue 2 style)
type: Array as () => string[]

// AFTER (Vue 3 style)
import { PropType } from 'vue'
type: Array as PropType<string[]>
```

#### c) Unused Variable
```typescript
// BEFORE
const isHovered = ref(false);  // Defined but never used

// AFTER
// Removed unused ref
```

#### d) Better Interval Type
```typescript
// BEFORE
let interval: number | null = null;

// AFTER
let interval: ReturnType<typeof setInterval> | null = null;
```

## Prevention

### Best Practices

1. **Regular Dead Code Detection:**

```bash
# Find potentially unused files
npx unimported
# or
npx depcheck
```

2. **ESLint Rules for Dead Code:**

```javascript
// .eslintrc.js
module.exports = {
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    'no-unused-vars': 'off', // Use TypeScript version
    'vue/no-unused-components': 'error',
    'vue/no-unused-vars': 'error',
  }
}
```

3. **TypeScript Strict Mode:**

```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
```

4. **Automated Cleanup Script:**

```bash
#!/bin/bash
# cleanup-check.sh

echo "Checking for dead code..."

# Check for unused exports
npx unimported --show-unimported

# Check TypeScript for unused variables
npx tsc --noEmit

echo "Done!"
```

### Code Review Checklist

- [ ] No files exist that aren't imported
- [ ] No variables are declared but unused
- [ ] No `any` types without justification
- [ ] Consistent PropType usage
- [ ] No duplicate components
- [ ] Data slugs match between files
- [ ] All dependencies are actually used

## Verification

### Build Verification

```bash
npm run build
```

- No TypeScript errors
- No unused import warnings
- Successful build

### Bundle Analysis

```bash
npm run build
npx vite-bundle-visualizer
```

- Smaller bundle without Vuex
- No dead code in output

## Impact

After cleanup:
- **Codebase size**: Reduced by ~400 lines
- **Bundle size**: Smaller without unused dependencies
- **Maintainability**: Easier to understand
- **Type safety**: No `any` types
- **Bug fixes**: Slugs now match correctly

---

**Fixed by:** Code review comprehensive quality audit  
**Date:** 2026-02-16

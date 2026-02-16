---
status: pending
priority: p3
issue_id: "017"
tags:
  - tooling
  - linting
  - formatting
dependencies: []
---

# Add Code Style Consistency with ESLint/Prettier

## Problem Statement

The codebase has inconsistent semicolon usage and varying import styles, which makes the code harder to read and maintain. Without automated formatting and linting, code style diverges across files and requires manual review attention.

- Inconsistent semicolon usage (some lines have them, others don't)
- Import styles vary between files (single vs. double quotes, order)
- No automated enforcement of style conventions
- Manual review time spent on formatting issues
- Potential for style-related merge conflicts

## Findings

After reviewing multiple source files:

- **Files affected:** All `.ts`, `.vue`, `.js` files
- Semicolon inconsistency detected across components
- Import statement formatting varies
- No `.eslintrc` or `prettier.config` files present
- No lint/format scripts in `package.json`
- Project uses TypeScript and Vue 3 (requires appropriate configs)

**Current state:**
```typescript
// Some files:
import { ref } from 'vue'
const x = 1

// Other files:
import {ref} from 'vue';
const x = 1;
```

## Proposed Solutions

### Option 1: Add ESLint with Prettier Integration

**Approach:**
1. Install ESLint, Prettier, and Vue/TypeScript plugins
2. Create `.eslintrc.cjs` with recommended rules
3. Create `.prettierrc` with project conventions
4. Add npm scripts for lint and format
5. Configure VS Code settings for auto-format on save

**Pros:**
- Industry standard tooling
- Automatic error detection
- Consistent formatting across team
- IDE integration for real-time feedback

**Cons:**
- Initial configuration time
- Learning curve for contributors
- May require large initial reformatting commit

**Effort:** 1 hour

**Risk:** Low

---

### Option 2: Add Prettier Only

**Approach:** Just add Prettier for formatting, skip ESLint for now.

**Pros:**
- Faster setup
- Solves formatting inconsistencies
- Simpler configuration

**Cons:**
- No linting for code quality issues
- May need ESLint later anyway

**Effort:** 30 minutes

**Risk:** Low

---

### Option 3: Use Rome (Biome) as Alternative

**Approach:** Use Biome (formerly Rome) as an all-in-one linter/formatter.

**Pros:**
- Single tool for linting and formatting
- Very fast execution
- Modern alternative

**Cons:**
- Less mature ecosystem
- Fewer integrations
- Team familiarity with ESLint/Prettier

**Effort:** 45 minutes

**Risk:** Medium

---

## Recommended Action

**Option 1 (ESLint + Prettier)** is recommended for a Vue/TypeScript project. This provides comprehensive tooling that the Vue ecosystem fully supports.

**Configuration to use:**
- ESLint with `eslint-plugin-vue` and `@typescript-eslint`
- Prettier with single quotes, no semicolons (match existing patterns)
- Pre-commit hook with Husky + lint-staged (optional but recommended)

## Technical Details

**Affected files:**
- New: `.eslintrc.cjs` - ESLint configuration
- New: `.prettierrc` - Prettier configuration
- Modified: `package.json` - Add dev dependencies and scripts
- Optional: `.vscode/settings.json` - Editor integration

**Related components:**
- All source files will be reformatted

**Database changes:**
- Migration needed? No

**Recommended dev dependencies:**
```json
{
  "eslint": "^8.x",
  "eslint-plugin-vue": "^9.x",
  "@typescript-eslint/eslint-plugin": "^6.x",
  "@typescript-eslint/parser": "^6.x",
  "prettier": "^3.x",
  "eslint-config-prettier": "^9.x"
}
```

**Recommended npm scripts:**
```json
{
  "lint": "eslint . --ext .vue,.ts,.tsx,.js,.jsx",
  "lint:fix": "eslint . --ext .vue,.ts,.tsx,.js,.jsx --fix",
  "format": "prettier --write \"src/**/*.{ts,vue,css,json}\""
}
```

## Resources

- **ESLint Vue Guide:** https://eslint.vuejs.org/
- **TypeScript ESLint:** https://typescript-eslint.io/
- **Prettier Docs:** https://prettier.io/docs/en/
- **Vue.js Style Guide:** https://vuejs.org/style-guide/
- **Husky + lint-staged:** https://typicode.github.io/husky/

## Acceptance Criteria

- [ ] ESLint installed and configured for Vue + TypeScript
- [ ] Prettier installed and configured
- [ ] No conflicting rules between ESLint and Prettier
- [ ] npm scripts added: `lint`, `lint:fix`, `format`
- [ ] All existing files pass linting (or reformatting complete)
- [ ] Style conventions documented (semicolons: no, quotes: single)
- [ ] IDE integration configured (VS Code settings optional)
- [ ] (Optional) Pre-commit hooks configured
- [ ] Documentation updated with linting instructions

## Work Log

### 2026-02-16 - Initial Creation

**By:** Claude Code

**Actions:**
- Identified style inconsistencies across codebase
- Reviewed formatting patterns in existing files
- Created ESLint + Prettier configuration plan
- Defined preferred style conventions (no semicolons, single quotes)

---

## Notes

- Decide on semicolon preference before running initial format (check existing majority pattern)
- Initial formatting will touch many files - consider a dedicated commit
- Document style decisions in CONTRIBUTING.md if open to contributions
- Consider adding to CI pipeline after implementation
- Pre-commit hooks prevent committing poorly formatted code

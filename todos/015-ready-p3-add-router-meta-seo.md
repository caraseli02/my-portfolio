---
status: pending
priority: p3
issue_id: "015"
tags:
  - seo
  - router
  - meta
dependencies: []
---

# Add Router Meta Fields for SEO

## Problem Statement

Routes lack meta fields for page titles and descriptions, which harms SEO and social sharing. Each page currently shows the same generic title in browser tabs and search results, missing opportunities for better discoverability and user engagement.

- No dynamic page titles based on route content
- Missing meta descriptions for search engines
- Poor social media preview cards
- Reduced SEO effectiveness

## Findings

After reviewing the current router setup:

- **File:** `src/router/index.ts`
- No meta fields defined on any routes
- No navigation guards present to update document.title
- Static index.html title is "Personal Portfolio" for all pages
- Routes needed: Home (portfolio), Projects, About, Extra

**Current state:**
```typescript
const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/projects', component: Projects, name: 'Projects' },
  { path: '/about', component: About, name: 'About' },
  // ...
]
```

## Proposed Solutions

### Option 1: Add Meta Fields and Navigation Guard

**Approach:**
1. Add `meta: { title, description }` to each route definition
2. Implement `beforeEach` navigation guard to update `document.title`
3. Add meta description tags dynamically

**Pros:**
- Proper SEO for each page
- Improved social sharing previews
- Better user experience (meaningful browser tabs)
- Follows Vue Router best practices

**Cons:**
- Requires maintaining titles in route definitions
- Minimal overhead from navigation guard

**Effort:** 30 minutes

**Risk:** Low

---

### Option 2: Use Vue Meta Library

**Approach:** Integrate vue-meta or similar library for more comprehensive meta tag management.

**Pros:**
- More powerful meta tag management
- Server-side rendering support (if needed later)
- Additional features (OG tags, Twitter cards)

**Cons:**
- Additional dependency
- Overkill for current needs
- More complex setup

**Effort:** 45-60 minutes

**Risk:** Low

---

## Recommended Action

Implement Option 1 (meta fields + navigation guard). This provides immediate SEO benefits with minimal complexity and no additional dependencies.

**Implementation steps:**
1. Define appropriate titles and descriptions for each route
2. Add meta fields to route definitions
3. Create `router.beforeEach` guard to update `document.title`
4. Add logic to update or inject meta description tags

## Technical Details

**Affected files:**
- `src/router/index.ts` - Add meta fields and navigation guard
- May need updates to `index.html` for default meta tags

**Related components:**
- All page components (indirectly via router meta)

**Database changes:**
- Migration needed? No

**Example implementation:**
```typescript
const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home',
    meta: {
      title: 'Vladislav Caraseli - Full Stack Developer',
      description: 'Personal portfolio showcasing web development projects and experience.'
    }
  }
  // ... other routes
]

router.beforeEach((to) => {
  document.title = to.meta.title || 'Portfolio'
  // Update meta description tag
})
```

## Resources

- **Vue Router Navigation Guards:** https://router.vuejs.org/guide/advanced/navigation-guards.html
- **Vue Router Meta Fields:** https://router.vuejs.org/guide/advanced/meta.html
- **SEO Best Practices:** https://developers.google.com/search/docs/fundamentals/seo-starter-guide

## Acceptance Criteria

- [ ] Meta fields added to all route definitions
- [ ] Navigation guard implemented to update document.title
- [ ] Meta description tags update dynamically
- [ ] Each page shows unique, appropriate title in browser tab
- [ ] Titles are descriptive and SEO-friendly
- [ ] Navigation between pages updates title correctly
- [ ] Fallback title defined for undefined routes

## Work Log

### 2026-02-16 - Initial Creation

**By:** Claude Code

**Actions:**
- Analyzed current router configuration for SEO gaps
- Identified missing meta fields and navigation guard
- Created implementation plan with example code
- Defined SEO-friendly titles for each route

---

## Notes

- Consider adding Open Graph (OG) tags for better social sharing later
- Keep titles under 60 characters and descriptions under 160 characters for optimal SEO
- Titles should be actionable and include primary keywords
- This change is important for professional portfolio discoverability

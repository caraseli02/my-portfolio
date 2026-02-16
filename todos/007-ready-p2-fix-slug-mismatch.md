---
status: ready
priority: p2
issue_id: "007"
tags: [bug, routing, data-consistency]
dependencies: []
---

# Fix Slug Mismatch Between Home.vue and projects.ts

Fix hardcoded case study slugs in Home.vue that don't match the actual project slugs defined in projects.ts.

## Problem Statement

Home.vue contains hardcoded slugs for case study links that don't match the actual slugs defined in projects.ts. This causes navigation failures when users click on case study links, resulting in 404 errors or redirects to the wrong pages.

**Slug Mismatches:**

| Home.vue (Wrong) | projects.ts (Correct) |
|------------------|----------------------|
| vue-dashboard | vue3-dashboard |
| nuxt-ecommerce | nuxt-travel-bookings |
| chat-app | fastapi-realworld |
| portfolio-generator | *(doesn't exist)* |
| component-library | *(doesn't exist)* |

**Impact:**
- Users clicking case study links get 404 errors
- Broken navigation degrades user experience
- Featured projects on homepage are inaccessible

## Findings

Investigation revealed the root cause:

- `src/pages/Home.vue` - Contains hardcoded slug strings in the template
- `src/data/projects.ts` - Source of truth for all project data including slugs
- No dynamic import or shared constant between the files
- Two projects referenced in Home.vue don't exist in projects.ts at all

**Affected Code:**
- Home.vue has case study buttons with `to="/projects/vue-dashboard"` etc.
- projects.ts defines slugs like `slug: 'vue3-dashboard'`

**Additional Issues:**
- Two projects listed on homepage have no corresponding data in projects.ts
- This suggests either outdated homepage or missing project entries

## Proposed Solutions

### Option 1: Update Home.vue Slugs to Match projects.ts (Quick Fix)

**Approach:** Update the hardcoded slugs in Home.vue to match projects.ts exactly.

**Changes needed:**
- `vue-dashboard` → `vue3-dashboard`
- `nuxt-ecommerce` → `nuxt-travel-bookings`
- `chat-app` → `fastapi-realworld`
- Remove or fix `portfolio-generator` and `component-library` references

**Pros:**
- Fastest solution (15 minutes)
- Immediate fix for broken links
- No structural changes needed

**Cons:**
- Still maintains hardcoded values
- Risk of future mismatches if projects.ts changes

**Effort:** 15 minutes

**Risk:** Medium (affects user-facing functionality)

---

### Option 2: Import Projects Data Dynamically

**Approach:** Import featured projects from projects.ts instead of hardcoding.

**Implementation:**
- Import projects array from projects.ts
- Filter for featured projects or select by ID
- Render dynamically in template

**Pros:**
- Single source of truth
- Future-proof against changes
- Consistent with data-driven approach

**Cons:**
- Requires more refactoring
- May need to add "featured" flag to projects.ts

**Effort:** 30-45 minutes

**Risk:** Low (better long-term solution)

---

### Option 3: Create Shared Slug Constants

**Approach:** Export slug constants from projects.ts and import in Home.vue.

**Implementation:**
- Create PROJECT_SLUGS constant in projects.ts
- Import and use in Home.vue

**Pros:**
- Prevents typos and mismatches
- Maintains some flexibility

**Cons:**
- Still requires manual maintenance
- Not as robust as Option 2

**Effort:** 20 minutes

**Risk:** Low

---

## Recommended Action

**Immediate fix (Option 1):** Update Home.vue slugs to match projects.ts:
1. Open `src/pages/Home.vue`
2. Find all router-link or button elements with `to="/projects/..."`
3. Update slugs to match projects.ts:
   - vue-dashboard → vue3-dashboard
   - nuxt-ecommerce → nuxt-travel-bookings
   - chat-app → fastapi-realworld
4. Handle missing projects (portfolio-generator, component-library):
   - Either add them to projects.ts, or
   - Remove them from Home.vue, or
   - Replace with existing projects
5. Test all case study links

**Future improvement:** Implement Option 2 (dynamic import) in a separate refactor task.

## Technical Details

**Affected files:**
- `src/pages/Home.vue` - Contains hardcoded slugs in router links
- `src/data/projects.ts` - Source of truth for project slugs

**Related components:**
- Project detail pages (reached via these slugs)
- Router configuration in `src/router/index.ts`

**Database changes:**
- Migration needed? No

**Routing impact:**
- Current broken routes: /projects/vue-dashboard, /projects/nuxt-ecommerce, /projects/chat-app
- Working routes: /projects/vue3-dashboard, /projects/nuxt-travel-bookings, /projects/fastapi-realworld

## Resources

- Project data source: `src/data/projects.ts`
- Router configuration: `src/router/index.ts`
- Related file: `src/pages/Projects.vue` (may also use these slugs)

## Acceptance Criteria

- [ ] All case study links in Home.vue use correct slugs from projects.ts
- [ ] Clicking "View Case Study" buttons navigates to correct project pages
- [ ] No 404 errors when accessing featured projects
- [ ] All three featured projects have working detail pages
- [ ] Mobile and desktop navigation both work
- [ ] No console errors related to routing

## Work Log

### 2025-02-16 - Initial Discovery

**By:** Claude Code

**Actions:**
- Compared slugs in Home.vue with projects.ts
- Identified 3 mismatched slugs and 2 non-existent projects
- Tested navigation to confirm 404 errors
- Documented all slug mappings

**Learnings:**
- Home.vue has 5 featured projects but only 3 exist in projects.ts
- Hardcoded slugs are prone to getting out of sync
- Projects.ts has different naming convention (vue3- vs vue-)

## Notes

- Verify Projects.vue page doesn't have similar issues
- Consider adding e2e tests to catch broken links
- Future refactor should implement dynamic project loading
- May need to decide what to do with missing projects (portfolio-generator, component-library)

---
status: pending
priority: p1
issue_id: "001"
tags: [security, external-links, tabnabbing]
dependencies: []
---

# Fix Tabnabbing Vulnerabilities in External Links

## Problem Statement

9 external links with `target="_blank"` are missing `rel="noopener noreferrer"`, creating a security vulnerability known as tabnabbing. This allows the target page to access `window.opener` and manipulate the parent tab, potentially leading to phishing attacks.

**Impact:**
- Malicious external sites could redirect users to phishing pages
- Bypasses same-origin policy protections when `rel` attribute is absent
- Affects navigation bar, footer, contact page, and project links

## Findings

Investigation identified multiple external links across the application that lack proper security attributes:

- **Contact.vue:45-48** - Social media links
- **Projects.vue:77-80, 127-132, 177-180** - Project demo and source links
- **NavBar.vue:34-37, 88-91** - Social media and external navigation links
- **CaseStudyHero.vue:71-73** - Project external links
- **Footer.vue:20-22, 31-33** - Footer social and external links

**Key discovery:** All affected links use `target="_blank"` without the `rel="noopener noreferrer"` attribute combination that prevents `window.opener` access.

**Impact assessment:** High - These are external links to social media, GitHub, and project demos that users frequently click.

## Proposed Solutions

### Option 1: Add rel="noopener noreferrer" to All External Links

**Approach:** Add `rel="noopener noreferrer"` attribute to all external links identified above.

**Pros:**
- Direct fix for the vulnerability
- Maintains current UX (links still open in new tab)
- Quick to implement
- Follows OWASP security best practices

**Cons:**
- Requires manual verification of each link
- No automated enforcement of the pattern going forward

**Effort:** 15 minutes

**Risk:** Low

---

### Option 2: Create Reusable SafeLink Component

**Approach:** Create a `<SafeLink>` component that automatically adds security attributes when `target="_blank"` is used.

**Pros:**
- Centralized security enforcement
- Future-proof - new links automatically protected
- Easy to audit - all external links in one component

**Cons:**
- Requires refactoring existing links to use component
- Additional component complexity
- Longer implementation time

**Effort:** 45 minutes

**Risk:** Low

---

## Recommended Action

Implement Option 1 (add `rel="noopener noreferrer"` to all affected links) as immediate fix. This is a straightforward security patch that should be completed before any deployment.

## Technical Details

**Affected files:**
- `src/components/Contact.vue:45-48` - Social media links
- `src/components/Projects.vue:77-80, 127-132, 177-180` - Project demo and source links
- `src/components/NavBar.vue:34-37, 88-91` - Social media and external navigation links
- `src/components/CaseStudyHero.vue:71-73` - Project external links
- `src/components/Footer.vue:20-22, 31-33` - Footer social and external links

**Related components:**
- All components with external social media links (LinkedIn, GitHub, Twitter)
- Project showcase components with live demo links

**Database changes:** None

## Resources

- **OWASP Guidelines:** https://owasp.org/www-community/attacks/Reverse_Tabnabbing
- **MDN:** https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/noopener
- **Similar patterns:** Standard security practice for all web applications

## Acceptance Criteria

- [ ] All acceptance criteria checked
- [ ] `rel="noopener noreferrer"` added to Contact.vue links (lines 45-48)
- [ ] `rel="noopener noreferrer"` added to Projects.vue links (lines 77-80, 127-132, 177-180)
- [ ] `rel="noopener noreferrer"` added to NavBar.vue links (lines 34-37, 88-91)
- [ ] `rel="noopener noreferrer"` added to CaseStudyHero.vue links (lines 71-73)
- [ ] `rel="noopener noreferrer"` added to Footer.vue links (lines 20-22, 31-33)
- [ ] All 9 external links verified with proper security attributes
- [ ] No regression in link functionality (links still open in new tab)

## Work Log

### 2026-02-16 - Initial Discovery

**By:** Claude Code

**Actions:**
- Identified 9 external links missing `rel="noopener noreferrer"`
- Documented affected files and line numbers
- Classified as P1 priority security vulnerability
- Drafted solution approaches

**Learnings:**
- Tabnabbing is a common vulnerability in single-page applications
- External links should always use `rel="noopener noreferrer"` when opening in new tabs
- Manual code review needed to catch these issues

---

## Notes

- **Timeline:** Urgent - should be fixed before next deployment
- **Testing:** Verify each link still opens correctly in new tab after changes
- **Future consideration:** Consider Option 2 (SafeLink component) for long-term maintainability

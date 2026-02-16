---
title: Portfolio UI Redesign - Josie-Style Playful Aesthetic
type: feat
date: 2026-02-15
status: completed
---

# Portfolio UI Redesign - Josie-Style Playful Aesthetic

## Overview

Transform the current Vue 3 portfolio from a sophisticated dark-themed developer showcase into a playful, personality-driven creative portfolio inspired by [itsjosie.com](https://www.itsjosie.com/). This redesign represents a shift from "developer portfolio" to "creative professional portfolio" with emphasis on personality, bold typography, and whimsical interactions.

## Current State vs Target

| Aspect | Current | Target |
|--------|---------|--------|
| **Aesthetic** | Dark, sophisticated, tech-focused | Light, playful, personality-driven |
| **Color Palette** | Vue green (#42b883) on dark backgrounds | Cream/off-white with playful accents |
| **Typography** | Modern sans-serif, gradient accents | Bold, large-scale typography |
| **Case Studies** | Grid cards with hover effects | Numbered list (01, 02...) with hover reveals |
| **Navigation** | Home, Projects, About + GitHub button | index, about, contact (simplified) |
| **Animations** | Custom cursor, parallax, tilt, magnetic effects | Marquees, scroll-triggered reveals |
| **Footer** | Standard links and tech stack | Personality descriptors marquee |

## Problem Statement

The current portfolio, while technically impressive with sophisticated animations, presents a generic "developer portfolio" aesthetic that doesn't differentiate the creator or showcase personality. The itsjosie.com reference demonstrates how a portfolio can be memorable through:

1. **Distinctive visual identity** - Playful shapes, bold typography, consistent voice
2. **Personality-forward content** - Descriptors like "compulsive doodler+nervous joker" humanize the creator
3. **Simplified information architecture** - Case studies on the homepage, no separate Projects page
4. **Memorable interactions** - Marquee scrolling elements, hover image reveals

## Proposed Solution

Implement a complete visual redesign maintaining the Vue 3 + TypeScript + Tailwind foundation while adopting the itsjosie.com aesthetic:

### Key Components to Build

1. **Marquee System** - Reusable infinite scrolling text with decorative SVGs
2. **Numbered Case Study List** - Vertical numbered list with tag badges and hover image reveals
3. **Playful Footer** - Scrolling personality descriptors with social links
4. **Decorative SVG Library** - Blob, arch, snake, star, burst shapes
5. **Simplified Navigation** - Reduced to index/about/contact
6. **Contact Page** - New dedicated page with animated cycling adjectives

### Content Restructuring

- **Eliminate Projects page** - Move case studies to index with anchor links
- **Add Contact page** - Dedicated page for email/LinkedIn with animations
- **Reorganize case studies** - Convert 3 featured + 8 other into unified numbered list (01-11)
- **Develop personality voice** - Create playful descriptors for footer marquee

## Technical Considerations

### Architecture Impacts

- **Routing Changes**: Add `/contact` route, potentially redirect `/projects` to `/#case-studies`
- **Component Refactoring**: Existing case study components can be reused but need styling updates
- **Color System**: Complete Tailwind config overhaul for new palette
- **Animation Strategy**: Replace complex mouse-tracking animations with simpler CSS marquees

### Performance Implications

- **Marquee Animation**: CSS transforms for GPU acceleration
- **Image Loading**: Lazy load case study hover images
- **Reduced Motion**: Respect `prefers-reduced-motion` media query

### Accessibility Considerations

- **Marquee Accessibility**: Pause on hover, provide static fallbacks
- **Reduced Motion**: Disable animations for users who prefer reduced motion
- **Touch Devices**: Handle hover reveals via tap interactions on mobile

## Acceptance Criteria

### Visual Design

- [ ] New color palette implemented (cream background, playful accents)
- [ ] Bold typography system with large headings
- [ ] Decorative SVG shapes integrated throughout
- [ ] Consistent spacing and visual rhythm matching reference

### Components

- [ ] `Marquee.vue` - Reusable infinite scrolling component with configurable direction/speed
- [ ] `CaseStudyList.vue` - Numbered list with tags and hover image reveal
- [ ] `DecorativeShape.vue` - SVG component for blob, arch, snake, star, burst shapes
- [ ] `PersonalityMarquee.vue` - Footer scrolling descriptors
- [ ] Contact page with animated cycling adjectives

### Pages

- [ ] **Home (Index)** redesigned with:
  - Hero: "Hi my name is / Vlad Caraseli"
  - Role descriptors (Developer / Vue.js / TypeScript...)
  - Marquee scrolling "case studies" banner
  - Numbered case study list (01-11)
  - Playful footer with personality marquee
  
- [ ] **About** redesigned with:
  - Hero section with greeting
  - Bio content
  - Decorative SVGs
  - Location tagline
  
- [ ] **Contact** created with:
  - Animated cycling adjectives headline
  - Email link with burst icon
  - LinkedIn link with burst icon
  - "don't be shy" playful text
  
- [ ] **Case Study Detail** updated to match new aesthetic while maintaining timeline structure

### Navigation

- [ ] Simplified nav: index, about, contact
- [ ] Remove GitHub button from nav (move to footer)
- [ ] Handle mobile navigation (hamburger menu)
- [ ] Redirect `/projects` to `/#case-studies` or remove route

### Interactions

- [ ] Marquees scroll infinitely with smooth animation
- [ ] Marquees pause on hover (accessibility)
- [ ] Case study list items reveal preview image on hover (desktop)
- [ ] Case study list items handle tap for mobile
- [ ] Smooth scroll to #case-studies anchor
- [ ] All animations respect `prefers-reduced-motion`

### Responsive

- [ ] Mobile-optimized layout
- [ ] Touch-friendly interactions
- [ ] Adjusted typography scale for small screens
- [ ] Mobile navigation pattern defined and implemented

## Success Metrics

- **Visual Cohesion**: Design matches itsjosie.com aesthetic while maintaining personal brand
- **Performance**: Lighthouse score 90+ for performance, accessibility, best practices
- **Accessibility**: WCAG 2.1 AA compliance with reduced motion support
- **User Experience**: Smooth interactions, no layout shifts, intuitive navigation

## Dependencies & Risks

### Dependencies

- Vue 3 + TypeScript + Vite (existing)
- Tailwind CSS (existing - needs config updates)
- Vue Router (existing - needs route changes)
- SVG assets (need to create/source)
- Case study preview images (need to generate)

### Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| **Content restructuring confuses existing users** | Medium | Medium | Add redirects, maintain bookmark compatibility |
| **Accessibility issues with marquees** | High | High | Implement pause controls, static fallbacks |
| **Performance problems with animations** | Medium | High | Use CSS transforms, viewport-based activation |
| **Design inconsistency mixing old/new elements** | High | Medium | Complete redesign in single branch |
| **Copy/voice mismatch** | Medium | Medium | Develop brand voice guidelines before writing |

## Implementation Phases

### Phase 1: Foundation & Assets (Est. 2-3 hours)

- [ ] Update `tailwind.config.js` with new color palette
- [ ] Create decorative SVG assets (blob, arch, snake, star, burst)
- [ ] Define typography scale and font weights
- [ ] Create `Marquee.vue` component with CSS animation
- [ ] Create `DecorativeShape.vue` SVG component

### Phase 2: Core Components (Est. 3-4 hours)

- [ ] Build `CaseStudyList.vue` with numbered format and hover reveal
- [ ] Build `PersonalityMarquee.vue` for footer
- [ ] Update `NavBar.vue` with simplified navigation
- [ ] Create Contact page component
- [ ] Implement reduced-motion support utilities

### Phase 3: Page Redesigns (Est. 4-5 hours)

- [ ] Redesign `Home.vue` with new hero, marquees, case study list
- [ ] Redesign `About.vue` with new layout and decorative elements
- [ ] Build `Contact.vue` page with animated adjectives
- [ ] Update `CaseStudy.vue` with new styling
- [ ] Update `Footer.vue` with personality marquee

### Phase 4: Navigation & Routing (Est. 1-2 hours)

- [ ] Add `/contact` route to `router/index.ts`
- [ ] Add redirect from `/projects` to `/#case-studies`
- [ ] Update all internal navigation links
- [ ] Implement mobile navigation pattern

### Phase 5: Polish & Testing (Est. 2-3 hours)

- [ ] Test all interactions on desktop
- [ ] Test responsive breakpoints
- [ ] Verify reduced-motion behavior
- [ ] Optimize marquee performance
- [ ] Cross-browser testing
- [ ] Lighthouse audit

**Total Estimated Effort: 12-17 hours**

## Open Questions

### Critical (Blocks Implementation)

1. **Q1**: Do we eliminate the `/projects` route entirely or keep it as a redirect?
   - *Assumption if unanswered*: Keep as redirect to `/#case-studies`

2. **Q2**: What is the exact color palette for the new design?
   - *Assumption if unanswered*: Extract from itsjosie.com (cream ~#F5F5F0, dark text ~#1a1a1a)

3. **Q3**: Do case studies keep their current detailed structure or simplify?
   - *Assumption if unanswered*: Keep detailed structure, only change listing format

4. **Q4**: How should reduced-motion preferences be handled?
   - *Assumption if unanswered*: Disable all marquees and complex animations

### Important (Significantly Affects UX)

5. **Q5**: What are the specific personality descriptors for the footer marquee?
   - *Suggestion*: "compulsive coder+open source contributor+vue enthusiast+coffee drinker+bug hunter+..."

6. **Q6**: Should the custom cursor be retained or removed?
   - *Suggestion*: Remove to match clean aesthetic

7. **Q7**: What happens on the "extra" blob link?
   - *Suggestion*: Remove or make it an easter egg page

8. **Q8**: Do all 11 projects get numbered or just featured ones?
   - *Suggestion*: Include all 11 (3 featured + 8 other) in numbered list 01-11

### Nice-to-Have

9. **Q9**: What font family should be used?
   - *Suggestion*: Keep Inter/system-ui with bolder weights

10. **Q10**: Should there be a contact form or just external links?
    - *Suggestion*: Just email/LinkedIn links (simpler)

## Content Requirements

### Personality Descriptors (Footer Marquee)

Need to develop 8-12 playful descriptors that capture personality:
- Format: "descriptor+descriptor+descriptor..."
- Examples: "compulsive coder+open source contributor+vue enthusiast+coffee drinker+bug hunter+documentation reader+stack overflow lurker+..."

### Case Study Ordering

Current: 3 featured + 8 other
Target: Unified numbered list 01-11

Need to define order:
- By date (newest first)?
- By importance/significance?
- By category/type?

### Case Study Preview Images

Need images for hover reveal effect:
- Use existing project screenshots?
- Use metaphor banner images from case studies?
- Create new preview thumbnails?

## File Structure Changes

```
src/
├── components/
│   ├── ui/
│   │   ├── Marquee.vue              # NEW: Infinite scroll component
│   │   ├── DecorativeShape.vue      # NEW: SVG shape component
│   │   └── PersonalityMarquee.vue   # NEW: Footer scrolling text
│   ├── case-study/
│   │   └── CaseStudyList.vue        # NEW: Numbered list with hover
│   └── navigation/
│       └── NavBar.vue               # UPDATE: Simplified nav
├── pages/
│   ├── Home.vue                     # UPDATE: Complete redesign
│   ├── About.vue                    # UPDATE: New layout
│   ├── Contact.vue                  # NEW: Contact page
│   ├── Projects.vue                 # UPDATE: Redirect or remove
│   └── CaseStudy.vue                # UPDATE: New styling
├── assets/
│   └── shapes/                      # NEW: SVG shape files
│       ├── blob.svg
│       ├── arch.svg
│       ├── snake.svg
│       ├── star.svg
│       └── burst.svg
└── router/
    └── index.ts                     # UPDATE: Add /contact route
```

## References & Research

### Internal References

- `tailwind.config.js` - Current color palette (needs update)
- `src/pages/Home.vue` - Current hero structure (to be redesigned)
- `src/pages/Projects.vue` - Current case study listing (to be replaced)
- `src/components/navigation/NavBar.vue` - Current navigation (to be simplified)
- `src/components/case-study/*` - Existing case study components (reuse with styling updates)

### External References

- [itsjosie.com](https://www.itsjosie.com/) - Design reference
- [Webflow - How to Create Infinite Marquee](https://webflow.com/blog/infinite-marquee) - Marquee implementation patterns
- [CSS Tricks - Accessible Marquee](https://css-tricks.com/snippets/css/accessible-marquee/) - Accessibility considerations

### Related Patterns

Current sophisticated animations to potentially remove:
- Custom cursor (`CustomCursor.vue`)
- Parallax depth effects (`useParallaxDepth.ts`)
- Tilt effects (`useTiltEffect.ts`)
- Magnetic buttons (`useMagneticEffect.ts`)
- Ripple effects (`useRipple.ts`)

Keep for potential reuse:
- Scroll reveal (`useScrollReveal.ts`)
- Scroll progress (`useScrollProgress.ts`)

## MVP (Minimum Viable Product)

For initial implementation, focus on:

1. **New color palette** - Update Tailwind config
2. **Home page redesign** - Hero + numbered case study list
3. **Simplified navigation** - index/about/contact
4. **Basic marquee** - Single marquee component for case studies banner
5. **Contact page** - Simple email/LinkedIn links
6. **Footer update** - Basic personality marquee

Defer to later:
- Complex hover image reveals
- Decorative SVG shapes
- Multiple marquee instances
- Animated cycling adjectives
- Easter egg pages

## Test Plan

### Visual Regression

- [ ] Compare key pages against design mockups/reference
- [ ] Verify typography hierarchy
- [ ] Check color contrast ratios

### Functional Testing

- [ ] Navigation works on all pages
- [ ] Case study links navigate correctly
- [ ] Marquees scroll smoothly
- [ ] Hover effects work on desktop
- [ ] Mobile navigation functions

### Accessibility Testing

- [ ] Keyboard navigation works
- [ ] Screen reader announces content correctly
- [ ] Reduced motion preference respected
- [ ] Color contrast meets WCAG 2.1 AA

### Performance Testing

- [ ] Lighthouse score 90+ across all categories
- [ ] Marquee animation doesn't cause jank
- [ ] Images lazy load correctly
- [ ] No layout shifts on page load

### Cross-Browser

- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (macOS and iOS)

## Documentation

### Code Documentation

- Document new components with JSDoc comments
- Include usage examples in component files
- Note any non-obvious animation behaviors

### User Documentation

- Update README with new project structure
- Document how to add new case studies to numbered list
- Document how to update personality descriptors

## Post-Launch Considerations

### Analytics

- Track case study click-through rates
- Monitor time on page
- Track navigation patterns

### Future Enhancements

- Dark mode toggle (if desired)
- Additional easter eggs
- Blog integration
- Case study filtering by tag
- More complex marquee interactions

## Branch Strategy

Create feature branch: `feat/josie-style-redesign`

```bash
git checkout -b feat/josie-style-redesign
```

All changes should be committed to this branch with clear, descriptive commit messages following conventional commits format.

---

**Created**: 2026-02-15
**Last Updated**: 2026-02-15
**Status**: Draft - Pending answers to critical questions

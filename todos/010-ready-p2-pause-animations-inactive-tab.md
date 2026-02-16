---
status: ready
priority: p2
issue_id: "010"
tags:
  - performance
  - battery
  - animations
dependencies: []
---

# Pause Animations in Background Tabs Using Page Visibility API

## Problem Statement

setInterval timers in TextRotator.vue and Contact.vue continue running when the user switches to a different tab. This wastes CPU cycles, consumes battery unnecessarily, and is particularly problematic on mobile devices where battery life is critical.

## Findings

- TextRotator.vue:58-64 uses setInterval for text rotation animation
- Contact.vue:93-104 uses setInterval for some periodic operation
- Both components lack Page Visibility API integration
- Animations continue at full speed even when tab is hidden
- No pause/resume logic exists for visibility changes
- Wastes CPU and battery on background tabs

## Proposed Solutions

### Option 1: Page Visibility API Integration (Recommended)

**Approach:** Listen for `visibilitychange` event and pause/resume setInterval based on document visibility state.

**Pros:**
- Native browser API with wide support
- Minimal code changes needed
- Immediate CPU/battery savings
- Simple pause/resume logic

**Cons:**
- Need to handle state restoration when tab becomes visible
- May need to catch up on missed animations (or skip)

**Effort:** 20 minutes

**Risk:** Low

---

### Option 2: requestAnimationFrame + Visibility Check

**Approach:** Replace setInterval with requestAnimationFrame that only runs when tab is visible, or add visibility check within animation frame.

**Pros:**
- Synchronizes with display refresh rate
- Automatically pauses when tab is hidden (browsers throttle rAF)
- Smoother animations

**Cons:**
- Requires refactoring from setInterval pattern
- More complex for non-visual operations

**Effort:** 30 minutes

**Risk:** Low

---

### Option 3: Web Workers for Background Processing

**Approach:** Move time-sensitive logic to Web Workers so it runs independently of tab visibility.

**Pros:**
- True background processing
- Doesn't block main thread
- Can notify main thread when needed

**Cons:**
- Overkill for simple animations
- Requires message passing architecture
- Not necessary for UI-only animations

**Effort:** 1 hour

**Risk:** Medium

## Recommended Action

Implement Option 1: Add Page Visibility API integration to both TextRotator.vue and Contact.vue. Clear intervals when document becomes hidden and restart them when visible again.

Implementation steps:
1. Add `visibilitychange` event listener in mounted hook
2. Track interval IDs in component data
3. Clear intervals when `document.hidden` is true
4. Restart intervals when tab becomes visible
5. Clean up event listener in beforeUnmount

## Technical Details

**Affected files:**
- `src/components/TextRotator.vue:58-64` - text rotation interval
- `src/components/Contact.vue:93-104` - contact form interval/animation

**Related components:**
- TextRotator.vue - animated text display
- Contact.vue - contact form with animations

**Database changes:**
- None

## Resources

- **MDN Page Visibility API:** https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API
- **Can I Use:** https://caniuse.com/pagevisibility
- **Performance Best Practices:** https://developer.mozilla.org/en-US/docs/Web/Performance/Fundamentals

## Acceptance Criteria

- [ ] Page Visibility API event listener added to both components
- [ ] setInterval timers pause when tab is hidden
- [ ] setInterval timers resume when tab becomes visible
- [ ] No missed animations or state corruption on resume
- [ ] Event listeners properly cleaned up on component destroy
- [ ] Battery usage reduced in background tabs
- [ ] Performance profile shows no activity when tab is hidden

## Work Log

### 2026-02-16 - Todo Created

**By:** Claude Code

**Actions:**
- Analyzed TextRotator.vue and Contact.vue for setInterval usage
- Identified lack of Page Visibility API integration
- Documented three solution approaches
- Recommended native API for simplicity and effectiveness

**Learnings:**
- Page Visibility API has excellent browser support (all modern browsers)
- Simple pause/resume pattern saves significant battery life
- requestAnimationFrame auto-throttles but setInterval does not

## Notes

- Consider whether to catch up on missed animations or skip them
- For TextRotator, skipping might be better than rapid-fire catch-up
- Test on both desktop and mobile browsers
- Add console.log in development to verify pausing/resuming works

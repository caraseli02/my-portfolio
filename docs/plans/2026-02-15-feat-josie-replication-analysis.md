---
title: Portfolio UI Redesign - Pixel-Perfect Josie Replication
type: feat
date: 2026-02-15
status: in-progress
---

# Portfolio UI Redesign - Pixel-Perfect Josie Replication

## Complete Site Analysis

### Site Structure Overview

```
itsjosie.com/
├── / (Index/Home)
├── /about
├── /contact
├── /extra (Easter egg)
└── /[case-study-slug] (e.g., /uwgla, /labwc, /pond)
```

### Page-by-Page Breakdown

---

## 1. HOME PAGE (/) - Complete Analysis

### Layout Structure

```
┌─────────────────────────────────────────────────────────┐
│  [LOGO]          index   about   contact        [BLOB]  │  ← Header
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Hi my name is                                          │
│  Josie Allison                                          │  ← Hero
│                                                         │
│  I'm a                                                  │
│  website                                                │
│  UX/UI                                                  │
│  brand                                                  │
│  product                                                │
│  graphic                                                │
│  designer                                               │
│                                                         │
│  [BLOB LINK]                                            │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  [CASE STUDIES LOOP SVG + ARROW] → #case-studies        │  ← Marquee Link
├─────────────────────────────────────────────────────────┤
│  [ICON] [ICON] [ICON] [ICON]  it's nice to meet you     │  ← Marquee 1
│  [ICON] [ICON] [ICON] [ICON]  it's nice to meet you     │  ← Marquee 2
│  [ICON] [ICON] [ICON] [ICON]  it's nice to meet you     │  ← Marquee 3
│  [ICON] [ICON] [ICON] [ICON]  it's nice to meet you     │  ← Marquee 4
├─────────────────────────────────────────────────────────┤
│  case studies                                           │  ← Section Title
├─────────────────────────────────────────────────────────┤
│  01  United Way          [TAGS...]              [IMAGE] │  ← Case Study 1
│  02  L.A. Black Worker   [TAGS...]              [IMAGE] │  ← Case Study 2
│  03  Pond                [TAGS...]              [IMAGE] │  ← Case Study 3
│  04  The People's Project[TAGS...]              [IMAGE] │  ← Case Study 4
│  05  Rehousing L.A.      [TAGS...]              [IMAGE] │  ← Case Study 5
│  06  Tangere             [TAGS...]              [IMAGE] │  ← Case Study 6
│  07  Sandino Brothers    [TAGS...]              [IMAGE] │  ← Case Study 7
├─────────────────────────────────────────────────────────┤
│  [BLOB LINK]                                            │
├─────────────────────────────────────────────────────────┤
│  trait+trait+trait+trait+trait+trait+trait...           │  ← Footer Marquee
│  Living, playing and creating in Portland, Oregon.      │
│  [BURST] email    [BURST] linkedin                      │
│  don't be shy                                           │
│  [ARCH SVG]                                             │
└─────────────────────────────────────────────────────────┘
```

### Detailed Interaction Analysis

#### 1.1 Header/Navigation

**Components:**
- Logo SVG (stylized "J" or wordmark)
- Navigation links: index, about, contact (lowercase)
- "Extra" blob link (right side, playful easter egg)

**Interactions:**
- Logo: Links to `/`, hover scale effect
- Nav links: Underline or color change on hover
- Active state: Current page indicated (likely bold or underline)
- Blob link: Rotates or wiggles on hover

**Position:**
- Fixed or sticky at top
- Full width with padding
- Logo left, nav center/right, blob far right

#### 1.2 Hero Section

**Typography Structure:**
```
Line 1: "Hi my name is" - Regular weight, large size (~72-96px)
Line 2: "Josie Allison" - Bold/Black weight, larger size (~96-120px)
```

**Role Descriptors (Multi-line display):**
```
"I'm a" - Small intro text
"website" - Large, bold
"UX/UI" - Large, bold
"brand" - Large, bold
"product" - Large, bold
"graphic" - Large, bold
"designer" - Large, bold
```

**Visual Characteristics:**
- Left-aligned text
- Extreme bold typography
- Tight letter-spacing on main name
- Generous line-height on role descriptors
- Background: Solid cream/off-white (#F5F5F0 or similar)

#### 1.3 Case Studies Marquee Link

**Structure:**
- SVG text: "case studies loop" in circular/loop design
- Short arrow SVG pointing down
- Links to `#case-studies` anchor

**Position:**
- Below hero
- Centered or left-aligned
- Acts as scroll indicator

#### 1.4 "It's Nice to Meet You" Marquees

**Structure:**
4 horizontal rows, each containing:
- 4 decorative SVG icons in sequence:
  1. Half-circle diamond
  2. Old arch
  3. Snake
  4. Shooting Star
- Text: "it's nice to meet you"
- Repeats multiple times per row

**Animation:**
- Infinite horizontal scroll (CSS animation)
- Direction alternates (rows 1,3: right-to-left; rows 2,4: left-to-right)
- Speed: ~20-30 seconds per loop
- Linear timing function
- Seamless loop (duplicate content for continuity)

**Styling:**
- Icons: ~40-60px height
- Text: Medium size (~24-32px)
- Spacing: Consistent gaps between elements
- Color: Dark text/icons on light background

#### 1.5 Case Studies Section

**Section Title:**
- "case studies" - lowercase
- Small size, subtle styling
- Left-aligned with padding

**Case Study List Items:**

Each item has horizontal layout:
```
[NUMBER] [TITLE]                    [TAGS]              [IMAGE]
```

**Number Format:**
- Leading zero: 01, 02, 03...
- Large, bold
- Monospaced or tabular nums

**Title:**
- Project name
- Bold, large
- Links to case study page

**Tags:**
- Category labels (Website Design, Branding, etc.)
- Small text
- Possibly comma-separated or spaced

**Hover Image:**
- Hidden by default
- Appears on hover (desktop)
- Position: Absolute, right side or follows cursor
- Size: ~300-400px width
- Transition: Fade in or slide in

**Mobile Behavior:**
- Stack vertically
- Images always visible or on tap
- Full-width layout

#### 1.6 Extra Blob Links

**Position:**
- One after hero
- One after case studies list

**Appearance:**
- Organic blob shape SVG
- Links to `/extra`
- Hover: Slight rotation or scale

#### 1.7 Footer

**Personality Marquee:**
- Continuous scrolling text
- Format: "word+word+word+word..."
- Traits: compulsive doodler, nervous joker, globe trotter, etc.
- Speed: Slower than header marquees
- Direction: Right to left

**Location Tagline:**
- "Living, playing and creating in Portland, Oregon."
- Centered or left-aligned
- Smaller text

**Social Links:**
- Email and LinkedIn
- Each with burst/star SVG icon
- Links open in new tab (mailto: for email)
- Hover: Icon animation (rotate/pulse)

**Playful Text:**
- "don't be shy" - lowercase, small, centered

**Bottom SVG:**
- Old arch shape
- Decorative, no functionality

---

## 2. ABOUT PAGE (/about) - Complete Analysis

### Layout Structure

```
┌─────────────────────────────────────────────────────────┐
│  [LOGO]          index   about   contact        [BLOB]  │  ← Same Header
├─────────────────────────────────────────────────────────┤
│  I'm Josie Allison,                                     │
│  it's nice to meet you                                  │  ← Hero
│                                                         │
│  [Bio paragraph 1]                                      │
│  [Bio paragraph 2]                                      │
│  [Bio paragraph 3]                                      │
│  [Bio paragraph 4]                                      │  ← Bio Content
│  [Bio paragraph 5]                                      │
│                                                         │
│  [STAR SVG]                                             │
│  [SNAKE SVG]                                            │
│  [PROFILE PHOTO]                                        │  ← Visual Elements
│                                                         │
├─────────────────────────────────────────────────────────┤
│  [FOOTER - Same as Home]                                │
└─────────────────────────────────────────────────────────┘
```

### Detailed Analysis

#### 2.1 Hero Text
```
"I'm Josie Allison,"
"it's nice to meet you"
```
- Two lines
- Large, bold typography
- Comma after name
- Lowercase "it's"

#### 2.2 Bio Content

**Paragraph Structure:**
- 5 paragraphs of varying length
- First person narrative
- Personal tone: "I was born...", "My curiosity...", "I have worked..."
- Professional journey mixed with personality

**Visual Flow:**
- Left-aligned text
- Generous line-height
- Medium font size (~18-20px)
- Max-width for readability (~600-700px)

#### 2.3 Decorative Elements

**Star SVG:**
- Position: Left side, floating
- Size: ~60-80px
- No animation or subtle rotation

**Snake SVG:**
- Position: Near profile photo
- Size: ~80-100px
- Curved shape

**Profile Photo:**
- Position: Right side or mixed in content
- Style: Professional but approachable
- Size: ~300-400px
- Possible soft border or shadow

---

## 3. CONTACT PAGE (/contact) - Complete Analysis

### Layout Structure

```
┌─────────────────────────────────────────────────────────┐
│  [LOGO]          index   about   contact        [BLOB]  │  ← Same Header
├─────────────────────────────────────────────────────────┤
│  Reach out to create something                          │
│  daring.                                                │
│  playful.                                               │
│  immersive                                              │
│  enticing.                                              │
│  joyful                                                 │
│  intuitive.                                             │
│  exciting.                                              │  ← Animated Headlines
│                                                         │
│  [BURST] email          [BURST] linkedin                │  ← Contact Links
│                                                         │
│  don't be shy                                           │
│  [ARCH SVG]                                             │
└─────────────────────────────────────────────────────────┘
```

### Detailed Analysis

#### 3.1 Animated Headlines

**Structure:**
- Line 1: "Reach out to create something" - Static
- Lines 2-8: Cycling adjectives - Animated

**Animation Pattern:**
- Typewriter or fade-in effect
- Each word appears sequentially
- Words cycle through: daring → playful → immersive → enticing → joyful → intuitive → exciting
- Timing: ~2-3 seconds per word
- Possible infinite loop or single cycle

**Typography:**
- Large, bold
- Period after some words
- Mixed punctuation (daring. vs immersive)
- Creates visual rhythm

#### 3.2 Contact Links

**Structure:**
- Two links: email and linkedin
- Each has burst/star icon before text
- Horizontal layout, centered or left-aligned

**Icons:**
- Burst/star SVG
- ~40-50px size
- Yellow/gold color
- Rotates or pulses on hover

**Interactions:**
- Email: mailto: link
- LinkedIn: External link
- Hover: Scale up, icon animation

#### 3.3 Footer Elements

**"don't be shy":**
- Playful, lowercase
- Small text below links
- Possible fade-in animation

**Arch SVG:**
- Bottom of page
- Decorative
- Dark color

---

## 4. CASE STUDY PAGE (/[slug]) - Complete Analysis

### Layout Structure

```
┌─────────────────────────────────────────────────────────┐
│  [LOGO]          index   about   contact        [BLOB]  │  ← Same Header
├─────────────────────────────────────────────────────────┤
│  01                                                     │
│  United Way of Greater Los Angeles                      │  ← Case Study Header
│  [TAGS: Website Design, Branding, Interaction...]       │
│                                                         │
│  Supporting solutions to inequality...                  │  ← Tagline
│  [DOWN ARROW]                                           │
│                                                         │
│  ### about                                              │
│  [Description paragraph]                                │  ← About Section
│                                                         │
├─────────────────────────────────────────────────────────┤
│  #01branding                                            │  ← Section Marquees
│  [ARROW]                                                │
│  #02website                                             │
│  [ARROW]                                                │
│  #03motion                                              │
│  [ARROW]                                                │
│  #04editorial                                           │
│  [STAR]                                                 │
│  (repeats 4 times)                                      │
├─────────────────────────────────────────────────────────┤
│  #01branding                                            │
│  [Description]                                          │
│  [IMAGES...]                                            │  ← Branding Section
│                                                         │
│  #02website                                             │
│  [Description]                                          │
│  [IMAGES...]                                            │  ← Website Section
│                                                         │
│  #03motion                                              │  ← Motion Section
│  #04social design                                       │  ← Social Section
│  [Images grid]                                          │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  [← This Way]  [take me home]  [That Way →]             │  ← Navigation
├─────────────────────────────────────────────────────────┤
│  [MEET YOU MARQUEES - Same as Home]                     │
├─────────────────────────────────────────────────────────┤
│  [FOOTER - Simplified]                                  │
└─────────────────────────────────────────────────────────┘
```

### Detailed Analysis

#### 4.1 Case Study Header

**Number:**
- Large, bold
- "01" format (no leading zero for single digit, actually has leading zero)
- Position: Top left

**Title:**
- Full project name
- Very large (~72-96px)
- Bold, tight letter-spacing

**Tags:**
- Horizontal list
- Small text
- Comma or space separated
- 5-6 tags per project

**Tagline:**
- Italic or different weight
- Descriptive sentence
- Medium size

**Scroll Indicator:**
- Down arrow SVG
- Suggests more content below

#### 4.2 About Section

**Heading:**
- "### about" - three hash symbols
- Monospace or code-like styling
- Small, subtle

**Content:**
- 1-2 paragraphs
- Project context and goals
- Regular body text

#### 4.3 Section Marquees

**Structure:**
Repeating 4-row pattern:
```
#01branding    [STRAIGHT ARROW]
#02website     [STRAIGHT ARROW]
#03motion      [STRAIGHT ARROW]
#04editorial   [STAR]
```

**Repeats:**
- Pattern appears 4 times vertically
- Each set scrolls horizontally
- Alternating directions

**Typography:**
- Large, bold
- Hash symbol + number + word
- No spaces: "#01branding"

#### 4.4 Content Sections

**Section Headers:**
- Same format as marquees: "#01branding"
- Anchor points for navigation
- Large, bold

**Content:**
- Paragraph descriptions
- Image galleries/grids
- Full-width images
- Multiple images per section

**Image Layouts:**
- Full-width hero images
- 2-column grids
- 3-column grids
- Mixed layouts

#### 4.5 Case Study Navigation

**Structure:**
```
[PREV PROJECT]    [HOME LINK]    [NEXT PROJECT]
```

**Prev Project:**
- "This Way" text
- Arrow pointing left
- Project name below

**Home Link:**
- "take me home"
- Centered
- Simple text link

**Next Project:**
- "That Way" text
- Arrow pointing right
- Project name below

**Visual Style:**
- Horizontal bar
- Arrows are SVG icons
- Divider lines between sections

#### 4.6 Footer

- Same "meet you" marquees as Home
- Simplified footer (no personality marquee?)
- Arch SVG at bottom

---

## 5. EXTRA PAGE (/extra) - Easter Egg

**Purpose:**
- Playful, non-essential content
- Shows personality
- Linked from blob icons

**Possible Content:**
- Fun facts
- Personal interests
- Spotify playlist
- Random content

---

## Design System Specifications

### Color Palette

**Primary Background:**
- Cream/Off-white: `#F5F5F0` or `#F8F7F2`

**Text Colors:**
- Primary text: `#1A1A1A` or `#0F0F0F` (near black)
- Secondary text: `#4A4A4A` or `#666666`
- Muted text: `#999999`

**Accent Colors:**
- Yellow/Gold (burst icons): `#FFD700` or `#F4C430`
- Tag backgrounds: Light gray `#E5E5E5`

**SVG Colors:**
- Icons: Match text color (dark)
- Some may be multi-colored

### Typography

**Font Family:**
- Primary: Bold sans-serif (likely custom or webfont)
- Possibly: Space Grotesk, DM Sans, or similar geometric sans
- Fallback: system-ui, -apple-system, sans-serif

**Type Scale:**
- Hero name: 96-120px, weight 700-900
- Hero subtitle: 72-96px, weight 400-500
- Role descriptors: 64-80px, weight 700
- Section headings: 48-64px, weight 700
- Case study numbers: 48-64px, weight 700
- Case study titles: 36-48px, weight 700
- Body text: 18-20px, weight 400
- Tags: 14-16px, weight 400-500
- Navigation: 16-18px, weight 400-500

**Letter Spacing:**
- Headlines: Tight (-0.02em to -0.05em)
- Body: Normal (0)
- Tags: Slight positive (0.02em)

### Spacing

**Page Padding:**
- Horizontal: 24px (mobile) → 48px (tablet) → 80px (desktop)
- Vertical sections: 80-120px between

**Component Spacing:**
- Header height: ~80px
- Hero padding: 120-160px top
- Marquee row height: ~60-80px
- Case study item height: ~100-120px
- Footer padding: 60-80px

### Border Radius

- Buttons/links: 0 (sharp) or 4px (subtle)
- Cards: 0 or 8px
- Images: 0 or 4px

---

## Animation Specifications

### Marquee Animation

```css
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.marquee {
  animation: marquee 25s linear infinite;
}

.marquee-reverse {
  animation-direction: reverse;
}
```

**Features:**
- Linear timing (constant speed)
- Infinite loop
- Content duplicated for seamlessness
- Pause on hover (accessibility)

### Scroll Reveal

```css
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Hover Effects

**Case Study Items:**
```css
.case-study-item {
  transition: transform 0.3s ease;
}

.case-study-item:hover {
  transform: translateX(10px);
}

.case-study-item .preview-image {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.case-study-item:hover .preview-image {
  opacity: 1;
}
```

**Navigation Links:**
```css
.nav-link {
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: currentColor;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}
```

### Contact Page Word Animation

```css
@keyframes wordCycle {
  0%, 20% { opacity: 0; transform: translateY(20px); }
  25%, 45% { opacity: 1; transform: translateY(0); }
  50%, 70% { opacity: 0; transform: translateY(-20px); }
  75%, 100% { opacity: 0; }
}
```

Or JavaScript-controlled for more complex sequencing.

---

## SVG Asset Inventory

### Icons Used

1. **Logo** - Stylized wordmark or lettermark
2. **Extra Blob** - Organic blob shape (appears multiple times)
3. **Case Studies Loop** - Circular text "case studies loop"
4. **Short Arrow** - Simple arrow for scroll indicator
5. **Half-circle Diamond** - Geometric decorative
6. **Old Arch** - Arch shape (appears in marquees and footer)
7. **Snake** - Curved snake shape
8. **Shooting Star** - Star with trail
9. **Star** - Simple star (in About page)
10. **Burst** - Exploding star shape (contact/social links)
11. **Straight Arrow** - Right-pointing arrow (case study sections)
12. **This Way/That Way** - Navigation arrows with text

### SVG Specifications

- Format: SVG (inline for animation control)
- Stroke: Current color or specific
- Fill: None or solid
- Size: ViewBox-based, scalable
- Animation: CSS transforms or SMIL (where supported)

---

## Responsive Breakpoints

### Desktop (1200px+)
- Full layout as designed
- All animations active
- Hover effects available

### Tablet (768px - 1199px)
- Reduced padding
- Slightly smaller typography
- Case studies may stack differently

### Mobile (< 768px)
- Single column layouts
- Hamburger menu for navigation
- Touch-friendly tap targets (44px min)
- Marquees may slow down or stop
- Case study images always visible
- Simplified animations

---

## Implementation Checklist

### Phase 1: Foundation
- [ ] Update Tailwind config with new colors
- [ ] Create SVG icon component/library
- [ ] Build Marquee component
- [ ] Set up typography scale
- [ ] Create basic page layouts

### Phase 2: Components
- [ ] Header/Navigation
- [ ] Hero section
- [ ] Case study list item
- [ ] Footer with personality marquee
- [ ] Contact page word cycler

### Phase 3: Pages
- [ ] Home page
- [ ] About page
- [ ] Contact page
- [ ] Case study detail page

### Phase 4: Polish
- [ ] All hover effects
- [ ] Scroll animations
- [ ] Reduced motion support
- [ ] Mobile responsiveness
- [ ] Performance optimization

---

## File Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.vue              # Logo, nav, blob
│   │   ├── Footer.vue              # Personality marquee, social
│   │   └── Navigation.vue          # Mobile nav
│   ├── ui/
│   │   ├── Marquee.vue             # Reusable marquee
│   │   ├── SvgIcon.vue             # SVG icon component
│   │   └── AnimatedText.vue        # Word cycler
│   ├── case-study/
│   │   ├── CaseStudyList.vue       # Numbered list
│   │   ├── CaseStudyListItem.vue   # Individual item
│   │   ├── CaseStudyHeader.vue     # Page header
│   │   ├── CaseStudySection.vue    # Content section
│   │   └── CaseStudyNav.vue        # Prev/next
│   └── home/
│       ├── Hero.vue                # Hero section
│       ├── RoleDescriptors.vue     # Multi-line roles
│       └── MeetYouMarquees.vue     # 4-row marquees
├── assets/
│   └── icons/                      # SVG files
│       ├── logo.svg
│       ├── blob.svg
│       ├── arrow-short.svg
│       ├── arrow-straight.svg
│       ├── diamond.svg
│       ├── arch.svg
│       ├── snake.svg
│       ├── star.svg
│       ├── star-burst.svg
│       └── shooting-star.svg
├── pages/
│   ├── Home.vue
│   ├── About.vue
│   ├── Contact.vue
│   └── CaseStudy.vue
└── styles/
    └── josie-theme.css             # Custom styles
```

---

## Key Implementation Notes

1. **Typography is CRITICAL** - The bold, large-scale typography is the defining characteristic
2. **Marquees must be seamless** - Duplicate content to avoid gaps
3. **Hover images need careful positioning** - Absolute positioned, z-index management
4. **Animations should respect reduced motion** - Always check `prefers-reduced-motion`
5. **SVG icons should be inline** - For color and animation control
6. **Case study numbers need leading zeros** - Use string formatting
7. **Mobile experience is different** - Don't just scale down, redesign interactions
8. **Performance matters** - Use CSS animations, will-change, GPU acceleration

---

**Created**: 2026-02-15
**Status**: Ready for Implementation
**Branch**: feat/josie-style-redesign

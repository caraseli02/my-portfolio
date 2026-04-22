import type { FeaturedProject, Project, HomeFeaturedProject } from "../types/projects";

export const featuredProjects: FeaturedProject[] = [
  {
    id: 1,
    title: "Top Properties",
    category: "Full-Stack Application",
    description:
      "A luxury real estate browser with interactive map, multi-currency pricing, and advanced filtering. Built for the international property market where homes are listed in EUR, GBP, CHF, and more.",
    highlights: [
      "Interactive Leaflet map with auto-fitting bounds and custom markers",
      "Multi-currency price normalization (8 currencies to USD)",
      "Portal-based modals with body scroll lock and focus management",
      "Pure function service architecture for filtering, pricing, and XSS protection",
    ],
    tech: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Leaflet"],
    github: "https://github.com/caraseli02/Toppropertiesdemo",
    accent: "bg-cobalt-500",
    caseStudy: {
      slug: "topproperties",
      image: "/project-images/topproperties.jpg",
      metaphor: {
        phrase: "One Screen, Every Currency",
        description:
          "Luxury real estate spans continents and currencies. This app collapses the distance — map, price, photos, and filters on a single screen, no matter what currency the listing is in.",
        icon: "TP",
        color: "cobalt-500",
      },
      tagline: "Luxury listings without borders",
      duration: "6 weeks",
      role: "Solo Developer",
      year: "2024",
      timeline: [
        {
          id: "challenge",
          label: "The Challenge",
          icon: "⚠️",
          title: "Fragmented Property Discovery",
          narrative:
            "Luxury listings lived in different databases with different currencies and no map integration. Agents cross-referenced spreadsheets while clients browsed separate sites.",
          highlight: "No unified search across currencies and regions",
        },
        {
          id: "discovery",
          label: "Discovery",
          icon: "🔍",
          title: "The Currency Problem",
          narrative:
            "A villa at €4.5M and a penthouse at £3.2M couldn't be compared in the same filter range. I needed a service to parse any currency format and normalize to a single baseline.",
          detail: "Mapped 8 currency formats with hardcoded rates, designed for easy API swap.",
        },
        {
          id: "approach",
          label: "The Approach",
          icon: "🛠️",
          title: "React + Pure Function Services",
          narrative:
            "React 18 + TypeScript for type safety. shadcn/ui for accessible components. Every service — filtering, pricing, XSS protection — is a pure function with zero side effects.",
          highlight: "Pure functions make services testable and predictable",
        },
        {
          id: "struggle",
          label: "The Struggle",
          icon: "🔥",
          title: "Broken Markers and Modal Chaos",
          narrative:
            "Leaflet marker icons broke with Vite's module system. Modals fought for z-index dominance. Property images randomly 404'd, leaving blank cards.",
        },
        {
          id: "breakthrough",
          label: "Breakthrough",
          icon: "💡",
          title: "Portal Architecture and Image Resilience",
          narrative:
            "Moved modals to React portals at document.body — clean z-index isolation. Built an image resilience system that auto-advances to the next valid image on failure.",
          highlight: "Portal modals + auto-advance broken images = bulletproof UI",
        },
        {
          id: "impact",
          label: "The Impact",
          icon: "🚀",
          title: "Seamless International Browsing",
          narrative:
            "24 luxury properties across 8 currencies with seamless filtering, interactive map, and draft-state filter modal. Four rounds of UI review locked in accessibility.",
        },
      ],
      outcomes: [
        { metric: "8", label: "currencies normalized to USD" },
        { metric: "24", label: "luxury properties with map placement" },
        { metric: "80+", label: "amenity filter options (AND logic)" },
      ],
      lessonsLearned: [
        "Pure function services are easier to test than class-based ones.",
        "Portal rendering solves z-index problems that CSS alone can't touch.",
        "Image resilience must be built in from day one — broken images destroy trust.",
      ],
      nextProject: "ecas",
    },
  },
  {
    id: 2,
    title: "ECAS",
    category: "Full-Stack Application",
    description:
      "A production-grade e-commerce platform with tiered pricing engine, Stripe payments, Firebase auth, and a full admin dashboard. Complete shopping flow from browsing to order tracking.",
    highlights: [
      "Three-dimensional smart pricing engine (price ranges × quantity tiers × margins)",
      "Stripe multi-payment: cards, customer credit, bank transfer, cash on delivery",
      "Firebase auth with email/password and Google OAuth bridged to backend JWT",
      "74 granular permissions with regex-based route guarding",
    ],
    tech: ["Nuxt 3", "TypeScript", "Pinia", "Tailwind CSS", "Firebase", "Stripe", "Shadcn/Vue"],
    github: "https://github.com/caraseli02/Ecas",
    accent: "bg-cobalt-600",
    caseStudy: {
      slug: "ecas",
      image: "/project-images/ecas.jpg",
      metaphor: {
        phrase: "Pricing That Thinks",
        description:
          "Flat pricing is a lie — real commerce has tiers, brackets, per-user discounts, and margins. This platform treats pricing as a multi-dimensional problem.",
        icon: "EC",
        color: "cobalt-600",
      },
      tagline: "Full-stack commerce beyond the tutorial",
      duration: "4 months",
      role: "Solo Developer",
      year: "2024",
      timeline: [
        {
          id: "challenge",
          label: "The Challenge",
          icon: "⚠️",
          title: "Beyond CRUD Commerce",
          narrative:
            "Real commerce needs tiered pricing, per-user discounts, customer credit with freeze/unfreeze, and an admin dashboard that actually manages the business.",
          highlight: "Production commerce is not a tutorial problem",
        },
        {
          id: "discovery",
          label: "Discovery",
          icon: "🔍",
          title: "The Pricing Dimension",
          narrative:
            "Pricing was three-dimensional: entry price ranges, quantity brackets that change unit cost, and gross/net margins. A flat discount percentage doesn't capture this.",
          detail:
            "Designed PriceSmartLinkingInterface connecting ranges, tiers, and margins per product.",
        },
        {
          id: "approach",
          label: "The Approach",
          icon: "🛠️",
          title: "Nuxt 3 with Layered Architecture",
          narrative:
            "17 API services extend a generic HttpFactory with typed call<T>(). Firebase bridges to backend via Bearer token. Stripe handles multi-payment flows.",
          highlight: "Factory pattern HTTP layer with generic typing and smart 401 handling",
        },
        {
          id: "struggle",
          label: "The Struggle",
          icon: "🔥",
          title: "Payment Edge Cases and Mock Mode Safety",
          narrative:
            "Stripe returns 5 different payment states. Each needed a different UI response. Mock mode needed 4 validation layers to prevent accidental production activation.",
        },
        {
          id: "breakthrough",
          label: "Breakthrough",
          icon: "💡",
          title: "Error Sanitization as a First-Class Concern",
          narrative:
            "Built an error sanitizer that masks passwords, tokens, API keys, and credit card numbers before anything reaches the console or UI. A security boundary, not debugging help.",
          highlight: "Sensitive data never reaches logs or user-facing errors",
        },
        {
          id: "impact",
          label: "The Impact",
          icon: "🚀",
          title: "Production-Ready Commerce Stack",
          narrative:
            "Complete shopping flow: browse → cart → checkout → order tracking. Admin dashboard with smart pricing, customer credit (freeze/unfreeze), and full audit trail.",
        },
      ],
      outcomes: [
        { metric: "74", label: "granular permission strings across 22 domains" },
        { metric: "17", label: "typed API services via factory pattern" },
        { metric: "4", label: "payment methods: card, credit, bank, COD" },
      ],
      lessonsLearned: [
        "Error sanitization is a security concern, not a debugging convenience.",
        "Three-dimensional pricing is a configuration system, not a number.",
        "Defense-in-depth mock mode prevents demo code from reaching production.",
      ],
      prevProject: "topproperties",
      nextProject: "abs-storybook",
    },
  },
  {
    id: 3,
    title: "ABS Storybook",
    category: "Component Library",
    description:
      "A hotel booking upsell component library with strict UI/business logic separation. Components receive 30+ pre-computed fields — zero logic in the render layer. Documented with Storybook 10 and tested with Chromatic.",
    highlights: [
      "Enforced pure UI layer — OfferCard receives 30+ pre-computed fields, zero logic",
      "TypeScript discriminated unions for 4 pricing models",
      "Storybook 10 + Chromatic CI pipeline with auto-baseline on main",
      "i18next with 70+ typed translation keys (English + Spanish)",
    ],
    tech: [
      "React 19",
      "TypeScript",
      "Storybook 10",
      "Tailwind CSS 4",
      "Radix UI",
      "Chromatic",
      "i18next",
    ],
    github: "https://github.com/caraseli02/ABS_StoryBook",
    accent: "bg-cobalt-700",
    caseStudy: {
      slug: "abs-storybook",
      image: "/project-images/abs-storybook.jpg",
      metaphor: {
        phrase: "Dumb UI, Rich Contracts",
        description:
          "The smartest UI component is the one that does zero thinking. When components receive pre-computed data through rich type contracts, the compiler becomes your QA team.",
        icon: "ABS",
        color: "cobalt-700",
      },
      tagline: "Where the compiler is the QA team",
      duration: "3 months",
      role: "Solo Developer",
      year: "2025",
      timeline: [
        {
          id: "challenge",
          label: "The Challenge",
          icon: "⚠️",
          title: "Business Logic Bleeding Into UI",
          narrative:
            "Four pricing models (per stay, per person, per night, all-inclusive) with different date selection and validation rules. Every pricing change meant rewriting UI code.",
          highlight: "Four pricing models × multiple booking flows = combinatorial explosion",
        },
        {
          id: "discovery",
          label: "Discovery",
          icon: "🔍",
          title: "The Pure UI Contract",
          narrative:
            "If OfferCard receives a pre-computed OfferCardData with 30+ fields, the component literally cannot do business logic — even if someone tries. The type system enforces separation.",
          detail:
            "OfferCardData: formatted prices, validation results, state flags — zero logic needed.",
        },
        {
          id: "approach",
          label: "The Approach",
          icon: "🛠️",
          title: "Three-Tier Architecture with Discriminated Unions",
          narrative:
            "UI primitives → domain composites → Storybook stories. TypeScript discriminated unions enforce that each pricing variant carries only its relevant fields.",
          highlight: "Discriminated unions make invalid pricing states unrepresentable",
        },
        {
          id: "struggle",
          label: "The Struggle",
          icon: "🔥",
          title: "Responsive Pricing Sidebar Performance",
          narrative:
            "The sticky pricing sidebar needed dynamic height based on scroll and viewport. Naive approaches caused jank — recalculating on every scroll event tanks frame rate.",
        },
        {
          id: "breakthrough",
          label: "Breakthrough",
          icon: "💡",
          title: "The useDynamicMaxHeight Pipeline",
          narrative:
            "ResizeObserver + throttled scroll (100ms) + debounced scroll-end (200ms) + 10px threshold + RAF calculations. On mobile, the hook disables entirely — no wasted cycles.",
          highlight: "Throttle + debounce + threshold + RAF = smooth sticky sidebar",
        },
        {
          id: "impact",
          label: "The Impact",
          icon: "🚀",
          title: "Fearless Refactoring Through Types",
          narrative:
            "Pricing changes touch calculation utilities, not components. Adding a new offer type means extending a union — the compiler tells you every place that needs updating.",
        },
      ],
      outcomes: [
        { metric: "30+", label: "pre-computed fields per OfferCard — zero UI logic" },
        { metric: "4", label: "pricing models enforced by discriminated unions" },
        { metric: "70%", label: "test coverage threshold (Vitest + Playwright)" },
      ],
      lessonsLearned: [
        "Dumb UI components with rich type contracts beat smart components with loose types.",
        "Discriminated unions are TypeScript's pattern matching — use them everywhere.",
        "Visual regression testing (Chromatic) catches CSS bugs that unit tests can't.",
      ],
      prevProject: "ecas",
    },
  },
];

export const otherProjects: Project[] = [
  {
    id: 4,
    title: "Inventory Management App",
    description:
      "TypeScript-based inventory management with real-time tracking and CRUD operations.",
    tech: ["TypeScript", "Vue 3", "Vite"],
    github: "https://github.com/caraseli02/inventory-app",
    accent: "bg-cobalt-500",
  },
  {
    id: 5,
    title: "MoldovaDirect",
    description:
      "A TypeScript web application connecting users with services and information about Moldova.",
    tech: ["TypeScript", "Vue", "Tailwind CSS"],
    github: "https://github.com/caraseli02/MoldovaDirect",
    accent: "bg-cobalt-600",
  },
  {
    id: 6,
    title: "Jobs Hub",
    description:
      "A job listing platform built with TypeScript for browsing and managing job postings.",
    tech: ["TypeScript", "Vue 3", "REST API"],
    github: "https://github.com/caraseli02/jobs-hub",
    accent: "bg-cobalt-700",
  },
  {
    id: 7,
    title: "Vite Vue 3 Starter",
    description:
      "A starter template for Vue 3 projects with Vite, TypeScript, and modern tooling pre-configured.",
    tech: ["Vue 3", "Vite", "TypeScript"],
    github: "https://github.com/caraseli02/vite-vue3-starter",
    accent: "bg-cobalt-500",
  },
  {
    id: 8,
    title: "Tailwind Tabs Component",
    description:
      "A reusable tabs component built with Vite and Tailwind CSS for Vue 3 applications.",
    tech: ["Vue 3", "Tailwind CSS", "Vite"],
    github: "https://github.com/caraseli02/vite-tailwind-tabs-component",
    accent: "bg-cobalt-600",
  },
  {
    id: 9,
    title: "Invoice Processing",
    description:
      "A Python-based invoice processing tool for automating document handling and data extraction.",
    tech: ["Python", "Automation", "Data Processing"],
    github: "https://github.com/caraseli02/InvoiceProcessing",
    accent: "bg-cobalt-400",
  },
  {
    id: 10,
    title: "Vuetify Barbershop",
    description:
      "A responsive barbershop website built with Vue.js and Vuetify material design components.",
    tech: ["Vue.js", "Vuetify", "Responsive"],
    github: "https://github.com/caraseli02/vuetify-responsive-barbershop",
    accent: "bg-cobalt-700",
  },
  {
    id: 11,
    title: "Metrics App",
    description:
      "A Vue.js application for tracking and visualizing metrics with interactive dashboards.",
    tech: ["Vue.js", "Charts", "MIT License"],
    github: "https://github.com/caraseli02/metricsApp",
    accent: "bg-cobalt-500",
  },
];

export function getProjectBySlug(slug: string): FeaturedProject | undefined {
  return featuredProjects.find((p) => p.caseStudy?.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return featuredProjects.filter((p) => p.caseStudy).map((p) => p.caseStudy!.slug);
}

export function getProjectIndex(slug: string): number {
  return featuredProjects.findIndex((p) => p.caseStudy?.slug === slug);
}

export const homeFeaturedProjects: HomeFeaturedProject[] = [
  ...featuredProjects.map((p) => ({
    id: p.id,
    title: p.title,
    description: p.description,
    tech: p.tech,
    github: p.github,
    accent: p.accent || "bg-cobalt-500",
    slug: p.caseStudy?.slug,
  })),
  {
    id: 4,
    title: "Inventory Management App",
    description:
      "A TypeScript-based inventory management application with real-time tracking, CRUD operations, and a clean component architecture.",
    tech: ["TypeScript", "Vue 3", "Vite", "Tailwind CSS"],
    github: "https://github.com/caraseli02/inventory-app",
    accent: "bg-cobalt-500",
  },
];

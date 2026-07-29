import type { ExperienceGroup, FeaturedProject } from "../types/projects";

/**
 * Work samples aligned to the CV experience sections.
 * All LinkedIn showcase images are included in galleries.
 */
export const featuredProjects: FeaturedProject[] = [
  {
    id: 1,
    title: "Hotelverse Upsell",
    category: "Hospitality product UI",
    description:
      "Multi-room booking and upselling experience — guests manage upgrades, room customizations, and special offers per reserved room, while front-desk staff get recommendations, order visibility, and commission tracking.",
    highlights: [
      "Guest upsell journey: room upgrades, stay customization, confirmation-ready selections",
      "Front-desk revenue workspace with order management and commission visibility",
      "Responsive React/TypeScript components for room selection, pricing, and 3D/360° experiences",
      "Storybook components, i18n, and Playwright/Vitest coverage for critical booking flows",
    ],
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Zustand",
      "Tailwind CSS",
      "Storybook",
      "Playwright",
      "Supabase",
    ],
    github: "https://github.com/caraseli02/ABS_StoryBook",
    image: "/project-images/abs-storybook.jpg",
    caseStudy: {
      slug: "hotelverse",
      company: "Hotelverse",
      image: "/project-images/abs-storybook.jpg",
      gallery: [
        {
          src: "/project-images/abs-storybook.jpg",
          alt: "Post-booking upsell experience — guest and front-desk surfaces",
          label: "Post-booking upsell",
        },
        {
          src: "/project-images/hotelverse-guest.jpg",
          alt: "Guest upsell journey — room upgrades and stay customization",
          label: "Guest upsell journey",
        },
        {
          src: "/project-images/hotelverse-frontdesk.jpg",
          alt: "Front-desk revenue workspace — recommendations and commissions",
          label: "Front-desk workspace",
        },
      ],
      tagline: "From reservation details to confirmation-ready selections",
      description:
        "Built the multi-room booking and upselling experience at Hotelverse (Nov 2024 — Dec 2025). Guests manage upgrades and extras independently for each reserved room; staff recommend services and track orders and commissions.",
      role: "Frontend Developer",
      year: "Nov 2024 — Dec 2025",
      outcomes: [
        { metric: "3", label: "product surfaces: guest, front-desk, request summary" },
        { metric: "i18n", label: "localized booking and offer flows" },
        { metric: "QA", label: "Playwright + Vitest on critical paths" },
      ],
      nextProject: "nezo",
    },
  },
  {
    id: 2,
    title: "Nezo Hub",
    category: "SaaS & crypto product UI",
    description:
      "Frontend features for SaaS and business applications — reusable Vue 3 components, dashboards, auth flows, and a crypto wallet / ecosystem mobile experience.",
    highlights: [
      "Reusable UI components integrated with backend services",
      "Dashboards, forms, authentication, and data-driven interfaces",
      "Wallet overview, stake/earn hub, and multi-service feature grid",
      "Vue 3 + Nuxt + Pinia state management across responsive production UIs",
    ],
    tech: ["Vue 3", "Nuxt", "TypeScript", "Pinia", "Tailwind CSS", "REST APIs"],
    image: "/project-images/nezo.jpg",
    caseStudy: {
      slug: "nezo",
      company: "Nezo Hub",
      image: "/project-images/nezo.jpg",
      gallery: [
        {
          src: "/project-images/nezo.jpg",
          alt: "Nezo crypto wallet and ecosystem mobile app",
          label: "Wallet & ecosystem",
        },
      ],
      tagline: "SaaS product UI and crypto wallet experience",
      description:
        "Frontend Developer at Nezo Hub (Apr 2023 — Oct 2024). Developed and maintained features for SaaS and business apps using Vue 3, TypeScript, Nuxt, Pinia, and Tailwind — including wallet, stake, and markets hub surfaces.",
      role: "Frontend Developer",
      year: "Apr 2023 — Oct 2024",
      outcomes: [
        { metric: "Vue 3", label: "Nuxt + Pinia production stack" },
        { metric: "SaaS", label: "dashboards, auth, and forms shipped" },
        { metric: "Mobile", label: "wallet and ecosystem hub UI" },
      ],
      prevProject: "hotelverse",
      nextProject: "topproperties",
    },
  },
  {
    id: 3,
    title: "Top Properties",
    category: "Luxury real estate",
    description:
      "Luxury real estate platform — interactive map, multi-currency pricing, advanced filters, and a premium browse experience for international listings.",
    highlights: [
      "Interactive map with property markers and listing cards",
      "Search, filters, and multi-currency price ranges",
      "Desktop and mobile property discovery flows",
      "Responsive Vue/React interfaces from design references",
    ],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Leaflet"],
    github: "https://github.com/caraseli02/Toppropertiesdemo",
    image: "/project-images/topproperties.jpg",
    caseStudy: {
      slug: "topproperties",
      company: "TopProperties",
      image: "/project-images/topproperties.jpg",
      gallery: [
        {
          src: "/project-images/topproperties.jpg",
          alt: "TOP PROPERTIES luxury real estate platform showcase",
          label: "Platform overview",
        },
      ],
      tagline: "Find your extraordinary home",
      description:
        "Client frontend work for TopProperties (within Sep 2021 — Apr 2023 freelance period). Built responsive real estate interfaces, map browsing, filters, and listing detail experiences.",
      role: "Frontend Developer",
      year: "2021 — 2023",
      outcomes: [
        { metric: "Map", label: "interactive property discovery" },
        { metric: "Filters", label: "price, type, rooms, luxury tags" },
        { metric: "Responsive", label: "desktop + mobile listing flows" },
      ],
      prevProject: "nezo",
      nextProject: "traffice",
    },
  },
  {
    id: 4,
    title: "Traffice",
    category: "Traffic analytics SaaS",
    description:
      "Smart traffic monitoring dashboard — data management, scene editor with flow overlays, OD matrix reports, map view, and site creation workflows.",
    highlights: [
      "Data management for traffic sites with status and processing states",
      "Scene editor with path overlays and vehicle-type filters",
      "OD matrix reports and downloadable exports",
      "Map view and site creation with timeline and preview",
    ],
    tech: ["Vue.js", "Nuxt", "TypeScript", "Tailwind CSS", "REST APIs"],
    image: "/project-images/traffice.jpg",
    caseStudy: {
      slug: "traffice",
      company: "Traffice",
      image: "/project-images/traffice.jpg",
      gallery: [
        {
          src: "/project-images/traffice.jpg",
          alt: "Traffice smart traffic monitoring dashboard",
          label: "Platform overview",
        },
      ],
      tagline: "Actionable traffic insights at scale",
      description:
        "Client frontend for Traffice (Sep 2021 — Apr 2023). Delivered dashboards, scene analysis UI, reporting flows, and map-based site management connected to backend services.",
      role: "Frontend Developer",
      year: "2021 — 2023",
      outcomes: [
        { metric: "Scenes", label: "flow overlays + heatmaps" },
        { metric: "Reports", label: "OD matrix exports" },
        { metric: "Sites", label: "create, map, and monitor" },
      ],
      prevProject: "topproperties",
      nextProject: "moonflow",
    },
  },
  {
    id: 5,
    title: "Moonflow",
    category: "DeFi trading UI",
    description:
      "DeFi trading dashboard and mobile trading experience — limit orders, candlestick charts, wallet connection, and slippage settings.",
    highlights: [
      "Desktop limit-order trading with chart and order table",
      "Mobile trading, profile, and slippage settings flows",
      "Wallet connection and order management UI",
      "Responsive dark-theme product interface",
    ],
    tech: ["Vue.js", "TypeScript", "Tailwind CSS"],
    image: "/project-images/moonflow.jpg",
    caseStudy: {
      slug: "moonflow",
      company: "Moonflow Club",
      image: "/project-images/moonflow.jpg",
      gallery: [
        {
          src: "/project-images/moonflow.jpg",
          alt: "Moonflow DeFi trading dashboard and mobile experience",
          label: "Trading experience",
        },
      ],
      tagline: "Trading dashboard and mobile experience",
      description:
        "Client frontend for Moonflow Club (Sep 2021 — Apr 2023). Built trading surfaces, mobile adaptations, and wallet-connected order flows from product requirements and design references.",
      role: "Frontend Developer",
      year: "2021 — 2023",
      outcomes: [
        { metric: "Trade", label: "limit orders + chart UI" },
        { metric: "Mobile", label: "trading and settings screens" },
        { metric: "Wallet", label: "connect and manage orders" },
      ],
      prevProject: "traffice",
      nextProject: "skipso",
    },
  },
  {
    id: 6,
    title: "B2B Commerce Platform",
    category: "B2B marketplace",
    description:
      "Scalable B2B commerce interface for order tracking, category management, vendor tools, shipping, and navigation — with tiered pricing and admin workflows.",
    highlights: [
      "Admin dashboard with orders, analytics, and account management",
      "Order tracking across mobile and desktop",
      "Category creation with smart/tiered pricing",
      "Agents table, shipping addresses, and mega-menu navigation",
    ],
    tech: ["Nuxt 3", "TypeScript", "Pinia", "Tailwind CSS", "Firebase", "Stripe"],
    github: "https://github.com/caraseli02/Ecas",
    image: "/project-images/ecas.jpg",
    caseStudy: {
      slug: "skipso",
      company: "Skipso",
      image: "/project-images/ecas.jpg",
      gallery: [
        {
          src: "/project-images/ecas.jpg",
          alt: "B2B commerce admin dashboard and marketplace experience",
          label: "Admin & marketplace",
        },
      ],
      tagline: "Order tracking, vendors, and smart workflows",
      description:
        "Client frontend aligned with Skipso / B2B commerce work (Sep 2021 — Apr 2023). Shipped dashboards, category tools, shipping flows, and marketplace navigation connected to backend and CMS services.",
      role: "Frontend Developer",
      year: "2021 — 2023",
      outcomes: [
        { metric: "Admin", label: "orders, credit, agents" },
        { metric: "Pricing", label: "tiered / smart pricing UI" },
        { metric: "Shipping", label: "addresses and tracking" },
      ],
      prevProject: "moonflow",
    },
  },
];

export function getProjectBySlug(slug: string): FeaturedProject | undefined {
  // Keep old case-study URLs working after CV-aligned slug rename
  const aliases: Record<string, string> = {
    "abs-storybook": "hotelverse",
    ecas: "skipso",
  };
  const resolved = aliases[slug] ?? slug;
  return featuredProjects.find((p) => p.caseStudy.slug === resolved);
}

export function getProjectIndex(slug: string): number {
  const project = getProjectBySlug(slug);
  if (!project) return -1;
  return featuredProjects.findIndex((p) => p.caseStudy.slug === project.caseStudy.slug);
}

export const experienceGroups: ExperienceGroup[] = [
  {
    id: "hotelverse",
    kicker: "01 — recent role",
    title: "Hotelverse",
    period: "Nov 2024 — Dec 2025",
    blurb:
      "Multi-room booking and upselling — guest journey, front-desk recommendations, and order visibility.",
    companyKeys: ["Hotelverse"],
  },
  {
    id: "nezo",
    kicker: "02 — previous role",
    title: "Nezo Hub",
    period: "Apr 2023 — Oct 2024",
    blurb: "SaaS and business app frontend — dashboards, auth, and crypto wallet / ecosystem UI.",
    companyKeys: ["Nezo Hub"],
  },
  {
    id: "freelance",
    kicker: "03 — client work",
    title: "Skipso, TopProperties, Moonflow, Traffice",
    period: "Sep 2021 — Apr 2023",
    blurb:
      "SaaS, real estate, community, and marketing frontends — dashboards, landing pages, and custom flows.",
    companyKeys: ["TopProperties", "Traffice", "Moonflow Club", "Skipso"],
  },
];

export function projectsForGroup(group: ExperienceGroup): FeaturedProject[] {
  return featuredProjects.filter((p) => group.companyKeys.includes(p.caseStudy.company));
}

export const totalVisualAssets = featuredProjects.reduce(
  (sum, p) => sum + p.caseStudy.gallery.length,
  0,
);

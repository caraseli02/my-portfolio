export const skillGroups = [
  {
    label: "Frontend",
    items: "Vue 3 · Vue.js · Nuxt · React · Next.js · TypeScript · JavaScript · Tailwind CSS",
  },
  {
    label: "UI and product",
    items:
      "Figma · Storybook · Responsive interfaces · Component-based architecture · Core Web Vitals",
  },
  {
    label: "Data and quality",
    items:
      "Pinia · Zustand · REST APIs · Firebase · CMS integration · Vitest · Playwright · Supabase",
  },
  {
    label: "Applied AI",
    items: "Claude Code · Codex",
  },
] as const;

export const experienceRoles = [
  {
    company: "Hotelverse",
    role: "Frontend Developer",
    period: "Nov 2024 — Dec 2025 · Palma, Spain",
    summary:
      "Built the multi-room booking and upselling experience — room upgrades, stay customizations, special offers, and front-desk recommendation tools. Shipped responsive React and TypeScript components with Storybook, i18n, and Playwright/Vitest coverage for critical booking flows.",
    tech: "React · Next.js · TypeScript · Zustand · Tailwind · Storybook · Playwright · Supabase",
  },
  {
    company: "Nezo Hub",
    role: "Frontend Developer",
    period: "Apr 2023 — Oct 2024",
    summary:
      "Developed and maintained frontend features for SaaS and business applications using Vue 3, TypeScript, Nuxt, Pinia, and Tailwind. Built reusable UI components, integrated backend services, and shipped dashboards, forms, auth interfaces, and data-driven flows.",
    tech: "Vue 3 · Nuxt · TypeScript · Pinia · Tailwind · REST APIs",
  },
  {
    company: "Skipso, TopProperties, Kassebil, Moonflow Club, Traffice",
    role: "Frontend Developer",
    period: "Sep 2021 — Apr 2023",
    summary:
      "Delivered frontend for client projects across SaaS platforms, real estate, community products, and marketing sites. Built reusable Vue.js/Nuxt components, dashboards, landing pages, and custom UI flows connected to backend services, CMS platforms, and data sources.",
    tech: "Vue.js · Nuxt · TypeScript · Tailwind · REST APIs · Firebase · CMS",
  },
] as const;

export const links = {
  email: "caraseli02@gmail.com",
  phone: "+34 675 167 719",
  phoneHref: "tel:+34675167719",
  linkedin: "https://linkedin.com/in/caraseli",
  github: "https://github.com/caraseli02",
  cv: "/Vladislav_Caraseli_CV_EN.pdf",
} as const;

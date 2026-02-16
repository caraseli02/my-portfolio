import type { FeaturedProject, Project, HomeFeaturedProject } from '../types/projects'

export const featuredProjects: FeaturedProject[] = [
  {
    id: 1,
    title: 'Vue 3 Dashboard',
    category: 'Frontend Application',
    description: 'A comprehensive dashboard application built with Vue 3 and the Composition API. Features modern UI components, data visualization, and a fully responsive layout.',
    highlights: [
      'Built with Vue 3 Composition API and TypeScript',
      'Responsive design with Tailwind CSS utility classes',
      'Data visualization with interactive charts',
      'Modular component architecture for reusability',
    ],
    tech: ['Vue 3', 'TypeScript', 'Vite', 'Tailwind CSS', 'Chart.js'],
    github: 'https://github.com/caraseli02/dashboard-vue3',
    accent: 'bg-gradient-to-r from-vue-500 to-emerald-400',
    caseStudy: {
      slug: 'vue3-dashboard',
      metaphor: {
        phrase: 'Clarity in the Noise',
        description: 'Raw data is noise until shaped into signal. This dashboard transforms fragmented metrics into a coherent visual language that lets teams act instead of guess.',
        icon: '\u{1F50D}',
        color: 'from-vue-500 to-emerald-400',
      },
      tagline: 'Turning raw data into actionable clarity',
      duration: '3 months',
      role: 'Solo Developer',
      year: '2023',
      timeline: [
        {
          id: 'challenge',
          label: 'The Challenge',
          icon: '\u26A0\uFE0F',
          title: 'Data Without a Story',
          narrative: 'The client had data scattered across spreadsheets, CSVs, and disconnected APIs. Stakeholders were making decisions based on gut feeling because no one could see the full picture.',
          highlight: 'Zero visibility into real-time metrics',
        },
        {
          id: 'discovery',
          label: 'Discovery',
          icon: '\u{1F50D}',
          title: 'Finding the Signal',
          narrative: 'I spent the first two weeks interviewing stakeholders and mapping data flows. The real insight: people didn\'t need more data. They needed fewer, better-chosen numbers presented in context.',
          detail: 'Mapped 14 data sources down to 6 core metrics that actually drove decisions.',
        },
        {
          id: 'approach',
          label: 'The Approach',
          icon: '\u{1F6E0}\uFE0F',
          title: 'Architecture of Clarity',
          narrative: 'Chose Vue 3 Composition API for its reactive data handling and TypeScript for type safety across complex data transformations. Chart.js provided the visualization layer with custom-themed components matching the brand.',
          highlight: 'Vue 3 + TypeScript + Chart.js',
        },
        {
          id: 'struggle',
          label: 'The Struggle',
          icon: '\u{1F525}',
          title: 'When Charts Lie',
          narrative: 'The first prototype looked impressive but told the wrong story. Aggregation logic was masking outliers that mattered. I had to rebuild the data pipeline to preserve granularity while still showing summaries.',
        },
        {
          id: 'breakthrough',
          label: 'Breakthrough',
          icon: '\u{1F4A1}',
          title: 'The Drill-Down Moment',
          narrative: 'The breakthrough was implementing interactive drill-downs: click any summary metric to see the underlying data points. This preserved both the high-level clarity and the detail stakeholders occasionally needed.',
          highlight: 'Interactive drill-down from summary to granular data',
        },
        {
          id: 'impact',
          label: 'The Impact',
          icon: '\u{1F680}',
          title: 'From Noise to Signal',
          narrative: 'The dashboard became the team\'s single source of truth. Decision-making shifted from weekly email threads to real-time data checks. The metaphor proved true: clarity emerged from structured noise.',
        },
      ],
      outcomes: [
        { metric: '40%', label: 'faster decision cycles' },
        { metric: '6', label: 'data sources unified' },
        { metric: '100%', label: 'responsive across devices' },
      ],
      lessonsLearned: [
        'Less data, better presented, beats more data thrown at users.',
        'TypeScript catches data-shape bugs that would surface as visual errors in charts.',
        'Stakeholder interviews at the start save weeks of rework later.',
      ],
      nextProject: 'fastapi-realworld',
    },
  },
  {
    id: 2,
    title: 'FastAPI Real-World Application',
    category: 'Full-Stack Application',
    description: 'A production-ready backend built with Python and FastAPI following the RealWorld specification. Implements authentication, CRUD operations, and clean architecture patterns.',
    highlights: [
      'RESTful API with FastAPI async framework',
      'JWT-based authentication and authorization',
      'PostgreSQL database with SQLAlchemy ORM',
      'Docker containerization for easy deployment',
    ],
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'SQLAlchemy'],
    github: 'https://github.com/caraseli02/fastapi-realworld-example-app',
    accent: 'bg-gradient-to-r from-blue-500 to-indigo-500',
    caseStudy: {
      slug: 'fastapi-realworld',
      metaphor: {
        phrase: 'The Honest Blueprint',
        description: 'Most "real-world" examples skip the hard parts. This project is a blueprint that hides nothing \u2014 authentication, validation, error handling, deployment \u2014 all battle-tested.',
        icon: '\u{1F4D0}',
        color: 'from-blue-500 to-indigo-500',
      },
      tagline: 'Building a backend that hides nothing',
      duration: '2 months',
      role: 'Solo Developer',
      year: '2023',
      timeline: [
        {
          id: 'challenge',
          label: 'The Challenge',
          icon: '\u26A0\uFE0F',
          title: 'Tutorial Hell',
          narrative: 'Every FastAPI tutorial taught the happy path. Authentication? "Left as an exercise." Error handling? Ignored. I needed a reference implementation that covered the real production concerns.',
          highlight: 'No production-grade FastAPI reference existed',
        },
        {
          id: 'discovery',
          label: 'Discovery',
          icon: '\u{1F50D}',
          title: 'The RealWorld Spec',
          narrative: 'The RealWorld specification provided a framework-agnostic API contract. This meant I could focus on implementation quality rather than inventing an API surface.',
        },
        {
          id: 'approach',
          label: 'The Approach',
          icon: '\u{1F6E0}\uFE0F',
          title: 'Clean Architecture with FastAPI',
          narrative: 'Structured the project with clear separation: routers, services, repositories, and schemas. SQLAlchemy for the data layer, Pydantic for validation, and JWT for auth.',
          highlight: 'Layered architecture: routes \u2192 services \u2192 repositories',
        },
        {
          id: 'struggle',
          label: 'The Struggle',
          icon: '\u{1F525}',
          title: 'Async Database Sessions',
          narrative: 'Managing async database sessions with proper transaction boundaries was harder than expected. A leaked session could cause silent data corruption across requests.',
        },
        {
          id: 'breakthrough',
          label: 'Breakthrough',
          icon: '\u{1F4A1}',
          title: 'Dependency Injection Done Right',
          narrative: 'FastAPI\'s dependency injection became the key. Each request gets its own session, automatically committed or rolled back. The framework was doing the heavy lifting once wired correctly.',
          highlight: 'Request-scoped sessions via dependency injection',
        },
        {
          id: 'impact',
          label: 'The Impact',
          icon: '\u{1F680}',
          title: 'A Reference That Works',
          narrative: 'The repository became a go-to reference for FastAPI developers. Docker Compose brings up the full stack in one command. No hidden complexity, no skipped steps.',
        },
      ],
      outcomes: [
        { metric: '100%', label: 'RealWorld spec compliance' },
        { metric: 'Docker', label: 'one-command deployment' },
        { metric: 'JWT', label: 'production auth flow' },
      ],
      lessonsLearned: [
        'Async database patterns require explicit session lifecycle management.',
        'FastAPI\'s dependency injection is powerful but needs careful scoping.',
        'Following an existing spec frees you to focus on implementation quality.',
      ],
      prevProject: 'vue3-dashboard',
      nextProject: 'nuxt-travel-bookings',
    },
  },
  {
    id: 3,
    title: 'Nuxt Travel Bookings',
    category: 'Full-Stack Application',
    description: 'A travel booking platform built with Nuxt.js featuring server-side rendering for SEO, dynamic routes for trip details, and a polished booking experience.',
    highlights: [
      'Server-side rendering with Nuxt 3 for optimal SEO',
      'Dynamic routing for trip listings and details',
      'Responsive design with modern UI patterns',
      'Integrated booking flow with form validation',
    ],
    tech: ['Nuxt 3', 'Vue 3', 'TypeScript', 'SSR', 'Tailwind CSS'],
    github: 'https://github.com/caraseli02/nuxt-travels-bookings',
    accent: 'bg-gradient-to-r from-amber-500 to-orange-500',
    caseStudy: {
      slug: 'nuxt-travel-bookings',
      metaphor: {
        phrase: 'The Open Road',
        description: 'Travel is about removing friction between intention and experience. This booking platform mirrors that philosophy: minimal steps, maximum confidence.',
        icon: '\u{1F6E4}\uFE0F',
        color: 'from-amber-500 to-orange-500',
      },
      tagline: 'Removing friction between wanderlust and adventure',
      duration: '6 weeks',
      role: 'Solo Developer',
      year: '2023',
      timeline: [
        {
          id: 'challenge',
          label: 'The Challenge',
          icon: '\u26A0\uFE0F',
          title: 'Booking Abandonment',
          narrative: 'Existing travel booking flows were bloated: too many steps, too many fields, too many page loads. Users abandoned bookings because the process felt harder than the trip itself.',
          highlight: 'High booking abandonment rates',
        },
        {
          id: 'discovery',
          label: 'Discovery',
          icon: '\u{1F50D}',
          title: 'Mapping the User Journey',
          narrative: 'Analyzed competitor booking flows and found the sweet spot: 3 steps maximum from browsing to confirmed booking. Every additional step costs conversion.',
        },
        {
          id: 'approach',
          label: 'The Approach',
          icon: '\u{1F6E0}\uFE0F',
          title: 'SSR-First with Nuxt 3',
          narrative: 'Chose Nuxt 3 for server-side rendering to ensure fast initial loads and strong SEO for trip listings. Dynamic routes made each destination a discoverable page.',
          highlight: 'SSR for SEO + speed',
        },
        {
          id: 'struggle',
          label: 'The Struggle',
          icon: '\u{1F525}',
          title: 'Form State Across Steps',
          narrative: 'Managing form state across a multi-step booking wizard while preserving data on back-navigation was tricky. Browser back button behavior needed special handling with Nuxt middleware.',
        },
        {
          id: 'breakthrough',
          label: 'Breakthrough',
          icon: '\u{1F4A1}',
          title: 'Progressive Disclosure',
          narrative: 'Instead of hiding fields behind steps, I showed them progressively on a single page. Scroll replaces navigation. The form feels short because you only see what is relevant.',
          highlight: 'Single-page progressive form replaces multi-step wizard',
        },
        {
          id: 'impact',
          label: 'The Impact',
          icon: '\u{1F680}',
          title: 'Frictionless Booking',
          narrative: 'The final platform loads in under 2 seconds, ranks well in search, and guides users from discovery to booking in a single smooth flow.',
        },
      ],
      outcomes: [
        { metric: '<2s', label: 'initial page load' },
        { metric: '3', label: 'steps to book' },
        { metric: 'SEO', label: 'optimized with SSR' },
      ],
      lessonsLearned: [
        'SSR is not just for SEO \u2014 perceived performance matters for trust.',
        'Progressive disclosure beats multi-step wizards for short forms.',
        'Nuxt 3 middleware handles complex navigation state cleanly.',
      ],
      prevProject: 'fastapi-realworld',
    },
  },
]

export const otherProjects: Project[] = [
  { id: 4, title: 'Inventory Management App', description: 'TypeScript-based inventory management with real-time tracking and CRUD operations.', tech: ['TypeScript', 'Vue 3', 'Vite'], github: 'https://github.com/caraseli02/inventory-app', accent: 'bg-gradient-to-r from-vue-500 to-emerald-400' },
  { id: 5, title: 'MoldovaDirect', description: 'A TypeScript web application connecting users with services and information about Moldova.', tech: ['TypeScript', 'Vue', 'Tailwind CSS'], github: 'https://github.com/caraseli02/MoldovaDirect', accent: 'bg-gradient-to-r from-blue-500 to-indigo-500' },
  { id: 6, title: 'Jobs Hub', description: 'A job listing platform built with TypeScript for browsing and managing job postings.', tech: ['TypeScript', 'Vue 3', 'REST API'], github: 'https://github.com/caraseli02/jobs-hub', accent: 'bg-gradient-to-r from-amber-500 to-orange-500' },
  { id: 7, title: 'Vite Vue 3 Starter', description: 'A starter template for Vue 3 projects with Vite, TypeScript, and modern tooling pre-configured.', tech: ['Vue 3', 'Vite', 'TypeScript'], github: 'https://github.com/caraseli02/vite-vue3-starter', accent: 'bg-gradient-to-r from-purple-500 to-pink-500' },
  { id: 8, title: 'Tailwind Tabs Component', description: 'A reusable tabs component built with Vite and Tailwind CSS for Vue 3 applications.', tech: ['Vue 3', 'Tailwind CSS', 'Vite'], github: 'https://github.com/caraseli02/vite-tailwind-tabs-component', accent: 'bg-gradient-to-r from-teal-500 to-cyan-500' },
  { id: 9, title: 'Invoice Processing', description: 'A Python-based invoice processing tool for automating document handling and data extraction.', tech: ['Python', 'Automation', 'Data Processing'], github: 'https://github.com/caraseli02/InvoiceProcessing', accent: 'bg-gradient-to-r from-red-500 to-rose-500' },
  { id: 10, title: 'Vuetify Barbershop', description: 'A responsive barbershop website built with Vue.js and Vuetify material design components.', tech: ['Vue.js', 'Vuetify', 'Responsive'], github: 'https://github.com/caraseli02/vuetify-responsive-barbershop', accent: 'bg-gradient-to-r from-gray-600 to-gray-800' },
  { id: 11, title: 'Metrics App', description: 'A Vue.js application for tracking and visualizing metrics with interactive dashboards.', tech: ['Vue.js', 'Charts', 'MIT License'], github: 'https://github.com/caraseli02/metricsApp', accent: 'bg-gradient-to-r from-green-500 to-emerald-500' },
]

export function getProjectBySlug(slug: string): FeaturedProject | undefined {
  return featuredProjects.find(p => p.caseStudy?.slug === slug)
}

export function getAllCaseStudySlugs(): string[] {
  return featuredProjects
    .filter(p => p.caseStudy)
    .map(p => p.caseStudy!.slug)
}

export function getProjectIndex(slug: string): number {
  return featuredProjects.findIndex(p => p.caseStudy?.slug === slug)
}

export const homeFeaturedProjects: HomeFeaturedProject[] = [
  ...featuredProjects.map(p => ({
    id: p.id,
    title: p.title,
    description: p.description,
    tech: p.tech,
    github: p.github,
    accent: p.accent || 'bg-gradient-to-r from-vue-500 to-emerald-400',
    slug: p.caseStudy?.slug,
  })),
  {
    id: 4,
    title: 'Inventory Management App',
    description: 'A TypeScript-based inventory management application with real-time tracking, CRUD operations, and a clean component architecture.',
    tech: ['TypeScript', 'Vue 3', 'Vite', 'Tailwind CSS'],
    github: 'https://github.com/caraseli02/inventory-app',
    accent: 'bg-gradient-to-r from-purple-500 to-pink-500',
  },
]

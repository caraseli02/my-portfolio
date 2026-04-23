import { streamText, convertToModelMessages, UIMessage } from "ai";
import { gateway } from "@ai-sdk/gateway";

const PORTFOLIO_CONTEXT = `## Top Properties (Full-Stack Application)
A luxury real estate browser with interactive map, multi-currency pricing, and advanced filtering. Built for the international property market where homes are listed in EUR, GBP, CHF, and more.
Tech: React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui, Leaflet
Duration: 6 weeks | Role: Solo Developer | Year: 2024
Tagline: Luxury listings without borders
Highlights: Interactive Leaflet map, Multi-currency price normalization (8 currencies to USD), Portal-based modals, Pure function service architecture
Outcomes: 8 currencies normalized, 24 luxury properties with map, 80+ amenity filter options
GitHub: https://github.com/caraseli02/Toppropertiesdemo

## ECAS (Full-Stack Application)
A production-grade e-commerce platform with tiered pricing engine, Stripe payments, Firebase auth, and a full admin dashboard. Complete shopping flow from browsing to order tracking.
Tech: Nuxt 3, TypeScript, Pinia, Tailwind CSS, Firebase, Stripe, Shadcn/Vue
Duration: 4 months | Role: Solo Developer | Year: 2024
Tagline: Full-stack commerce beyond the tutorial
Highlights: Three-dimensional smart pricing engine, Stripe multi-payment, Firebase auth with Google OAuth, 74 granular permissions
Outcomes: 74 permission strings across 22 domains, 17 typed API services, 4 payment methods
GitHub: https://github.com/caraseli02/Ecas

## ABS Storybook (Component Library)
A hotel booking upsell component library with strict UI/business logic separation. Components receive 30+ pre-computed fields with zero logic in the render layer.
Tech: React 19, TypeScript, Storybook 10, Tailwind CSS 4, Radix UI, Chromatic, i18next
Duration: 3 months | Role: Solo Developer | Year: 2025
Tagline: Where the compiler is the QA team
Highlights: Pure UI layer with 30+ pre-computed fields, TypeScript discriminated unions for 4 pricing models, Storybook 10 + Chromatic CI, i18next with 70+ translation keys
Outcomes: 30+ fields per OfferCard, 4 pricing models via discriminated unions, 70% test coverage
GitHub: https://github.com/caraseli02/ABS_StoryBook

## Other Projects
- Inventory Management App (TypeScript, Vue 3, Vite)
- MoldovaDirect (TypeScript, Vue, Tailwind CSS)
- Jobs Hub (TypeScript, Vue 3, REST API)
- Vite Vue 3 Starter (Vue 3, Vite, TypeScript)
- Tailwind Tabs Component (Vue 3, Tailwind CSS, Vite)
- Invoice Processing (Python, Automation)
- Vuetify Barbershop (Vue.js, Vuetify)
- Metrics App (Vue.js, Charts)`;

const SYSTEM_PROMPT = `You are Vlad's portfolio assistant. You help visitors (recruiters, developers, clients) learn about Vlad's work by answering questions about his projects, tech stack, and experience.

Here is Vlad's complete portfolio data:

${PORTFOLIO_CONTEXT}

Rules:
- Be concise and direct. No filler.
- Reference specific projects when answering. Include metrics and outcomes when relevant.
- If asked about a project, mention the tech stack and key highlights.
- When appropriate, suggest viewing the full case study on the site.
- You speak for the work, not Vlad personally. "The project uses..." not "I built..."
- If you don't know something (salary, availability, personal info), say so plainly.
- Never invent projects, metrics, or tech not listed above.`;

export const config = { runtime: "edge" };

export default async function handler(request: Request) {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const { messages }: { messages: UIMessage[] } = await request.json();

  if (!messages || !Array.isArray(messages)) {
    return new Response(JSON.stringify({ error: "messages required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const result = streamText({
    model: gateway("anthropic/claude-haiku-4.5"),
    system: SYSTEM_PROMPT,
    messages: await convertToModelMessages(messages),
    maxOutputTokens: 1000,
  });

  return result.toUIMessageStreamResponse();
}

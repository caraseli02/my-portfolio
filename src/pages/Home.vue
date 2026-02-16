<template>
  <div class="bg-cream-100 min-h-screen">
    <!-- Hero Section -->
    <section class="pt-32 pb-16 px-6 lg:px-12 min-h-screen flex flex-col justify-center">
      <div class="max-w-5xl mx-auto text-center">
        <!-- Main Hero Text -->
        <div class="mb-6">
          <p class="text-2xl md:text-3xl text-cobalt-500 mb-4 font-normal">
            Hi my name is
          </p>
          <h1 class="font-serif italic text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-cobalt-500 tracking-tight leading-none">
            Vlad Caraseli
          </h1>
        </div>

        <!-- Role Descriptor -->
        <div class="flex items-center justify-center gap-3 text-cobalt-500 text-xl md:text-2xl mt-8">
          <span>I'm a</span>
          <span class="border-2 border-cobalt-500 rounded-full px-4 py-1 font-serif italic text-lg">
            website
          </span>
          <span>developer</span>
        </div>

        <!-- Circular Case Studies Stamp -->
        <div class="mt-16 flex justify-center">
          <a href="#case-studies" class="group relative w-28 h-28">
            <svg viewBox="0 0 100 100" class="w-full h-full text-cobalt-500 animate-spin-slow">
              <defs>
                <path id="circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"/>
              </defs>
              <text font-size="10" fill="currentColor" font-family="Inter, sans-serif" letter-spacing="1">
                <textPath href="#circle">case studies • case studies • </textPath>
              </text>
            </svg>
            <!-- Arrow pointing down -->
            <div class="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 24 24" class="w-6 h-6 text-cobalt-500 group-hover:translate-y-1 transition-transform">
                <path d="M12 5v14M5 12l7 7 7-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- "It's Nice to Meet You" Marquees -->
    <section class="py-6 overflow-hidden border-y border-cobalt-500/20">
      <!-- Row 1 - Left to Right -->
      <Marquee :duration="20" class="py-2">
        <div class="flex items-center gap-6 px-4">
          <svg viewBox="0 0 40 40" class="w-8 h-8 text-cobalt-500"><polygon points="20,5 25,18 38,18 28,28 32,42 20,35 8,42 12,28 2,18 15,18" fill="currentColor"/></svg>
          <svg viewBox="0 0 60 80" class="w-6 h-8 text-cobalt-500"><path d="M10 70 Q10 10, 30 10 Q50 10, 50 70" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>
          <svg viewBox="0 0 80 40" class="w-14 h-6 text-cobalt-500"><path d="M5 20 Q15 5, 25 20 Q35 35, 45 20 Q55 5, 65 20 Q75 35, 75 20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>
          <svg viewBox="0 0 80 40" class="w-14 h-6 text-cobalt-500"><polygon points="60,20 55,8 65,14 70,2 72,15 82,12 74,20 82,28 72,25 70,38 65,26 55,32" fill="currentColor"/><path d="M5 20 L50 20" stroke="currentColor" stroke-width="2" stroke-dasharray="3,3"/></svg>
          <span class="text-xl md:text-2xl font-serif italic text-cobalt-500 whitespace-nowrap">it's nice to meet you</span>
        </div>
      </Marquee>

      <!-- Row 2 - Right to Left -->
      <Marquee :duration="20" :reverse="true" class="py-2">
        <div class="flex items-center gap-6 px-4">
          <svg viewBox="0 0 40 40" class="w-8 h-8 text-cobalt-500"><polygon points="20,5 25,18 38,18 28,28 32,42 20,35 8,42 12,28 2,18 15,18" fill="currentColor"/></svg>
          <svg viewBox="0 0 60 80" class="w-6 h-8 text-cobalt-500"><path d="M10 70 Q10 10, 30 10 Q50 10, 50 70" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>
          <svg viewBox="0 0 80 40" class="w-14 h-6 text-cobalt-500"><path d="M5 20 Q15 5, 25 20 Q35 35, 45 20 Q55 5, 65 20 Q75 35, 75 20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>
          <svg viewBox="0 0 80 40" class="w-14 h-6 text-cobalt-500"><polygon points="60,20 55,8 65,14 70,2 72,15 82,12 74,20 82,28 72,25 70,38 65,26 55,32" fill="currentColor"/><path d="M5 20 L50 20" stroke="currentColor" stroke-width="2" stroke-dasharray="3,3"/></svg>
          <span class="text-xl md:text-2xl font-serif italic text-cobalt-500 whitespace-nowrap">it's nice to meet you</span>
        </div>
      </Marquee>

      <!-- Row 3 - Left to Right -->
      <Marquee :duration="20" class="py-2">
        <div class="flex items-center gap-6 px-4">
          <svg viewBox="0 0 40 40" class="w-8 h-8 text-cobalt-500"><polygon points="20,5 25,18 38,18 28,28 32,42 20,35 8,42 12,28 2,18 15,18" fill="currentColor"/></svg>
          <svg viewBox="0 0 60 80" class="w-6 h-8 text-cobalt-500"><path d="M10 70 Q10 10, 30 10 Q50 10, 50 70" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>
          <svg viewBox="0 0 80 40" class="w-14 h-6 text-cobalt-500"><path d="M5 20 Q15 5, 25 20 Q35 35, 45 20 Q55 5, 65 20 Q75 35, 75 20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>
          <svg viewBox="0 0 80 40" class="w-14 h-6 text-cobalt-500"><polygon points="60,20 55,8 65,14 70,2 72,15 82,12 74,20 82,28 72,25 70,38 65,26 55,32" fill="currentColor"/><path d="M5 20 L50 20" stroke="currentColor" stroke-width="2" stroke-dasharray="3,3"/></svg>
          <span class="text-xl md:text-2xl font-serif italic text-cobalt-500 whitespace-nowrap">it's nice to meet you</span>
        </div>
      </Marquee>

      <!-- Row 4 - Right to Left -->
      <Marquee :duration="20" :reverse="true" class="py-2">
        <div class="flex items-center gap-6 px-4">
          <svg viewBox="0 0 40 40" class="w-8 h-8 text-cobalt-500"><polygon points="20,5 25,18 38,18 28,28 32,42 20,35 8,42 12,28 2,18 15,18" fill="currentColor"/></svg>
          <svg viewBox="0 0 60 80" class="w-6 h-8 text-cobalt-500"><path d="M10 70 Q10 10, 30 10 Q50 10, 50 70" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>
          <svg viewBox="0 0 80 40" class="w-14 h-6 text-cobalt-500"><path d="M5 20 Q15 5, 25 20 Q35 35, 45 20 Q55 5, 65 20 Q75 35, 75 20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>
          <svg viewBox="0 0 80 40" class="w-14 h-6 text-cobalt-500"><polygon points="60,20 55,8 65,14 70,2 72,15 82,12 74,20 82,28 72,25 70,38 65,26 55,32" fill="currentColor"/><path d="M5 20 L50 20" stroke="currentColor" stroke-width="2" stroke-dasharray="3,3"/></svg>
          <span class="text-xl md:text-2xl font-serif italic text-cobalt-500 whitespace-nowrap">it's nice to meet you</span>
        </div>
      </Marquee>
    </section>

    <!-- Case Studies Section -->
    <section id="case-studies" class="py-16 px-6 lg:px-12">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-lg font-serif italic text-cobalt-500 lowercase mb-8 px-4">
          case studies
        </h2>

        <CaseStudyListItem
          v-for="(project, index) in caseStudies"
          :key="project.slug"
          :number="index + 1"
          :title="project.title"
          :slug="project.slug"
          :tags="project.tags"
          :image="project.image"
        />
      </div>
    </section>

    <!-- Extra Section with Blob -->
    <section class="py-16 px-6 lg:px-12">
      <div class="max-w-6xl mx-auto flex justify-center">
        <router-link 
          to="/extra"
          class="group flex items-center gap-4 text-cobalt-500 hover:opacity-70 transition-opacity"
        >
          <svg viewBox="0 0 120 100" class="w-20 h-16 fill-current group-hover:rotate-12 transition-transform">
            <path d="M30 50 Q20 20, 50 15 Q80 10, 95 40 Q110 70, 80 85 Q50 100, 30 80 Q10 60, 30 50Z"/>
          </svg>
        </router-link>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Marquee from '../components/ui/Marquee.vue';
import CaseStudyListItem from '../components/case-study/CaseStudyListItem.vue';
import Footer from '../components/layout/Footer.vue';

interface CaseStudy {
  title: string;
  slug: string;
  tags: string[];
  image: string;
}

export default defineComponent({
  name: 'Home',
  components: {
    Marquee,
    CaseStudyListItem,
    Footer
  },
  setup() {
    const caseStudies: CaseStudy[] = [
      {
        title: 'Vue 3 Dashboard',
        slug: 'vue-dashboard',
        tags: ['Vue 3', 'TypeScript', 'Dashboard'],
        image: '/project-images/dashboard.jpg'
      },
      {
        title: 'Nuxt E-Commerce',
        slug: 'nuxt-ecommerce',
        tags: ['Nuxt', 'Stripe', 'SSR'],
        image: '/project-images/ecommerce.jpg'
      },
      {
        title: 'Real-time Chat App',
        slug: 'chat-app',
        tags: ['Firebase', 'Vue 3', 'WebSockets'],
        image: '/project-images/chat.jpg'
      },
      {
        title: 'Portfolio Generator',
        slug: 'portfolio-generator',
        tags: ['Tooling', 'CLI', 'Automation'],
        image: '/project-images/portfolio.jpg'
      },
      {
        title: 'Component Library',
        slug: 'component-library',
        tags: ['Design System', 'Storybook', 'Testing'],
        image: '/project-images/library.jpg'
      }
    ];

    return {
      caseStudies
    };
  }
});
</script>

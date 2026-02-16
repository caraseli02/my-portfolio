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

        <!-- Role Descriptor with 3D Text Rotator -->
        <div class="flex items-center justify-center gap-3 text-cobalt-500 text-xl md:text-2xl mt-8">
          <span>I'm a</span>
          <TextRotator 
            :words="['Webapps', 'UI/UX', 'Components']"
            :interval="2500"
          />
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

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TextRotator from '../components/ui/TextRotator.vue';
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
    TextRotator,
    CaseStudyListItem,
    Footer
  },
  setup() {
    const caseStudies: CaseStudy[] = [
      {
        title: 'Vue 3 Dashboard',
        slug: 'vue3-dashboard',
        tags: ['Vue 3', 'TypeScript', 'Dashboard'],
        image: '/project-images/dashboard.jpg'
      },
      {
        title: 'FastAPI Real-World Application',
        slug: 'fastapi-realworld',
        tags: ['Python', 'FastAPI', 'PostgreSQL'],
        image: '/project-images/fastapi.jpg'
      },
      {
        title: 'Nuxt Travel Bookings',
        slug: 'nuxt-travel-bookings',
        tags: ['Nuxt 3', 'Vue 3', 'SSR'],
        image: '/project-images/travel.jpg'
      }
    ];

    return {
      caseStudies
    };
  }
});
</script>

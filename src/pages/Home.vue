<template>
  <div class="bg-cream-100 min-h-screen">
    <!-- Hero Section -->
    <section class="pt-24 md:pt-32 pb-10 md:pb-16 px-6 lg:px-12 min-h-[78svh] md:min-h-screen flex flex-col justify-center">
      <div class="max-w-5xl mx-auto text-center">
        <!-- Main Hero Text -->
        <div class="mb-5 md:mb-6">
          <p class="text-xl md:text-3xl text-cobalt-500 mb-3 md:mb-4 font-normal">
            Hi my name is
          </p>
          <h1 class="font-serif italic text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-cobalt-500 tracking-tight leading-none">
            Vlad Caraseli
          </h1>
        </div>

        <!-- Role Descriptor with 3D Text Rotator -->
        <div class="flex items-center justify-center gap-2 md:gap-3 text-cobalt-500 text-lg sm:text-xl md:text-2xl mt-6 md:mt-8">
          <span>I'm a</span>
          <TextRotator 
            :words="['Webapps', 'UI/UX', 'Components']"
            :interval="2500"
          />
          <span>developer</span>
        </div>

        <!-- Circular Case Studies Stamp -->
        <div class="mt-12 md:mt-16 flex justify-center">
          <a href="#case-studies" class="group relative w-24 h-24 md:w-28 md:h-28">
            <svg viewBox="0 0 100 100" class="w-full h-full text-cobalt-500 animate-spin-slow" aria-hidden="true">
              <defs>
                <path id="circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"/>
              </defs>
              <text font-size="10" fill="currentColor" font-family="Manrope, sans-serif" letter-spacing="1">
                <textPath href="#circle">case studies • case studies • </textPath>
              </text>
            </svg>
            <!-- Arrow pointing down -->
            <div class="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 24 24" class="w-6 h-6 text-cobalt-500 group-hover:translate-y-1 transition-transform" aria-hidden="true">
                <path d="M12 5v14M5 12l7 7 7-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
    <!-- Case Studies Section -->
    <section id="case-studies" class="py-10 md:py-16 px-6 lg:px-12">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-lg font-display text-cobalt-500 lowercase mb-8 px-4">
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
          :description="project.description"
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
  description: string;
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
        title: 'Top Properties',
        slug: 'topproperties',
        tags: ['React 18', 'TypeScript', 'Leaflet'],
        image: '/project-images/topproperties.jpg',
        description: 'Luxury real estate browser with interactive map and multi-currency pricing'
      },
      {
        title: 'ECAS',
        slug: 'ecas',
        tags: ['Nuxt 3', 'Stripe', 'Firebase'],
        image: '/project-images/ecas.jpg',
        description: 'Full e-commerce platform with smart pricing engine and admin dashboard'
      },
      {
        title: 'ABS Storybook',
        slug: 'abs-storybook',
        tags: ['React 19', 'Storybook 10', 'Chromatic'],
        image: '/project-images/abs-storybook.jpg',
        description: 'Hotel booking component library with enforced UI/business logic separation'
      }
    ];

    return {
      caseStudies
    };
  }
});
</script>

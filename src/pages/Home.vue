<template>
  <div class="min-h-screen bg-cream-100 dark:bg-charcoal">
    <!-- Hero Section -->
    <section class="flex flex-col justify-center px-6 pb-16 pt-28 lg:px-12 lg:pb-20 lg:pt-32" style="min-height: calc(100vh - 5rem);">
      <div class="mx-auto max-w-5xl text-center">
        <!-- Main Hero Text -->
        <div class="space-y-4 md:space-y-5">
          <p class="mb-4 text-2xl font-normal text-cobalt-500 dark:text-cobalt-300 md:text-3xl">
            Hi my name is
          </p>
          <h1 class="font-display text-5xl leading-none tracking-tight text-cobalt-500 dark:text-cobalt-300 md:text-7xl lg:text-8xl">
            Vlad Caraseli
          </h1>
        </div>

        <!-- Role Descriptor with 3D Text Rotator -->
        <div class="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-3 text-xl text-cobalt-500 dark:text-cobalt-300 md:mt-10 md:text-2xl">
          <span>I'm a</span>
          <TextRotator 
            :words="['Webapps', 'UI/UX', 'Components']"
            :interval="2500"
          />
          <span>developer</span>
        </div>

        <!-- Circular Case Studies Stamp -->
        <div class="mt-14 flex justify-center md:mt-16">
          <a href="#case-studies" class="group relative w-28 h-28">
            <svg viewBox="0 0 100 100" class="w-full h-full text-cobalt-500 animate-spin-slow dark:text-cobalt-300" aria-hidden="true">
              <defs>
                <path id="circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"/>
              </defs>
              <text font-size="10" fill="currentColor" font-family="Manrope, sans-serif" letter-spacing="1">
                <textPath href="#circle">case studies • case studies • </textPath>
              </text>
            </svg>
            <!-- Arrow pointing down -->
            <div class="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 24 24" class="w-6 h-6 text-cobalt-500 group-hover:translate-y-1 transition-transform dark:text-cobalt-300" aria-hidden="true">
                <path d="M12 5v14M5 12l7 7 7-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>



    <!-- Case Studies Section -->
    <section id="case-studies" class="px-6 py-12 lg:px-12 lg:py-16">
      <div class="mx-auto max-w-6xl">
        <h2 class="mb-8 px-4 text-lg font-display lowercase text-cobalt-500 dark:text-cobalt-300">
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

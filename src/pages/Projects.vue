<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-vue-700 pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 opacity-5" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 40px 40px;"></div>
      <div class="relative max-w-6xl mx-auto px-6 lg:px-8">
        <h1 class="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">Projects</h1>
        <p class="text-lg text-gray-300 max-w-xl">A selection of applications and tools I've built with Vue.js and beyond</p>
      </div>
    </section>

    <!-- Featured Projects -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-6 lg:px-8">
        <div
          ref="featuredHeadingRef"
          class="mb-16 reveal"
          :class="{ revealed: featuredHeadingVisible }"
        >
          <h2 class="section-heading">Featured Work</h2>
          <p class="section-subheading">Detailed look at key projects</p>
        </div>

        <div class="space-y-8">
          <div
            v-for="(project, i) in featuredProjects"
            :key="project.id"
            :ref="el => { if (el) featuredRefs[i] = el }"
            class="group bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden hover:border-vue-500 transition-all duration-300 reveal"
            :class="{ revealed: featuredVisibility[i] }"
            :style="{ transitionDelay: (i * 150) + 'ms' }"
            data-cursor="card"
          >
            <div class="grid grid-cols-1 lg:grid-cols-5 gap-0">
              <!-- Content -->
              <div class="lg:col-span-3 p-8 lg:p-10">
                <div class="inline-block px-3 py-1 bg-green-50 text-vue-500 rounded-lg text-xs font-semibold mb-4">
                  {{ project.category }}
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-vue-500 transition-colors">
                  {{ project.title }}
                </h3>
                <p class="text-gray-600 leading-relaxed mb-2">{{ project.description }}</p>

                <!-- Metaphor tagline -->
                <p v-if="project.caseStudy" class="text-vue-500 text-sm font-medium italic mb-6">
                  "{{ project.caseStudy.metaphor.phrase }}"
                </p>
                <div v-else class="mb-6"></div>

                <!-- Highlights -->
                <div class="space-y-3 mb-6">
                  <div v-for="highlight in project.highlights" :key="highlight" class="flex items-start gap-2">
                    <svg class="w-5 h-5 text-vue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span class="text-gray-600 text-sm">{{ highlight }}</span>
                  </div>
                </div>

                <!-- Tech Stack -->
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in project.tech"
                    :key="tech"
                    class="tech-badge bg-white text-gray-700 border border-gray-200"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>

              <!-- Links panel -->
              <div class="lg:col-span-2 bg-vue-700 p-8 lg:p-10 flex flex-col justify-center">
                <h4 class="text-white font-bold mb-6">Project Links</h4>
                <div class="space-y-3">
                  <a
                    v-if="project.github"
                    :href="project.github"
                    target="_blank"
                    class="flex items-center justify-between p-4 bg-white bg-opacity-10 rounded-xl hover:bg-opacity-20 transition-all text-white group/link"
                  >
                    <span class="font-medium text-sm">View Source Code</span>
                    <svg class="w-5 h-5 group-hover/link:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                    </svg>
                  </a>

                  <!-- Case Study link -->
                  <router-link
                    v-if="project.caseStudy"
                    :to="{ name: 'case-study', params: { slug: project.caseStudy.slug } }"
                    class="flex items-center justify-between p-4 bg-vue-500 bg-opacity-30 rounded-xl hover:bg-opacity-50 transition-all text-white group/link"
                  >
                    <span class="font-medium text-sm">Read Case Study</span>
                    <svg class="w-5 h-5 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </router-link>
                </div>

                <div class="mt-6 pt-6 border-t border-white border-opacity-20">
                  <p class="text-gray-300 text-xs uppercase tracking-wider font-medium mb-3">Built With</p>
                  <p class="text-white text-sm font-medium">{{ project.tech.slice(0, 3).join(' + ') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- All Projects Grid -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-6 lg:px-8">
        <div
          ref="otherHeadingRef"
          class="mb-16 reveal"
          :class="{ revealed: otherHeadingVisible }"
        >
          <h2 class="section-heading">More Projects</h2>
          <p class="section-subheading">Other notable work from my portfolio</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" style="perspective: 1000px;">
          <a
            v-for="(project, i) in otherProjects"
            :key="project.id"
            :ref="el => { if (el) otherRefs[i] = el }"
            :href="project.github"
            target="_blank"
            class="group bg-white rounded-2xl border border-gray-200 overflow-hidden card-hover reveal"
            :class="{ revealed: otherVisibility[i] }"
            :style="{ transitionDelay: (i * 80) + 'ms' }"
            data-cursor="card"
          >
            <!-- Accent bar -->
            <div class="h-1" :class="project.accent"></div>
            <div class="p-6">
              <div class="flex items-start justify-between mb-3">
                <h3 class="text-base font-bold text-gray-900 group-hover:text-vue-500 transition-colors">
                  {{ project.title }}
                </h3>
                <svg class="w-4 h-4 text-gray-400 group-hover:text-vue-500 transition-colors flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </div>
              <p class="text-gray-500 text-sm mb-5 leading-relaxed">{{ project.description }}</p>
              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="tech in project.tech"
                  :key="tech"
                  class="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Open Source CTA -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div
          ref="ctaBlockRef"
          class="bg-vue-700 rounded-2xl p-10 lg:p-14 reveal-scale"
          :class="{ revealed: ctaBlockVisible }"
        >
          <h2 class="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">Want to see more?</h2>
          <p class="text-gray-300 mb-8 max-w-lg mx-auto">
            I have 58+ public repositories on GitHub covering Vue.js components, full-stack apps, and experimental projects.
          </p>
          <a
            ref="ctaBrowseRef"
            href="https://github.com/caraseli02?tab=repositories"
            target="_blank"
            class="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-vue-700 rounded-xl hover:bg-gray-100 transition-all duration-200 font-semibold ripple-container"
            data-cursor="button"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
            </svg>
            Browse All Repositories
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from "vue";
import { useScrollReveal } from "../composables/useScrollReveal";
import { useRipple } from "../composables/useRipple";
import { useMagneticEffect } from "../composables/useMagneticEffect";
import { useTiltEffect } from "../composables/useTiltEffect";
import { featuredProjects, otherProjects } from "../data/projects";

export default defineComponent({
  name: "Projects",
  setup() {
    // Scroll reveals for headings
    const { revealRef: featuredHeadingRef, isVisible: featuredHeadingVisible } = useScrollReveal();
    const { revealRef: otherHeadingRef, isVisible: otherHeadingVisible } = useScrollReveal();
    const { revealRef: ctaBlockRef, isVisible: ctaBlockVisible } = useScrollReveal();

    // Magnetic + ripple on CTA button
    const { magneticRef: ctaBrowseRef } = useMagneticEffect({ strength: 0.25, radius: 120 });
    const ctaRipple = useRipple();

    // Featured projects scroll reveal refs
    const featuredRefs = reactive<Record<number, HTMLElement>>({});
    const featuredVisibility = reactive<Record<number, boolean>>({});
    const featuredObservers: IntersectionObserver[] = [];

    // Other projects scroll reveal + tilt refs
    const otherRefs = reactive<Record<number, HTMLElement>>({});
    const otherVisibility = reactive<Record<number, boolean>>({});
    const otherObservers: IntersectionObserver[] = [];

    // Tilt effects for other project cards
    const otherTilts = Array.from({ length: otherProjects.length }, () =>
      useTiltEffect({ maxTilt: 5, scale: 1.01, glare: false })
    );

    onMounted(() => {
      // Wire ripple to CTA
      ctaRipple.rippleRef.value = ctaBrowseRef.value;

      const createObserver = (
        refs: Record<number, HTMLElement>,
        visibility: Record<number, boolean>,
        observers: IntersectionObserver[]
      ) => {
        Object.keys(refs).forEach((key) => {
          const idx = Number(key);
          const el = refs[idx];
          if (!el) return;
          const obs = new IntersectionObserver(
            (entries) => {
              if (entries[0]?.isIntersecting) {
                visibility[idx] = true;
                obs.unobserve(el);
              }
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
          );
          obs.observe(el);
          observers.push(obs);
        });
      };

      createObserver(featuredRefs, featuredVisibility, featuredObservers);
      createObserver(otherRefs, otherVisibility, otherObservers);

      // Wire tilt to other project cards
      Object.keys(otherRefs).forEach((key) => {
        const idx = Number(key);
        if (otherTilts[idx]) {
          otherTilts[idx].tiltRef.value = otherRefs[idx];
        }
      });
    });

    return {
      featuredProjects,
      otherProjects,
      featuredHeadingRef,
      featuredHeadingVisible,
      otherHeadingRef,
      otherHeadingVisible,
      ctaBlockRef,
      ctaBlockVisible,
      ctaBrowseRef,
      featuredRefs,
      featuredVisibility,
      otherRefs,
      otherVisibility,
    };
  },
});
</script>

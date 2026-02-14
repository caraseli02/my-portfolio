<template>
  <div>
    <!-- Hero Section -->
    <section ref="heroRef" class="relative min-h-screen flex items-center bg-vue-700 overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute inset-0">
        <div data-depth="3" class="absolute top-1/4 -right-20 w-96 h-96 bg-vue-500 rounded-full opacity-10 animate-float"></div>
        <div data-depth="2" class="absolute bottom-1/4 -left-20 w-80 h-80 bg-emerald-400 rounded-full opacity-10 animate-float animation-delay-200"></div>
        <div data-depth="1" class="absolute top-1/2 left-1/2 w-64 h-64 bg-green-400 rounded-full opacity-5 animate-pulse-slow"></div>
        <!-- Grid pattern -->
        <div data-depth="2" class="absolute inset-0 opacity-5" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 40px 40px;"></div>
      </div>

      <div class="relative max-w-6xl mx-auto px-6 lg:px-8 py-32">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white bg-opacity-10 rounded-full text-green-300 text-sm font-medium mb-8 backdrop-filter backdrop-blur-sm">
            <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Available for new projects
          </div>

          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Hi, I'm Vlad
            <span class="block text-vue-500">Caraseli</span>
          </h1>

          <p class="text-xl text-gray-300 mb-4 max-w-xl leading-relaxed">
            Vue.js Web Developer based in Palma de Mallorca.
          </p>
          <p class="text-lg text-gray-400 mb-10 max-w-xl leading-relaxed">
            Building modern, performant web applications with Vue 3, Nuxt, TypeScript, and the tools I love. After all, when you really love what you do, it doesn't seem like work.
          </p>

          <div class="flex flex-wrap gap-4">
            <router-link
              ref="ctaPrimaryRef"
              to="/projects"
              class="group inline-flex items-center gap-2 px-7 py-3.5 bg-vue-500 text-white rounded-xl hover:bg-emerald-600 transition-all duration-200 font-semibold text-base shadow-lg shadow-emerald-500/25 ripple-container"
              data-cursor="button"
            >
              View My Work
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </router-link>
            <a
              ref="ctaSecondaryRef"
              href="https://www.linkedin.com/in/caraseli/"
              target="_blank"
              class="inline-flex items-center gap-2 px-7 py-3.5 bg-white bg-opacity-10 text-white rounded-xl hover:bg-opacity-20 transition-all duration-200 font-semibold text-base border border-white border-opacity-20 ripple-container"
              data-cursor="button"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>

        <!-- Tech stack floating badges -->
        <div class="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-3">
          <div v-for="(tech, i) in heroTechs" :key="tech"
               class="px-4 py-2 bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-lg text-white text-sm font-medium border border-white border-opacity-10 animate-fade-in"
               :style="{ animationDelay: (i * 150) + 'ms' }">
            {{ tech }}
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 bg-white border-b border-gray-100">
      <div class="max-w-6xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(stat, i) in stats"
            :key="stat.label"
            :ref="el => { if (el) statRefs[i] = el }"
            class="text-center reveal"
            :class="{ revealed: statVisibility[i] }"
            :style="{ transitionDelay: (i * 100) + 'ms' }"
          >
            <div class="text-4xl font-extrabold text-vue-700 mb-2 tracking-tight">{{ stat.value }}</div>
            <p class="text-sm text-gray-500 font-medium uppercase tracking-wider">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects Section -->
    <section class="py-24 bg-gray-50">
      <div class="max-w-6xl mx-auto px-6 lg:px-8">
        <div
          ref="projectsHeadingRef"
          class="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 gap-4 reveal"
          :class="{ revealed: projectsHeadingVisible }"
        >
          <div>
            <h2 class="section-heading">Featured Projects</h2>
            <p class="section-subheading">Selected work from my portfolio</p>
          </div>
          <router-link
            to="/projects"
            class="group inline-flex items-center gap-2 text-vue-500 hover:text-vue-700 font-semibold text-sm transition-colors"
          >
            View all projects
            <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </router-link>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6" style="perspective: 1000px;">
          <div
            v-for="(project, i) in featuredProjects"
            :key="project.id"
            :ref="el => { if (el) projectCardRefs[i] = el }"
            class="group bg-white rounded-2xl border border-gray-200 overflow-hidden card-hover reveal"
            :class="{ revealed: projectCardVisibility[i] }"
            :style="{ transitionDelay: (i * 150) + 'ms' }"
            data-cursor="card"
          >
            <!-- Project color header -->
            <div class="h-2" :class="project.accent"></div>
            <div class="p-8">
              <div class="flex items-start justify-between mb-4">
                <h3 class="text-xl font-bold text-gray-900 group-hover:text-vue-500 transition-colors">{{ project.title }}</h3>
                <a v-if="project.github" :href="project.github" target="_blank" class="text-gray-400 hover:text-gray-700 transition-colors">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </a>
              </div>
              <p class="text-gray-600 mb-6 leading-relaxed text-sm">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in project.tech"
                  :key="tech"
                  class="tech-badge bg-gray-100 text-gray-700"
                >
                  {{ tech }}
                </span>
              </div>

              <!-- Case study link -->
              <router-link
                v-if="project.slug"
                :to="{ name: 'case-study', params: { slug: project.slug } }"
                class="inline-flex items-center gap-2 mt-5 text-vue-500 hover:text-vue-700 font-semibold text-sm transition-colors group/link"
              >
                Read the story
                <svg class="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6 lg:px-8">
        <div
          ref="skillsHeadingRef"
          class="mb-16 reveal"
          :class="{ revealed: skillsHeadingVisible }"
        >
          <h2 class="section-heading">Tech Stack</h2>
          <p class="section-subheading">Technologies I work with daily</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" style="perspective: 1000px;">
          <div v-for="(category, i) in skills" :key="category.name"
               :ref="el => { if (el) skillCardRefs[i] = el }"
               class="group p-6 rounded-2xl border border-gray-200 hover:border-vue-500 transition-all duration-300 card-hover reveal"
               :class="{ revealed: skillCardVisibility[i] }"
               :style="{ transitionDelay: (i * 100) + 'ms' }"
               data-cursor="card"
          >
            <div class="flex items-center gap-3 mb-5">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                   :class="category.iconBg">
                {{ category.icon }}
              </div>
              <h3 class="text-lg font-bold text-gray-900">{{ category.name }}</h3>
            </div>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in category.items"
                :key="skill"
                class="tech-badge bg-gray-50 text-gray-600 group-hover:bg-green-50 group-hover:text-vue-700"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-vue-700">
      <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div
          ref="ctaSectionRef"
          class="reveal"
          :class="{ revealed: ctaSectionVisible }"
        >
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Interested in working together?</h2>
          <p class="text-lg text-gray-300 mb-10 max-w-xl mx-auto">
            I'm always open to discussing new projects and collaboration opportunities.
          </p>
        </div>
        <div class="flex flex-wrap justify-center gap-4">
          <a
            ref="ctaLinkedInRef"
            href="https://www.linkedin.com/in/caraseli/"
            target="_blank"
            class="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-vue-700 rounded-xl hover:bg-gray-100 transition-all duration-200 font-semibold ripple-container"
            data-cursor="button"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path>
            </svg>
            Connect on LinkedIn
          </a>
          <a
            ref="ctaGitHubRef"
            href="https://github.com/caraseli02"
            target="_blank"
            class="inline-flex items-center gap-2 px-7 py-3.5 border border-white border-opacity-30 text-white rounded-xl hover:bg-white hover:bg-opacity-10 transition-all duration-200 font-semibold ripple-container"
            data-cursor="button"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
            </svg>
            View GitHub
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
import { useParallaxDepth } from "../composables/useParallaxDepth";
import { homeFeaturedProjects } from "../data/projects";

interface SkillCategory {
  name: string;
  icon: string;
  iconBg: string;
  items: string[];
}

interface Stat {
  value: string;
  label: string;
}

export default defineComponent({
  name: "Home",
  setup() {
    // Static data
    const heroTechs = ["Vue 3", "Nuxt", "TypeScript", "Vite", "Tailwind", "Python"];
    const stats: Stat[] = [
      { value: "58+", label: "Repositories" },
      { value: "6+", label: "Years Experience" },
      { value: "161", label: "GitHub Stars" },
      { value: "15+", label: "Technologies" },
    ];
    const featuredProjects = homeFeaturedProjects;
    const skills: SkillCategory[] = [
      { name: "Frontend Core", icon: "\u{1F3A8}", iconBg: "bg-green-100 text-green-700", items: ["Vue 3", "Nuxt 3", "TypeScript", "JavaScript", "HTML/CSS"] },
      { name: "Tooling & UI", icon: "\u{1F6E0}", iconBg: "bg-blue-100 text-blue-700", items: ["Vite", "Tailwind CSS", "PrimeVue", "Vuetify", "GSAP"] },
      { name: "Backend & Data", icon: "\u{1F5C4}", iconBg: "bg-purple-100 text-purple-700", items: ["Python", "FastAPI", "Firebase", "Node.js", "REST APIs"] },
      { name: "State & Ecosystem", icon: "\u{1F4E6}", iconBg: "bg-amber-100 text-amber-700", items: ["Pinia", "Vuex", "Vue Router", "VueFire", "Gridsome"] },
      { name: "DevOps & Tools", icon: "\u{2699}", iconBg: "bg-red-100 text-red-700", items: ["Git", "Docker", "CI/CD", "Vercel", "Netlify"] },
      { name: "Practices", icon: "\u{1F4CB}", iconBg: "bg-teal-100 text-teal-700", items: ["Agile", "TDD", "Code Review", "Component Design", "SSR/SSG"] },
    ];

    // Parallax depth on hero
    const { containerRef: heroRef } = useParallaxDepth({ intensity: 15 });

    // Magnetic effect on CTA buttons
    const { magneticRef: ctaPrimaryRef } = useMagneticEffect({ strength: 0.25, radius: 120 });
    const { magneticRef: ctaSecondaryRef } = useMagneticEffect({ strength: 0.25, radius: 120 });
    const { magneticRef: ctaLinkedInRef } = useMagneticEffect({ strength: 0.2, radius: 100 });
    const { magneticRef: ctaGitHubRef } = useMagneticEffect({ strength: 0.2, radius: 100 });

    // Ripple on CTA buttons
    const ripple1 = useRipple();
    const ripple2 = useRipple();
    const ripple3 = useRipple();
    const ripple4 = useRipple({ color: 'rgba(255, 255, 255, 0.2)' });

    // Scroll reveals
    const { revealRef: projectsHeadingRef, isVisible: projectsHeadingVisible } = useScrollReveal();
    const { revealRef: skillsHeadingRef, isVisible: skillsHeadingVisible } = useScrollReveal();
    const { revealRef: ctaSectionRef, isVisible: ctaSectionVisible } = useScrollReveal();

    // Stats scroll reveal (manual refs for v-for)
    const statRefs = reactive<Record<number, HTMLElement>>({});
    const statVisibility = reactive<Record<number, boolean>>({});
    const statObservers: IntersectionObserver[] = [];

    // Project cards scroll reveal + tilt
    const projectCardRefs = reactive<Record<number, HTMLElement>>({});
    const projectCardVisibility = reactive<Record<number, boolean>>({});
    const projectObservers: IntersectionObserver[] = [];

    // Skill cards scroll reveal + tilt
    const skillCardRefs = reactive<Record<number, HTMLElement>>({});
    const skillCardVisibility = reactive<Record<number, boolean>>({});
    const skillObservers: IntersectionObserver[] = [];

    // Tilt effect refs for project cards
    const tiltEffects = [
      useTiltEffect({ maxTilt: 6, scale: 1.01 }),
      useTiltEffect({ maxTilt: 6, scale: 1.01 }),
      useTiltEffect({ maxTilt: 6, scale: 1.01 }),
      useTiltEffect({ maxTilt: 6, scale: 1.01 }),
    ];

    // Tilt for skill cards
    const skillTilts = Array.from({ length: 6 }, () => useTiltEffect({ maxTilt: 5, scale: 1.01, glare: false }));

    onMounted(() => {
      // Wire ripple to magnetic refs (they share the same elements)
      ripple1.rippleRef.value = ctaPrimaryRef.value;
      ripple2.rippleRef.value = ctaSecondaryRef.value;
      ripple3.rippleRef.value = ctaLinkedInRef.value;
      ripple4.rippleRef.value = ctaGitHubRef.value;

      // Manual observers for v-for items
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
            { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
          );
          obs.observe(el);
          observers.push(obs);
        });
      };

      createObserver(statRefs, statVisibility, statObservers);
      createObserver(projectCardRefs, projectCardVisibility, projectObservers);
      createObserver(skillCardRefs, skillCardVisibility, skillObservers);

      // Wire tilt to project cards
      Object.keys(projectCardRefs).forEach((key) => {
        const idx = Number(key);
        if (tiltEffects[idx]) {
          tiltEffects[idx].tiltRef.value = projectCardRefs[idx];
        }
      });

      // Wire tilt to skill cards
      Object.keys(skillCardRefs).forEach((key) => {
        const idx = Number(key);
        if (skillTilts[idx]) {
          skillTilts[idx].tiltRef.value = skillCardRefs[idx];
        }
      });
    });

    return {
      heroTechs,
      stats,
      featuredProjects,
      skills,
      heroRef,
      ctaPrimaryRef,
      ctaSecondaryRef,
      ctaLinkedInRef,
      ctaGitHubRef,
      projectsHeadingRef,
      projectsHeadingVisible,
      skillsHeadingRef,
      skillsHeadingVisible,
      ctaSectionRef,
      ctaSectionVisible,
      statRefs,
      statVisibility,
      projectCardRefs,
      projectCardVisibility,
      skillCardRefs,
      skillCardVisibility,
    };
  },
});
</script>

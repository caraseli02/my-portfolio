<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-vue-700 pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 opacity-5" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 40px 40px;"></div>
      <div class="relative max-w-6xl mx-auto px-6 lg:px-8">
        <h1 class="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">About Me</h1>
        <p class="text-lg text-gray-300 max-w-xl">Vue.js developer passionate about crafting exceptional web experiences</p>
      </div>
    </section>

    <!-- Introduction -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div
            ref="introTextRef"
            class="lg:col-span-3 reveal-left"
            :class="{ revealed: introTextVisible }"
          >
            <h2 class="text-2xl font-bold text-gray-900 mb-6 tracking-tight">
              A developer who loves building with Vue.js
            </h2>
            <div class="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I'm Vlad Caraseli, a Vue.js web developer based in Palma de Mallorca, Spain.
                With 6+ years of experience in web development, I specialize in building modern,
                performant applications using Vue 3, Nuxt 3, TypeScript, and the broader Vue ecosystem.
              </p>
              <p>
                My approach centers on writing clean, maintainable code and leveraging the best tools
                for each project. From interactive dashboards to full-stack applications with Python/FastAPI
                backends, I enjoy tackling diverse challenges across the stack.
              </p>
              <p>
                I'm an active contributor to the open-source community with 58+ public repositories
                on GitHub, and I'm always exploring new technologies and patterns to improve my craft.
              </p>
            </div>
          </div>

          <!-- Quick info card -->
          <div
            ref="quickInfoRef"
            class="lg:col-span-2 reveal"
            :class="{ revealed: quickInfoVisible }"
          >
            <div class="bg-gray-50 rounded-2xl p-8 border border-gray-200" data-cursor="card">
              <h3 class="text-lg font-bold text-gray-900 mb-6">Quick Info</h3>
              <div class="space-y-5">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-sm">
                    &#x1F4CD;
                  </div>
                  <div>
                    <p class="text-xs text-gray-500 uppercase tracking-wider font-medium">Location</p>
                    <p class="text-gray-900 font-semibold">Palma de Mallorca, Spain</p>
                  </div>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-sm">
                    &#x1F4BB;
                  </div>
                  <div>
                    <p class="text-xs text-gray-500 uppercase tracking-wider font-medium">Specialty</p>
                    <p class="text-gray-900 font-semibold">Vue.js / Nuxt Development</p>
                  </div>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-sm">
                    &#x1F4C5;
                  </div>
                  <div>
                    <p class="text-xs text-gray-500 uppercase tracking-wider font-medium">Experience</p>
                    <p class="text-gray-900 font-semibold">6+ Years</p>
                  </div>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-sm">
                    &#x1F30D;
                  </div>
                  <div>
                    <p class="text-xs text-gray-500 uppercase tracking-wider font-medium">Languages</p>
                    <p class="text-gray-900 font-semibold">English, Spanish, Romanian</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Professional Journey -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-6 lg:px-8">
        <div
          ref="journeyHeadingRef"
          class="mb-16 reveal"
          :class="{ revealed: journeyHeadingVisible }"
        >
          <h2 class="section-heading">Professional Journey</h2>
          <p class="section-subheading">Key milestones in my career</p>
        </div>

        <div class="space-y-6">
          <div
            v-for="(job, index) in timeline"
            :key="index"
            :ref="el => { if (el) timelineRefs[index] = el }"
            class="group relative bg-white rounded-2xl border border-gray-200 p-8 hover:border-vue-500 transition-all duration-300 card-hover reveal"
            :class="{ revealed: timelineVisibility[index] }"
            :style="{ transitionDelay: (index * 150) + 'ms' }"
            data-cursor="card"
          >
            <div class="flex flex-col sm:flex-row sm:items-start gap-4">
              <div class="flex-shrink-0">
                <span class="inline-block px-3 py-1.5 bg-green-50 text-vue-500 text-xs font-semibold rounded-lg">
                  {{ job.period }}
                </span>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-1">{{ job.role }}</h3>
                <p class="text-vue-500 font-semibold text-sm mb-3">{{ job.company }}</p>
                <p class="text-gray-600 leading-relaxed text-sm mb-4">{{ job.description }}</p>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tag in job.tags"
                    :key="tag"
                    class="tech-badge bg-gray-100 text-gray-600"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What I Value -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-6 lg:px-8">
        <div
          ref="valuesHeadingRef"
          class="mb-16 reveal"
          :class="{ revealed: valuesHeadingVisible }"
        >
          <h2 class="section-heading">What Drives Me</h2>
          <p class="section-subheading">The principles behind how I work</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6" style="perspective: 1000px;">
          <div
            v-for="(value, i) in values"
            :key="value.title"
            :ref="el => { if (el) valueRefs[i] = el }"
            class="p-6 rounded-2xl border border-gray-200 hover:border-vue-500 transition-all duration-300 card-hover reveal"
            :class="{ revealed: valueVisibility[i] }"
            :style="{ transitionDelay: (i * 100) + 'ms' }"
            data-cursor="card"
          >
            <div class="w-10 h-10 rounded-xl mb-4 flex items-center justify-center text-lg" :class="value.iconBg">
              {{ value.icon }}
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">{{ value.title }}</h3>
            <p class="text-gray-600 text-sm leading-relaxed">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- GitHub Stats -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-6 lg:px-8">
        <div
          ref="badgesHeadingRef"
          class="mb-16 reveal"
          :class="{ revealed: badgesHeadingVisible }"
        >
          <h2 class="section-heading">GitHub Highlights</h2>
          <p class="section-subheading">Open source contributions and achievements</p>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <div
            v-for="(badge, i) in githubBadges"
            :key="badge.name"
            :ref="el => { if (el) badgeRefs[i] = el }"
            class="bg-white rounded-xl border border-gray-200 p-4 text-center hover:border-vue-500 transition-colors reveal-scale"
            :class="{ revealed: badgeVisibility[i] }"
            :style="{ transitionDelay: (i * 80) + 'ms' }"
          >
            <div class="text-2xl mb-2">{{ badge.icon }}</div>
            <p class="text-xs text-gray-500 font-medium">{{ badge.name }}</p>
            <p v-if="badge.count" class="text-xs text-vue-500 font-bold">{{ badge.count }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-vue-700">
      <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div
          ref="ctaHeadingRef"
          class="reveal"
          :class="{ revealed: ctaHeadingVisible }"
        >
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Let's Build Something Together</h2>
          <p class="text-lg text-gray-300 mb-10 max-w-xl mx-auto">
            I'm always interested in discussing new projects, innovative ideas, and collaboration opportunities.
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

interface TimelineItem {
  period: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
}

interface Value {
  icon: string;
  iconBg: string;
  title: string;
  description: string;
}

interface Badge {
  icon: string;
  name: string;
  count?: string;
}

export default defineComponent({
  name: "About",
  setup() {
    const timeline: TimelineItem[] = [
      {
        period: "2023 - Present",
        role: "Senior Vue.js Developer",
        company: "Freelance & Contract Work",
        description: "Building modern web applications for clients using Vue 3, Nuxt 3, and TypeScript. Developing full-stack solutions with Python/FastAPI backends. Contributing to open-source projects and mentoring junior developers.",
        tags: ["Vue 3", "Nuxt 3", "TypeScript", "FastAPI", "Tailwind CSS"],
      },
      {
        period: "2021 - 2023",
        role: "Frontend Developer",
        company: "Web Development Agency",
        description: "Developed and maintained multiple client-facing web applications using Vue.js and Nuxt. Implemented responsive designs, integrated third-party APIs, and optimized application performance. Worked in Agile teams with CI/CD workflows.",
        tags: ["Vue.js", "Nuxt", "JavaScript", "REST APIs", "Agile"],
      },
      {
        period: "2019 - 2021",
        role: "Junior Web Developer",
        company: "Software Company",
        description: "Started professional career building web applications with Vue.js. Gained experience with component-based architecture, state management with Vuex, and modern frontend tooling. Contributed to internal tools and client projects.",
        tags: ["Vue.js", "JavaScript", "HTML/CSS", "Vuex", "Git"],
      },
    ];
    const values: Value[] = [
      { icon: "\u{2728}", iconBg: "bg-green-100", title: "Clean & Modern Code", description: "I prioritize writing readable, maintainable code following Vue.js best practices and the Composition API patterns." },
      { icon: "\u{1F680}", iconBg: "bg-blue-100", title: "Performance First", description: "Every application I build is optimized for speed. I leverage SSR, code splitting, and modern build tools like Vite." },
      { icon: "\u{1F91D}", iconBg: "bg-purple-100", title: "Open Source", description: "I believe in giving back to the community. With 58+ public repos, I actively contribute to and learn from open source." },
      { icon: "\u{1F4D6}", iconBg: "bg-amber-100", title: "Continuous Learning", description: "Technology evolves rapidly. I stay current by exploring new tools, frameworks, and patterns in the Vue.js ecosystem." },
    ];
    const githubBadges: Badge[] = [
      { icon: "\u{1F30D}", name: "Arctic Vault", count: "Contributor" },
      { icon: "\u{1F988}", name: "Pull Shark", count: "x3" },
      { icon: "\u{1F91D}", name: "Pair Extra.", count: "x3" },
      { icon: "\u{26A1}", name: "Quickdraw" },
      { icon: "\u{1F389}", name: "YOLO" },
      { icon: "\u{2B50}", name: "Sponsor" },
    ];

    // Scroll reveal for section headings
    const { revealRef: introTextRef, isVisible: introTextVisible } = useScrollReveal();
    const { revealRef: quickInfoRef, isVisible: quickInfoVisible } = useScrollReveal();
    const { revealRef: journeyHeadingRef, isVisible: journeyHeadingVisible } = useScrollReveal();
    const { revealRef: valuesHeadingRef, isVisible: valuesHeadingVisible } = useScrollReveal();
    const { revealRef: badgesHeadingRef, isVisible: badgesHeadingVisible } = useScrollReveal();
    const { revealRef: ctaHeadingRef, isVisible: ctaHeadingVisible } = useScrollReveal();

    // Magnetic + ripple on CTA buttons
    const { magneticRef: ctaLinkedInRef } = useMagneticEffect({ strength: 0.2, radius: 100 });
    const { magneticRef: ctaGitHubRef } = useMagneticEffect({ strength: 0.2, radius: 100 });
    const ripple1 = useRipple();
    const ripple2 = useRipple({ color: 'rgba(255, 255, 255, 0.2)' });

    // Timeline scroll reveal refs
    const timelineRefs = reactive<Record<number, HTMLElement>>({});
    const timelineVisibility = reactive<Record<number, boolean>>({});
    const timelineObservers: IntersectionObserver[] = [];

    // Value cards scroll reveal + tilt refs
    const valueRefs = reactive<Record<number, HTMLElement>>({});
    const valueVisibility = reactive<Record<number, boolean>>({});
    const valueObservers: IntersectionObserver[] = [];
    const valueTilts = Array.from({ length: 4 }, () => useTiltEffect({ maxTilt: 5, scale: 1.01, glare: false }));

    // Badge scroll reveal refs
    const badgeRefs = reactive<Record<number, HTMLElement>>({});
    const badgeVisibility = reactive<Record<number, boolean>>({});
    const badgeObservers: IntersectionObserver[] = [];

    onMounted(() => {
      // Wire ripple to CTA buttons
      ripple1.rippleRef.value = ctaLinkedInRef.value;
      ripple2.rippleRef.value = ctaGitHubRef.value;

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

      createObserver(timelineRefs, timelineVisibility, timelineObservers);
      createObserver(valueRefs, valueVisibility, valueObservers);
      createObserver(badgeRefs, badgeVisibility, badgeObservers);

      // Wire tilt to value cards
      Object.keys(valueRefs).forEach((key) => {
        const idx = Number(key);
        if (valueTilts[idx]) {
          valueTilts[idx].tiltRef.value = valueRefs[idx];
        }
      });
    });

    return {
      timeline,
      values,
      githubBadges,
      introTextRef,
      introTextVisible,
      quickInfoRef,
      quickInfoVisible,
      journeyHeadingRef,
      journeyHeadingVisible,
      valuesHeadingRef,
      valuesHeadingVisible,
      badgesHeadingRef,
      badgesHeadingVisible,
      ctaHeadingRef,
      ctaHeadingVisible,
      ctaLinkedInRef,
      ctaGitHubRef,
      timelineRefs,
      timelineVisibility,
      valueRefs,
      valueVisibility,
      badgeRefs,
      badgeVisibility,
    };
  },
});
</script>

<template>
  <div class="bg-white min-h-screen">
    <!-- Header Section -->
    <section class="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-5xl font-bold mb-4">Projects</h1>
        <p class="text-xl text-blue-100">Transforming ideas into impactful solutions</p>
      </div>
    </section>

    <!-- Featured Case Studies -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Case Studies</h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
        </div>

        <div class="space-y-12">
          <div
            v-for="project in caseStudies"
            :key="project.id"
            class="group bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
          >
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
              <!-- Left side - Content -->
              <div>
                <div class="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                  Featured Project
                </div>
                <h3 class="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition">{{ project.title }}</h3>
                <p class="text-gray-700 text-lg mb-8 leading-relaxed">{{ project.description }}</p>

                <!-- Problem-Solution-Results -->
                <div class="space-y-6 mb-8">
                  <div class="border-l-4 border-blue-600 pl-4">
                    <h4 class="font-bold text-gray-900 mb-2">🎯 Problem</h4>
                    <p class="text-gray-600">{{ project.problem }}</p>
                  </div>
                  <div class="border-l-4 border-purple-600 pl-4">
                    <h4 class="font-bold text-gray-900 mb-2">⚙️ Solution</h4>
                    <p class="text-gray-600">{{ project.solution }}</p>
                  </div>
                  <div class="border-l-4 border-green-600 pl-4">
                    <h4 class="font-bold text-gray-900 mb-2">✅ Results</h4>
                    <p class="text-gray-600">{{ project.results }}</p>
                  </div>
                </div>

                <!-- Tech Stack -->
                <div>
                  <h4 class="font-bold text-gray-900 mb-3">Tech Stack</h4>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="tech in project.tech"
                      :key="tech"
                      class="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Right side - Links & Stats -->
              <div class="flex flex-col justify-center">
                <div class="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl p-8">
                  <h4 class="text-lg font-bold mb-6">Project Links</h4>
                  <div class="space-y-4">
                    <a
                      v-if="project.link"
                      :href="project.link"
                      target="_blank"
                      class="flex items-center justify-between p-4 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition"
                    >
                      <span class="font-semibold">View Live Project</span>
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m4-6h-8m4 0V4m0 0L8 8"></path>
                      </svg>
                    </a>
                    <a
                      v-if="project.github"
                      :href="project.github"
                      target="_blank"
                      class="flex items-center justify-between p-4 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition"
                    >
                      <span class="font-semibold">View Source Code</span>
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                      </svg>
                    </a>
                  </div>

                  <div class="mt-8 pt-8 border-t border-white border-opacity-20">
                    <p class="text-sm text-blue-100 mb-3">Impact Metrics</p>
                    <div class="space-y-2 text-sm">
                      <div class="flex justify-between">
                        <span>Performance Gain</span>
                        <span class="font-bold">+40%</span>
                      </div>
                      <div class="flex justify-between">
                        <span>Scalability</span>
                        <span class="font-bold">3x</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Gallery -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Other Projects</h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="project in otherProjects"
            :key="project.id"
            class="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden hover:border-blue-300"
          >
            <!-- Top accent bar -->
            <div class="h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>

            <div class="p-6">
              <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">{{ project.title }}</h3>
              <p class="text-gray-600 text-sm mb-4 line-clamp-3">{{ project.description }}</p>

              <div class="mb-6">
                <div class="flex flex-wrap gap-1">
                  <span
                    v-for="tech in project.tech.slice(0, 3)"
                    :key="tech"
                    class="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium border border-blue-200"
                  >
                    {{ tech }}
                  </span>
                  <span v-if="project.tech.length > 3" class="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                    +{{ project.tech.length - 3 }}
                  </span>
                </div>
              </div>

              <div class="flex gap-3 pt-4 border-t border-gray-200">
                <a
                  v-if="project.link"
                  :href="project.link"
                  target="_blank"
                  class="flex items-center text-blue-600 hover:text-blue-800 text-sm font-semibold gap-1 group/link"
                >
                  Demo
                  <svg class="w-3 h-3 group-hover/link:translate-x-0.5 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
                <a
                  v-if="project.github"
                  :href="project.github"
                  target="_blank"
                  class="flex items-center text-blue-600 hover:text-blue-800 text-sm font-semibold gap-1 group/link"
                >
                  Code
                  <svg class="w-3 h-3 group-hover/link:translate-x-0.5 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
}

interface CaseStudy extends Project {
  problem: string;
  solution: string;
  results: string;
}

export default defineComponent({
  name: "Projects",
  data(): {
    caseStudies: CaseStudy[];
    otherProjects: Project[];
  } {
    return {
      caseStudies: [
        {
          id: 1,
          title: "E-Commerce Platform Redesign",
          description: "Rebuilt a legacy e-commerce platform with modern architecture and improved performance.",
          problem: "Monolithic architecture causing slow deployments and poor scalability with frequent downtime during peak hours.",
          solution: "Migrated to microservices using Spring Boot, containerized with Docker, deployed on AWS ECS with auto-scaling.",
          results: "50% reduction in deployment time, 3x improvement in scalability, 99.9% uptime achieved.",
          tech: ["Java", "Spring Boot", "Docker", "AWS", "PostgreSQL", "React", "Kubernetes"],
          link: "https://example.com",
          github: "https://github.com/example",
        },
        {
          id: 2,
          title: "Real-Time Analytics Dashboard",
          description: "Built a real-time data processing and visualization platform for financial analytics.",
          problem: "Manual data processing causing 24-hour delays in decision-making, poor data insights.",
          solution: "Created real-time pipeline with Node.js, WebSocket integration, MongoDB aggregation, and React frontend.",
          results: "Real-time data insights, 10x faster analysis, 50% reduction in manual work.",
          tech: ["Node.js", "React", "WebSocket", "MongoDB", "Redis", "Docker"],
          github: "https://github.com/example",
        },
      ],
      otherProjects: [
        {
          id: 3,
          title: "Task Management API",
          description: "REST API for task management with user authentication and role-based access control.",
          tech: ["Node.js", "Express", "MongoDB", "JWT", "Docker"],
          github: "https://github.com/example",
        },
        {
          id: 4,
          title: "Weather App",
          description: "Real-time weather application with geolocation and multi-day forecasts.",
          tech: ["React", "TypeScript", "Tailwind CSS", "OpenWeather API", "Axios"],
          link: "https://example.com",
          github: "https://github.com/example",
        },
        {
          id: 5,
          title: "Microservices Infrastructure",
          description: "Kubernetes cluster setup with CI/CD pipeline for automated deployments.",
          tech: ["Kubernetes", "Docker", "Jenkins", "AWS", "Terraform"],
          github: "https://github.com/example",
        },
        {
          id: 6,
          title: "Blog Platform",
          description: "Full-stack blog with content management, user authentication, and SEO optimization.",
          tech: ["Vue.js", "Node.js", "MongoDB", "Tailwind CSS", "JWT"],
          link: "https://example.com",
        },
        {
          id: 7,
          title: "Payment Gateway Integration",
          description: "Secure payment processing system with Stripe integration and webhook handling.",
          tech: ["Java", "Spring Boot", "Stripe API", "PostgreSQL", "React"],
          github: "https://github.com/example",
        },
        {
          id: 8,
          title: "Machine Learning Pipeline",
          description: "Data processing and ML model deployment pipeline with automated training.",
          tech: ["Python", "TensorFlow", "AWS", "Docker", "Jenkins"],
          github: "https://github.com/example",
        },
      ],
    };
  },
});
</script>

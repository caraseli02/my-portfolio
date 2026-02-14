<template>
  <div class="bg-gray-50 min-h-screen py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-12">Projects</h1>

      <!-- Featured Case Studies -->
      <div class="mb-20">
        <h2 class="text-2xl font-bold text-gray-900 mb-8">Case Studies</h2>
        <div
          v-for="project in caseStudies"
          :key="project.id"
          class="bg-white rounded-lg shadow-md p-8 mb-8"
        >
          <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ project.title }}</h3>
          <p class="text-gray-600 mb-6">{{ project.description }}</p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            <div>
              <h4 class="font-semibold text-gray-900 mb-2">Problem</h4>
              <p class="text-gray-600 text-sm">{{ project.problem }}</p>
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 mb-2">Solution</h4>
              <p class="text-gray-600 text-sm">{{ project.solution }}</p>
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 mb-2">Results</h4>
              <p class="text-gray-600 text-sm">{{ project.results }}</p>
            </div>
          </div>

          <div class="mb-6">
            <h4 class="font-semibold text-gray-900 mb-3">Technologies</h4>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <div class="flex gap-4">
            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              class="text-blue-600 hover:text-blue-800 font-semibold"
            >
              View Live →
            </a>
            <a
              v-if="project.github"
              :href="project.github"
              target="_blank"
              class="text-blue-600 hover:text-blue-800 font-semibold"
            >
              GitHub →
            </a>
          </div>
        </div>
      </div>

      <!-- Project Gallery -->
      <div>
        <h2 class="text-2xl font-bold text-gray-900 mb-8">Other Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="project in otherProjects"
            :key="project.id"
            class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
          >
            <h3 class="text-lg font-bold text-gray-900 mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 text-sm mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-1 mb-4">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
              >
                {{ tech }}
              </span>
            </div>
            <div class="flex gap-3">
              <a
                v-if="project.link"
                :href="project.link"
                target="_blank"
                class="text-blue-600 hover:text-blue-800 text-sm font-semibold"
              >
                Demo
              </a>
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                class="text-blue-600 hover:text-blue-800 text-sm font-semibold"
              >
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
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
          problem: "Monolithic architecture causing slow deployments and poor scalability",
          solution: "Migrated to microservices using Spring Boot, containerized with Docker, deployed on AWS ECS",
          results: "50% reduction in deployment time, 3x improvement in scalability",
          tech: ["Java", "Spring Boot", "Docker", "AWS", "PostgreSQL", "React"],
          link: "https://example.com",
          github: "https://github.com/example",
        },
        {
          id: 2,
          title: "Real-Time Analytics Dashboard",
          description: "Built a real-time data processing and visualization platform for financial analytics.",
          problem: "Manual data processing causing delays in decision-making",
          solution: "Created real-time pipeline with Node.js, WebSocket integration, and React frontend",
          results: "Real-time data insights, 10x faster analysis",
          tech: ["Node.js", "React", "WebSocket", "MongoDB", "Redis"],
          github: "https://github.com/example",
        },
      ],
      otherProjects: [
        {
          id: 3,
          title: "Task Management API",
          description: "REST API for task management with user authentication and role-based access.",
          tech: ["Node.js", "Express", "MongoDB", "JWT"],
          github: "https://github.com/example",
        },
        {
          id: 4,
          title: "Weather App",
          description: "Real-time weather application with geolocation and multi-day forecasts.",
          tech: ["React", "TypeScript", "Tailwind CSS", "OpenWeather API"],
          link: "https://example.com",
          github: "https://github.com/example",
        },
        {
          id: 5,
          title: "Microservices Infrastructure",
          description: "Kubernetes cluster setup with CI/CD pipeline for automated deployments.",
          tech: ["Kubernetes", "Docker", "Jenkins", "AWS"],
          github: "https://github.com/example",
        },
        {
          id: 6,
          title: "Blog Platform",
          description: "Full-stack blog with content management, user authentication, and SEO optimization.",
          tech: ["Vue.js", "Node.js", "MongoDB", "Tailwind CSS"],
          link: "https://example.com",
        },
      ],
    };
  },
});
</script>

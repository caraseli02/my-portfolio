<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center mb-16">
        <h1 class="text-5xl font-bold text-gray-900 mb-4">
          Full-Stack Engineer & Cloud Specialist
        </h1>
        <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Building scalable applications with modern technologies. Specialized in cloud architecture, microservices, and full-stack development.
        </p>
        <a
          href="https://linkedin.com/in/vlad"
          target="_blank"
          class="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-lg font-semibold"
        >
          View on LinkedIn
        </a>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div class="text-center p-6 bg-gray-50 rounded-lg">
          <div class="text-4xl font-bold text-blue-600 mb-2">5+</div>
          <p class="text-gray-700">Years of Experience</p>
        </div>
        <div class="text-center p-6 bg-gray-50 rounded-lg">
          <div class="text-4xl font-bold text-blue-600 mb-2">20+</div>
          <p class="text-gray-700">Projects Completed</p>
        </div>
        <div class="text-center p-6 bg-gray-50 rounded-lg">
          <div class="text-4xl font-bold text-blue-600 mb-2">10+</div>
          <p class="text-gray-700">Technologies Mastered</p>
        </div>
      </div>
    </section>

    <!-- Featured Projects Preview -->
    <section class="bg-gray-50 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-12">Featured Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div
            v-for="project in featuredProjects"
            :key="project.id"
            class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
          >
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ project.title }}</h3>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {{ tech }}
              </span>
            </div>
            <router-link
              to="/projects"
              class="text-blue-600 hover:text-blue-800 font-semibold"
            >
              View Project →
            </router-link>
          </div>
        </div>
        <div class="text-center">
          <router-link
            to="/projects"
            class="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
          >
            View All Projects
          </router-link>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-12">Skills & Expertise</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="category in skills" :key="category.name" class="p-6 bg-gray-50 rounded-lg">
            <h3 class="text-xl font-bold text-gray-900 mb-4">{{ category.name }}</h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in category.items"
                :key="skill"
                class="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-700"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface FeaturedProject {
  id: number;
  title: string;
  description: string;
  tech: string[];
}

interface SkillCategory {
  name: string;
  items: string[];
}

export default defineComponent({
  name: "Home",
  data(): {
    featuredProjects: FeaturedProject[];
    skills: SkillCategory[];
  } {
    return {
      featuredProjects: [
        {
          id: 1,
          title: "E-Commerce Platform",
          description: "Full-stack e-commerce solution with microservices architecture and cloud deployment.",
          tech: ["Java", "Spring Boot", "React", "PostgreSQL", "AWS"],
        },
        {
          id: 2,
          title: "Real-Time Analytics Dashboard",
          description: "Real-time data processing and visualization platform with WebSocket integration.",
          tech: ["Node.js", "React", "MongoDB", "Redis", "Docker"],
        },
      ],
      skills: [
        {
          name: "Backend",
          items: ["Java", "Spring Boot", "Node.js", "Python", "REST APIs"],
        },
        {
          name: "Frontend",
          items: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
        },
        {
          name: "Cloud & DevOps",
          items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Git"],
        },
        {
          name: "Databases",
          items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
        },
      ],
    };
  },
});
</script>

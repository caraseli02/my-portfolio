<template>
  <div class="bg-white">
    <!-- Hero Section with Gradient -->
    <section class="relative bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 text-white overflow-hidden py-32">
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-6xl font-bold mb-6 leading-tight">
          Full-Stack Engineer & Cloud Specialist
        </h1>
        <p class="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          Transforming complex technical challenges into elegant solutions. Specialized in cloud architecture, microservices, and scalable applications.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://linkedin.com/in/vlad"
            target="_blank"
            class="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition font-bold text-lg shadow-lg hover:shadow-xl"
          >
            View on LinkedIn
          </a>
          <router-link
            to="/projects"
            class="px-8 py-4 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition font-bold text-lg border-2 border-blue-300 hover:border-white"
          >
            Explore Projects
          </router-link>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 bg-gray-50 border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center p-8">
            <div class="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">5+</div>
            <p class="text-gray-700 font-semibold text-lg">Years of Experience</p>
            <p class="text-gray-600 text-sm mt-2">Building scalable solutions</p>
          </div>
          <div class="text-center p-8">
            <div class="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">20+</div>
            <p class="text-gray-700 font-semibold text-lg">Projects Completed</p>
            <p class="text-gray-600 text-sm mt-2">From concept to production</p>
          </div>
          <div class="text-center p-8">
            <div class="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">10+</div>
            <p class="text-gray-700 font-semibold text-lg">Technologies Mastered</p>
            <p class="text-gray-600 text-sm mt-2">Modern tech stack expertise</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects Section -->
    <section class="py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Featured Work</h2>
          <p class="text-xl text-gray-600">Showcasing recent projects and case studies</p>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div
            v-for="project in featuredProjects"
            :key="project.id"
            class="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
          >
            <div class="bg-gradient-to-br from-blue-500 to-purple-600 h-40 relative overflow-hidden">
              <div class="absolute inset-0 opacity-20 flex items-center justify-center">
                <div class="text-6xl text-white opacity-30">{{ project.id }}</div>
              </div>
            </div>
            <div class="p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">{{ project.title }}</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span
                  v-for="tech in project.tech"
                  :key="tech"
                  class="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200"
                >
                  {{ tech }}
                </span>
              </div>
              <router-link
                to="/projects"
                class="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold group/link"
              >
                View Project
                <svg class="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </router-link>
            </div>
          </div>
        </div>

        <div class="text-center">
          <router-link
            to="/projects"
            class="inline-block px-10 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition font-bold text-lg"
          >
            View All Projects
          </router-link>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p class="text-xl text-gray-300">Comprehensive tech stack across full-stack development</p>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="category in skills" :key="category.name" class="group">
            <div class="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-6 h-full hover:shadow-xl transition">
              <h3 class="text-xl font-bold mb-6 flex items-center">
                <span class="w-2 h-2 bg-white rounded-full mr-3"></span>
                {{ category.name }}
              </h3>
              <div class="space-y-3">
                <div
                  v-for="skill in category.items"
                  :key="skill"
                  class="flex items-center text-gray-100 group-hover:text-white transition"
                >
                  <span class="w-1.5 h-1.5 bg-white rounded-full mr-3 opacity-75"></span>
                  {{ skill }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl font-bold mb-6">Ready to collaborate?</h2>
        <p class="text-xl text-blue-100 mb-8">Let's build something amazing together</p>
        <router-link
          to="/about"
          class="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition font-bold text-lg"
        >
          Get in Touch
        </router-link>
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
          description: "Full-stack e-commerce solution with microservices architecture, cloud deployment on AWS, and real-time inventory management.",
          tech: ["Java", "Spring Boot", "React", "PostgreSQL", "AWS"],
        },
        {
          id: 2,
          title: "Real-Time Analytics Dashboard",
          description: "Real-time data processing and visualization platform with WebSocket integration and advanced filtering capabilities.",
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

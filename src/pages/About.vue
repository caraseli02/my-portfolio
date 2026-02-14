<template>
  <div class="bg-white min-h-screen py-20">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- About Header -->
      <div class="mb-16">
        <h1 class="text-4xl font-bold text-gray-900 mb-6">About Me</h1>
        <p class="text-lg text-gray-600 leading-relaxed mb-6">
          I'm a full-stack engineer with 5+ years of experience building scalable applications and cloud infrastructure.
          I'm passionate about writing clean, efficient code and solving complex technical challenges.
        </p>
      </div>

      <!-- Professional Journey -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-gray-900 mb-8">Professional Journey</h2>
        <div class="space-y-8">
          <div class="border-l-4 border-blue-600 pl-6">
            <h3 class="text-xl font-bold text-gray-900">Senior Full-Stack Engineer</h3>
            <p class="text-gray-600">Company Name • 2023 - Present</p>
            <p class="text-gray-700 mt-3">
              Led development of microservices architecture, mentored junior developers, and architected cloud solutions on AWS.
            </p>
          </div>
          <div class="border-l-4 border-blue-400 pl-6">
            <h3 class="text-xl font-bold text-gray-900">Full-Stack Developer</h3>
            <p class="text-gray-600">Company Name • 2020 - 2023</p>
            <p class="text-gray-700 mt-3">
              Developed and maintained full-stack applications using Java/Spring Boot and React, improved system performance by 40%.
            </p>
          </div>
          <div class="border-l-4 border-gray-300 pl-6">
            <h3 class="text-xl font-bold text-gray-900">Junior Developer</h3>
            <p class="text-gray-600">Company Name • 2019 - 2020</p>
            <p class="text-gray-700 mt-3">
              Started career building web applications and learning full-stack development principles.
            </p>
          </div>
        </div>
      </section>

      <!-- Education & Certifications -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-gray-900 mb-8">Education & Certifications</h2>
        <div class="space-y-6">
          <div class="p-6 bg-gray-50 rounded-lg">
            <h3 class="font-bold text-gray-900">Bachelor of Science in Computer Science</h3>
            <p class="text-gray-600">University Name • 2019</p>
          </div>
          <div class="p-6 bg-gray-50 rounded-lg">
            <h3 class="font-bold text-gray-900">AWS Certified Solutions Architect</h3>
            <p class="text-gray-600">Amazon Web Services • 2023</p>
          </div>
          <div class="p-6 bg-gray-50 rounded-lg">
            <h3 class="font-bold text-gray-900">Kubernetes Application Developer (CKAD)</h3>
            <p class="text-gray-600">Cloud Native Computing Foundation • 2022</p>
          </div>
        </div>
      </section>

      <!-- Approach to Work -->
      <section class="mb-16 p-8 bg-blue-50 rounded-lg">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">My Approach</h2>
        <ul class="space-y-4 text-gray-700">
          <li class="flex items-start gap-3">
            <span class="text-blue-600 font-bold mt-1">•</span>
            <span><strong>Clean Code:</strong> Writing maintainable, well-documented code that's easy for teams to understand and extend</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-blue-600 font-bold mt-1">•</span>
            <span><strong>Scalability:</strong> Designing systems that can grow with business needs while maintaining performance</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-blue-600 font-bold mt-1">•</span>
            <span><strong>Collaboration:</strong> Working closely with teams and stakeholders to deliver solutions that matter</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-blue-600 font-bold mt-1">•</span>
            <span><strong>Continuous Learning:</strong> Staying current with technology trends and best practices</span>
          </li>
        </ul>
      </section>

      <!-- Call to Action -->
      <section class="text-center">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Let's Work Together</h2>
        <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
          I'm always interested in discussing new projects and opportunities. Feel free to reach out!
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://linkedin.com/in/vlad"
            target="_blank"
            class="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Connect on LinkedIn
          </a>
          <a
            href="mailto:vlad@example.com"
            class="inline-block px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition font-semibold"
          >
            Send Email
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "About",
});
</script>

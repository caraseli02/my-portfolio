<template>
  <div class="bg-white">
    <!-- Header Section -->
    <section class="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-5xl font-bold mb-4">About Me</h1>
        <p class="text-xl text-blue-100">Full-stack engineer with 5+ years of experience building scalable solutions</p>
      </div>
    </section>

    <!-- Introduction -->
    <section class="py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div class="md:col-span-2">
            <p class="text-xl text-gray-700 leading-relaxed mb-6">
              I'm a passionate full-stack engineer dedicated to building scalable, elegant solutions to complex technical problems.
              With 5+ years of professional experience, I've worked across the entire technology stack—from backend microservices
              to responsive frontends—and everything in between.
            </p>
            <p class="text-lg text-gray-600 leading-relaxed">
              My journey in tech has been defined by continuous learning, a commitment to clean code, and a genuine passion
              for creating software that makes a difference. I thrive in collaborative environments where I can mentor junior
              developers and contribute to architectural decisions.
            </p>
          </div>
          <div class="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-8 text-white h-fit">
            <div class="text-4xl font-bold mb-2">5+</div>
            <p class="text-blue-100 mb-6">Years of Experience</p>
            <div class="text-lg font-bold mb-2">20+</div>
            <p class="text-blue-100 mb-6">Projects Delivered</p>
            <div class="text-lg font-bold mb-2">10+</div>
            <p class="text-blue-100">Technologies</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Professional Journey -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Professional Journey</h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
        </div>

        <div class="space-y-8">
          <!-- Timeline item 1 -->
          <div class="relative">
            <div class="flex gap-8">
              <div class="flex flex-col items-center gap-4">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div class="w-1 flex-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
              </div>
              <div class="pb-12">
                <h3 class="text-2xl font-bold text-gray-900">Senior Full-Stack Engineer</h3>
                <p class="text-blue-600 font-semibold mb-2">Company Name • 2023 - Present</p>
                <p class="text-gray-700 leading-relaxed mb-4">
                  Led development of microservices architecture, mentored junior developers, and architected cloud solutions on AWS.
                  Improved system performance by 40% and reduced deployment time by 50%.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Leadership</span>
                  <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Architecture</span>
                  <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Cloud</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Timeline item 2 -->
          <div class="relative">
            <div class="flex gap-8">
              <div class="flex flex-col items-center gap-4">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div class="w-1 flex-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
              </div>
              <div class="pb-12">
                <h3 class="text-2xl font-bold text-gray-900">Full-Stack Developer</h3>
                <p class="text-blue-600 font-semibold mb-2">Company Name • 2020 - 2023</p>
                <p class="text-gray-700 leading-relaxed mb-4">
                  Developed and maintained full-stack applications using Java/Spring Boot and React. Improved system performance
                  by 40% through optimization and refactoring. Built 10+ production applications serving thousands of users.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Backend</span>
                  <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Frontend</span>
                  <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Databases</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Timeline item 3 -->
          <div class="relative">
            <div class="flex gap-8">
              <div class="flex flex-col items-center">
                <div class="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900">Junior Developer</h3>
                <p class="text-blue-600 font-semibold mb-2">Company Name • 2019 - 2020</p>
                <p class="text-gray-700 leading-relaxed">
                  Started career building web applications and learning full-stack development principles. Contributed to 5+
                  projects across different industries and technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Education & Certifications -->
    <section class="py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Education Card 1 -->
          <div class="group bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200 p-8 hover:border-blue-400 hover:shadow-lg transition">
            <div class="flex items-start gap-4 mb-4">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white text-2xl">
                🎓
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900">Bachelor of Science</h3>
                <p class="text-blue-600 font-semibold">Computer Science</p>
              </div>
            </div>
            <p class="text-gray-700 mb-2">University Name</p>
            <p class="text-gray-600 text-sm">Graduated 2019</p>
          </div>

          <!-- Certification Card 1 -->
          <div class="group bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200 p-8 hover:border-blue-400 hover:shadow-lg transition">
            <div class="flex items-start gap-4 mb-4">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white text-2xl">
                ☁️
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900">AWS Certified</h3>
                <p class="text-blue-600 font-semibold">Solutions Architect</p>
              </div>
            </div>
            <p class="text-gray-700 mb-2">Amazon Web Services</p>
            <p class="text-gray-600 text-sm">Certified 2023</p>
          </div>

          <!-- Certification Card 2 -->
          <div class="group bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200 p-8 hover:border-blue-400 hover:shadow-lg transition">
            <div class="flex items-start gap-4 mb-4">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white text-2xl">
                🐳
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900">Kubernetes Certified</h3>
                <p class="text-blue-600 font-semibold">Application Developer</p>
              </div>
            </div>
            <p class="text-gray-700 mb-2">Cloud Native Computing Foundation</p>
            <p class="text-gray-600 text-sm">Certified 2022</p>
          </div>

          <!-- Certification Card 3 -->
          <div class="group bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200 p-8 hover:border-blue-400 hover:shadow-lg transition">
            <div class="flex items-start gap-4 mb-4">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white text-2xl">
                📜
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900">Oracle Certified</h3>
                <p class="text-blue-600 font-semibold">Java Programmer</p>
              </div>
            </div>
            <p class="text-gray-700 mb-2">Oracle Corporation</p>
            <p class="text-gray-600 text-sm">Certified 2021</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Approach to Work -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">My Approach</h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Approach Card 1 -->
          <div class="bg-white rounded-xl border-l-4 border-blue-600 p-8 shadow-md hover:shadow-lg transition">
            <h3 class="text-2xl font-bold text-gray-900 mb-3">🎯 Clean Code</h3>
            <p class="text-gray-700 leading-relaxed">
              Writing maintainable, well-documented code that's easy for teams to understand, review, and extend.
              I follow SOLID principles and industry best practices.
            </p>
          </div>

          <!-- Approach Card 2 -->
          <div class="bg-white rounded-xl border-l-4 border-purple-600 p-8 shadow-md hover:shadow-lg transition">
            <h3 class="text-2xl font-bold text-gray-900 mb-3">📈 Scalability</h3>
            <p class="text-gray-700 leading-relaxed">
              Designing systems that can grow with business needs while maintaining performance and reliability.
              Building for today and tomorrow.
            </p>
          </div>

          <!-- Approach Card 3 -->
          <div class="bg-white rounded-xl border-l-4 border-blue-600 p-8 shadow-md hover:shadow-lg transition">
            <h3 class="text-2xl font-bold text-gray-900 mb-3">👥 Collaboration</h3>
            <p class="text-gray-700 leading-relaxed">
              Working closely with teams and stakeholders to deliver solutions that matter. Strong communication
              and problem-solving skills.
            </p>
          </div>

          <!-- Approach Card 4 -->
          <div class="bg-white rounded-xl border-l-4 border-purple-600 p-8 shadow-md hover:shadow-lg transition">
            <h3 class="text-2xl font-bold text-gray-900 mb-3">📚 Continuous Learning</h3>
            <p class="text-gray-700 leading-relaxed">
              Staying current with technology trends and best practices. Dedicated to personal growth and
              keeping skills sharp.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl font-bold mb-6">Let's Build Something Great</h2>
        <p class="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          I'm always interested in discussing new projects, innovative ideas, and collaboration opportunities.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://linkedin.com/in/vlad"
            target="_blank"
            class="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition font-bold text-lg shadow-lg"
          >
            Connect on LinkedIn
          </a>
          <a
            href="mailto:vlad@example.com"
            class="inline-block px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition font-bold text-lg"
          >
            Send Email
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "About",
});
</script>

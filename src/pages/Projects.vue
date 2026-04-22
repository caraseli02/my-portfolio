<template>
  <div class="min-h-screen bg-cream-100 pt-28 dark:bg-charcoal md:pt-32">
    <div class="mx-auto max-w-7xl px-6 pb-20 md:px-10 lg:px-12">
      <section class="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_20rem] lg:items-end">
        <div>
          <p class="mono-label mb-4">project index</p>
          <h1
            class="max-w-5xl text-[3.2rem] leading-[0.95] font-display text-charcoal dark:text-cobalt-100 sm:text-[4.2rem] md:text-[5.2rem]"
          >
            The wider body of work behind the headline case studies.
          </h1>
          <p
            class="mt-6 max-w-3xl text-lg leading-relaxed text-charcoal-200 dark:text-cobalt-100/86 md:text-xl"
          >
            Featured projects get the full narrative treatment. Everything else here is arranged for
            fast scanning: what it is, what stack it uses, and where to inspect the code.
          </p>
        </div>

        <aside class="rule-panel p-6">
          <p class="mono-label mb-4">how to read this page</p>
          <div class="space-y-4 text-sm leading-relaxed text-cobalt-600 dark:text-cobalt-100/82">
            <p>Top section = deeper proof.</p>
            <p>Lower section = supporting repos, experiments, and utility builds.</p>
            <p>Use <span class="font-mono">⌘K</span> to jump between pages or case studies.</p>
          </div>
        </aside>
      </section>

      <section class="mt-10 data-strip md:grid-cols-4">
        <div>
          <p class="mono-label">featured</p>
          <p class="mt-2 text-xl font-semibold text-charcoal dark:text-cobalt-100">
            3 case studies
          </p>
        </div>
        <div>
          <p class="mono-label">supporting</p>
          <p class="mt-2 text-xl font-semibold text-charcoal dark:text-cobalt-100">
            8 additional repos
          </p>
        </div>
        <div>
          <p class="mono-label">domains</p>
          <p class="mt-2 text-xl font-semibold text-charcoal dark:text-cobalt-100">
            Commerce / tools / UI kits
          </p>
        </div>
        <div>
          <p class="mono-label">signal</p>
          <p class="mt-2 text-xl font-semibold text-charcoal dark:text-cobalt-100">
            Depth over decoration
          </p>
        </div>
      </section>

      <section class="mt-16">
        <div class="mb-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-end">
          <div>
            <p class="mono-label mb-3">featured work</p>
            <h2 class="section-heading">Three projects worth the deeper click.</h2>
          </div>
          <p class="section-subheading">
            These are the strongest proof pieces: more technical depth, clearer product stakes, and
            enough detail to show how the decisions were made.
          </p>
        </div>

        <div class="space-y-5">
          <CaseStudyListItem
            v-for="(project, index) in featuredProjects"
            :key="project.id"
            :number="index + 1"
            :reverse="index % 2 === 1"
            :title="project.title"
            :slug="project.caseStudy!.slug"
            :tags="[project.category, ...project.tech.slice(0, 3)]"
            :image="project.caseStudy?.image || ''"
            :description="project.description"
            :github="project.github"
          />
        </div>
      </section>

      <section class="mt-16">
        <div class="mb-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-end">
          <div>
            <p class="mono-label mb-3">supporting work</p>
            <h2 class="section-heading">More builds. Faster scan.</h2>
          </div>
          <p class="section-subheading">
            Smaller repos still matter. They show repetition, curiosity, and range — especially when
            the problem is practical rather than flashy.
          </p>
        </div>

        <div class="overflow-hidden border border-cobalt-500/14">
          <div
            class="hidden grid-cols-[minmax(0,1.2fr)_minmax(0,1.8fr)_auto_auto] gap-px bg-cobalt-500/10 text-[11px] font-mono uppercase tracking-[0.18em] text-cobalt-500/72 dark:bg-cobalt-300/10 dark:text-cobalt-100/72 md:grid"
          >
            <div class="bg-cream-50 px-4 py-3 dark:bg-charcoal-50">project</div>
            <div class="bg-cream-50 px-4 py-3 dark:bg-charcoal-50">summary</div>
            <div class="bg-cream-50 px-4 py-3 dark:bg-charcoal-50">stack</div>
            <div class="bg-cream-50 px-4 py-3 dark:bg-charcoal-50">link</div>
          </div>

          <article
            v-for="project in otherProjects"
            :key="project.id"
            class="grid gap-px border-t border-cobalt-500/10 bg-cobalt-500/10 first:border-t-0 dark:border-cobalt-300/10 dark:bg-cobalt-300/10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.8fr)_auto_auto]"
          >
            <div class="bg-cream-50 px-4 py-4 dark:bg-charcoal-50">
              <p class="text-lg font-semibold text-charcoal dark:text-cobalt-100">
                {{ project.title }}
              </p>
            </div>
            <div class="bg-cream-50 px-4 py-4 dark:bg-charcoal-50">
              <p class="text-sm leading-relaxed text-cobalt-600 dark:text-cobalt-100/82">
                {{ project.description }}
              </p>
            </div>
            <div class="bg-cream-50 px-4 py-4 dark:bg-charcoal-50">
              <div class="flex flex-wrap gap-2 md:max-w-xs md:justify-end">
                <span v-for="tech in project.tech.slice(0, 3)" :key="tech" class="command-chip">
                  {{ tech }}
                </span>
              </div>
            </div>
            <div class="bg-cream-50 px-4 py-4 dark:bg-charcoal-50">
              <a
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                class="ink-link whitespace-nowrap"
              >
                source ↗
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from "../components/layout/Footer.vue";
import CaseStudyListItem from "../components/case-study/CaseStudyListItem.vue";
import { featuredProjects, otherProjects } from "../data/projects";
</script>

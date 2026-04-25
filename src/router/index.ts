import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { getProjectBySlug } from "../data/projects";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("../pages/Home.vue"),
    meta: {
      title: "Vlad Caraseli | Frontend Engineer for Product Teams",
      description:
        "Frontend engineer building polished product interfaces, design systems, and high-trust web experiences with Vue, React, TypeScript, and Nuxt.",
    },
  },
  {
    path: "/projects/:slug",
    name: "case-study",
    component: () => import("../pages/CaseStudy.vue"),
    props: true,
    meta: {
      title: "Case Study | Vlad Caraseli",
      description:
        "Deep dives into frontend engineering, interface architecture, and product-facing UI systems.",
    },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../pages/About.vue"),
    meta: {
      title: "About Vlad Caraseli | Frontend Engineer",
      description:
        "Learn how Vlad Caraseli approaches product UI, design systems, and frontend engineering from Palma de Mallorca.",
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../pages/Contact.vue"),
    meta: {
      title: "Contact Vlad Caraseli | Product UI & Frontend",
      description:
        "Get in touch with Vlad Caraseli for frontend builds, design systems, and product-facing interface work.",
    },
  },
  {
    path: "/extra",
    name: "extra",
    component: () => import("../pages/Extra.vue"),
    meta: {
      title: "Extra | Vlad Caraseli",
      description: "Additional experiments, side projects, and interface explorations.",
    },
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("../pages/Projects.vue"),
    meta: {
      title: "Projects | Vlad Caraseli",
      description:
        "Full index of shipped projects: case-studied product work, component libraries, starters, and experiments across Vue, React, and TypeScript.",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("../pages/NotFound.vue"),
    meta: {
      title: "404 | Vlad Caraseli",
      description: "Page not found.",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition;

    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }

    // Scroll is handled by App.vue afterEach to avoid jarring jump before transition completes
    return false;
  },
});

const ensureMeta = (attr: string, val: string): HTMLMetaElement => {
  const selector = attr === "name" ? `meta[name="${val}"]` : `meta[property="${val}"]`;
  let tag = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, val);
    document.head.appendChild(tag);
  }
  return tag;
};

const ensureMetaDescription = (): HTMLMetaElement => ensureMeta("name", "description");

router.beforeEach((to, _from, next) => {
  let title = to.meta.title as string | undefined;
  let description = to.meta.description as string | undefined;

  if (to.name === "case-study" && typeof to.params.slug === "string") {
    const project = getProjectBySlug(to.params.slug);

    if (project?.caseStudy) {
      title = `${project.title} Case Study | Vlad Caraseli`;
      description = `${project.description} Built with ${project.tech.slice(0, 3).join(", ")} and documented as a product-focused frontend case study.`;
    }
  }

  if (title) {
    document.title = title;
    ensureMeta("property", "og:title").content = title;
    ensureMeta("name", "twitter:title").content = title;
  }

  if (description) {
    ensureMetaDescription().content = description;
    ensureMeta("property", "og:description").content = description;
    ensureMeta("name", "twitter:description").content = description;
  }

  ensureMeta("property", "og:url").content = `https://vladcaraseli.com${to.path}`;

  next();
});

export default router;

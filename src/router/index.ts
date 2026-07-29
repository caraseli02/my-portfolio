import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { getProjectBySlug } from "../data/projects";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("../pages/Home.vue"),
    meta: {
      title: "Vlad Caraseli | Frontend Developer",
      description:
        "Frontend developer with 4+ years experience — Vue, Nuxt, React, TypeScript, and AI-assisted development. Based in Palma de Mallorca.",
    },
  },
  {
    path: "/projects",
    redirect: "/#work",
  },
  {
    path: "/projects/:slug",
    name: "case-study",
    component: () => import("../pages/CaseStudy.vue"),
    props: true,
    meta: {
      title: "Work | Vlad Caraseli",
      description: "Visual work sample aligned to Vlad Caraseli's CV experience.",
    },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../pages/About.vue"),
    meta: {
      title: "About Vlad Caraseli | Frontend Developer",
      description:
        "Frontend Developer based in Palma de Mallorca — Vue, Nuxt, React, TypeScript. Experience at Hotelverse, Nezo Hub, and client products.",
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../pages/Contact.vue"),
    meta: {
      title: "Contact Vlad Caraseli",
      description: "Contact Vlad Caraseli for frontend roles — LinkedIn, email, or phone.",
    },
  },
  {
    path: "/extra",
    redirect: "/",
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
      return { el: to.hash, behavior: "smooth" };
    }
    return { top: 0 };
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
      title = `${project.title} | Vlad Caraseli`;
      description = `${project.description} Built with ${project.tech.slice(0, 3).join(", ")}.`;
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

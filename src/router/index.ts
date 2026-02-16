import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { 
    path: '/', 
    name: 'home', 
    component: () => import('../pages/Home.vue'),
    meta: { 
      title: 'Vlad Caraseli | Vue.js Developer',
      description: 'Vue.js web developer based in Palma de Mallorca, building modern web applications with Vue 3, TypeScript, and Tailwind CSS.'
    }
  },
  {
    path: '/projects/:slug',
    name: 'case-study',
    component: () => import('../pages/CaseStudy.vue'),
    props: true,
    meta: {
      title: 'Case Study | Vlad Caraseli',
      description: 'Detailed case study of a web development project.'
    }
  },
  { 
    path: '/about', 
    name: 'about', 
    component: () => import('../pages/About.vue'),
    meta: {
      title: 'About | Vlad Caraseli',
      description: 'Learn more about Vlad Caraseli, a Vue.js developer based in Palma de Mallorca.'
    }
  },
  { 
    path: '/contact', 
    name: 'contact', 
    component: () => import('../pages/Contact.vue'),
    meta: {
      title: 'Contact | Vlad Caraseli',
      description: 'Get in touch with Vlad Caraseli for web development projects.'
    }
  },
  { 
    path: '/extra', 
    name: 'extra',
    component: () => import('../pages/Extra.vue'),
    meta: {
      title: 'Extra | Vlad Caraseli',
      description: 'Additional projects and experiments.'
    }
  },
  // Redirect old /projects route to home with anchor
  { 
    path: '/projects', 
    redirect: { name: 'home', hash: '#case-studies' } 
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    
    // Handle anchor links
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    
    return { top: 0, behavior: 'smooth' }
  },
})

// Update document title based on route meta
router.beforeEach((to, _from, next) => {
  const title = to.meta.title as string | undefined
  if (title) {
    document.title = title
  }
  next()
})

export default router

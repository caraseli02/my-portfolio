import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
import CaseStudy from '../pages/CaseStudy.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  {
    path: '/projects/:slug',
    name: 'case-study',
    component: CaseStudy,
    props: true,
  },
  { path: '/about', name: 'about', component: About },
  { path: '/contact', name: 'contact', component: Contact },
  { 
    path: '/extra', 
    name: 'extra',
    component: () => import('../pages/Extra.vue') 
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

export default router

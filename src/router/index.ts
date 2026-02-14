import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Projects from '../pages/Projects.vue'
import About from '../pages/About.vue'
import CaseStudy from '../pages/CaseStudy.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  {
    path: '/projects/:slug',
    name: 'case-study',
    component: CaseStudy,
    props: true,
  },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  },
})

export default router

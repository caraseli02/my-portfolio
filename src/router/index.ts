import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Projects from '../pages/Projects.vue'
import About from '../pages/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

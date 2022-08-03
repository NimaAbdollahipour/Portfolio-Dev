import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectView.vue')
    },
    {
      path: '/designs',
      name: 'designs',
      component: () => import('../views/DesignView.vue')
    },
    {
      path: '/recommended',
      name: 'recommended',
      component: () => import('../views/RecommendedView.vue')
    }
  ]
})

export default router

import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/shen-sha/:id',
      name: 'ShenSha',
      component: () => import('@/views/calendar/ShenSha.vue')
    },
    {
      path: '/solar-time',
      name: 'SolarTime',
      component: () => import('@/views/SolarTime.vue')
    }
  ]
})

export default router

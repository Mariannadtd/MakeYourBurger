import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/OrderView.vue')
    },
    {
      path: '/privicy',
      name: 'privicy',
      component: () => import('../views/ThePrivicyPolicy.vue')
    },
    {
      path: '/terms',
      name: 'terms',
      component: () => import('../views/TheTermsAndConditions.vue')
    }
  ]
})

export default router

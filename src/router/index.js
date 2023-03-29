// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '@/views/PageHome.vue'),
  },
  {
    path: '/color',
    name: 'Color',
    component: () => import('@/views/PageColor.vue'),
  },
  {
    path: '/donation',
    name: 'Donation',
    component: () => import('@/views/PageDonation.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

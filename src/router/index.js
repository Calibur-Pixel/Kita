// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: '首页',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '@/views/PageHome.vue'),
  },
  {
    path: '/color',
    name: '颜色',
    component: () => import('@/views/PageColor.vue'),
  },
  {
    path: '/donation',
    name: '捐赠',
    component: () => import('@/views/PageDonation.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

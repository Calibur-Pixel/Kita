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
    meta: {
      title: 'Calibur Pixel - Kawaii Forever!'
    },
  },
  {
    path: '/color',
    name: '颜色代码',
    component: () => import('@/views/PageColor.vue'),
    meta: {
      title: '颜色代码 - Calibur Pixel - Kawaii Forever!'
    },
  },
  {
    path: '/donation',
    name: '捐赠',
    component: () => import('@/views/PageDonation.vue'),
    meta: {
      title: '捐赠 - Calibur Pixel - Kawaii Forever!'
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  // Get the page title from the route meta data that we have defined
  // See further down below for how we setup this data
  const title = to.meta.title
  // If the route has a title, set it as the page title of the document/page
  if (title) {
    document.title = title
  }
  // Continue resolving the route
  next()
})

export default router

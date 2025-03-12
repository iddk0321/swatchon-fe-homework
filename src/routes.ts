import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/components/views/ViewHome.vue'),
  },
  {
    path: '/qualities',
    component: () => import('@/components/views/qualities/ViewQualities.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
import { createRouter, createWebHistory } from 'vue-router'
import LinktoneIndex from '../views/LinktoneIndex.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/linktone',
      name: 'LinktoneIndex',
      component: LinktoneIndex,
    }
  ]
})

export default router

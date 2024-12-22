import { createRouter, createWebHistory } from 'vue-router'
import LinktoneIndex from '../views/LinktoneIndex.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LinktoneIndex',
      component: LinktoneIndex,
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BarView from '../views/BarView.vue'
import DataPathView from '../views/DataPathView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/Data',
      name: 'Data',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PieView.vue'),
    },
    {
      path: '/bar',
      name: 'BarView',
      component: BarView,
    },
    {
      path: '/data/:leading_cause',
      name: 'DataPath',
      component: DataPathView,
    },
  ],
})

export default router

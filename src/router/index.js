import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage';
import TestPage from '@/pages/TestPage';

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage,
  },
  {
    path: '/test',
    name: 'test',
    component: TestPage,
    meta: { transition: 'slide-right' },
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  }
})

export default router

import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue'),
  },
  {
    path: '/home',
    redirect: '/',
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: () => import('../pages/FAQ.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../pages/About.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
import { createRouter, createWebHashHistory } from 'vue-router';
import ProfilePage from '@/pages/ProfilePage/ProfilePage.vue';

const routes = [
  { path: '/', name: 'profile', component: ProfilePage },
  { path: '/chat', name: 'chat', component: () => import('@/pages/ChatPage.vue') },
  { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

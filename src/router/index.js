import { createWebHashHistory, createRouter } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/:pathMatch(.*)*',
    component: Home,
  },
];

const router = createRouter({
  mode: 'history',
  history: createWebHashHistory(),
  routes,
});

export default router;

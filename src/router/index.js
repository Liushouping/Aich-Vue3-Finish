import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

import Index from '/src/components/Index.vue';

const routes = [
	{
    path: '/',
    name: 'Index',
    component: Index,
  },
  {
    path: '/:domain(.*)*',
    redirect: '/'
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
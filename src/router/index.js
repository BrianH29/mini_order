import { createRouter, createWebHistory } from 'vue-router';
import { useCommon } from '@/stores/common.js';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/main',
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('@/views/index.vue'),
    },
    {
      path: '/orderhistory',
      name: 'orderHistory',
      component: () => import('@/views/orderHistoryList.vue'),
    },
    {
      path: '/billpage',
      name: 'billPage',
      component: () => import('@/views/billPage.vue'),
    },
    {
      path: '/menuDetail',
      name: 'menuDetail',
      component: () => import('@/views/menu.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const commonStore = useCommon();

  to.path === '/main'
    ? commonStore.setFooterShow(true)
    : commonStore.setFooterShow(false);

  next();
});

export default router;

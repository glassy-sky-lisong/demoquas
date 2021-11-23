import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '',
        component: () => import('pages/Index.vue'),
        children: [
          { path: '/test1', component: () => import('pages/Test/test1.vue') },
          { path: '/test2', component: () => import('pages/Test/test2.vue') },
          { path: '/test3', component: () => import('pages/Test/test3.vue') },
        ]
      },
      {
        path: '/article',
        component: () => import('pages/Article.vue')
      }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;

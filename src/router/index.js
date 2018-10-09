import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/auth/Login.vue';
import Layout from '@/views/layouts/Layout.vue';

import components from './modules/components';
import widgets from './modules/widgets';

Vue.use(Router);

const View = Vue.component('temp', {
  template: '<router-view></router-view>',
});

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '',
      name: 'Layout',
      component: Layout,
      redirect: { name: 'Index' },
      children: [
        {
          path: 'index',
          name: 'Index',
          component: View,
          redirect: { name: 'Dashboard' },
          meta: {
            hidden: false,
          },
          children: [
            {
              path: '/dashboard',
              name: 'Dashboard',
              component: () => import('@/views/dashboard/Index.vue'),
              meta: {
                icon: 'dashboard',
              },
            },
            components,
            widgets,
          ],
        },
        {
          path: 'admin',
          name: 'Admin',
          component: () => import('@/views/admin/Homepage.vue'),
          meta: {},
        },
      ],
    },
    {
      path: '/403',
      meta: {
        hidden: true,
      },
      // redirect: { name: 'Index' },
      component: Login,
    },
    {
      path: '*',
      redirect: { name: 'Index' },
    },
  ],
});

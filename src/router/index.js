import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/auth/TheLogin.vue';
import Layout from '@/views/layouts/AppLayout.vue';
import LayoutWithoutSidebar from '@/views/layouts/AppLayoutWithoutSidebar.vue';

import components from './modules/components';
import widgets from './modules/widgets';
import uiComponents from './modules/ui-components';
import tables from './modules/tables';
import charts from './modules/charts';
import excel from './modules/excel';

Vue.use(Router);

/**
* TIPS:
* meta: {
*   hidden: false,    // If `hidden:true` will not appear in the navigation bar or sidebar(default is false)
*   auth: [],         // It will control the page roles (you can set multiple roles)
*   icon: 'home',     // Icon will appear in the navigation bar or sidebar
*   hasMulSub: false, // It has multiple children
* }
*/
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        hidden: true,
      },
    },
    {
      path: '/',
      redirect: { name: 'Dashboard' },
      meta: {
        hidden: true,
      },
    },
    {
      path: '/index',
      name: 'Index',
      component: Layout,
      redirect: { name: 'Dashboard' },
      meta: {
        hidden: false,
        hasMulSub: false,
      },
      children: [
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: () => import('@/views/dashboard/TheIndex.vue'),
          meta: {
            icon: 'dashboard',
          },
        },
        components,
        widgets,
        uiComponents,
        tables,
        charts,
        excel,
      ],
    },
    {
      path: '/admin',
      component: LayoutWithoutSidebar,
      redirect: { name: 'Admin' },
      children: [
        {
          path: '/admin',
          name: 'Admin',
          component: () => import('@/views/admin/VHomepage.vue'),
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
      path: '/404',
      meta: {
        hidden: true,
      },
      component: () => import('@/views/error-pages/App404.vue'),
    },
    {
      path: '*',
      redirect: '/404',
      meta: {
        hidden: true,
      },
    },
  ],
});

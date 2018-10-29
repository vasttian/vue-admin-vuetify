const routes = {
  path: '/ui-components',
  name: 'UIComponents',
  component: {
    template: '<router-view></router-view>',
  },
  meta: {
    hasMulSub: true,
    hidden: false,
    icon: 'view_module',
  },
  children: [
    {
      path: 'alerts',
      name: 'Alerts',
      component: () => import('@/views/ui-components/Alerts.vue'),
      meta: {
      },
    },
    {
      path: 'avatars',
      name: 'Avatars',
      component: () => import('@/views/ui-components/Avatars.vue'),
      meta: {
      },
    },
    {
      path: 'badges',
      name: 'Badges',
      component: () => import('@/views/ui-components/Badges.vue'),
      meta: {
      },
    },
    {
      path: 'bottom-navigation',
      name: 'BottomNavigation',
      component: () => import('@/views/ui-components/BottomNavigation.vue'),
      meta: {
      },
    },
    {
      path: 'bottom-sheets',
      name: 'BottomSheets',
      component: () => import('@/views/ui-components/BottomSheets.vue'),
      meta: {
      },
    },
    {
      path: 'breadcrumbs',
      name: 'Breadcrumbs',
      component: () => import('@/views/ui-components/Breadcrumbs.vue'),
      meta: {
      },
    },
    {
      path: 'buttons',
      name: 'Buttons',
      component: () => import('@/views/ui-components/Buttons.vue'),
      meta: {
      },
    },
    {
      path: 'cards',
      name: 'Cards',
      component: () => import('@/views/ui-components/Cards.vue'),
      meta: {
      },
    },
    {
      path: 'carousels',
      name: 'Carousels',
      component: () => import('@/views/ui-components/Carousels.vue'),
      meta: {
      },
    },
    {
      path: 'chips',
      name: 'Chips',
      component: () => import('@/views/ui-components/Chips.vue'),
      meta: {
      },
    },
  ],
};

export default routes;

const routes = {
  path: '/ui-elements',
  name: 'UIElements',
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
      component: () => import('@/views/ui-elements/Alerts.vue'),
      meta: {
      },
    },
    {
      path: 'avatars',
      name: 'Avatars',
      component: () => import('@/views/ui-elements/Avatars.vue'),
      meta: {
      },
    },
    {
      path: 'badges',
      name: 'Badges',
      component: () => import('@/views/ui-elements/Badges.vue'),
      meta: {
      },
    },
    {
      path: 'bottom-navigation',
      name: 'BottomNavigation',
      component: () => import('@/views/ui-elements/BottomNavigation.vue'),
      meta: {
      },
    },
    {
      path: 'bottom-sheets',
      name: 'BottomSheets',
      component: () => import('@/views/ui-elements/BottomSheets.vue'),
      meta: {
      },
    },
    {
      path: 'breadcrumbs',
      name: 'Breadcrumbs',
      component: () => import('@/views/ui-elements/Breadcrumbs.vue'),
      meta: {
      },
    },
    {
      path: 'buttons',
      name: 'Buttons',
      component: () => import('@/views/ui-elements/Buttons.vue'),
      meta: {
      },
    },
    {
      path: 'cards',
      name: 'Cards',
      component: () => import('@/views/ui-elements/Cards.vue'),
      meta: {
      },
    },
    {
      path: 'carousels',
      name: 'Carousels',
      component: () => import('@/views/ui-elements/Carousels.vue'),
      meta: {
      },
    },
    {
      path: 'chips',
      name: 'Chips',
      component: () => import('@/views/ui-elements/Chips.vue'),
      meta: {
      },
    },
  ],
};

export default routes;

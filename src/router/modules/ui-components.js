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
      component: () => import('@/views/ui-components/VAlerts.vue'),
      meta: {
      },
    },
    {
      path: 'avatars',
      name: 'Avatars',
      component: () => import('@/views/ui-components/VAvatars.vue'),
      meta: {
      },
    },
    {
      path: 'badges',
      name: 'Badges',
      component: () => import('@/views/ui-components/VBadges.vue'),
      meta: {
      },
    },
    {
      path: 'bottom-navigation',
      name: 'BottomNavigation',
      component: () => import('@/views/ui-components/VBottomNavigation.vue'),
      meta: {
      },
    },
    {
      path: 'bottom-sheets',
      name: 'BottomSheets',
      component: () => import('@/views/ui-components/VBottomSheets.vue'),
      meta: {
      },
    },
    {
      path: 'breadcrumbs',
      name: 'Breadcrumbs',
      component: () => import('@/views/ui-components/VBreadcrumbs.vue'),
      meta: {
      },
    },
    {
      path: 'buttons',
      name: 'Buttons',
      component: () => import('@/views/ui-components/VButtons.vue'),
      meta: {
      },
    },
    {
      path: 'cards',
      name: 'Cards',
      component: () => import('@/views/ui-components/VCards.vue'),
      meta: {
      },
    },
    {
      path: 'carousels',
      name: 'Carousels',
      component: () => import('@/views/ui-components/VCarousels.vue'),
      meta: {
      },
    },
    {
      path: 'chips',
      name: 'Chips',
      component: () => import('@/views/ui-components/VChips.vue'),
      meta: {
      },
    },
  ],
};

export default routes;

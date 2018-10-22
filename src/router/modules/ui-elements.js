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
  ],
};

export default routes;

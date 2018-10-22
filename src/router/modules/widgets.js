const routes = {
  path: '/widgets',
  name: 'Widgets',
  component: {
    template: '<router-view></router-view>',
  },
  meta: {
    hasMulSub: true,
    hidden: false,
    icon: 'widgets',
  },
  children: [
    {
      path: 'icons',
      name: 'Icons',
      component: () => import('@/views/widgets/svg-icon/Icons.vue'),
      meta: {
      },
    },
    {
      path: 'maps',
      name: 'Maps',
      component: () => import('@/views/widgets/Maps.vue'),
      meta: {
      },
    },
  ],
};

export default routes;

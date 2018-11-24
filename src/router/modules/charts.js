const routes = {
  path: '/charts',
  name: 'Charts',
  component: {
    template: '<router-view></router-view>',
  },
  meta: {
    hasMulSub: true,
    hidden: false,
    icon: 'grid_on',
  },
  children: [
    {
      path: 'line',
      name: 'LineCharts',
      component: () => import('@/views/charts/LineCharts.vue'),
      meta: {
      },
    },
    {
      path: 'bar',
      name: 'BarCharts',
      component: () => import('@/views/charts/BarCharts.vue'),
      meta: {
      },
    },
  ],
};

export default routes;

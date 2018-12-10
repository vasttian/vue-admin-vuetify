const routes = {
  path: '/charts',
  name: 'Charts',
  component: {
    template: '<router-view></router-view>',
  },
  meta: {
    hasMulSub: true,
    hidden: false,
    icon: 'bar_chart',
  },
  children: [
    {
      path: 'line',
      name: 'LineCharts',
      component: () => import('@/views/charts/lines/VIndex.vue'),
      meta: {
      },
    },
    {
      path: 'bar',
      name: 'BarCharts',
      component: () => import('@/views/charts/bars/VIndex.vue'),
      meta: {
      },
    },
  ],
};

export default routes;

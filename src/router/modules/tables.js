const routes = {
  path: '/tables',
  name: 'Tables',
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
      path: 'table-inline-edit',
      name: 'TableInlineEdit',
      component: () => import('@/views/tables/TableInlineEdit.vue'),
      meta: {
      },
    },
    {
      path: 'table-sort',
      name: 'TableSort',
      component: () => import('@/views/tables/TableSort.vue'),
      meta: {
      },
    },
  ],
};

export default routes;

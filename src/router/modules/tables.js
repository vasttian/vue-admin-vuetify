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
      meta: {},
    },
    {
      path: 'table-drag-sort',
      name: 'TableDragSort',
      component: () => import('@/views/tables/TableDragSort.vue'),
      meta: {},
    },
  ],
};

export default routes;

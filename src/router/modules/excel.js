const routes = {
  path: '/excel',
  name: 'Excel',
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
      path: 'upload-excel',
      name: 'UploadExcel',
      component: () => import('@/views/excel/ExcelUpload.vue'),
      meta: {},
    },
  ],
};

export default routes;

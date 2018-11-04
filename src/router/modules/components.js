const routes = {
  path: '/components',
  name: 'Components',
  component: {
    template: '<router-view></router-view>',
  },
  meta: {
    hasMulSub: true,
    hidden: false,
    icon: 'developer_board',
  },
  children: [
    {
      path: 'json-editor',
      name: 'JsonEditor',
      component: () => import('@/views/components/JsonEditor.vue'),
      meta: {
        icon: '',
      },
    },
    {
      path: 'markdown-editor',
      name: 'Markdown',
      component: () => import('@/views/components/MarkdownEditor.vue'),
      meta: {
        icon: '',
      },
    },
    {
      path: 'sql-editor',
      name: 'SqlEditor',
      component: () => import('@/views/components/SqlEditor.vue'),
      meta: {
        icon: '',
      },
    },
    {
      path: 'maps',
      name: 'Maps',
      component: () => import('@/views/components/VMaps.vue'),
      meta: {
      },
    },
  ],
};

export default routes;

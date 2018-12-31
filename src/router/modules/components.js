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
      path: 'markdown-editor',
      name: 'Markdown',
      component: () => import('@/views/components/MarkdownEditor.vue'),
      meta: {
        icon: '',
      },
    },
    {
      path: 'json-editor',
      name: 'JsonEditor',
      component: () => import('@/views/components/JsonEditor.vue'),
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
      path: 'tinymce-editor',
      name: 'TinymceEditor',
      component: () => import('@/views/components/TinymceEditor.vue'),
      meta: {},
    },
    {
      path: 'pdf-reader',
      name: 'PdfReader',
      component: () => import('@/views/components/PdfReader.vue'),
      meta: {},
    },
    {
      path: 'maps',
      name: 'Maps',
      component: () => import('@/views/components/VMaps.vue'),
      meta: {},
    },
    {
      path: 'list-drag',
      name: 'ListDrag',
      component: () => import('@/views/components/ListDrag.vue'),
      meta: {},
    },
  ],
};

export default routes;

import Index from '@/views/components/Index.vue';

const routes = {
  path: '/components',
  name: 'Components',
  component: Index,
  meta: {
    hasSub: true,
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
      path: 'markdown',
      name: 'Markdown',
      component: () => import('@/views/components/Markdown.vue'),
      meta: {
        icon: '',
      },
    },
  ],
};

export default routes;

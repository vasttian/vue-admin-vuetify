import Index from '@/views/components/Index.vue';

const routes = {
  path: '/components',
  name: 'Components',
  component: Index,
  meta: {
    hasSub: true,
    icon: 'developer_board',
  },
  children: [
    {
      path: 'json-editor',
      name: 'JsonEditor',
      component: () => import('@/views/components/JsonEditor.vue'),
      meta: {
        icon: 'format_quote',
      },
    },
    {
      path: 'markdown',
      name: 'Markdown',
      component: () => import('@/views/components/Markdown.vue'),
      meta: {
        icon: 'format_list_bulleted',
      },
    },
  ],
};

export default routes;

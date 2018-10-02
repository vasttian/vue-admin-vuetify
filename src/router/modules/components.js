import Index from '@/views/components/Index.vue';

const routes = {
  path: '/components',
  name: 'Components',
  component: Index,
  children: [
    {
      path: 'json-editor',
      name: 'JsonEditor',
      component: () => import('@/views/components/JsonEditor.vue'),
    },
    {
      path: 'markdown',
      name: 'Markdown',
      component: () => import('@/views/components/Markdown.vue'),
    },
  ],
};

export default routes;

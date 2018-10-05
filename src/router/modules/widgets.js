import Index from '@/views/components/Index.vue';

const routes = {
  path: '/widgets',
  name: 'Widgets',
  component: Index,
  meta: {
    hasSub: true,
    hidden: false,
    icon: 'widgets',
  },
  children: [
    {
      path: 'icons',
      name: 'Icons',
      component: () => import('@/views/widgets/Icons.vue'),
      meta: {
      },
    },
    {
      path: 'maps',
      name: 'Maps',
      component: () => import('@/views/widgets/Maps.vue'),
      meta: {
      },
    },
  ],
};

export default routes;

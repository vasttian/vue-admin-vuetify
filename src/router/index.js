import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/auth/Login.vue';
import Index from '@/views/Index.vue';
import Homepage from '@/views/admin/Homepage.vue';

Vue.use(Router);

const Root = Vue.component('temp', {
  template: '<router-view></router-view>',
});

const Create = {
  template: '<div class="title">Create</div>',
};

const Read = {
  template: '<div class="title">Read</div>',
};

const Update = {
  template: '<div class="title">Update</div>',
};

const Delete = {
  template: '<div class="title">Delete</div>',
};

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: { name: 'Homepage' },
      meta: {},
      children: [
        {
          path: '/homepage',
          name: 'Homepage',
          component: Homepage,
          meta: {
            icon: 'home',
            hidden: false,
            auth: [],
          },
        },
        {
          path: '/users',
          name: 'Users',
          component: {
            template: '<div class="title">Users</div>',
          },
          meta: {
            icon: 'people_outline',
            auth: [],
          },
        },
        {
          path: '/actions',
          name: 'Actions',
          component: Root,
          meta: {
            hasSub: true,
          },
          children: [
            {
              path: '/create',
              name: 'Create',
              component: Create,
              meta: {
                icon: 'add',
                auth: [],
              },
            },
            {
              path: '/read',
              name: 'Read',
              component: Read,
              meta: {
                icon: 'insert_drive_file',
                auth: [],
              },
            },
            {
              path: '/update',
              name: 'Update',
              component: Update,
              meta: {
                icon: 'update',
                auth: [],
              },
            },
            {
              path: '/delete',
              name: 'Delete',
              component: Delete,
              meta: {
                icon: 'delete',
                auth: [],
              },
            },
          ],
        },
      ],
    },
    {
      path: '/403',
      meta: {
        hidden: true,
      },
      // redirect: { name: 'Index' },
      component: Login,
    },
    {
      path: '*',
      redirect: { name: 'Index' },
    },
  ],
});

<template>
  <v-toolbar-items>
    <template v-for="(route, index) in routes">
      <template v-if="!route.children">
        <v-btn
          v-if="roleShow(route)"
          :key="index"
          :input-value="activeMenu === route.name"
          flat
          :to="{ name: route.name }"
        >
          {{ route.name }}
        </v-btn>
      </template>
      <template v-else-if="route.meta && route.meta.hasMulSub">
        <v-menu
          v-if="roleShow(route)"
          :key="index"
          bottom
          origin="bottom center"
          offset-y
          transition="scale-transition"
        >
          <v-btn
            slot="activator"
            flat
          >
            {{ route.name }}
            <v-icon dark>arrow_drop_down</v-icon>
          </v-btn>
          <v-list :key="index">
            <v-list-tile
              v-for="(cRoute, idx) in route.children"
              :to="{ name: cRoute.name }"
              :key="idx"
            >
              <v-list-tile-action v-if="cRoute.meta && cRoute.meta.icon">
                <v-icon>{{ cRoute.meta.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ cRoute.name }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-menu>
      </template>
      <template v-else>
        <v-btn
          v-if="roleShow(route.children[0])"
          flat
          :key="index"
          :input-value="activeMenu === getRouteName(route)"
          :to="{ name: getRouteName(route) }"
        >
          {{ getRouteName(route) }}
        </v-btn>
      </template>
    </template>
  </v-toolbar-items>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'TheMenus',
  data() {
    return {};
  },
  computed: {
    ...mapState({
      user: state => state.auth.me,
    }),
    routes() {
      const { routes } = this.$router.options;
      return routes.filter(route => !route.meta || !route.meta.hidden);
    },
    activeMenu() {
      return this.findParentRouteByChildName();
    },
  },
  methods: {
    roleShow(route) {
      console.log('---route', route);
      if (!route.meta) {
        return true;
      }

      // hack, there is no user when logout
      if (!this.user || route.meta.hidden) {
        return false;
      }

      const { auth } = route.meta;
      return auth
        ? (!auth.length && !this.user.role) || auth.includes(this.user.role)
        : !auth;
    },
    getRouteName(route = {}) {
      return route.name || (route.children && route.children[0].name) || '';
    },
    findParentRouteByChildName() {
      const { routes } = this.$router.options;
      const childName = this.$route.name;
      // console.log('routes', routes);
      // console.log('childName', childName);

      try {
        for (let i = 0, len = routes.length; i < len; i += 1) {
          const route = routes[i];
          if (route.children) {
            for (let j = 0, len = route.children.length; j < len; j += 1) {
              const cRoute = route.children[j];
              if (cRoute.children) {
                for (let k = 0, len = cRoute.children.length; k < len; k += 1) {
                  const child = cRoute.children[k];
                  if (child.name === childName) {
                    return route.name || childName;
                  }
                }
              } else if (cRoute.name === childName) {
                return route.name || childName;
              }
            }
          } else if (route.name === childName) {
            return route.name;
          }
        }
      } catch (err) {
        console.error('>>>findParentRouteByChildName', err);
      }

      return childName;
    },
  },
};
</script>

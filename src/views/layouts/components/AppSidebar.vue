<template>
  <v-navigation-drawer
    id="sidebar"
    class="blue-grey lighten-5"
    app
    fixed
    width="232"
    v-model="drawer"
    clipped="clipped"
    :temporary="temporary"
    mobile-break-point="400"
    :mini-variant="miniVariant">
    <v-list
      expand
      dense>
      <template v-for="(route, index) in routes">
        <template v-if="route.meta && route.meta.hasMulSub">
          <v-list-group
            v-if="roleShow(route)"
            value="true"
            :prepend-icon="route.meta && route.meta.icon"
            :key="index">
            <v-list-tile
              slot="activator"
              ripple>
              <v-list-tile-content>
                <v-list-tile-title>{{ generateTitle(route.name) }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              ripple
              v-for="(cRoute, idx) in route.children"
              :to="{ name: cRoute.name }"
              :key="idx">
              <v-list-tile-action>
                <v-icon>{{ cRoute.meta && cRoute.meta.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ generateTitle(cRoute.name, route) }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
        </template>
        <template v-else>
          <v-list-tile
            v-if="roleShow(route)"
            ripple
            :to="{ name: route.name }"
            :key="index">
            <v-list-tile-action>
              <v-icon>{{ route.meta && route.meta.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ generateTitle(route.name) }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import PerfectScrollbar from 'perfect-scrollbar';
import { fistLowerUpper } from '@/utils/util';

export default {
  name: 'AppSidebar',
  // props: [
  //   'drawer',
  // ],
  data() {
    return {
      drawer: this.$vuetify && this.$vuetify.breakpoint.mdAndUp,
      miniVariant: false,
      // miniVariant: true,
      ps: null,
      clipped: true,
      temporary: false,
    };
  },
  watch: {
    // eslint-disable-next-line
    '$vuetify.breakpoint'(newVal) {
      this.$emit('changeTemporary', newVal.smAndDown);
      this.temporary = newVal.smAndDown;
    },
  },
  computed: {
    ...mapState({
      user: state => state.auth.me,
    }),
    routes() {
      const routeName = this.$route.name;
      const { routes } = this.$router.options;

      try {
        for (let i = 0, len = routes.length; i < len; i += 1) {
          if (routes[i].children) {
            for (let j = 0, len = routes[i].children.length; j < len; j += 1) {
              const child = routes[i].children[j];
              if (child.name === routeName) {
                return routes[i].children;
              }
            }
          } else if (routes[i].name === routeName) {
            return routes[i];
          }
        }
      } catch (err) {
        console.log('>>>sidebar', err);
      }

      return routes[2].children;
    },
  },
  methods: {
    roleShow(route) {
      // hack, there is no user when logout
      if (!route.meta) {
        return true;
      }

      if (!this.user || route.meta.hidden) {
        return false;
      }

      const { auth } = route.meta;
      return auth ? (!auth.length && !this.user.role) || auth.includes(this.user.role) : !auth;
    },
    toggleSidebar() {
      this.drawer = !this.drawer;
    },
    toggleTemporary(val) {
      this.temporary = val;
    },
    generateTitle(title, route) {
      if (route && route.name === 'UIComponents') {
        return title;
      }

      return title ? this.$t(`sidebar.${fistLowerUpper(title)}`) : '';
    },
  },
  created() {
    this.$nextTick(() => {
      this.ps = new PerfectScrollbar('#sidebar', {
        suppressScrollX: true,
      });
      this.$emit('changeTemporary', this.temporary);
    });
    this.temporary = this.$vuetify && this.$vuetify.breakpoint.smAndDown;
  },
  beforeDestroy() {
    this.ps.destroy();
    this.ps = null;
  },
};
</script>

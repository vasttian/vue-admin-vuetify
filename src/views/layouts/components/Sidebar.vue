<template>
  <v-navigation-drawer
    class="blue-grey lighten-5"
    stateless
    width="210"
    clipped
    fixed
    app
    :mini-variant="miniVariant"
    v-model="drawer">
    <v-list>
      <template v-for="(route, index) in routes[0].children">
        <template v-if="route.meta && route.meta.hasSub">
          <v-list-group
            :prepend-icon="route.meta && route.meta.icon"
            value="true"
            :key="index">
            <v-list-tile slot="activator">
              <v-list-tile-title>{{ route.name }}</v-list-tile-title>
            </v-list-tile>
            <v-list-tile
              v-for="(cRoute, idx) in route.children"
              :key="idx">
              <v-list-tile-action>
                <v-icon>{{ cRoute.meta && cRoute.meta.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-title>{{ cRoute.name }}</v-list-tile-title>
            </v-list-tile>
          </v-list-group>
        </template>
        <template v-else>
          <v-list-tile
            :key="index">
            <v-list-tile-action>
              <v-icon>{{ route.meta && route.meta.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>{{ route.name }}</v-list-tile-title>
          </v-list-tile>
        </template>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Sidebar',
  props: [
    'drawer',
  ],
  data() {
    return {
      miniVariant: false,
    };
  },
  computed: {
    routes() {
      return this.$router.options.routes[1].children;
    },
  },
  methods: {},
};
</script>

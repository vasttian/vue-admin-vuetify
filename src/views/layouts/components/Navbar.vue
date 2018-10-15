<template>
  <header>
    <v-toolbar
      class="primary"
      dark
      app
      flat
      dense
      height="56"
      :clipped-left="true">
      <v-toolbar-side-icon
        :disabled="!toggleBtn"
        @click.stop="$emit('toggleSidebar')"></v-toolbar-side-icon>
      <v-toolbar-title v-if="$vuetify && $vuetify.breakpoint.smAndUp">
        VUE-ADMIN-VUETIFY
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- menu -->
      <navbar-menu></navbar-menu>

      <v-spacer></v-spacer>
      <v-menu
        offset-y
        nudge-bottom="8"
        origin="center center"
        :close-on-content-click="false"
        transition="scale-transition">
        <v-btn
          icon
          flat
          slot="activator">
          <v-badge color="red" overlap>
            <span slot="badge">6</span>
            <v-icon medium>notifications</v-icon>
          </v-badge>
        </v-btn>
        <notification-list></notification-list>
      </v-menu>
      <v-menu
        offset-y
        nudge-bottom="7">
        <v-toolbar-title
          v-if="$vuetify && $vuetify.breakpoint.smAndUp"
          slot="activator">
          <v-avatar size="40">
            <img
              :src="user.avatar"
              alt="">
          </v-avatar>
          <span style="margin-left: 10px;">{{ user.name }}</span>
          <v-icon>arrow_drop_down</v-icon>
        </v-toolbar-title>
        <v-btn
          v-else
          icon
          dark
          slot="activator">
          <v-icon>more_vert</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile v-if="$vuetify && $vuetify.breakpoint.xs">
            <v-list-tile-title>
              <lang-bar></lang-bar>
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-avatar>
              <v-icon>account_circle</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ $t('common.account') }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="logout">
            <v-list-tile-avatar>
              <v-icon>lock_open</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ $t('common.logout') }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
      <lang-bar v-if="$vuetify && $vuetify.breakpoint.smAndUp"></lang-bar>
    </v-toolbar>
  </header>
</template>

<script>
import { mapState } from 'vuex';
import NotificationList from '@/components/widgets/NotificationList.vue';
import LangBar from '@/components/widgets/LangBar.vue';
import navbarMenu from './menus/TheIndex.vue';

export default {
  name: 'NavBar',
  components: {
    navbarMenu,
    LangBar,
    NotificationList,
  },
  props: {
    toggleBtn: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      drawerRight: true,
    };
  },
  computed: {
    ...mapState({
      user: state => state.auth.me,
    }),
  },
  methods: {
    logout() {
      console.log('logout');
      this.$router.push({ name: 'Login' });
      this.$message({
        type: 'info',
        text: 'Ahem: Please add logout function',
      });
    },
  },
  created() {
  },
};
</script>

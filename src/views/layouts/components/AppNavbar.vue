<template>
  <header>
    <v-toolbar
      class="primary"
      app
      dark
      flat
      fixed
      dense
      height="56"
      :clipped-left="true"
    >
      <v-toolbar-side-icon
        :disabled="!toggleBtn"
        @click.stop="$emit('toggleSidebar')"
      ></v-toolbar-side-icon>
      <v-toolbar-title class="hidden-sm-and-down">
        <router-link
          :to="{ name : 'Dashboard' }"
          class="toolbar-title"
        >
          <span>VUE-ADMIN-VUETIFY</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- menu -->
      <navbar-menu />

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-menu
          attach
          offset-y
          bottom
          left
          nudge-bottom="13"
          origin="center center"
          :close-on-content-click="false"
          transition="scale-transition"
        >
          <v-btn
            icon
            flat
            slot="activator"
          >
            <v-badge
              v-if="badgeLen"
              color="red"
              overlap
            >
              <span slot="badge">{{ badgeLen }}</span>
              <v-icon medium>notifications</v-icon>
            </v-badge>
            <v-icon
              v-else
              medium
            >notifications</v-icon>
          </v-btn>
          <notification-list @unreadLen="(val) => badgeLen = val" />
        </v-menu>
        <v-btn
          class="hidden-xs-only"
          icon
          large
        >
          <app-screenfull fill="#333539" />
        </v-btn>
        <v-menu
          attach
          offset-y
          bottom
          left
          nudge-bottom="14"
        >
          <v-toolbar-title
            v-if="$vuetify && $vuetify.breakpoint.smAndUp"
            slot="activator"
          >
            <v-avatar size="40">
              <img
                :src="user.avatar"
                alt=""
              >
            </v-avatar>
            <span style="margin-left: 10px;">{{ user.name }}</span>
            <v-icon>arrow_drop_down</v-icon>
          </v-toolbar-title>
          <v-btn
            v-else
            icon
            dark
            slot="activator"
          >
            <v-icon>more_vert</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile class="hidden-sm-and-up">
              <v-list-tile-title>
                <base-langbar />
              </v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="toGithub">
              <v-list-tile-avatar>
                <svg-icon
                  style="font-size:21px;"
                  icon-class="github"
                />
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>
                  GitHub
                </v-list-tile-title>
              </v-list-tile-content>
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
        <base-langbar v-if="$vuetify && $vuetify.breakpoint.smAndUp" />
      </v-toolbar-items>
    </v-toolbar>
  </header>
</template>

<script>
import { mapState } from 'vuex';
import AppScreenfull from '@/components/widgets/AppScreenfull.vue';
import BaseLangbar from '@/components/widgets/BaseLangbar.vue';
import NotificationList from '@/components/widgets/NotificationList.vue';
import NavbarMenu from './menus/TheIndex.vue';

export default {
  name: 'AppNavbar',
  components: {
    NavbarMenu,
    AppScreenfull,
    BaseLangbar,
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
      badgeLen: 0,
    };
  },
  computed: {
    ...mapState({
      user: state => state.auth.me,
    }),
  },
  methods: {
    toGithub() {
      window.open('https://github.com/vasttian/vue-admin-vuetify');
    },
    logout() {
      console.log('logout');
      this.$router.push({ name: 'Login' });
    },
  },
  created() {},
};
</script>

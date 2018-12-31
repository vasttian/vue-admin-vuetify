<template>
  <v-app class="app-wrapper">
    <app-navbar
      :toggle-btn="true"
      class="nav-container"
      @toggleSidebar="toggleSidebar"
    />
    <app-sidebar
      ref="sidebar"
      class="sidebar-container"
      @changeTemporary="(val) => $refs && $refs.rightSettings.changeTemporary(val)"
    />
    <div
      id="main-container"
      class="main-container"
    >
      <app-main />
    </div>
    <app-right-settings
      ref="rightSettings"
      @toggleTemporary="toggleTemporary"
    />
    <app-fab />
  </v-app>
</template>

<script>
import AppFab from '@/components/widgets/AppFab.vue';
import AppNavbar from './components/AppNavbar.vue';
import AppSidebar from './components/AppSidebar.vue';
import AppMain from './components/AppMain.vue';
import AppRightSettings from './components/AppRightSettings.vue';

export default {
  name: 'AppLayout',
  components: {
    AppFab,
    AppNavbar,
    AppSidebar,
    AppMain,
    AppRightSettings,
  },
  data() {
    return {};
  },
  methods: {
    toggleSidebar() {
      if (this.$refs.sidebar) {
        this.$refs.sidebar.toggleSidebar();
      }
    },
    toggleTemporary(val) {
      if (this.$refs.sidebar) {
        this.$refs.sidebar.toggleTemporary(val);
      }
    },
  },
};
</script>

<template>
  <v-app class="app-wrapper">
    <navbar
      :toggle-btn="true"
      class="nav-container"
      @toggleSidebar="toggleSidebar"/>
    <sidebar
      ref="sidebar"
      class="sidebar-container"/>
    <app-main class="main-container"/>
    <right-settings/>
    <app-fab/>
  </v-app>
</template>

<script>
import AppFab from '@/components/widgets/AppFab.vue';
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
import RightSettings from './components/RightSettings.vue';
import AppMain from './components/AppMain.vue';

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    RightSettings,
    AppMain,
    AppFab,
  },
  data() {
    return {

    };
  },
  methods: {
    toggleSidebar() {
      if (this.$refs.sidebar) {
        this.$refs.sidebar.toggleSidebar();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>

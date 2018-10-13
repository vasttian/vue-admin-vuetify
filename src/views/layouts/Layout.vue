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
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
import AppMain from './components/AppMain.vue';

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
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

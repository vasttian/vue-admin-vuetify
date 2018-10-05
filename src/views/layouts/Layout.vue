<template>
  <v-app class="app-wrapper">
    <navbar
      class="nav-container"
      @toggleSidebar="toggleSidebar"/>
    <sidebar
      v-if="$route.name !== 'Admin'"
      class="sidebar-container"
      :drawer="drawer"/>
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
      drawer: true,
    };
  },
  methods: {
    toggleSidebar() {
      this.drawer = !this.drawer;
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

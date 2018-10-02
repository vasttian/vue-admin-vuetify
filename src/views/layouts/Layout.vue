<template>
  <v-app class="app-wrapper">
    <navbar class="nav-container"/>
    <div>
      <sidebar class="sidebar-container"/>
      <app-main class="main-container"/>
    </div>
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
};
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>

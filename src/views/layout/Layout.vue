<template>
  <div class="app-wrapper">
    <navbar class="nav-container"/>
    <div>
      <sidebar class="sidebar-container"/>
      <app-main class="main-container"/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AppMain from './components/AppMain';

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
  },
}
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>

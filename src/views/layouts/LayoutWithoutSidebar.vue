<template>
  <v-app class="app-wrapper">
    <navbar class="nav-container"/>
    <app-main class="main-container"/>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue';
import AppMain from './components/AppMain.vue';

export default {
  name: 'LayoutWithoutSidebar',
  components: {
    Navbar,
    AppMain,
  },
  data() {
    return {

    };
  },
  methods: {

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

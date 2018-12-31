<template>
  <v-app class="app-wrapper">
    <app-navbar class="nav-container" />
    <app-main class="main-container" />
  </v-app>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';
import AppMain from './components/AppMain.vue';

export default {
  name: 'AppLayoutWithoutSidebar',
  components: {
    AppNavbar,
    AppMain,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

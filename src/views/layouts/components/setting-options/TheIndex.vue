<template>
  <v-layout>
    <v-flex>
      <v-card>
        <v-toolbar
          height="56"
          class="primary"
          dark
        >
          <v-toolbar-title>Setting Options</v-toolbar-title>
        </v-toolbar>
        <v-container grid-list-md>
          <theme-setting />
          <v-divider class="mt-4"></v-divider>
          <navigation-drawer
            ref="navigationDrawer"
            @toggleTemporary="(val) => $emit('toggleTemporary', val)"
          />
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import ThemeSetting from './ThemeSetting.vue';
import NavigationDrawer from './NavigationDrawer.vue';

export default {
  name: 'SettingOptions',
  components: {
    ThemeSetting,
    NavigationDrawer,
  },
  data() {
    return {};
  },
  methods: {
    changeTemporary(val) {
      this.$refs.navigationDrawer.temporary = val;
    },
  },
};
</script>

<template>
  <v-layout>
    <v-flex>
      <v-card>
        <v-toolbar
          class="primary"
          dark>
          <v-toolbar-title>Setting Options</v-toolbar-title>
        </v-toolbar>
        <v-container grid-list-md>
          <v-list>
            <theme-setting/>
          </v-list>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import ThemeSetting from './ThemeSetting.vue';

export default {
  name: 'SettingOptions',
  components: {
    ThemeSetting,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <div>
    <div class="right-settings">
      <v-btn
        flat
        icon
        color="#fff"
        @click="openRightSettings">
        <v-icon>settings</v-icon>
      </v-btn>
    </div>
    <v-navigation-drawer
      v-model="rightDrawer"
      right
      absolute
      temporary>
      <theme-setting/>
    </v-navigation-drawer>
  </div>
</template>

<script>
import ThemeSetting from './setting-options/ThemeSetting';

export default {
  name: 'RightSettings',
  components: {
    ThemeSetting,
  },
  data() {
    return {
      rightDrawer: false,
    };
  },
  methods: {
    openRightSettings() {
      this.rightDrawer = true;
    },
  },
}
</script>


<style lang="scss" scoped>
  .right-settings {
    position: fixed;
    top: 150px;
    right: 0;
    width: 64px;
    z-index: 1032;
    background: rgba(0, 0, 0, .3);
    border-radius: 8px 0 0 8px;
    text-align: center;
  }
</style>

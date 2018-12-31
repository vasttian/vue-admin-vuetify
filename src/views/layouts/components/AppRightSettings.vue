<template>
  <div>
    <div class="right-settings">
      <v-btn
        v-show="!rightDrawer"
        flat
        icon
        color="#fff"
        @click="openRightSettings"
      >
        <v-icon>settings</v-icon>
      </v-btn>
    </div>
    <v-navigation-drawer
      v-model="rightDrawer"
      right
      fixed
      hide-overlay
      temporary
    >
      <setting-options
        ref="settingOptions"
        @toggleTemporary="(val) => $emit('toggleTemporary', val)"
      />
    </v-navigation-drawer>
  </div>
</template>

<script>
import SettingOptions from './setting-options/TheIndex.vue';

export default {
  name: 'AppRightSettings',
  components: {
    SettingOptions,
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
    changeTemporary(val) {
      this.$refs.settingOptions.changeTemporary(val);
    },
  },
};
</script>


<style lang="scss" scoped>
.right-settings {
  position: fixed;
  top: 150px;
  right: 0;
  width: 60px;
  z-index: 1032;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px 0 0 8px;
  text-align: center;
}
</style>

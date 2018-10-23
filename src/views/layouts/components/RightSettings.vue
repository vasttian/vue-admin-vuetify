<template>
  <div class="right-settings">
    <v-btn
      flat
      icon
      color="#fff">
      <v-icon>settings</v-icon>
    </v-btn>
  </div>
</template>

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

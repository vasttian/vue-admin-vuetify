<template>
  <v-card
    color="grey lighten-3"
    class="indicator"
  >
    <v-icon
      :color="config.color"
      size="56"
    >
      {{ config.icon }}
    </v-icon>
    <v-card-text class="info-title">
      <span>{{ config.count }}</span>
    </v-card-text>
    <v-card-title class="stats-title">
      <v-flex>
        {{ config.title }}
      </v-flex>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: ['config'],
};
</script>

<style lang="scss" scoped>
.indicator {
  position: relative;
  text-align: center;
  padding-top: 20px;
}

.indicator:after {
  position: absolute;
  right: 0;
  top: 20px;
  width: 1px;
  height: calc(100% - 40px);
  content: '';
  background: #ddd;
}

.indicator {
  .info-title {
    font-size: 30px;
  }

  .stats-title {
    font-size: 20px;
    font-weight: 600;
    color: #42a5f5;
  }
}
</style>

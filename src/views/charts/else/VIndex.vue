<template>
  <v-container
    grid-list-lg
    pa-0
  >
    <v-layout wrap>
      <v-flex
        xs12
        xl6
      >
        <v-basic-card
          title="Liquid Fill"
          toolbar-height="56"
        >
          <template slot="card-content">
            <liquid-fill-chart />
          </template>
        </v-basic-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import LiquidFillChart from './charts/LiquidFillChart.vue';

export default {
  name: 'VElseIndex',
  components: {
    LiquidFillChart,
  },
};
</script>

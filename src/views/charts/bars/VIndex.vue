<template>
  <v-container grid-list-lg pa-0>
    <v-layout wrap>
      <v-flex xs12 lg6>
        <v-basic-card
          title="Line Charts - Base"
          toolbar-height="56">
          <template slot="card-content">
            <bar-base-chart/>
          </template>
        </v-basic-card>
      </v-flex>
      <v-flex xs12 lg6>
        <v-basic-card
          title="Line Charts - Plot"
          toolbar-height="56">
          <template slot="card-content">
            <bar-plot-chart/>
          </template>
        </v-basic-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import BarBaseChart from './charts/BarBaseChart.vue';
import BarPlotChart from './charts/BarPlotChart.vue';

export default {
  name: 'VBarIndex',
  components: {
    BarBaseChart,
    BarPlotChart,
  },
};
</script>


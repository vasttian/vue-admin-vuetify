<template>
  <v-container
    grid-list-lg
    pa-0
  >
    <v-layout wrap>
      <v-flex
        xs12
        lg6
      >
        <v-basic-card
          title="Line Charts - Base"
          toolbar-height="56"
        >
          <template slot="card-content">
            <line-base-chart />
          </template>
        </v-basic-card>
      </v-flex>
      <v-flex
        xs12
        lg6
      >
        <v-basic-card
          title="Line Charts - Sections"
          toolbar-height="56"
        >
          <template slot="card-content">
            <line-sections-chart />
          </template>
        </v-basic-card>
      </v-flex>
      <v-flex xs12>
        <v-basic-card
          title="Line Charts - Area"
          toolbar-height="56"
        >
          <template slot="card-content">
            <line-area-chart />
          </template>
        </v-basic-card>
      </v-flex>
      <v-flex
        xs12
        lg6
      >
        <v-basic-card
          title="Line Charts - Rect Area"
          toolbar-height="56"
        >
          <template slot="card-content">
            <line-rect-area-chart />
          </template>
        </v-basic-card>
      </v-flex>
      <v-flex
        xs12
        lg6
      >
        <v-basic-card
          title="Line Charts - Split Area"
          toolbar-height="56"
        >
          <template slot="card-content">
            <line-split-area-chart />
          </template>
        </v-basic-card>
      </v-flex>
      <v-flex xs12>
        <v-basic-card
          title="Line Charts - Big Data"
          toolbar-height="56"
        >
          <template slot="card-content">
            <line-big-data-chart />
          </template>
        </v-basic-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import LineBaseChart from './charts/LineBaseChart.vue';
import LineSectionsChart from './charts/LineSectionsChart.vue';
import LineAreaChart from './charts/LineAreaChart.vue';
import LineRectAreaChart from './charts/LineRectAreaChart.vue';
import LineSplitAreaChart from './charts/LineSplitAreaChart.vue';
import LineBigDataChart from './charts/LineBigDataChart.vue';

export default {
  name: 'VLineIndex',
  components: {
    LineBaseChart,
    LineSectionsChart,
    LineAreaChart,
    LineRectAreaChart,
    LineSplitAreaChart,
    LineBigDataChart,
  },
};
</script>

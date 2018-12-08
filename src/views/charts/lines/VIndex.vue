<template>
  <v-container grid-list-lg pa-0>
    <v-layout wrap>
      <v-flex xs12 lg6>
        <v-basic-card
          title="Line Charts - Base"
          toolbar-height="56">
          <template slot="card-content">
            <line-base-chart/>
          </template>
        </v-basic-card>
      </v-flex>
      <v-flex xs12 lg6>
        <v-basic-card
          title="Line Charts - Sections"
          toolbar-height="56">
          <template slot="card-content">
            <line-sections-chart/>
          </template>
        </v-basic-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import LineBaseChart from './charts/LineBaseChart.vue';
import LineSectionsChart from './charts/LineSectionsChart.vue';

export default {
  name: 'VLineIndex',
  components: {
    LineBaseChart,
    LineSectionsChart,
  },
};
</script>


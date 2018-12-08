<template>
  <v-container grid-list-lg pa-0>
    <v-layout wrap>
      <v-flex xs12 lg6>
        <v-basic-card
          title="Line Charts - Base"
          toolbar-height="56">
          <template slot="card-content">
            <v-chart
              style="width:100%;"
              :options="baseOption"
              auto-resize/>
          </template>
        </v-basic-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'LineCharts',
  data() {
    return {
      baseOption: {},
    };
  },
  methods: {
    buildBaseOption() {
      const option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [800, 967, 932, 958, 1260, 1220, 1590],
            type: 'line',
          },
          {
            data: [900, 667, 1232, 1058, 760, 1720, 1590],
            type: 'line',
            smooth: true,
            itemStyle: {
              color: '#29B6F6',
            },
          },
        ],
      };
      return option;
    },
  },
  created() {
    this.baseOption = this.buildBaseOption();
  },
};
</script>

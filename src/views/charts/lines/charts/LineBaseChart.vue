<template>
  <v-chart
    style="width:100%;"
    :options="chartOption"
    autoresize
  />
</template>

<script>
export default {
  name: 'BaseLineChart',
  data() {
    return {
      chartOption: {},
    };
  },
  methods: {
    buildChartOption() {
      const option = {
        title: {
          text: 'Line - Base',
        },
        legend: {
          show: true,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line',
          },
        },
        toolbox: {
          show: true,
          right: 20,
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: 'Base Line',
            data: [800, 967, 932, 958, 1260, 1220, 1590],
            type: 'line',
          },
          {
            name: 'Smooth Line',
            data: [900, 667, 1232, 1058, 760, 1720, 1590],
            type: 'line',
            smooth: true,
            itemStyle: {
              color: '#29B6F6',
            },
          },
          {
            name: 'Step Line',
            type: 'line',
            step: 'middle',
            data: [420, 342, 401, 534, 690, 530, 710],
          },
        ],
      };

      return option;
    },
  },
  created() {
    this.chartOption = this.buildChartOption();
  },
};
</script>

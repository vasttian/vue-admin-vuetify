<template>
  <v-chart
    style="width:100%;"
    :options="chartOption"
    autoresize
  />
</template>

<script>
export default {
  name: 'BaseBarChart',
  data() {
    return {
      chartOption: {},
    };
  },
  methods: {
    buildChartOption() {
      const seriesData = [160, 260, 180, 100, 140, 120, 200];
      const option = {
        grid: {
          right: '3%',
          bottom: '4%',
          left: '3%',
          containLabel: true,
        },
        title: {
          text: 'Bar - Base',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
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
            data: seriesData,
            type: 'bar',
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

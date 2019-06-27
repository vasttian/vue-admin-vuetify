<template>
  <v-chart
    style="width:100%;"
    :options="chartOption"
    autoresize
  />
</template>

<script>
export default {
  name: 'PlotBarChart',
  data() {
    return {
      chartOption: {},
    };
  },
  methods: {
    renderPlotItem(param, api) {
      const bandWidth = api.size([0, 0])[0] * 0.85;
      const point = api.coord([api.value(0), api.value(1)]);

      return {
        type: 'line',
        shape: {
          x1: point[0] - bandWidth / 2,
          x2: point[0] + bandWidth / 2,
          y1: point[1],
          y2: point[1],
        },
        style: api.style({
          fill: null,
          stroke: api.visual('color'),
          lineWidth: 2,
        }),
      };
    },
    buildChartOption() {
      const seriesData = [10, 62, 200, 390, 460, 320, 220];
      const plotData = [];

      for (let i = 0, len = seriesData.length; i < len; i += 1) {
        plotData.push(seriesData[i] + 20);
      }

      const option = {
        color: ['#3398DB'],
        grid: {
          left: '3%',
          right: '3%',
          bottom: '3%',
          containLabel: true,
        },
        title: {
          text: 'Bar - Plot',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
          },
        ],
        series: [
          {
            name: '访问人数',
            type: 'bar',
            barWidth: '60%',
            data: seriesData,
          },
          {
            name: 'Plot',
            type: 'custom',
            renderItem: this.renderPlotItem,
            encode: {
              x: 0,
              y: 1,
            },
            data: plotData,
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

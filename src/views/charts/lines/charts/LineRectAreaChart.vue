<template>
  <v-chart
    style="width:100%;"
    :options="chartOption"
    autoresize
  />
</template>

<script>
export default {
  name: 'RectAreaLineChart',
  data() {
    return {
      chartOption: {},
    };
  },
  methods: {
    buildChartOption() {
      const legendData = [
        {
          name: 'A',
          icon: 'roundRect',
        },
        {
          name: 'B',
          icon: 'roundRect',
        },
        {
          name: 'C',
          icon: 'roundRect',
        },
        {
          name: 'D',
          icon: 'roundRect',
        },
        {
          name: 'E',
          icon: 'roundRect',
        },
      ];
      const option = {
        color: ['#84FFFF', '#69F0AE', '#F4511E', '#EEFF41', '#FF6F00'],
        title: {
          text: 'Line - Rect Area',
        },
        grid: {
          right: 60,
          left: 20,
          bottom: '2%',
          containLabel: true,
        },
        toolbox: {
          show: true,
          right: 20,
          feature: {
            saveAsImage: {},
          },
        },
        legend: {
          orient: 'vertical',
          right: 5,
          top: 'center',
          data: legendData,
        },
        xAxis: [
          {
            type: 'value',
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
          },
        ],
        series: [
          {
            type: 'line',
            name: 'A',
            symbol: 'none',
            z: 5,
            lineStyle: {
              width: 0,
              color: '#84FFFF',
            },
            areaStyle: {
              color: '#84FFFF',
            },
            step: true,
            connectNulls: true,
            data: [[0, 100], [60, 100]],
          },
          {
            type: 'line',
            name: 'B',
            symbol: 'none',
            z: 4,
            lineStyle: {
              width: 0,
              color: '#69F0AE',
            },
            areaStyle: {
              color: '#69F0AE',
            },
            step: true,
            connectNulls: true,
            data: [[0, 120], [70, 120]],
          },
          {
            type: 'line',
            name: 'C',
            symbol: 'none',
            z: 3,
            lineStyle: {
              width: 0,
              color: '#F4511E',
            },
            areaStyle: {
              color: '#F4511E',
            },
            step: true,
            connectNulls: true,
            data: [[0, 140], [80, 140]],
          },
          {
            type: 'line',
            name: 'D',
            symbol: 'none',
            z: 2,
            lineStyle: {
              width: 0,
              color: '#EEFF41',
            },
            areaStyle: {
              color: '#EEFF41',
            },
            step: true,
            connectNulls: true,
            data: [[0, 160], [90, 160]],
          },
          {
            type: 'line',
            name: 'E',
            symbol: 'none',
            z: 1,
            lineStyle: {
              width: 0,
              color: '#FF6F00',
            },
            areaStyle: {
              color: '#FF6F00',
            },
            step: true,
            connectNulls: true,
            data: [[0, 190], [100, 190]],
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

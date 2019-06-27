<template>
  <v-chart
    style="width:100%;"
    :options="chartOption"
    autoresize
  />
</template>

<script>
export default {
  name: 'WaterfallBarChart',
  data() {
    return {
      chartOption: {},
    };
  },
  methods: {
    buildChartOption() {
      const series1Data = [400, 700, 1245, 1230, 1376, 976, 1609, 1998, 1856, 1740, 1292];
      const series2Data = [600, 345, 393, '-', '-', 290, 578, 286, '-', '-', '-'];
      const series3Data = ['-', '-', '-', 290, 170, '-', '-', '-', 235, 560, 220];
      const xAxisData = [];
      for (let i = 1; i <= 11; i += 1) {
        xAxisData.push(`11月${i}日`);
      }

      const option = {
        title: {
          text: 'Bar - Waterfall',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
          formatter(params) {
            // console.log('params---:', params);
            const tar = params[1].value !== '-' ? params[1] : params[2];
            return `${tar.name}<br/>${tar.seriesName}:${tar.value}`;
          },
        },
        legend: {
          data: ['Alpha', 'Beta'],
        },
        grid: {
          left: '3%',
          right: '3%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          splitLine: {
            show: false,
          },
          data: xAxisData,
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: 'Assist',
            type: 'bar',
            stack: 'sum',
            itemStyle: {
              normal: {
                barBorderColor: 'rgba(0, 0, 0, 0)',
                color: 'rgba(0, 0, 0, 0)',
              },
              emphasis: {
                barBorderColor: 'rgba(0, 0, 0, 0)',
                color: 'rgba(0, 0, 0, 0)',
              },
            },
            data: series1Data,
          },
          {
            name: 'Alpha',
            type: 'bar',
            stack: 'sum',
            label: {
              normal: {
                show: true,
                position: 'top',
              },
            },
            data: series2Data,
          },
          {
            name: 'Beta',
            type: 'bar',
            stack: 'sum',
            label: {
              normal: {
                show: true,
                position: 'bottom',
              },
            },
            data: series3Data,
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

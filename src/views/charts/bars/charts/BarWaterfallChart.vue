<template>
  <v-chart
    style="width:100%;"
    :options="chartOption"
    auto-resize
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
      const series1Data = [0, 1200, 1245, 1230, 1676, 976, 1709, 1998, 1856, 1740, 1292];
      const series2Data = [1200, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-'];
      const series3Data = ['-', '-', '-', 190, 170, '-', '-', '-', 235, 560, 220];
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
            const tar = params[1].value != '-' ? params[1] : params[0];
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
          },
        },
        legend: {
          data: ['A', 'B'],
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
            name: '辅助',
            type: 'bar',
            stack: '总量',
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
            name: 'A',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'top',
              },
            },
            data: series2Data,
          },
          {
            name: 'B',
            type: 'bar',
            stack: '总量',
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

<template>
  <v-chart
    style="width:100%;"
    :options="chartOption"
    autoresize
  />
</template>

<script>
import echarts from 'echarts/lib/echarts';

export default {
  name: 'ShadowBarChart',
  data() {
    return {
      chartOption: {},
    };
  },
  methods: {
    buildChartOption() {
      const seriesData = [70, 71, 72.6, 73, 79, 75, 77, 80, 81, 79, 80, 83];
      const shadowData = [];
      const xAxisData = [];
      const standardNum = 100;

      for (let i = 1; i <= 12; i += 1) {
        shadowData.push(standardNum);
        xAxisData.push(`${i} 月`);
      }

      const option = {
        backgroundColor: '#394056',
        color: ['#3398DB'],
        grid: {
          right: '3%',
          bottom: '4%',
          left: '3%',
          containLabel: true,
        },
        title: {
          text: 'Bar - Shadow',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 20,
            color: '#F1F1F3',
          },
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line',
            lineStyle: {
              opacity: 0,
            },
          },
          formatter(params) {
            const param = params[0];
            return `${param.seriesName}：${param.value}%`;
          },
        },
        legend: {
          show: false,
          data: ['A'],
        },
        xAxis: [
          {
            type: 'category',
            gridIndex: 0,
            data: xAxisData,
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: '#455A64',
              },
            },
            axisLabel: {
              show: true,
              color: 'rgb(170, 170, 170)',
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            gridIndex: 0,
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            min: 0,
            max: 100,
            axisLine: {
              lineStyle: {
                color: '#455A64',
              },
            },
            axisLabel: {
              color: 'rgb(170, 170, 170)',
              formatter: '{value} %',
            },
          },
        ],
        series: [
          {
            name: 'A',
            type: 'bar',
            itemStyle: {
              normal: {
                barBorderRadius: 30,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#18FFFF',
                  },
                  {
                    offset: 0.5,
                    color: '#29B6F6',
                  },
                  {
                    offset: 1,
                    color: '#2962FF',
                  },
                ]),
              },
            },
            data: seriesData,
          },
          {
            name: 'Shadow',
            type: 'bar',
            barWidth: '40%',
            barGap: '-100%',
            data: shadowData,
            itemStyle: {
              normal: {
                color: 'rgba(255, 255, 255, 0.1)',
              },
            },
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

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
  name: 'AreaLineChart',
  data() {
    return {
      chartOption: {},
    };
  },
  methods: {
    buildChartOption() {
      const xAxisData = [
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
      ];
      const seriesAData = [200, 254, 200, 267, 290, 120, 241, 356, 204, 303, 246, 139];
      const seriesBData = [320, 234, 300, 167, 190, 220, 341, 223, 244, 153, 146, 169];
      const seriesCData = [120, 164, 200, 147, 150, 193, 241, 133, 144, 153, 146, 129];
      const markPointObj = {
        data: [
          {
            type: 'max',
            name: '最大值',
          },
          {
            type: 'min',
            name: '最小值',
          },
        ],
      };

      const option = {
        backgroundColor: '#394056',
        grid: {
          right: '3%',
          bottom: '4%',
          left: '3%',
          containLabel: true,
        },
        title: {
          text: 'Line - Area',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 20,
            color: '#F1F1F3',
          },
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              color: '#78909C',
            },
          },
        },
        toolbox: {
          show: true,
          right: 20,
          feature: {
            saveAsImage: {},
          },
        },
        legend: {
          icon: 'rect',
          itemGap: 15,
          itemWidth: 16,
          itemHeight: 10,
          data: ['A', 'B', 'C'],
          textStyle: {
            fontSize: 14,
            color: '#ECEFF1',
          },
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            axisLine: {
              lineStyle: {
                color: '#78909C',
              },
            },
            data: xAxisData,
          },
        ],
        yAxis: [
          {
            type: 'value',
            name: 'K',
            axisTick: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: '#78909C',
              },
            },
            splitLine: {
              lineStyle: {
                color: '#546E7A',
              },
            },
          },
        ],
        series: [
          {
            name: 'A',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 4,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1,
              },
            },
            markPoint: markPointObj,
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: 'rgba(16, 97, 204, 0.3)',
                    },
                    {
                      offset: 0.8,
                      color: 'rgba(17, 235, 210, 0)',
                    },
                  ],
                  false,
                ),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10,
              },
            },
            itemStyle: {
              normal: {
                color: 'rgba(16, 97, 204, 1)',
                borderColor: 'rgba(17, 235, 210, 0.20)',
                borderWidth: 12,
              },
            },
            data: seriesAData,
          },
          {
            name: 'B',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 4,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1,
              },
            },
            markPoint: markPointObj,
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: 'rgba(137, 189, 27, 0.3)',
                    },
                    {
                      offset: 0.8,
                      color: 'rgba(137, 189, 27, 0)',
                    },
                  ],
                  false,
                ),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10,
              },
            },
            itemStyle: {
              normal: {
                color: 'rgb(137, 189, 27)',
                borderColor: 'rgba(137, 189, 2, 0.27)',
                borderWidth: 12,
              },
            },
            data: seriesBData,
          },
          {
            name: 'C',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1,
              },
            },
            markPoint: markPointObj,
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: 'rgba(219, 50, 51, 0.3)',
                    },
                    {
                      offset: 0.8,
                      color: 'rgba(219, 50, 51, 0)',
                    },
                  ],
                  false,
                ),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10,
              },
            },
            itemStyle: {
              normal: {
                color: 'rgb(219,50,51)',
                borderColor: 'rgba(219, 50, 51, 0.2)',
                borderWidth: 12,
              },
            },
            data: seriesCData,
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

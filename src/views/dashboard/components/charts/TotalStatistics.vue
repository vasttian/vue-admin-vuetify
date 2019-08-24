<template>
  <v-card dark>
    <v-chart
      style="width:100%;"
      :options="chartOption"
      autoresize
    />
  </v-card>
</template>

<script>
import echarts from 'echarts/lib/echarts';

export default {
  name: 'TotalStatistics',
  data() {
    return {
      chartOption: {},
    };
  },
  created() {
    this.chartOption = this.buildChartOption();
  },
  methods: {
    buildChartOption() {
      const xAxisData = [
        '03:00',
        '06:00',
        '09:00',
        '12:00',
        '15:00',
        '18:00',
        '21:00',
        '24:00',
      ];
      const series1Data = [52, 150, 190, 182, 241, 160, 210, 140];
      const series2Data = [70, 170, 165, 200, 225, 185, 202, 120];

      return {
        backgroundColor: '#424956',
        grid: {
          left: 10,
          right: 18,
          bottom: '3%',
          containLabel: true,
        },
        title: {
          text: this.$t('dashboard.requestsNumber'),
          textStyle: {
            fontWeight: 'normal',
            fontSize: 19,
            color: '#fff',
          },
          left: '1%',
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          icon: 'rect',
          itemWidth: 16,
          itemHeight: 10,
          itemGap: 13,
          data: [
            this.$t('dashboard.yesterday'),
            this.$t('dashboard.dayBeforeYesterday'),
          ],
          right: '3%',
          top: this.$vuetify.breakpoint.xs ? 25 : 5,
          textStyle: {
            fontSize: 14,
            color: '#ffd285',
          },
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#6485a4',
              },
            },
            data: xAxisData,
          },
        ],
        yAxis: [
          {
            type: 'value',
            name: '(K)',
            nameLocation: this.$vuetify.breakpoint.xs ? 'middle' : 'end',
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#6485a4',
              },
            },
            axisLabel: {
              margin: 10,
              textStyle: {
                fontSize: 14,
              },
            },
            splitLine: {
              lineStyle: {
                color: '#57617B',
              },
            },
          },
        ],
        series: [
          {
            name: this.$t('dashboard.yesterday'),
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 3,
              },
            },
            areaStyle: {
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
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: 'rgba(16, 97, 204, 1)',
                },
                {
                  offset: 1,
                  color: 'rgba(17, 235, 210, 1)',
                },
              ]),
            },
            emphasis: {
              itemStyle: {
                color: 'rgb(0, 196, 132)',
                borderColor: 'rgba(0, 196, 132, 0.2)',
                extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                borderWidth: 10,
              },
            },
            data: series1Data,
          },
          {
            name: this.$t('dashboard.dayBeforeYesterday'),
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 3,
              },
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                1,
                0,
                [
                  {
                    offset: 0,
                    color: 'rgba(205, 52, 42, 0.5)',
                  },
                  {
                    offset: 0.8,
                    color: 'rgba(235, 235, 21, 0)',
                  },
                ],
                false,
              ),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowBlur: 10,
            },
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: 'rgba(205, 52, 42, 1)',
                },
                {
                  offset: 1,
                  color: 'rgba(235, 235, 21, 1)',
                },
              ]),
            },
            emphasis: {
              itemStyle: {
                color: 'rgb(99, 250, 235)',
                borderColor: 'rgba(99, 250, 235, 0.2)',
                extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                borderWidth: 10,
              },
            },
            data: series2Data,
          },
        ],
      };
    },
  },
};
</script>

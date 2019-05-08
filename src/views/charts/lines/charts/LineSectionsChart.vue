<template>
  <v-chart
    style='width:100%;'
    :options='chartOption'
    autoresize
  />
</template>

<script>
export default {
  name: 'SectionsLineChart',
  data() {
    return {
      chartOption: {},
    };
  },
  methods: {
    buildChartOption() {
      const xAxisData = [
        '00:00',
        '01:00',
        '02:00',
        '03:00',
        '04:00',
        '05:00',
        '06:00',
        '07:00',
        '08:00',
        '09:00',
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
        '22:00',
        '23:00',
        '24:00',
      ];
      const seriesData = [
        5,
        1,
        1,
        1,
        1.5,
        2,
        3.5,
        8,
        10,
        16,
        21,
        12,
        10,
        9,
        8,
        5.5,
        5,
        7,
        15,
        25,
        23.5,
        25,
        20.5,
        14,
        12,
      ];

      const option = {
        backgroundColor: '#F3F3F3',
        title: {
          text: 'Line - Sections',
        },
        legend: {
          show: true,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
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
          boundaryGap: false,
          data: xAxisData,
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value} K',
          },
          axisPointer: {
            snap: true,
          },
        },
        visualMap: {
          type: 'piecewise',
          show: false,
          dimension: 0,
          pieces: [
            {
              lte: 7,
              color: 'green',
            },
            {
              gt: 7,
              lte: 10,
              color: 'red',
            },
            {
              gt: 10,
              lte: 17,
              color: 'green',
            },
            {
              gt: 17,
              lte: 22,
              color: 'red',
            },
            {
              gt: 22,
              color: 'green',
            },
          ],
        },
        series: [
          {
            name: '客流量',
            type: 'line',
            smooth: true,
            data: seriesData,
            markArea: {
              data: [
                [
                  {
                    name: '早高峰',
                    xAxis: '07:00',
                  },
                  {
                    xAxis: '10:00',
                  },
                ],
                [
                  {
                    name: '晚高峰',
                    xAxis: '17:00',
                  },
                  {
                    xAxis: '22:00',
                  },
                ],
              ],
              itemStyle: {
                color: '#FF8A65',
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

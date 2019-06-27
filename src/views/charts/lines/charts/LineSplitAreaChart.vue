<template>
  <v-chart
    style="width:100%;"
    :options="chartOption"
    autoresize
  />
</template>

<script>
export default {
  name: 'SplitAreaLineChart',
  data() {
    return {
      chartOption: {},
    };
  },
  methods: {
    buildChartOption() {
      let base = +new Date(2018, 12, 15);
      let dividingLine = null;
      const oneDay = 24 * 3600 * 1000;
      const legendData = ['A', 'B'];
      const seriesData1 = [];
      const seriesData2 = [];
      const xAxisData = [];

      for (let i = 0; i < 20; i += 1) {
        const now = new Date((base += oneDay));
        const date = [
          now.getFullYear(),
          now.getMonth() + 1,
          now.getDate(),
        ].join('/');
        const serie = Math.abs(Math.round(Math.random() * 30));
        xAxisData.push(date);
        if (i < 10) {
          seriesData1.push([date, serie]);
          seriesData2.push([date, '-']);
        } else if (i === 10) {
          dividingLine = date;
          seriesData1.push([date, serie]);
          seriesData2.push([date, serie]);
        } else {
          seriesData2.push([date, serie]);
        }
      }

      // console.log('xAxisData',xAxisData);
      const option = {
        title: {
          text: 'Line - Split Area',
        },
        grid: {
          show: false,
          top: '30%',
          right: 5,
          bottom: '2%',
          left: 0,
          containLabel: true,
        },
        toolbox: {
          show: true,
          right: 20,
          feature: {
            saveAsImage: {},
          },
        },
        tooltip: {
          trigger: 'axis',
          textStyle: {
            fontSize: 12,
          },
          padding: 8,
          backgroundColor: 'rgba(6, 34, 72, 0.95)',
          axisPointer: {
            show: true,
            lineStyle: {
              color: '#365583',
              type: 'dotted',
            },
          },
          formatter: (params) => {
            const param = params[0];
            const { data } = param;
            // console.log('dddddd', params[0]);
            return `${data[0]}
              <br>
              ${param.marker} ${param.seriesName}: ${data[1]}
            `;
          },
        },
        legend: {
          show: true,
          // selectedMode: false,
          top: 6,
          right: 50,
          data: legendData,
          textStyle: {
            color: '#365583',
          },
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: true,
            data: xAxisData,
            axisLine: {
              lineStyle: {
                color: '#8F9DB2',
              },
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              color: '#8F9DB2',
              align: 'center',
              textStyle: {
                fontSize: 12,
              },
            },
            axisPointer: {
              show: true,
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            position: 'left',
            axisLine: {
              show: false,
              lineStyle: {
                color: '#8F9DB2',
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              lineStyle: {
                color: '#DADFE6',
                type: 'dotted',
              },
            },
          },
        ],
        series: [
          {
            name: legendData[0],
            type: 'line',
            symbol: 'emptyCircle',
            symbolSize: 8,
            showSymbol: true,
            data: seriesData1,
            itemStyle: {
              color: '#8F9DB2',
              borderWidth: 1,
            },
            lineStyle: {
              color: '#8F9DB2',
              width: 1,
            },
            areaStyle: {
              color: 'rgba(143, 157, 178, .3)',
            },
            emphasis: {
              symbolSize: 10,
            },
            markLine: {
              symbol: 'none',
              data: [
                {
                  xAxis: dividingLine,
                },
              ],
              label: {
                show: true,
                position: 'end',
                backgroundColor: '#8F9DB2',
                color: '#fff',
                padding: 4,
              },
              lineStyle: {
                color: '#365583',
                width: 1,
              },
            },
          },
          {
            name: legendData[1],
            type: 'line',
            symbol: 'emptyCircle',
            symbolSize: 8,
            showSymbol: true,
            data: seriesData2,
            itemStyle: {
              color: '#2CAEF9',
              borderWidth: 1,
            },
            lineStyle: {
              color: '#2CAEF9',
              width: 1,
            },
            areaStyle: {
              color: 'rgba(44, 174, 249, .3)',
            },
            emphasis: {
              symbolSize: 10,
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

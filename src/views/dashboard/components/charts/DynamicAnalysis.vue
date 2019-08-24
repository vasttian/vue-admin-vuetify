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
  name: 'DynamicAnalysis',
  data() {
    return {
      chartOption: {},
      num: 10,
      timer: null,
      timeFormat: 'HH:mm:ss',
      interval: 2000,
    };
  },
  created() {
    this.chartOption = this.buildChartOption(this.initialData());
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    randomNum() {
      return parseFloat(Math.random() * 10 + 7).toFixed(0);
    },
    getXAxisData() {
      const data = [];
      let tempTime = new Date();

      for (let i = 0; i < this.num; i += 1) {
        // console.log('====', this.$moment(tempTime).format('HH:mm:ss'));
        // data.unshift(tempTime.toLocaleTimeString('en-US', { hour12: false }));
        // tempTime = new Date(tempTime - this.interval);
        data.unshift(this.$moment(tempTime).format(this.timeFormat));
        tempTime = this.$moment(tempTime).subtract(
          this.interval / 1000,
          'seconds',
        );
      }

      return data;
    },
    buildChartOption(data) {
      const option = {
        backgroundColor: '#37474F',
        grid: {
          left: 10,
          right: this.$vuetify && this.$vuetify.breakpoint.xs ? 10 : 25,
          bottom: '3%',
          containLabel: true,
        },
        title: {
          text: this.$t('dashboard.visitorsNumber'),
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
          show: false,
          data: ['人数'],
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
            data: this.getXAxisData(),
          },
        ],
        yAxis: [
          {
            type: 'value',
            scale: true,
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
            boundaryGap: [0.2, 0.3],
          },
        ],
        series: [
          {
            name: '人数',
            type: 'line',
            showSymbol: false,
            symbol: 'circle',
            smooth: true,
            itemStyle: {
              color: '#0288D1',
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
                    color: 'rgba(7, 203, 247, 0.4)',
                  },
                  {
                    offset: 0.8,
                    color: 'rgba(7, 203, 247, 0)',
                  },
                ],
                false,
              ),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowBlur: 10,
            },
            markLine: {
              data: [
                {
                  name: '最新值',
                  yAxis: data.slice(-1) || 0,
                  lineStyle: {
                    color: '#40C4FF',
                  },
                  label: {
                    position: this.$vuetify && this.$vuetify.breakpoint.xs ? 'middle' : 'end',
                  },
                },
              ],
            },
            data,
          },
        ],
      };

      const that = this;
      that.timer = setInterval(() => {
        const xAxisData = option.xAxis[0].data;
        const seriesData = option.series[0].data;

        seriesData.shift();
        seriesData.push(that.randomNum());
        xAxisData.shift();
        xAxisData.push(this.$moment().format(this.timeFormat));
        option.series[0].markLine.data[0].yAxis = seriesData.slice(-1)[0] || 0;
      }, that.interval);

      return option;
    },
    initialData() {
      const cnt = [];

      for (let i = 0; i < this.num; i += 1) {
        cnt.push(this.randomNum());
      }

      return cnt;
    },
  },
};
</script>

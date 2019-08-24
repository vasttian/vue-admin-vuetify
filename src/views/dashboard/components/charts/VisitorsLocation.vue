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

// Map of China
import chinaMap from './data/china.json';

// registering map data
echarts.registerMap('china', chinaMap);

export default {
  name: 'VisitorsLocation',
  data() {
    return {
      chartOption: {},
      top: 10,
      data: [
        { name: '北京', value: 1023 },
        { name: '上海', value: 789 },
        { name: '广东', value: 1436 },
        { name: '四川', value: 928 },
        { name: '陕西', value: 249 },
        { name: '重庆', value: 345 },
        { name: '浙江', value: 895 },
        { name: '江苏', value: 570 },
        { name: '山东', value: 769 },
        { name: '福建', value: 489 },
        { name: '天津', value: 359 },
        { name: '湖北', value: 455 },
        { name: '湖南', value: 580 },
        { name: '河北', value: 238 },
        { name: '河南', value: 459 },
        { name: '安徽', value: 479 },
        { name: '云南', value: 234 },
        { name: '贵州', value: 239 },
        { name: '江西', value: 347 },
        { name: '广西', value: 238 },
        { name: '山西', value: 259 },
        { name: '辽宁', value: 160 },
        { name: '吉林', value: 376 },
        { name: '黑龙江', value: 190 },
        { name: '内蒙古', value: 86 },
        { name: '新疆', value: 120 },
        { name: '甘肃', value: 102 },
        { name: '宁夏', value: 57 },
        { name: '青海', value: 49 },
        { name: '西藏', value: 60 },
        { name: '海南', value: 101 },
        { name: '台湾', value: 369 },
        { name: '香港', value: 359 },
        { name: '澳门', value: 26 },
        { name: '南海诸岛', value: 0 },
      ],
    };
  },
  created() {
    this.chartOption = this.buildChartOption(this.data, this.top);
  },
  methods: {
    buildChartOption(data, top) {
      /* eslint-disable no-param-reassign */
      if (top > data.length) {
        top = data.length;
      }

      let maximumCnt = 0;
      const topData = [];
      const contrastData = [];
      const yAxisData = [];

      data.sort((a, b) => b.value - a.value);
      maximumCnt = data[0].value;
      for (let i = 0; i < top; i += 1) {
        topData.push({
          name: data[i].name,
          value: data[i].value,
        });
        contrastData.push(maximumCnt);
        yAxisData.push(data[i].name);
      }

      return {
        grid: {
          top: 50,
          right: 10,
          bottom: 20,
          width: '40%',
          containLabel: true,
        },
        title: [
          {
            text: this.$t('dashboard.visitorDistribution'),
            textStyle: {
              fontWeight: 'normal',
              fontSize: 19,
              color: '#fff',
            },
            top: 5,
            left: '1%',
          },
          {
            text: `TOP ${top} 地区`,
            textStyle: {
              fontWeight: 'normal',
              fontSize: 19,
              color: '#fff',
            },
            top: 5,
            right: 10,
          },
        ],
        legend: {
          show: false,
        },
        tooltip: {
          trigger: 'item',
        },
        visualMap: {
          type: 'continuous',
          min: 0,
          max: maximumCnt * 1.2,
          range: [0, maximumCnt * 1.1],
          calculable: true,
          seriesIndex: [0, 1],
          dimension: 0,
          left: 10,
          bottom: 10,
          itemHeight: 100,
          textStyle: {
            color: '#fff',
          },
          inRange: {
            color: ['#4FC3F7', '#2962FF'],
            symbolSize: [50, 100],
          },
          outOfRange: {
            color: ['#eeeeee'],
            symbolSize: [100, 100],
          },
        },
        xAxis: [
          {
            type: 'value',
            position: 'top',
            axisLabel: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            margin: 10,
          },
        ],
        yAxis: [
          {
            type: 'category',
            inverse: true,
            axisLabel: {
              color: '#6485a4',
              align: 'right',
              margin: 10,
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            data: yAxisData,
          },
        ],
        series: [
          {
            name: '分布',
            type: 'map',
            mapType: 'china',
            left: 40,
            width: '40%',
            roam: 'scale',
            zoom: 0.7,
            mapValueCalculation: 'sum',
            showLegendSymbol: false,
            emphasis: {
              label: {
                color: 'blue',
              },
              itemStyle: {
                areaColor: '#00ACC1',
              },
            },
            itemStyle: {
              // areaColor: '#00ACC1',
              borderColor: '#fff',
            },
            data,
          },
          {
            name: '人数',
            type: 'bar',
            roam: false,
            itemStyle: {
              color: '#26C6DA',
            },
            barWidth: 20,
            label: {
              show: true,
              fontSize: 14,
              position: 'insideLeft',
            },
            emphasis: {
              itemStyle: {
                color: '#80DEEA',
              },
            },
            data: topData,
          },
          {
            name: 'Shadow',
            type: 'bar',
            silent: true,
            itemStyle: {
              color: '#78909C',
              opacity: 0.2,
            },
            barWidth: 20,
            barGap: '-100%',
            animation: false,
            data: contrastData,
          },
        ],
      };
    },
  },
};
</script>

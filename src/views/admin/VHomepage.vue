<template>
  <div>
    <div style="text-align:center; margin-bottom:70px;">
      <h2>Hello, Welcome to come here.</h2>
      <h3>This is a beta version.</h3>
      <h3>Start your creation as much as you can.</h3>
    </div>
    <v-layout column>
      <v-flex justify-center>
        <v-tooltip right>
          <v-btn
            icon
            large
            :href="source"
            target="_blank"
            slot="activator"
          >
            <v-icon large>code</v-icon>
          </v-btn>
          <span>Source</span>
        </v-tooltip>
      </v-flex>
      <v-flex>
        <v-chart
          style="width:100%;"
          :options="chartOption"
          autoresize
        />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
/* eslint-disable import/no-extraneous-dependencies */
import echarts from 'echarts/lib/echarts';

export default {
  name: 'Homepage',
  data() {
    return {
      isCollapse: true,
      source:
        'https://github.com/vasttian/vue-admin-vuetify/blob/master/src/views/admin/VHomepage.vue',
      chartOption: {
        backgroundColor: '#394056',
        title: {
          text: '请求数',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#F1F1F3',
          },
          left: '6%',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              color: '#57617B',
            },
          },
        },
        legend: {
          icon: 'rect',
          itemWidth: 14,
          itemHeight: 5,
          itemGap: 13,
          data: ['移动', '电信', '联通'],
          right: '4%',
          textStyle: {
            fontSize: 12,
            color: '#F1F1F3',
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            axisLine: {
              lineStyle: {
                color: '#57617B',
              },
            },
            data: [
              '13:00',
              '13:05',
              '13:10',
              '13:15',
              '13:20',
              '13:25',
              '13:30',
              '13:35',
              '13:40',
              '13:45',
              '13:50',
              '13:55',
            ],
          },
          {
            axisPointer: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: '#57617B',
              },
            },
            axisTick: {
              show: false,
            },
            position: 'bottom',
            offset: 20,
            data: [
              '',
              '',
              '',
              '',
              '',
              '',
              '',
              '',
              '',
              '',
              {
                value: '周六',
                textStyle: {
                  align: 'left',
                },
              },
              '周日',
            ],
          },
        ],
        yAxis: [
          {
            type: 'value',
            name: '单位（%）',
            axisTick: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: '#57617B',
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
            name: '移动',
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
                color: 'rgb(137,189,27)',
                borderColor: 'rgba(137,189,2,0.27)',
                borderWidth: 12,
              },
            },
            data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122],
          },
          {
            name: '电信',
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
                      color: 'rgba(0, 136, 212, 0.3)',
                    },
                    {
                      offset: 0.8,
                      color: 'rgba(0, 136, 212, 0)',
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
                color: 'rgb(0,136,212)',
                borderColor: 'rgba(0,136,212,0.2)',
                borderWidth: 12,
              },
            },
            data: [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150],
          },
          {
            name: '联通',
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
                borderColor: 'rgba(219,50,51,0.2)',
                borderWidth: 12,
              },
            },
            data: [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122],
          },
        ],
      },
    };
  },
  methods: {},
};
</script>

<style>
</style>

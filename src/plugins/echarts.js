import Vue from 'vue';
import ECharts from 'vue-echarts/components/ECharts.vue';

/* eslint-disable import/no-extraneous-dependencies */
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/title';

Vue.component('v-chart', ECharts);

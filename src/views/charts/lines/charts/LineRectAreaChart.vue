<template>
  <v-chart
    style="width:100%;"
    :options="chartOption"
    auto-resize
  />
</template>

<script>
export default {
  name: 'RectAreaLine',
  data() {
    return {
      chartOption: {},
    };
  },
  methods: {
    buildChartOption() {
      const option = {};

      return option;
    },
  },
  created() {
    this.chartOption = this.buildChartOption();
  },
};
</script>

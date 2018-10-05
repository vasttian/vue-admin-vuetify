<template>
  <div>
    <!-- <h2>Dashboard</h2> -->
    <v-layout justify-center align-center wrap>
      <v-flex lg12 sm12 xs12>
        <total-statistics></total-statistics>
      </v-flex>
      <v-flex
        lg3
        sm6
        xs12
        v-for="(config, index) in indicatorConfig"
        :key="index">
        <v-card>
          <separate-indicator :config="config"></separate-indicator>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import TotalStatistics from './components/charts/TotalStatistics.vue';
import SeparateIndicator from './components/SeparateIndicator.vue';

export default {
  name: 'Dashboard',
  components: {
    TotalStatistics,
    SeparateIndicator,
  },
  data() {
    return {
      chartOption: {},
      indicatorConfig: [
        {
          icon: 'face',
          title: 'CUSTOMERS',
          count: 1368,
        },
        {
          icon: 'message',
          title: 'CUSTOMERS',
          count: 127,
        },
        {
          icon: 'assessment',
          title: 'CUSTOMERS',
          count: 283,
        },
        {
          icon: 'get_app',
          title: 'CUSTOMERS',
          count: 3206,
        },
      ],
    };
  },
  methods: {

  },
  created() {

  },
};
</script>

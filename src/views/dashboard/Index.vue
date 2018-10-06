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
    <v-layout justify-center align-center wrap>
      <v-flex lg12 sm12 xs12>
        <visitors-location></visitors-location>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import TotalStatistics from './components/charts/TotalStatistics.vue';
import SeparateIndicator from './components/SeparateIndicator.vue';
import VisitorsLocation from './components/charts/VisitorsLocation.vue';

export default {
  name: 'Dashboard',
  components: {
    TotalStatistics,
    SeparateIndicator,
    VisitorsLocation,
  },
  data() {
    return {
      chartOption: {},
      indicatorConfig: [
        {
          color: 'teal',
          icon: 'people',
          title: 'VISITORS',
          count: 3206,
        },
        {
          color: 'light-blue',
          icon: 'message',
          title: 'MESSAGES',
          count: 127,
        },
        {
          color: 'cyan accent-3',
          icon: 'share',
          title: 'SHARES',
          count: 983,
        },
        {
          color: 'indigo',
          icon: 'get_app',
          title: 'DOWNLOADS',
          count: 2368,
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

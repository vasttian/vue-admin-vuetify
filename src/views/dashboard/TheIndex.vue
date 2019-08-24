<template>
  <div style="overflow-x: hidden;">
    <!-- <h2>Dashboard</h2> -->
    <v-layout
      justify-center
      align-center
      wrap
    >
      <v-flex xs12>
        <dynamic-analysis />
      </v-flex>
      <v-flex xs12>
        <total-statistics />
      </v-flex>
      <v-flex
        lg3
        sm6
        xs12
        v-for="(config, index) in indicatorConfig"
        :key="index"
      >
        <v-card>
          <separate-indicator :config="config" />
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout
      justify-center
      align-center
      wrap
    >
      <v-flex xs12>
        <visitors-location />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import {
  DynamicAnalysis,
  TotalStatistics,
  VisitorsLocation,
  SeparateIndicator,
} from './components';

export default {
  name: 'Dashboard',
  components: {
    DynamicAnalysis,
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
};
</script>

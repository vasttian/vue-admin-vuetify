<template>
  <div>
    <h2>Dashboard</h2>
    <v-layout justify-center align-center>
      <v-flex>
        <total-statistics></total-statistics>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import TotalStatistics from './components/charts/TotalStatistics.vue';

export default {
  name: 'Dashboard',
  components: {
    TotalStatistics,
  },
  data() {
    return {
      chartOption: {},
    };
  },
  methods: {

  },
  created() {

  },
};
</script>

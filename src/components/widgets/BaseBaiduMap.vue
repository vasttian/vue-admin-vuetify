<template>
  <baidu-map
    class="bm-view"
    :center="center"
    :zoom="zoom"
    @ready="handler"
    :ak="appKey">
  </baidu-map>
</template>

<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue';

export default {
  name: 'BaseBaiduMap',
  components: {
    BaiduMap,
  },
  data() {
    return {
      appKey: 'np5hzZH52fbM7H1k1TVh8Gwln4GV4ldv',
      center: {
        lng: 0,
        lat: 0,
      },
      zoom: 3,
    };
  },
  methods: {
    handler({ BMap, map }) {
      console.log(BMap, map);
      // this.center.lng = 116.404;
      // this.center.lat = 39.915;
      this.center = '深圳';
      this.zoom = 13;
    },
  },
};
</script>

<style>
.bm-view {
  width: 100%;
  height: 500px;
}
</style>

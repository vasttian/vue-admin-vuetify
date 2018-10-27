<template>
  <div>
    <v-form>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 sm4>
            <v-text-field
              label="Longitude"
              v-model.number="center.lng"
              prepend-icon="place"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm4>
            <v-text-field
              label="Latitude"
              v-model.number="center.lat"
              prepend-icon="place"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm4>
            <v-text-field
              label="Zoom"
              v-model.number="zoom"
              prepend-icon="zoom_out_map"
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
    <baidu-map
      class="bm-view"
      :center="center"
      :zoom="zoom"
      :scroll-wheel-zoom="true"
      @ready="handler"
      @moving="syncCenterAndZoom"
      @moveend="syncCenterAndZoom"
      @zoomend="syncCenterAndZoom"
      :ak="appKey">
    </baidu-map>
  </div>
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
        lng: 113.952,
        lat: 22.543,
      },
      zoom: 15,
      mapType: 'BMAP_SATELLITE_MAP',
    };
  },
  methods: {
    syncCenterAndZoom (e) {
      const { lng, lat } = e.target.getCenter();
      this.center.lng = lng;
      this.center.lat = lat;
      this.zoom = e.target.getZoom();
    },
    handler({ BMap, map }) {
      // console.log(BMap, map);
      // this.center.lng = 116.404;
      // this.center.lat = 39.915;
      // this.center = '深圳';
      // this.zoom = 13;
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

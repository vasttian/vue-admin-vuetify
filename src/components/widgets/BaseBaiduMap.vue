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
      <bm-city-list
        :offset="{ width: 10, height: 40 }"
        anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
      <bm-map-type
        :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']"
        :offset="{ width: 10, height: 10 }"
        anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
      <bm-overview-map
        anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
        :isOpen="true"></bm-overview-map>
      <bm-geolocation
        anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
        :showAddressBar="true"
        :autoLocation="true"></bm-geolocation>
      <!-- <bm-marker :position="{lng: 116.404, lat: 39.915}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
        <bm-label content="我爱北京天安门" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>
      </bm-marker> -->
    </baidu-map>
  </div>
</template>

<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue';
import {
  BmNavigation,
  BmMapType,
  BmOverviewMap,
  BmGeolocation,
  BmCityList,
} from 'vue-baidu-map/components';

export default {
  name: 'BaseBaiduMap',
  components: {
    BaiduMap,
    BmCityList,
    BmNavigation,
    BmMapType,
    BmOverviewMap,
    BmGeolocation,
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

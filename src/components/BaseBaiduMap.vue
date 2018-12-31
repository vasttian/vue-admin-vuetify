<template>
  <div>
    <v-form>
      <v-container>
        <v-layout
          row
          wrap
        >
          <v-flex
            xs12
            sm4
          >
            <v-text-field
              label="Longitude"
              v-model.number="center.lng"
              prepend-icon="place"
            ></v-text-field>
          </v-flex>
          <v-flex
            xs12
            sm4
          >
            <v-text-field
              label="Latitude"
              v-model.number="center.lat"
              prepend-icon="place"
            ></v-text-field>
          </v-flex>
          <v-flex
            xs12
            sm4
          >
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
      @moving="syncCenterAndZoom"
      @moveend="syncCenterAndZoom"
      @zoomend="syncCenterAndZoom"
      :ak="appKey"
    >
      <bm-city-list
        :offset="{ width: 90, height: 55 }"
        anchor="BMAP_ANCHOR_TOP_LEFT"
      />
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT" />
      <bm-map-type
        :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']"
        :offset="{ width: 0, height: 55 }"
        anchor="BMAP_ANCHOR_TOP_LEFT"
      />
      <bm-overview-map
        anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
        :isOpen="true"
      />
      <bm-geolocation
        anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
        :showAddressBar="true"
        :autoLocation="true"
      />
      <bm-marker
        :position="{ lng: 113.9504, lat: 22.544 }"
        :dragging="true"
        animation="BMAP_ANIMATION_BOUNCE"
      >
        <!-- <bm-label
          content="Here"
          :labelStyle="{ color: 'red', fontSize : '20px' }"
          :offset="{ width: -13, height: 30 }"/> -->
      </bm-marker>
      <!-- <bm-view class="map"/> -->
      <bm-control>
        <bm-auto-complete
          v-model="keyword"
          :sugStyle="{ zIndex: 12 }"
        >
          <v-text-field
            height="32"
            solo
            placeholder="Please search"
          ></v-text-field>
        </bm-auto-complete>
      </bm-control>
      <bm-local-search
        :keyword="keyword"
        :auto-viewport="true"
      />
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
  BmMarker,
  BmLabel,
  BmView,
  BmControl,
  BmAutoComplete,
  BmLocalSearch,
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
    BmMarker,
    BmLabel,
    BmView,
    BmControl,
    BmAutoComplete,
    BmLocalSearch,
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
      keyword: '',
    };
  },
  methods: {
    syncCenterAndZoom(e) {
      const { lng, lat } = e.target.getCenter();
      this.center.lng = lng;
      this.center.lat = lat;
      this.zoom = e.target.getZoom();
    },
    // Readyhandler({ BMap, map }) {
    //   console.log(BMap, map);
    //   // this.center.lng = 116.404;
    //   // this.center.lat = 39.915;
    //   // this.center = '深圳';
    //   // this.zoom = 13;
    // },
  },
};
</script>

<style>
.bm-view {
  width: 100%;
  height: 500px;
  margin-top: 25px;
}
</style>

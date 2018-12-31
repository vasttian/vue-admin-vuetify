<template>
  <div class="screenfull">
    <svg
      v-if="!isFullscreen"
      class="icon"
      style=""
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      :width="width"
      :height="height"
      @click="handleClick"
    >
      <path
        d="M339.432 63.594H99.944c-19.851 0-36 16.149-36 36v239.488c0 17.673 14.327 32 32 32s32-14.327
          32-32V127.594h211.487c17.673 0 32-14.327 32-32 0.001-17.673-14.326-32-31.999-32zM339.432
          895.503H127.944V684.016c0-17.673-14.327-32-32-32s-32 14.327-32 32v239.487c0 19.851 16.149 36
          36 36h239.487c17.673 0 32-14.327 32-32s-14.326-32-31.999-32zM928 651.915c-17.673 0-32 14.327-32
          32v211.487H684.513c-17.673 0-32 14.327-32 32s14.327 32 32 32H924c19.851 0 36-16.149
          36-36V683.915c0-17.673-14.327-32-32-32zM924 64.151H684.513c-17.673 0-32 14.327-32 32s14.327 32
          32 32H896v211.488c0 17.673 14.327 32 32 32s32-14.327 32-32V100.151c0-19.851-16.149-36-36-36z"
        :fill="fill"
        p-id="7786"
      >
      </path>
    </svg>
    <svg
      v-else
      class="icon"
      style=""
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      :width="width"
      :height="height"
      @click="handleClick"
    >
      <path
        d="M95.944 371.082h239.487c19.851 0 36-16.149 36-36V95.594c0-17.673-14.327-32-32-32s-32 14.327-32
        32v211.488H95.944c-17.673 0-32 14.327-32 32 0 17.672 14.327 32 32 32zM95.944 716.016h211.487v211.487c0
        17.673 14.327 32 32 32s32-14.327 32-32V688.016c0-19.851-16.149-36-36-36H95.944c-17.673 0-32 14.327-32
        32s14.327 32 32 32zM684.513 959.402c17.673 0 32-14.327 32-32V715.915H928c17.673 0 32-14.327
        32-32s-14.327-32-32-32H688.513c-19.851 0-36 16.149-36 36v239.487c0 17.673 14.327 32 32 32zM688.513
        371.639H928c17.673 0 32-14.327 32-32s-14.327-32-32-32H716.513V96.151c0-17.673-14.327-32-32-32s-32
        14.327-32 32v239.488c0 19.85 16.149 36 36 36z"
        :fill="fill"
        p-id="8319"
      >
      </path>
    </svg>
  </div>
</template>

<script>
import Screenfull from 'screenfull';

export default {
  name: 'Screenfull',
  props: {
    width: {
      type: Number,
      default: 32,
    },
    height: {
      type: Number,
      default: 32,
    },
    fill: {
      type: String,
      default: '#0b0b0b',
    },
  },
  data() {
    return {
      isFullscreen: Screenfull.isFullscreen || false,
    };
  },
  methods: {
    handleClick() {
      if (!Screenfull.enabled) {
        this.$message({
          text: 'Your browser does not support full screen',
          type: 'warning',
        });
        return;
      }

      this.isFullscreen = !this.isFullscreen;
      Screenfull.toggle();
    },
  },
};
</script>

<style lang="scss" scoped>
.screenfull {
  display: flex;
  align-items: center;
}
</style>

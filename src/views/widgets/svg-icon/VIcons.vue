<template>
  <div>
    <h2>Icons</h2>
    <div>
      <div
        v-for="(item, index) in iconsMap"
        @click="handleClipboard('.icon-item', generateCode(item))"
        :key="index">
        <v-tooltip
          z-index="1003"
          top>
          <div
            slot="activator"
            class="icon-item">
            <svg-icon :icon-class="item"/>
            <span>{{ item }}</span>
          </div>
          <span>{{ generateCode(item) }}</span>
        </v-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
import handleClipboard from '@/utils/clipboard';
import icons from './requireIcons';

export default {
  name: 'Icons',
  data() {
    return {
      iconsMap: icons,
    };
  },
  methods: {
    generateCode(item) {
      return `<svg-icon icon-class="${item}"/>`;
    },
    handleClipboard(target, text) {
      handleClipboard(target, text);
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-item {
  margin: 20px;
  width: 100px;
  height: 100px;
  font-size: 32px;
  text-align: center;
  float: left;
  color: #666666;
  cursor: pointer;
}

span {
  display: block;
  margin-top: 10px;
  font-size: 18px;
  word-break: keep-all;
  word-wrap: break-word;
}
</style>

<template>
  <div>
    <h2>Icons</h2>
    <div>
      <div
        v-for="(item, index) in iconsMap"
        :key="index"
        class="icon-item">
        <svg-icon :icon-class="item"></svg-icon>
        <span>{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import icons from './requireIcons';

export default {
  name: 'Icons',
  data() {
    return {
      iconsMap: icons,
    };
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
  color: #020a13;
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

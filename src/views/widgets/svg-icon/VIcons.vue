<template>
  <v-layout row>
    <v-card>
      <v-subheader>Icons</v-subheader>
      <v-container
        fluid
        grid-list-xl
      >
        <v-layout
          row
          wrap
        >
          <v-flex
            v-for="(item, index) in iconsMap"
            @click="handleClipboard('.icon-item', generateCode(item))"
            :key="index"
          >
            <v-tooltip
              z-index="1003"
              top
            >
              <div
                slot="activator"
                class="icon-item"
              >
                <svg-icon :icon-class="item" />
                <span>{{ item }}</span>
              </div>
              <span>{{ generateCode(item) }}</span>
            </v-tooltip>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-layout>
</template>

<script>
import handleClipboard from '@/utils/clipboard';
import icons from './requireIcons';

export default {
  name: 'VIcons',
  data() {
    return {
      iconsMap: icons,
    };
  },
  methods: {
    generateCode(item) {
      return `<svg-icon icon-class="${item}" />`;
    },
    handleClipboard(target, text) {
      handleClipboard(target, text);
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-item {
  // margin: 20px;
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

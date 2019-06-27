<template>
  <v-fab-transition>
    <v-btn
      v-scroll="onScroll"
      v-show="fab"
      fab
      dark
      fixed
      bottom
      right
      color="red"
      @click="toTop"
    >
      <v-icon>keyboard_arrow_up</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
import { smoothScrollTo } from '@/utils/util';

export default {
  name: 'AppFab',
  data() {
    return {
      fab: false,
    };
  },
  methods: {
    onScroll() {
      // console.log('---document.documentElement.scrollTop', document.documentElement.scrollTop);
      // console.log('---document.body.scrollTop', document.body.scrollTop);
      // console.log('---main-container scrollTop', document.querySelector('.main-container').scrollTop);
      if (typeof window === 'undefined') {
        return;
      }

      const top = window.pageYOffset
        || window.scrollY
        || document.documentElement.scrollTop
        || document.body.scrollTop
        || document.querySelector('#main-container').scrollTop
        || 0;
      // console.log('---top-------', top);
      this.fab = top > 100;
    },
    toTop() {
      this.$router.push({ hash: '' });
      smoothScrollTo(document.documentElement, 0, 600);
      // document.querySelector('#main-container').scrollTop = 0;
      // const el = document.body;
      // this.$vuetify.goTo(0);
      // el.scrollTo({
      //   top: 0,
      //   behavior: 'smooth',
      // });
    },
  },
};
</script>

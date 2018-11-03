<template>
  <v-fab-transition>
    <v-btn
      v-scroll:body="onScroll"
      v-show="fab"
      fab
      dark
      fixed
      bottom
      right
      color="red"
      @click="toTop">
      <v-icon>keyboard_arrow_up</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
export default {
  name: 'AppFab',
  data() {
    return {
      fab: false,
    };
  },
  methods: {
    onScroll() {
      if (typeof window === 'undefined') {
        return;
      }

      const top = window.pageYOffset ||
        window.scrollY ||
        document.documentElement.offsetTop ||
        document.body.scrollTop ||
        0;
      this.fab = top > 100;
    },
    toTop() {
      this.$router.push({ hash: '' });
      const el = document.body;

      // this.$vuetify.goTo(0);
      el.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>

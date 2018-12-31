<template>
  <v-content>
    <the-breadcrumb layout-class="pl-3 pb-0" />
    <v-container fluid>
      <v-slide-y-transition mode="out-in">
        <router-view />
      </v-slide-y-transition>
    </v-container>
  </v-content>
</template>

<script>
import TheBreadcrumb from '@/components/TheBreadcrumb.vue';

export default {
  name: 'AppMain',
  components: {
    TheBreadcrumb,
  },
};
</script>

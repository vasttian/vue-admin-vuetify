<template>
  <div>
    <v-breadcrumbs
      :items="items"
      divider="/"
      :class="layoutClass"
    >
    </v-breadcrumbs>
  </div>
</template>

<script>
export default {
  name: 'TheBreadcrumb',
  props: ['layoutClass'],
  data() {
    return {};
  },
  computed: {
    items() {
      const { path, matched } = this.$route;
      const items = [];

      for (let i = 0, len = matched.length; i < len; i += 1) {
        const route = matched[i];
        if (route.name) {
          items.push({
            text: route.name,
            disabled: route.path === path,
            to: route.path,
          });
        }
      }

      return items;
    },
  },
};
</script>

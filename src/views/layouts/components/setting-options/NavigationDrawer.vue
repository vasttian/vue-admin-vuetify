<template>
  <div>
    <v-subheader class="pl-0">
      Navigation drawer
    </v-subheader>
    <v-flex>
      <!-- <v-switch
        :label="`Clipped: ${clipped.toString()}`"
        v-model="clipped"
      ></v-switch> -->
      <v-switch
        color="primary"
        v-model="temporary"
        :label="`Temporary: ${temporary.toString()}`"
        @change="changeTemporary"
      ></v-switch>
    </v-flex>
  </div>
</template>

<script>
export default {
  name: 'NavigationDrawer',
  data() {
    return {
      clipped: false,
      temporary: false,
    };
  },
  methods: {
    changeTemporary() {
      this.$emit('toggleTemporary', this.temporary);
    },
  },
};
</script>

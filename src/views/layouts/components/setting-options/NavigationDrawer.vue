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
        :label="`Temporary: ${temporary.toString()}`"
        @change="changeTemporary"
        v-model="temporary"
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
    changeTemporary(val) {
      console.log('----dd', val);
      this.$emit('toggleRightSettings', this.temporary);
      this.temporary = !this.temporary;
    },
  },
};
</script>

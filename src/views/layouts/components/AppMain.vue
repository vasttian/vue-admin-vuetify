<template>
  <section>
    <v-content>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <router-view/>
        </v-slide-y-transition>
      </v-container>
    </v-content>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
};
</script>

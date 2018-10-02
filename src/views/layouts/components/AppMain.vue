<template>
  <section>
    <v-content>
      <v-container fluid>
        <v-fade-transition mode="out-in">
          <router-view/>
        </v-fade-transition>
      </v-container>
    </v-content>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
};
</script>

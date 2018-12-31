<template>
  <v-app>
    <v-content>
      <v-container
        fluid
        fill-height
      >
        <v-layout align-center>
          <v-flex text-xs-center>
            <div
              class="display-3"
              :class="[$style.errorHint]"
            >
              Whoops, 404
            </div>
            <p :class="[$style.errorText]">The page you were looking for does not exist</p>
            <v-btn
              round
              dark
              color="primary"
              :to="to"
            >
              Back to home
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: '/',
    },
  },
};
</script>

<style lang="scss" module>
.errorHint {
  color: #42a5f5;
  margin-bottom: 10px;
}

.errorText {
  color: #222;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 10px;
}
</style>

<template>
  <v-container grid-list-lg pa-0>
    <v-layout wrap>
      <!-- Base -->
      <v-flex xs12 sm6>
        <v-basic-card title="Badges - Usage">
          <template slot="card-content">
            <v-flex class="text-xs-center">
              <v-badge left>
                <span slot="badge">6</span>
                <v-icon
                  large
                  color="grey lighten-1">
                  shopping_cart
                </v-icon>
              </v-badge>

              <v-badge color="red">
                <span slot="badge">!</span>
                <v-icon
                  large
                  color="grey">
                  mail
                </v-icon>
              </v-badge>
            </v-flex>

            <v-flex class="text-xs-center">
              <v-badge
                color="purple"
                left
                overlap>
                <v-icon
                  slot="badge"
                  dark
                  small
                >done</v-icon>
                <v-icon
                  color="grey lighten-1"
                  large>
                  account_circle
                </v-icon>
              </v-badge>

              <v-badge
                overlap
                color="orange">
                <v-icon
                  slot="badge"
                  dark
                  small
                >notifications</v-icon>
                <v-icon
                  large
                  color="grey darken-1">
                  account_box
                </v-icon>
              </v-badge>
            </v-flex>
          </template>
        </v-basic-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

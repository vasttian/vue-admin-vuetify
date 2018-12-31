<template>
  <v-container
    grid-list-lg
    pa-0
  >
    <v-layout wrap>
      <!-- Base -->
      <v-flex
        sm12
        md6
      >
        <v-basic-card title="BottomNavigation - Usage">
          <template slot="card-content">
            <v-card
              class="overflow-hidden"
              height="300px"
              flat
            >
              <v-card-text class="text-xs-center">
                <v-btn
                  flat
                  color="primary"
                  @click="showNav = !showNav"
                >
                  Toggle Nav
                </v-btn>
              </v-card-text>
              <div class="headline text-xs-center">
                Active: {{ bottomNav }}
              </div>
              <v-bottom-nav
                absolute
                :active.sync="bottomNav"
                :value="showNav"
                color="transparent"
              >
                <v-btn
                  color="teal"
                  flat
                  value="recent"
                >
                  <span>Recent</span>
                  <v-icon>history</v-icon>
                </v-btn>
                <v-btn
                  color="teal"
                  flat
                  value="favorites"
                >
                  <span>Favorites</span>
                  <v-icon>favorite</v-icon>
                </v-btn>
                <v-btn
                  color="teal"
                  flat
                  value="nearby"
                >
                  <span>Nearby</span>
                  <v-icon>place</v-icon>
                </v-btn>
              </v-bottom-nav>
            </v-card>
          </template>
        </v-basic-card>
      </v-flex>

      <v-flex
        sm12
        md6
      >
        <v-basic-card title="BottomNavigation - Color & shift">
          <template slot="card-content">
            <v-card
              class="overflow-hidden"
              height="300px"
              flat
            >
              <div
                class="headline text-xs-center"
                :style="{ color: color }"
              >
                Active: {{ tab }}
              </div>
              <v-bottom-nav
                absolute
                :active.sync="tab"
                :color="color"
                :value="true"
              >
                <v-btn dark>
                  <span>Video</span>
                  <v-icon>ondemand_video</v-icon>
                </v-btn>
                <v-btn dark>
                  <span>Music</span>
                  <v-icon>music_note</v-icon>
                </v-btn>
                <v-btn dark>
                  <span>Book</span>
                  <v-icon>book</v-icon>
                </v-btn>
                <v-btn dark>
                  <span>Image</span>
                  <v-icon>image</v-icon>
                </v-btn>
              </v-bottom-nav>
            </v-card>
          </template>
        </v-basic-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'VBottomNavigation',
  data() {
    return {
      showNav: true,
      bottomNav: 'recent',
      tab: null,
    };
  },
  computed: {
    color() {
      switch (this.tab) {
        case 0:
          return 'indigo';
        case 1:
          return 'teal';
        case 2:
          return 'blue';
        case 3:
          return 'brown';
        default:
          return 'purple';
      }
    },
  },
};
</script>

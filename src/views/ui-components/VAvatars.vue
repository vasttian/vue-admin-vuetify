<template>
  <v-container
    grid-list-lg
    pa-0
  >
    <v-layout wrap>
      <v-flex xs12>
        <v-basic-card
          title="Avatars - Base"
          toolbar-height="56"
        >
          <template slot="card-content">
            <v-layout
              justify-space-between
              pt-2
              pb-2
            >
              <v-avatar color="indigo">
                <v-icon dark>account_circle</v-icon>
              </v-avatar>
              <v-avatar>
                <img
                  src="http://67.218.155.2:8082/vasttian.png"
                  alt="Vasttian"
                >
              </v-avatar>
              <v-badge overlap>
                <span slot="badge">3</span>
                <v-avatar color="blue lighten-1">
                  <v-icon dark>notifications</v-icon>
                </v-avatar>
              </v-badge>
              <v-avatar color="teal">
                <span class="white--text headline">V</span>
              </v-avatar>
            </v-layout>
          </template>
        </v-basic-card>
      </v-flex>

      <v-flex xs12>
        <v-basic-card
          title="Avatars - Custom"
          toolbar-height="56"
        >
          <template slot="card-content">
            <v-layout
              justify-space-between
              align-center
            >
              <v-avatar color="blue">
                <v-icon dark>account_circle</v-icon>
              </v-avatar>
              <v-avatar
                tile
                color="indigo"
              >
                <v-icon dark>account_circle</v-icon>
              </v-avatar>
              <v-avatar
                size="70"
                color="indigo"
              >
                <v-icon dark>account_circle</v-icon>
              </v-avatar>
            </v-layout>
          </template>
        </v-basic-card>
      </v-flex>

      <v-flex xs12>
        <v-basic-card
          title="Avatars - Resizable"
          toolbar-height="56"
        >
          <template slot="card-content">
            <v-layout
              row
              wrap
            >
              <v-flex
                xs12
                sm6
                md4
              >
                <v-slider
                  v-model="slider"
                  :min="8"
                  :max="256"
                  label="Size:"
                  thumb-label
                ></v-slider>
                <v-switch
                  v-model="tile"
                  label="Tile"
                ></v-switch>
              </v-flex>
              <v-flex
                xs12
                sm6
                md8
                layout
                align-center
                justify-center
                text-xs-center
              >
                <v-avatar
                  :tile="tile"
                  :size="avatarSize"
                  color="grey lighten-4"
                >
                  <img
                    src="http://67.218.155.2:8082/vasttian.png"
                    alt="avatar"
                  >
                </v-avatar>
              </v-flex>
            </v-layout>
          </template>
        </v-basic-card>
      </v-flex>

      <v-flex xs12>
        <v-basic-card
          title="Avatars - Popout"
          toolbar-height="56"
        >
          <template slot="card-content">
            <v-layout justify-space-between>
              <v-flex xs12>
                <v-expansion-panel popout>
                  <v-expansion-panel-content
                    v-for="(item, i) in items"
                    :key="i"
                  >
                    <v-layout
                      slot="header"
                      align-center
                      spacer
                    >
                      <v-flex xs6>
                        <v-avatar
                          slot="activator"
                          size="36px"
                        >
                          <img
                            v-if="item.avatar"
                            :src="item.avatar"
                            alt="Avatar"
                          >
                          <v-icon
                            v-else
                            :color="item.color"
                            size="42"
                            v-text="item.icon"
                          ></v-icon>
                        </v-avatar>
                      </v-flex>

                      <v-flex xs10>
                        <strong v-html="item.name"></strong>
                      </v-flex>
                    </v-layout>

                    <v-card>
                      <v-divider></v-divider>
                      <v-card-text v-text="item.text"></v-card-text>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-flex>
            </v-layout>
          </template>
        </v-basic-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'VAvatars',
  data() {
    return {
      items: [
        {
          avatar: 'http://67.218.155.2:8082/vasttian.png',
          name: 'Vasttian',
          text: `The \`v-avatar\` component is used to control the size and border radius of responsive images,
            typically used to show profile pictures.`,
        },
        {
          icon: 'face',
          color: 'blue',
          name: 'Face',
          text: `The avatar has a dynamic size that can be scaled for any situation.
            A tile variation is available for displaying an avatar without border radius.`,
        },
      ],
      slider: 128,
      tile: false,
    };
  },
  computed: {
    avatarSize() {
      return `${this.slider}px`;
    },
  },
};
</script>

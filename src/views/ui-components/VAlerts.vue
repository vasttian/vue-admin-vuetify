<template>
  <v-container
    grid-list-lg
    pa-0
  >
    <v-layout wrap>
      <v-flex xs12>
        <v-basic-card
          title="Alerts - Base"
          toolbar-height="56"
        >
          <template slot="card-content">
            <v-alert
              v-for="(alert, index) in alerts"
              :value="alert.value"
              :type="alert.type"
              :key="index"
            >
              This is a {{ alert.type }} alert.
            </v-alert>
          </template>
        </v-basic-card>
      </v-flex>
      <v-flex xs12>
        <v-basic-card title="Alerts - Outline">
          <template slot="card-content">
            <v-alert
              v-for="(alert, index) in alerts"
              :value="alert.value"
              :type="alert.type"
              outline
              :key="index"
            >
              This is a {{ alert.type }} alert.
            </v-alert>
          </template>
        </v-basic-card>
      </v-flex>
      <v-flex
        xs12
        sm6
      >
        <v-basic-card title="Alerts - Custom">
          <template slot="card-content">
            <v-alert
              :value="true"
              color="cyan"
              icon="new_releases"
            >
              This is a success alert with custom color and icon.
            </v-alert>
          </template>
        </v-basic-card>
      </v-flex>
      <v-flex
        xs12
        sm6
      >
        <v-basic-card title="Alerts - Closable">
          <template slot="card-content">
            <v-alert
              v-model="display"
              dismissible
              type="success"
            >
              This is a success alert that is closable.
            </v-alert>
            <div class="text-xs-center">
              <v-btn
                v-if="!display"
                color="primary"
                dark
                @click="display = true"
              >
                Reset
              </v-btn>
            </div>
          </template>
        </v-basic-card>
      </v-flex>
      <v-flex xs12>
        <v-basic-card title="Alerts - Display transition">
          <template slot="card-content">
            <div class="text-xs-center">
              <v-btn
                color="primary"
                @click="alert = !alert"
              >
                Toggle
              </v-btn>
            </div>
            <v-alert
              :value="alert"
              type="success"
              transition="scale-transition"
            >
              This is a success alert.
            </v-alert>
          </template>
        </v-basic-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'VAlerts',
  data() {
    return {
      alerts: [
        {
          type: 'info',
          value: true,
          outline: true,
        },
        {
          type: 'warning',
          value: true,
          outline: true,
        },
        {
          type: 'success',
          value: true,
          outline: true,
        },
        {
          type: 'error',
          value: true,
          outline: true,
        },
      ],
      alert: false,
      display: true,
    };
  },
};
</script>

<template>
  <v-card>
    <v-toolbar
      color="light-blue lighten-2"
      dark
    >
      <v-toolbar-title>Notification</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn
        @click="checkAllItems"
        icon
      >
        <v-icon>{{ actionsLen === selected.length ? 'check_circle' : 'check_circle_outline' }}</v-icon>
      </v-btn>
    </v-toolbar>
    <v-list
      two-line
      class="pa-0"
    >
      <template v-for="(item, index) in items">
        <v-subheader
          v-if="item.header"
          :key="item.header"
        >
          {{ item.header }}
        </v-subheader>
        <v-list-tile
          v-else
          avatar
          ripple
          :key="item.title"
          @click="toggle(index)"
        >
          <v-list-tile-avatar
            size="38"
            :color="item.color"
          >
            <v-icon dark>{{ item.icon }}</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-sub-title v-html="item.title"></v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
            <v-icon
              v-if="!selected.includes(index)"
              color="grey lighten-1"
            >
              star_border
            </v-icon>
            <v-icon
              v-else
              color="yellow darken-2"
            >
              star
            </v-icon>
          </v-list-tile-action>
        </v-list-tile>
        <v-divider
          v-if="index + 1 < items.length"
          :key="index"
        ></v-divider>
      </template>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      selected: [2],
      items: [
        { header: 'Today' },
        {
          title: 'New visitors',
          color: 'teal',
          icon: 'people',
          action: 'Just now',
        },
        {
          title: 'New messages',
          color: 'light-blue',
          icon: 'message',
          action: '6 mins ago',
        },
        {
          title: 'New shares',
          color: 'cyan accent-3',
          icon: 'share',
          action: '32 mins ago',
        },
        {
          title: 'New downloads',
          color: 'indigo',
          icon: 'get_app',
          action: '8 hours ago',
        },
      ],
    };
  },
  computed: {
    actionsLen() {
      let count = 0;
      for (let i = 0, len = this.items.length; i < len; i += 1) {
        if (!this.items[i].header) {
          count += 1;
        }
      }

      return count;
    },
  },
  methods: {
    toggle(index) {
      const i = this.selected.indexOf(index);

      if (i > -1) {
        this.selected.splice(i, 1);
      } else {
        this.selected.push(index);
      }

      this.emitUnreadActionsLen();
    },
    checkAllItems() {
      const flag = this.actionsLen !== this.selected.length;

      this.selected = [];
      if (flag) {
        for (let i = 0, len = this.items.length; i < len; i += 1) {
          if (!this.items[i].header) {
            this.selected.push(i);
          }
        }
      }

      this.emitUnreadActionsLen();
    },
    emitUnreadActionsLen() {
      this.$emit('unreadLen', this.actionsLen - this.selected.length);
    },
  },
  created() {
    this.emitUnreadActionsLen();
  },
};
</script>

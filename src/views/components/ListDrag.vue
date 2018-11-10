<template>
  <v-container grid-list-lg pa-0>
    <v-layout wrap>
      <v-flex xs12 sm6>
        <v-basic-card title="Drag List - Base">
          <template slot="card-content">
            <draggable v-model="items">
              <transition-group name="list-drag">
                <div
                  v-for="(item, index) in items"
                  :key="item.name"
                  class="list-drag-item">
                  <v-layout
                    fill-height
                    align-center
                    justify-space-between
                    class="content">
                    <span>{{ item.name }}</span>
                    <v-icon
                      @click="removeItem(index)">
                      delete
                    </v-icon>
                  </v-layout>
                </div>
              </transition-group>
            </draggable>
          </template>
        </v-basic-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  name: 'ListDarg',
  components: {
    draggable,
  },
  data() {
    return {
      items: [
        {
          name: 'Adela',
        },
        {
          name: 'Anna',
        },
        {
          name: 'Bonnie',
        },
        {
          name: 'Clementine',
        },
        {
          name: 'Doris',
        },
        {
          name: 'Eudora',
        },
      ],
    };
  },
  methods: {
    removeItem(index) {
      this.items.splice(index, 1);
    },
  },
};
</script>

<style lang="scss">
.list-drag-item {
  margin-top: 10px;
  border: solid 1px;
  transition: all 1s;

  .content {
    height: 60px;
    padding: 15px;
  }
}

.list-drag-enter,
.list-drag-leave-active {
  opacity: 0;
}
</style>

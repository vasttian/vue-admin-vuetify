<template>
  <v-container
    grid-list-lg
    pa-0
  >
    <v-layout wrap>
      <!-- Base -->
      <v-flex
        xs12
        sm6
      >
        <v-basic-card title="Drag List - Base">
          <template slot="card-content">
            <v-btn
              @click="disable = !disable"
              color="light-blue accent-2"
            >
              {{ disable ? 'Disable' : 'Enable' }}
            </v-btn>
            <draggable
              :options="baseDragOptions"
              v-model="items"
            >
              <transition-group name="list-drag">
                <div
                  v-for="(item, index) in items"
                  :key="item.name"
                  class="list-drag-item"
                >
                  <v-layout
                    fill-height
                    align-center
                    justify-space-between
                    class="content"
                  >
                    <span>{{ item.name }}</span>
                    <v-icon @click="removeItem(index)">
                      delete
                    </v-icon>
                  </v-layout>
                </div>
              </transition-group>
            </draggable>
          </template>
        </v-basic-card>
      </v-flex>

      <!-- images -->
      <v-flex
        xs12
        sm6
      >
        <v-basic-card title="Drag List - Images">
          <template slot="card-content">
            <draggable
              v-model="images"
              class="grid"
            >
              <v-flex
                pa-0
                sm6
                lg4
                xl3
                v-for="(item,index) in images"
                :key="item.src"
                class="item"
              >
                <img
                  :src="item.src"
                  :alt="`image ${index + 1}`"
                >
              </v-flex>
            </draggable>
          </template>
        </v-basic-card>
      </v-flex>

      <!-- group -->
      <v-flex
        xs6
        md3
      >
        <v-basic-card title="Drag List - Group1">
          <template slot="card-content">
            <draggable
              :options="groupDragOptions"
              v-model="list1"
              element="ul"
            >
              <transition-group name="list-drag-group1">
                <div
                  v-for="item in list1"
                  :key="item.name"
                  class="list-drag-item"
                >
                  <v-layout
                    fill-height
                    align-center
                    justify-space-between
                    class="content"
                  >
                    <span>{{ item.name }}</span>
                  </v-layout>
                </div>
              </transition-group>
            </draggable>
          </template>
        </v-basic-card>
      </v-flex>
      <v-flex
        xs6
        md3
      >
        <v-basic-card title="Drag List - Group2">
          <template slot="card-content">
            <draggable
              :options="groupDragOptions"
              v-model="list2"
              element="ul"
            >
              <transition-group name="list-drag-group1">
                <div
                  v-for="item in list2"
                  :key="item.name"
                  class="list-drag-item"
                >
                  <v-layout
                    fill-height
                    align-center
                    justify-space-between
                    class="content"
                  >
                    <span>{{ item.name }}</span>
                  </v-layout>
                </div>
              </transition-group>
            </draggable>
          </template>
        </v-basic-card>
      </v-flex>

      <!-- data -->
      <v-flex
        xs12
        md6
      >
        <v-basic-card title="Drag List - Data">
          <template slot="card-content">
            <v-layout wrap>
              <v-flex xs6>
                <h4>List1</h4>
                <pre>{{ list1String }}</pre>
              </v-flex>
              <v-flex xs6>
                <h4>List2</h4>
                <pre>{{ list2String }}</pre>
              </v-flex>
            </v-layout>
          </template>
        </v-basic-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import draggable from 'vuedraggable';
import {
  items, images, list1, list2,
} from './data/dnd-list';

export default {
  name: 'ListDarg',
  components: {
    draggable,
  },
  data() {
    return {
      items,
      images,
      list1,
      list2,
      disable: false,
    };
  },
  computed: {
    baseDragOptions() {
      return {
        group: 'baseDrag',
        animation: 150,
        disabled: this.disable,
      };
    },
    groupDragOptions() {
      return {
        group: 'groupDemo',
      };
    },
    list1String() {
      return JSON.stringify(this.list1, null, 2);
    },
    list2String() {
      return JSON.stringify(this.list2, null, 2);
    },
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
  // cursor: move;
  cursor: -webkit-grabbing;
  margin-top: 10px;
  border: solid 1px;
  transition: all 0.5s;

  .content {
    height: 60px;
    padding: 15px;
  }
}

.list-drag-enter,
.list-drag-leave-active {
  opacity: 0;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .item {
    text-align: center;

    img {
      height: 150px;
      width: 150px;
      cursor: move;
      cursor: -webkit-grabbing;
    }
  }
}
</style>

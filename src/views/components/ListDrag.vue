<template>
  <v-container grid-list-lg pa-0>
    <v-layout wrap>
      <!-- Base -->
      <v-flex xs12 sm6>
        <v-basic-card title="Drag List - Base">
          <template slot="card-content">
            <v-btn
              @click="disable = !disable"
              color="light-blue accent-2">
              {{ disable ? 'Disable' : 'Enable' }}
            </v-btn>
            <draggable
              :options="baseDragOptions"
              v-model="items">
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

      <!-- images -->
      <v-flex xs12 sm6>
        <v-basic-card title="Drag List - Images">
          <template slot="card-content">
            <draggable
              v-model="images"
              class="grid">
              <v-flex
                pa-0
                sm6
                lg4
                xl3
                v-for="(item,index) in images"
                :key="item.src"
                class="item">
                <img
                  :src="item.src"
                  :alt="`image ${index + 1}`">
              </v-flex>
            </draggable>
          </template>
        </v-basic-card>
      </v-flex>

      <!-- group -->
      <v-flex md6>
        <v-basic-card title="Drag List - Group">
          <template slot="card-content">
            <draggable
              :options="groupDragOptions"
              v-model="list1"
              element="ul">
              <transition-group name="list-drag-group1">
                <div
                  v-for="item in list1"
                  :key="item.name"
                  class="list-drag-item">
                  <v-layout
                    fill-height
                    align-center
                    justify-space-between
                    class="content">
                    <span>{{ item.name }}</span>
                  </v-layout>
                </div>
              </transition-group>
            </draggable>
          </template>
        </v-basic-card>
      </v-flex>
      <v-flex md6>
        <v-basic-card title="Drag List - Group2">
          <template slot="card-content">
            <draggable
              :options="groupDragOptions"
              v-model="list2"
              element="ul">
              <transition-group name="list-drag-group1">
                <div
                  v-for="item in list2"
                  :key="item.name"
                  class="list-drag-item">
                  <v-layout
                    fill-height
                    align-center
                    justify-space-between
                    class="content">
                    <span>{{ item.name }}</span>
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
          name: 'Emma',
        },
        {
          name: 'Grace',
        },
        {
          name: 'Sarah',
        },
      ],
      images: [
        {
          src: 'http://67.218.155.2:8082/image1.jpg',
        },
        {
          src: 'http://67.218.155.2:8082/image2.jpg',
        },
        {
          src: 'http://67.218.155.2:8082/image3.jpg',
        },
        {
          src: 'http://67.218.155.2:8082/image4.jpg',
        },
        {
          src: 'http://67.218.155.2:8082/image5.jpg',
        },
        {
          src: 'http://67.218.155.2:8082/image6.jpg',
        },
        {
          src: 'http://67.218.155.2:8082/image18.jpg',
        },
        {
          src: 'http://67.218.155.2:8082/image19.jpg',
        },
        {
          src: 'http://67.218.155.2:8082/image20.jpg',
        },
      ],
      list1: [
        {
          name: 'Jamie',
        },
        {
          name: 'Jane',
        },
        {
          name: 'Janice',
        },
        {
          name: 'Jean',
        },
        {
          name: 'Jenny',
        },
        {
          name: 'Jessie',
        },
      ],
      list2: [
        {
          name: 'Karen',
        },
        {
          name: 'Katherine',
        },
        {
          name: 'Kelly',
        },
        {
          name: 'Kimberley',
        },
        {
          name: 'Kitty',
        },
        {
          name: 'Kristin',
        },
      ],
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
  },
  methods: {
    removeItem(index) {
      this.items.splice(index, 1);
    },
    onMove({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      );
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

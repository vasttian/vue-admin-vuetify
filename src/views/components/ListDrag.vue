<template>
  <div>
    <div>
      <draggable v-model="items">
        <transition-group name="list-name">
          <div
            v-for="item in items"
            :key="item">
            <div>{{ item }}</div>
          </div>
        </transition-group>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "ListDarg",
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
  methods: {}
};
</script>

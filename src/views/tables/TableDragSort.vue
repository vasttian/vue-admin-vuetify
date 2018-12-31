<template>
  <v-container
    grid-list-lg
    pa-0
  >
    <v-layout wrap>
      <v-flex xs12>
        <v-basic-card
          title="Drag Sort - Base"
          toolbar-height="56"
        >
          <template slot="card-content">
            <v-data-table
              :headers="headers"
              :items="list"
              item-key="name"
              hide-actions
              class="elevation-1"
            >
              <template
                slot="items"
                slot-scope="props"
              >
                <td>{{ props.item.name }}</td>
                <td>{{ props.item.age }}</td>
                <td>{{ props.item.address }}</td>
                <td>
                  <svg-icon
                    class="drag-handler"
                    icon-class="drag"
                  />
                </td>
              </template>
            </v-data-table>
          </template>
        </v-basic-card>
      </v-flex>

      <!-- data -->
      <v-flex xs12>
        <v-basic-card title="Drag Sort - Preview">
          <template slot="card-content">
            <v-layout wrap>
              <v-flex xs12>
                <pre>{{ list }}</pre>
              </v-flex>
            </v-layout>
          </template>
        </v-basic-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Sortable from 'sortablejs';

export default {
  name: 'TableDragSort',
  data() {
    return {
      headers: [
        {
          text: 'Name',
          align: 'left',
          sortable: false,
          value: 'name',
        },
        {
          text: 'Age',
          value: 'age',
          sortable: false,
        },
        {
          text: 'Address',
          value: 'address',
          sortable: false,
        },
        {
          text: 'Drag',
          value: 'drag',
          sortable: false,
        },
      ],
      list: [
        {
          name: 'Anna',
          age: 24,
          address: 'Beijing, China',
        },
        {
          name: 'Bonnie',
          age: 23,
          address: 'Shanghai, China',
        },
        {
          name: 'Clementine',
          age: 22,
          address: 'Guangzhou, China',
        },
        {
          name: 'Doris',
          age: 21,
          address: 'Shenzhen, China',
        },
        {
          name: 'Emma',
          age: 20,
          address: 'Chengdu, China',
        },
      ],
    };
  },
  methods: {
    setSort() {
      const el = document.querySelectorAll('.v-table__overflow > table > tbody')[0];
      this.sortable = Sortable.create(el, {
        // Class name for the drop placeholder
        ghostClass: 'sortable-ghost',
        setData(dataTransfer) {
          dataTransfer.setData('Text', '');
        },
        onEnd: (evt) => {
          const targetRow = this.list.splice(evt.oldIndex, 1)[0];
          this.list.splice(evt.newIndex, 0, targetRow);
        },
      });
    },
  },
  mounted() {
    this.setSort();
  },
};
</script>

<style scoped>
.drag-handler {
  cursor: pointer;
  width: 23px;
  height: 23px;
}
</style>

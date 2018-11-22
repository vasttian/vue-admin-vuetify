<template>
  <v-container grid-list-lg pa-0>
    <v-layout wrap>
      <v-flex xs12>
        <v-basic-card
          title="Drag Sort - Base"
          toolbar-height="56">
          <template slot="card-content">
            <v-data-table
              :headers="headers"
              :items="desserts"
              hide-actions
              class="elevation-1">
              <template
                slot="items"
                slot-scope="props">
                <td>{{ props.item.name }}</td>
                <td>{{ props.item.age }}</td>
                <td>{{ props.item.address }}</td>
              </template>
            </v-data-table>
          </template>
        </v-basic-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'TableDragSort',
  data() {
    return {
      headers: [
        {
          text: 'Name',
          align: 'center',
          sortable: false,
          value: 'name',
        },
        {
          text: 'Age',
          value: 'age',
        },
        {
          text: 'Address',
          value: 'address',
        },
      ],
      desserts: [
        {
          name: 'Anna',
          age: 19,
          address: 'Shenzhen, China',
        },
        {
          name: 'Bonnie',
          age: 20,
          address: 'Shenzhen, China',
        },
      ],
    };
  },
};
</script>


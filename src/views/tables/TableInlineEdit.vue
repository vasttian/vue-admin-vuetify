<template>
  <v-container grid-list-lg pa-0>
    <v-layout wrap>
      <v-flex xs12>
        <v-basic-card
          title="Inline Edit - e.g.1"
          toolbar-height="56">
          <template slot="card-content">
            <v-data-table
              :headers="headers"
              :items="list"
              hide-actions
              class="elevation-1">
              <template
                slot="items"
                slot-scope="props">
                <td>{{ props.item.name }}</td>
                <td>{{ props.item.age }}</td>
                <td>{{ props.item.address }}</td>
                <td class="justify-center">
                  <v-icon
                    small
                    class="mr-2"
                    @click="editItem(props.item)">
                    edit
                  </v-icon>
                  <v-icon small disabled>
                    delete
                  </v-icon>
                </td>
              </template>
            </v-data-table>
          </template>
        </v-basic-card>
      </v-flex>
    </v-layout>

    <v-dialog
      v-model="dialog"
      max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Edit Item</span>
        </v-card-title>

        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  v-model="editedItem.name"
                  label="Name"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  v-model="editedItem.age"
                  label="Age"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  v-model="editedItem.address"
                  label="Address"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            flat
            @click="close">
            Cancel
          </v-btn>
          <v-btn
            color="blue darken-1"
            flat
            @click="save">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: 'TableInlineEdit',
  data() {
    return {
      dialog: false,
      editedIndex: -1,
      editedItem: {},
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
          text: 'Actions',
          value: 'actions',
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
    editItem(item) {
      this.editedIndex = this.list.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = {};
        this.editedIndex = -1;
      });
    },
    save() {
      Object.assign(this.list[this.editedIndex], this.editedItem);
      this.close();
    },
  },
};
</script>

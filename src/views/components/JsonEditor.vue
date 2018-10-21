<template>
  <div>
    <json-editor
      v-model="jsonText"
      placeholder=""/>
  </div>
</template>

<script>
import JsonEditor from '@/components/editors/JsonEditor.vue';

export default {
  name: 'JsonEditorComponent',
  components: {
    JsonEditor,
  },
  data() {
    return {
      jsonText: {
        $schema: 'http://json-schema.org/draft-04/schema#',
        title: 'Product',
        description: "A product from Acme's catalog",
        type: 'object',
        properties: {
          id: {
            description: 'The unique identifier for a product',
            type: 'integer',
          },
          name: {
            description: 'Name of the product',
            type: 'string',
          },
          price: {
            type: 'number',
            minimum: 0,
            exclusiveMinimum: true,
          },
        },
        required: [
          'id',
          'name',
          'price',
        ],
      },
    };
  },
};
</script>


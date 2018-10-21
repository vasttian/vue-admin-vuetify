<template>
  <div>
    <sql-editor
      v-model="sqlText"
      placeholder=""/>
  </div>
</template>

<script>
import SqlEditor from '@/components/editors/SqlEditor.vue';

export default {
  name: 'SqlEditorComponent',
  components: {
    SqlEditor,
  },
  data() {
    return {
      sqlText: 'CREATE UNIQUE INDEX index_name \nON table_name (column_name)',
    };
  },
};
</script>


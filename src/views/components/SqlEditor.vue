<template>
  <div>
    <sql-editor
      ref="sqlEditor"
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
      sqlText: 'select user from users;',
    };
  },
  methods:{},
  creatd() {

  },
}
</script>


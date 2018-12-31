<template>
  <div class="sql-editor">
    <textarea ref="textarea" />
  </div>
</template>

<script>
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/rubyblue.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/sql/sql';

export default {
  name: 'SqlEditor',
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      sqlEditor: {},
    };
  },
  watch: {
    value(newVal) {
      const editorValue = this.sqlEditor.getValue();
      if (newVal !== editorValue) {
        this.sqlEditor.setValue(newVal);
      }
    },
  },
  mounted() {
    this.sqlEditor = CodeMirror.fromTextArea(this.$refs.textarea, {
      tabSize: 4,
      mode: 'text/x-mysql',
      line: true,
      indentWithTabs: true,
      smartIndent: true,
      lineNumbers: true,
      matchBrackets: true,
      autofocus: true,
      extraKeys: { 'Ctrl-Space': 'autocomplete' },
      hintOptions: {
        tables: {
          users: ['name'],
        },
      },
    });
    this.sqlEditor.setValue(this.value);
    this.sqlEditor.on('change', (vm) => {
      this.$emit('input', vm.getValue());
      // console.log('vm.getValue()', vm.getValue());
    });
  },
};
</script>

<style lang="scss">
.sql-editor {
  .CodeMirror {
    border: 1px solid #eee;
    height: auto !important;
    min-height: 200px !important;
    /*max-height: 500px;*/
    line-height: 20px;
  }

  .CodeMirror-scroll {
    min-height: 200px;
  }
}
</style>

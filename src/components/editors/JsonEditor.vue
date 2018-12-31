<template>
  <div class="json-editor">
    <textarea ref="textarea" />
  </div>
</template>

<script>
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/theme/rubyblue.css';
import 'codemirror/addon/lint/lint.css';
import 'codemirror/addon/lint/lint';
import 'codemirror/addon/lint/json-lint';

// eslint-disable-next-line
require('script-loader!jsonlint');

export default {
  name: 'JsonEditor',
  props: {
    value: {
      type: [String, Object, Array],
      default: '',
    },
  },
  data() {
    return {
      jsonEditor: false,
    };
  },
  watch: {
    value(newVal) {
      const editorValue = this.jsonEditor.getValue();
      if (newVal !== editorValue) {
        this.jsonEditor.setValue(JSON.stringify(newVal, null, 2));
      }
    },
  },
  mounted() {
    this.jsonEditor = CodeMirror.fromTextArea(this.$refs.textarea, {
      lineNumbers: true,
      indentUnit: 2,
      mode: 'application/json',
      gutters: ['CodeMirror-lint-markers'],
      theme: 'rubyblue',
      lint: true,
    });
    this.jsonEditor.setValue(JSON.stringify(this.value, null, 2));
    this.jsonEditor.on('change', (cm) => {
      this.$emit('input', cm.getValue());
    });
  },
  methods: {
    getValue() {
      return this.jsonEditor.getValue();
    },
  },
};
</script>

<style lang="scss">
.json-editor {
  .CodeMirror {
    border: 1px solid #eee;
    height: auto !important;
    min-height: 45px !important;
    // max-height: 500px;
    line-height: 20px;
  }

  .CodeMirror-scroll {
    min-height: 200px;
  }
}
</style>

<template>
  <div>
    <textarea
      v-model="input"
      ></textarea>
    <div v-html="compiledMarkdown"></div>
  </div>
</template>

<script>
import marked from 'marked';

export default {
  name: 'Markdown',
  data() {
    return {
      input: '# hello',
    };
  },
  computed: {
    compiledMarkdown() {
      return marked(this.input);
    },
  },
};
</script>

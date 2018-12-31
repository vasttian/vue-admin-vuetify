<template>
  <v-layout wrap>
    <v-flex xs12>
      <span>Based on:</span>
      <v-btn
        flat
        href="https://github.com/markedjs/marked"
        target="_blank"
        color="primary"
        small
      >
        Marked
      </v-btn>
      and
      <v-btn
        flat
        href="https://github.com/highlightjs/highlight.js"
        target="_blank"
        color="primary"
        small
      >
        Highlightjs
      </v-btn>
    </v-flex>
    <v-divider></v-divider>
    <v-flex d-flex>
      <v-layout wrap>
        <v-flex
          d-flex
          xs12
          sm6
        >
          <v-textarea
            name="markdown"
            label="Markdown"
            v-model="value"
            auto-grow
            outline
            hint="markdown text"
          ></v-textarea>
        </v-flex>
        <v-divider></v-divider>
        <v-flex
          xs12
          sm6
          :class="{ ['pl-3']: this.$vuetify.breakpoint.smAndUp }"
        >
          <v-flex>
            <v-select
              attach
              :items="items"
              label="Preview"
              v-model="type"
            ></v-select>
          </v-flex>
          <v-flex>
            <v-textarea
              v-if="type === 'htmlSource'"
              pa-2
              :value="compiledMarkdown"
              auto-grow
              box
              readonly
            ></v-textarea>
            <div
              v-else
              class="pa-2"
              style="background: #edeeee;"
              v-html="compiledMarkdown"
            ></div>
          </v-flex>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import 'highlight.js/styles/default.css';
import marked from 'marked';
import hljs from 'highlight.js';

const rendererMD = new marked.Renderer();

marked.setOptions({
  renderer: rendererMD,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight(code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(lang, code, true).value;
    }

    return hljs.highlightAuto(code).value;
  },
});

export default {
  name: 'MarkdownEditor',
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      type: 'preview',
      items: [
        {
          text: 'Preview',
          value: 'preview',
        },
        {
          text: 'HTML Source',
          value: 'htmlSource',
        },
      ],
    };
  },
  computed: {
    compiledMarkdown() {
      // if (this.type === 'htmlsource') {
      //   const token = marked.lexer(this.value);
      //   return marked.parser(token);
      // }

      return marked(this.value);
    },
  },
};
</script>

<template>
  <v-layout wrap>
    <v-flex xs12>
      <span>Based on:</span>
      <v-btn
        flat
        href="https://github.com/markedjs/marked"
        target="_blank"
        color="primary"
        small>
        Marked
      </v-btn>
      and
      <v-btn
        flat
        href="https://github.com/highlightjs/highlight.js"
        target="_blank"
        color="primary"
        small>
        Highlightjs
      </v-btn>
    </v-flex>
    <v-divider></v-divider>
    <v-flex d-flex>
      <v-layout wrap>
        <v-flex
          d-flex
          xs12
          sm6>
          <v-textarea
            name="markdown"
            label="Markdown"
            autofocus
            v-model="input"
            auto-grow
            hint="markdown text"
          ></v-textarea>
        </v-flex>
        <v-flex
          xs12
          sm6>
          <v-flex>
            <v-select
              :items="items"
              label="Preview"
              v-model="type"
            ></v-select>
          </v-flex>
          <v-flex class="preview">
            <v-textarea
              v-if="type === 'htmlSource'"
              :value="compiledMarkdown"
              auto-grow
              readonly
            ></v-textarea>
            <div
              v-else
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
  name: 'Markdown',
  data() {
    const defaultInputText = `
# Hello
<br>
\n
\`\`\`js\nconsole.log('Hello'); \n\`\`\`
<br>

Marked - Markdown Parser
========================

[Marked] lets you convert [Markdown] into HTML.  Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML.  This demo page will let you type anything you like and see how it gets converted.  Live.  No more waiting around.

Why Markdown?
-------------

It's easy.  It's not overly bloated, unlike HTML.  Also, as the creator of [markdown] says,

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

Ready to start writing?  Either start changing stuff on the left or
[clear everything](?text=) with a simple click.

[Marked]: https://github.com/markedjs/marked/
[Markdown]: http://daringfireball.net/projects/markdown/
`;
    return {
      input: defaultInputText,
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
      //   const token = marked.lexer(this.input);
      //   return marked.parser(token);
      // }

      return marked(this.input);
    },
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.preview {
  margin-top: 8px;
}
</style>

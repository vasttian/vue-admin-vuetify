<template>
  <markdown-editor
    v-model="markdownText"
    placeholder=""
  />
</template>

<script>
import MarkdownEditor from '@/components/editors/MarkdownEditor.vue';

export default {
  name: 'MarkdownEditorComponent',
  components: {
    MarkdownEditor,
  },
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
      markdownText: defaultInputText,
    };
  },
};
</script>

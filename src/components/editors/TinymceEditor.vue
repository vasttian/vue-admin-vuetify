<template>
  <div>
    <vue-tinymce
      ref="tinymce"
      :init="editorInit"
      v-model="content"
    />
  </div>
</template>

<script>
import tinymce from 'tinymce/tinymce';
import VueTinymce from '@tinymce/tinymce-vue';
import 'tinymce/themes/silver/theme';
import 'tinymce/plugins/link';
import 'tinymce/plugins/code';
import 'tinymce/plugins/table';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/image';
import 'tinymce/plugins/media';
// import 'tinymce/plugins/contextmenu';
import 'tinymce/plugins/wordcount';
// import 'tinymce/plugins/colorpicker';
// import 'tinymce/plugins/textcolor';
import 'tinymce/plugins/preview';
import 'tinymce/plugins/fullscreen';
// import 'tinymce/plugins/emoticons';

export default {
  name: 'TinymceEditor',
  components: {
    VueTinymce,
  },
  data() {
    return {
      editorInit: {
        // height: document.body.offsetHeight - 200,
        height: 600,

        // 去水印
        branding: false,

        // 允许粘贴图像
        paste_data_images: true,

        // 拼写检查
        browser_spellcheck: true,

        // 隐藏编辑器底部的状态栏
        // statusbar: false,

        // 隐藏最上方menu
        // menubar: false,
        language: 'zh_CN',
        language_url: '/tinymce/zh_CN.js',
        skin_url: '/tinymce/skins/ui/oxide',
        content_css: '/tinymce/skins/content/default/content.css',
        plugins:
          'table code link lists image media wordcount preview fullscreen',
        toolbar: `fontsizeselect | bold italic underline strikethrough forecolor backcolor | alignleft
          aligncenter alignright alignjustify outdent indent bullist numlist
          blockquote | link unlink image media code | undo redo | removeformat preview fullscreen`,
        images_upload_handler: (blobInfo, success, failure) => {
          this.uploadImage(blobInfo, success, failure);
        },
      },
      content: `<h1 style="text-align: center;">Welcome to the TinyMCE demo!</h1>
        <p style="text-align:center; margin-top:50px; font-size:15px;">
          TinyMCE is a powerful and flexible text editor that makes it incredibly easy
          for people with various levels of technical expertise to create rich content.
        </p>
        <br>
        <br>
        <h2>Got questions or need help?</h2>
        <ul>
          <li>Our <a href="https://www.tinymce.com/docs/" target="_blank">documentation</a> is a great resource for learning how to configure TinyMCE.</li>
          <li>Have a specific question? Visit the <a href="https://community.tinymce.com/forum/" target="_blank">Community Forum</a>.</li>
          <li><a href="https://www.tiny.cloud/docs/demo/full-featured/" target="_blank">full featured example</a></li>
        </ul>`,
    };
  },
  methods: {
    uploadImage(blobInfo, success, failure) {
      const formdata = new FormData();
      formdata.set('upload_file', blobInfo.blob());
      this.$http
        .post('/api/images', formdata)
        .then((res) => {
          const { data } = res.data;
          this.$message.success(data.src);
          success('Uploaded successfully');
        })
        .catch((res) => {
          console.log('tinymce-uploadImage', res);
          this.$message.error('Failed');
          failure('Failed');
        });
    },
  },
  mounted() {
    tinymce.init({});
  },
};
</script>

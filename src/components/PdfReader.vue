<template>
  <div style="width:100%; height:100%;">
    <iframe
      :src="url"
      width="100%"
      height="100%"
      scrolling="no">
      {{ $t('components.notSupportPDF') }}
    </iframe>
  </div>
</template>

<script>
export default {
  name: 'PdfReader',
  data() {
    return {
      url: '/pdf/web/viewer.html?file=/pdf/files/microservices-on-aws.pdf',
    };
  },
};
</script>

<style lang="scss" scoped>
.iframe-wrapper {
  iframe {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
  }
}
</style>

<template>
  <div class="iframe-wrapper">
    <iframe
      :src="url"
      width="100%"
      height="100%"
      scrolling="no"
    >
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
  width: 100%;
  height: 100%;

  iframe {
    display: block;
    position: relative;
  }
}
</style>

<template>
  <pdf-reader :style="{ height: domHeight + 'px' }" />
</template>

<script>
import PdfReader from '@/components/PdfReader.vue';

export default {
  name: 'PdfReaderComponent',
  components: {
    PdfReader,
  },
  data() {
    return {
      domHeight: 600,
    };
  },
  mounted() {
    try {
      const { clientHeight } = document.getElementById('main-container');
      this.domHeight = clientHeight - 145;
    } catch (err) {
      this.domHeight = 600;
      console.log('pdf err', err);
    }
  },
};
</script>

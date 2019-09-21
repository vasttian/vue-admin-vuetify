<template>
  <div>
    <excel-export />
  </div>
</template>

<script>
import ExcelExport from '@/components/excel/ExcelExport.vue';

export default {
  name: 'ExcelExportComponent',
  components: {
    ExcelExport,
  },
};
</script>

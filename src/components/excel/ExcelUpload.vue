<template>
  <div class="upload">
    <v-subheader>
      <label for="file">Spreadsheet</label>
    </v-subheader>
    <input
      id="file"
      type="file"
      ref="uploadInputRef"
      style="display: none;"
      :accept="sheetJSFT"
      @change="handleUpload"
    >
    <div
      class="upload-dragger"
      :class="{
        'is-dragover': dragover
      }"
      @drop="handleDropFile"
      @dragenter="handleSuppress"
      @dragover="handleSuppress"
      @dragleave.prevent="dragover = false"
      @click="$refs.uploadInputRef.click()"
    >
      Drop a file here or <em>Upload</em>
    </div>
    <div class="upload-tip">上传文件大小不超过 {{ filesizeLimitUnitMB }} MB</div>
  </div>
</template>

<script>
import XLSX from 'xlsx';

export default {
  name: 'ExcelUpload',
  props: {
    filesizeLimitUnitMB: {
      type: Number,
      default: 2,
    },
  },
  data() {
    const SheetJSFT = [
      'xlsx',
      'xlsb',
      'xlsm',
      'xls',
      // 'xml',
      // 'csv',
      // 'txt',
      // 'ods',
      // 'fods',
      // 'uos',
      // 'sylk',
      // 'dif',
      // 'dbf',
      // 'prn',
      // 'qpw',
      // '123',
      // 'wb*',
      // 'wq*',
      // 'html',
      // 'htm',
    ]
      .map(x => (`.${x}`))
      .join(',');
    return {
      loading: false,
      dragover: false,
      sheetJSFT: SheetJSFT,
      headers: [],
      fileData: {
        headers: [],
        data: [],
      },
    };
  },
  methods: {
    handleUpload(e) {
      this.loading = true;
      const files = e.target.files || [];
      if (files && files[0] && this.beforeUpload(files[0])) {
        this.readFile(files[0]);
      }
    },
    handleDropFile(e) {
      e.stopPropagation();
      e.preventDefault();
      this.dragover = false;
      const files = e.dataTransfer.files || [];
      if (files && files[0]) {
        this.readFile(files[0]);
      }
    },
    handleSuppress(e) {
      e.stopPropagation();
      e.preventDefault();
      this.dragover = true;
    },
    readFile(file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        /* Parse data */
        const bstr = e.target.result;
        const wb = XLSX.read(bstr, { type: 'binary' });

        // Get first worksheet
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        // Convert array of arrays
        const data = XLSX.utils.sheet_to_json(ws);
        this.handleSuccess(this.makeHeaders(ws), data);
      };
      reader.readAsBinaryString(file);
    },
    handleSuccess(headers, data = []) {
      this.$emit('update-filedata', { headers, data });
    },
    makeHeaders(ws) {
      // console.log('>>>>ws', ws);
      const range = XLSX.utils.decode_range(ws['!ref']);
      const { r } = range.s;
      const headers = [];

      for (let { c } = range.s; c <= range.e.c; c += 1) {
        const col = ws[XLSX.utils.encode_cell({ c, r })];
        headers.push(col && col.t ? XLSX.utils.format_cell(col) : '');
      }

      return headers;
    },
    beforeUpload(file) {
      // 1MB = 1,000 KB 1MiB = 1,024KiB
      const isLimit = file.size / 1000 / 1000 <= this.filesizeLimitUnitMB;

      if (!isLimit) {
        this.$message.warning(`File size can not exceed ${this.filesizeLimitUnitMB}MB!`);
      }

      return isLimit;
    },
  },
};
</script>

<style lang="scss" scoped>
.upload {
  &-dragger {
    width: 400px;
    height: 180px;
    background-color: #fff;
    border: 2px dashed rgba(156, 146, 146, 0.63);
    border-radius: 6px;
    box-sizing: border-box;
    text-align: center;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    line-height: 180px;
    margin: 20px auto 10px;
    font-size: 20px;

    &:hover {
      box-shadow: 0px 0px 10px #4587dd;
    }
  }

  em {
    color: #409eff;
    font-style: normal;
  }

  &-tip {
    margin-top: 10px;
    font-size: 13px;
    color: #606266;
    text-align: center;
  }

  .is-dragover {
    background-color: rgba(238, 240, 242, 0.5);
    border: 2px dashed #83cfc9;
  }
}
</style>

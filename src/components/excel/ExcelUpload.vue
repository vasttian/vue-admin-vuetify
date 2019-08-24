<template>
  <div>
    <v-subheader>
      <label for="file">Spreadsheet</label>
    </v-subheader>
    <input
      id="file"
      type="file"
      ref="excel-upload-input"
      class="excel-upload-input"
      :accept="sheetJSFT"
      @change="handleUpload"
    >
    <div
      class="drop-wrapper"
      @drop="handleDropFile"
      @dragenter="handleSuppress"
      @dragover="handleSuppress"
    >
      Drop a file here or
      <v-btn
        small
        color="blue-grey"
        style="line-height: 30px"
        @click="handleUpload"
      >
        Upload
      </v-btn>
    </div>

    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th
              v-for="c in cols"
              :key="c.key"
            >{{c}}</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(r, key) in fileData"
            :key="key"
          >
            <td
              v-for="c in cols"
              :key="c.key"
            > {{ r[c.key] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import XLSX from 'xlsx';

export default {
  name: 'ExcelUpload',
  props: {
    beforeUpload: Function,
    onSuccess: Function,
  },
  data() {
    const SheetJSFT = [
      'xlsx',
      'xlsb',
      'xlsm',
      'xls',
      'xml',
      'csv',
      'txt',
      'ods',
      'fods',
      'uos',
      'sylk',
      'dif',
      'dbf',
      'prn',
      'qpw',
      '123',
      'wb*',
      'wq*',
      'html',
      'htm',
    ]
      .map((x) => {
        return '.' + x;
      })
      .join(',');
    return {
      loading: false,
      sheetJSFT: SheetJSFT,
      cols: [],
      fileData: [],
    };
  },
  methods: {
    handleUpload(e) {
      this.loading = 'loading';
      const files = e.target.files || [];
      if (files && files[0]) {
        this.readFile(files[0]);
      }
    },
    handleDropFile(e) {
      e.stopPropagation();
      e.preventDefault();
      const files = e.dataTransfer.files || [];
      if (files && files[0]) {
        this.readFile(files[0]);
      }
    },
    handleSuppress(e) {
      e.stopPropagation();
      e.preventDefault();
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
        const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
        this.fileData = data;
        this.cols = this.makeCols(ws);
      };
      reader.readAsBinaryString(file);
    },
    makeCols(ws) {
      // console.log('>>>>ws', ws);
      const range = XLSX.utils.decode_range(ws['!ref']);
      const { r } = range.s;
      const cols = [];

      for (let { c } = range.s; c <= range.e.c; c += 1) {
        const col = ws[XLSX.utils.encode_cell({ c, r })];
        cols.push(col && col.t ? XLSX.utils.format_cell(col) : '');
      }

      return cols;
    },
  },
};
</script>

<style lang="scss" scoped>
.drop-wrapper{
  margin: 0 auto;
  width: 460px;
  height: 180px;
  line-height: 180px;
  border: 2px dashed rgba(156, 146, 146, 0.63);
  font-size: 20px;
  border-radius: 8px;
  text-align: center;
  color: rgb(59, 197, 202);
  position: relative;
}
</style>

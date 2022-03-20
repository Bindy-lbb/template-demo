<template>
  <div id="handsontable"></div>
</template>

<script>
import { HotTable } from "@handsontable/vue";
import { registerAllModules } from "handsontable/registry";
import "handsontable/dist/handsontable.full.css"; // 样式
import { Container } from "element-ui";
import HandsonTable from "handsontable/base";
import { CopyPaste, registerPlugin } from "handsontable/plugins";

// // register Handsontable's modules
// registerAllModules();

export default {
  components: {
    HotTable,
  },
  data() {
    return { tableData: null, handsonTableInstance: null };
  },

  mounted() {
    this.init();
  },
  methods: {
    init() {
      const container = document.getElementById("handsontable");
      const setting = {
        licenseKey: "non-commercial-and-evaluation", // 隐藏版权文字
        data: this.tableData,
        dataSchema: { ipv6: "" },
        width: "100%",
        height: 380,
        startCols: 1,
        maxCols: 1,
        maxRows: 500,
        startRows: 15,
        colHeaders: ["IPv6"],
        rowHeaders: true,
        colWidths: 300,
        columns: [{ data: "ip", type: "text" }],
      };

      //注册可复制粘贴插件
      registerPlugin(CopyPaste);
      this.handsonTableInstance = new HandsonTable(container, setting);
    },
  },
};
</script>

<style lang="">
</style>
<template>
  <div class="all-panel">
    <div class="panel-toolbar">
      <div class="panle-title">表格</div>
    </div>
    <div class="panel-container">
      <!-- <div id="main" class="main_container"></div> -->
      <div id="main" style="width: 600px; height: 400px"></div>
    </div>
  </div>
</template>
<script>
import api from "@/api/testApi.js";
import * as echarts from "echarts";

export default {
  data() {
    var myChart = echarts.init(document.getElementById("main"));
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped>
</style>
<template>
  <div>
    <el-tabs
      type="border-card"
      v-model="activeList.tab"
      @tab-click="handleClick"
    >
      <el-tab-pane label="单个新增" name="input">
        <div><HandsonTable></HandsonTable></div>
      </el-tab-pane>
      <el-tab-pane label="文件上传" name="upload">
        <div><Upload></Upload></div
      ></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import HandsonTable from "./handson-table.vue";
import Upload from "./upload.vue";
export default {
  components: {
    HandsonTable,
    Upload,
  },
  props: {},
  data() {
    return {
      activeList: {
        tab: "input",
      },
    };
  },

  methods: {
    handleClick(tab) {
      this.activeList.tab = tab.name;
    },
  },
};
</script>
<style lang="">
</style>
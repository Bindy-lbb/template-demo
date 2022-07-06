<template>
  <div id="app">
    <div class="report-page">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">
          <MapInfo></MapInfo>
        </el-tab-pane>
        <el-tab-pane label="信息管理" name="two"></el-tab-pane>
      </el-tabs>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MapInfo from "./map-info.vue";
export default {
  name: "App",
  components: {
    MapInfo,
  },
  data() {
    return {
      activeName: "",
    };
  },

  // 父组件中返回要传给下级的数据
  provide() {
    return {
      reload: this.reload,
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => {
        this.isRouterAlive = true;
      });
    },
  },
};
</script>

<style scoped>
.report-page {
  padding: 30px;
}
</style>


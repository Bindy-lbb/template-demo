<template>
  <div>
    <el-container class="home-container">
      <el-header>
        <TopMenu></TopMenu>
      </el-header>
      <el-container id="left-container">
        <el-aside width="200px">
          <LeftMenu></LeftMenu>
        </el-aside>
        <el-main>
          <BreadCrumb></BreadCrumb>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import TopMenu from "./topMenu";
import LeftMenu from "./leftMenu";
import BreadCrumb from "./breadCrumb.vue";

export default {
  name: "MenuIndex",
  components: { TopMenu, LeftMenu, BreadCrumb },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.home-container {
  position: relative;
  height: 100%;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
}
.el-aside {
  height: 100%;
  background-color: #333744;
  .el-menu {
    border-right: none;
  }
}
</style>
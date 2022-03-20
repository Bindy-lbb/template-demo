<template>
  <div id="left-menu">
    <div
      class="toggle-button"
      @click="toggleCollapsed"
    >
      |||
    </div>
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      :collapse="false"
      :collapse-transition="false"
      :router="true"
      :unique-opened="true"
      active-text-color="#409EFF"
      background-color="#333744"
      text-color="#fff"
    >
      <el-menu-item index="1">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-user-solid"></i>
          <span slot="title">员工管理</span>
        </template>
        <el-menu-item index="2-1">员工统计</el-menu-item>
        <el-menu-item index="2-2">员工管理</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-s-claim"></i>
          <span slot="title">考勤管理</span>
        </template>
        <el-menu-item index="3-1">考勤统计</el-menu-item>
        <el-menu-item index="3-2">考勤列表</el-menu-item>
        <el-menu-item index="3-2">异常管理</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">工时管理</span>
        </template>
        <el-menu-item index="4-1">工时统计</el-menu-item>
        <el-submenu index="4-2">
          <template slot="title">工时列表</template>
          <el-menu-item index="4-2-1">选项一</el-menu-item>
          <el-menu-item index="4-2-2">选项二</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">工时管理</span>
        </template>
        <el-menu-item index="4-1">工时统计</el-menu-item>
        <el-submenu index="4-2">
          <template slot="title">工时列表</template>
          <el-menu-item index="4-2-1">选项一</el-menu-item>
          <el-menu-item index="4-2-2">选项二</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">工时管理</span>
        </template>
        <el-menu-item index="4-1">工时统计</el-menu-item>
        <el-submenu index="4-2">
          <template slot="title">工时列表</template>
          <el-menu-item index="4-2-1">选项一</el-menu-item>
          <el-menu-item index="4-2-2">选项二</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">工时管理</span>
        </template>
        <el-menu-item index="4-1">工时统计</el-menu-item>
        <el-submenu index="4-2">
          <template slot="title">工时列表</template>
          <el-menu-item index="4-2-1">选项一</el-menu-item>
          <el-menu-item index="4-2-2">选项二</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </div>

</template>



<script>
export default {
  data() {
    return {
      // 是否动态折叠
      isCollapsed: false,
    };
  },
  computed: {
    routes() {
      console.log(
        this.$router.options.routes,
        "===this.$router.options.routes"
      );
      return this.$router.options.routes;
    },
  },

  methods: {
    toggleCollapsed() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
};
</script>

<style lang="less" scoped>
.left-menu {
  height: 100%;
}
.toggle-button {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #ffffff;
  text-align: center;
  letter-spacing: 0.2em;
  // cursor CSS 属性设置鼠标光标的类型（如果有），以在鼠标指针悬停在元素上时显示
  cursor: pointer;
}
.el-menu-vertical-demo {
  border-right: none;
}
</style>
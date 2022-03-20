<template>
  <div>
    <el-button @click="go()"> 22</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    go() {
      this.$router.push({
        name: "go",
      });
    },
  },
};
</script>
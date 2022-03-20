<template>
  <div class="dashboard-container">
    <div class="dashboard-text">欢迎: {{ name }}</div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";

export default {
  name: "Dashboard",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["name"]),
    // ...mapState(["name", "age"]),
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>

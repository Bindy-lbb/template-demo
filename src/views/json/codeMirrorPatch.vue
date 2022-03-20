<template>
  <div>
    <el-input v-model="newValue"></el-input>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      dafault: "",
    },
  },
  computed: {
    // newValue: {
    //   get() {
    //     return this.value;
    //   },
    //   set(newValue) {
    //     this.$emit("update:value", newValue);
    //   },
    // },
  },
};
</script>


<style >
</style>
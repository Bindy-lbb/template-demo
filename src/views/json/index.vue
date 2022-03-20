<template>
  <div class="json">
    <el-button type="primary" @click="open">点击打开弹框</el-button>
    <el-dialog
      v-if="mVisible"
      title="弹框"
      :visible.sync="mVisible"
      :close-on-click-modal="false"
      :destroy-on-close="true"
      @close="closeDialog"
    >
      <div class="dialog-content"><SelectCard></SelectCard></div>
      <div class="dialog-footer" slot="footer">
        <el-button type="primary" @click="closeDialog">取消</el-button>
        <el-button type="primary" @click="closeDialog">确认</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// import CodeMirrorPatch from "./codeMirrorPatch.vue";
import SelectCard from "./selectCard.vue";
export default {
  components: {
    // CodeMirrorPatch,
    SelectCard,
  },
  props: {},
  data() {
    return {
      mVisible: false,
    };
  },
  methods: {
    open() {
      this.mVisible = true;
    },
    //关闭弹窗
    closeDialog() {
      this.mVisible = false;
    },
  },
};
</script>

<style lang="less" scoped>
.json {
  padding: 20px;
  display: flex;
  flex-direction: column;
}
</style>
<template>
  <div>
    <baidu-map
      class="bm-view"
      :center="center"
      :zoom="14"
      :scroll-wheel-zoom="true"
    >
      <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
      <bm-marker
        :position="{ lng: 116.404, lat: 39.915 }"
        @click="clickMarker"
      ></bm-marker>
      <div class="info-window">
        <bm-overlay
          ref="customOverlay"
          pane="labelPane"
          v-show="showDialog"
          class="info-window"
          @draw="draw"
        >
          <div class="info-window_header"></div>
          <div class="info-window_content" v-show="showDialog">44444</div>
        </bm-overlay>
      </div>
    </baidu-map>
  </div>
</template>

<script>
export default {
  watch: {
    position: {
      handler() {
        this.$refs.customOverlay.reload(); // 当位置发生变化时，重新渲染，内部会调用draw
      },
      deep: true,
    },
  },
  data() {
    return {
      props: ["text", "position", "color"], // 用来接受传入的值，用来定制样式

      center: { lng: 116.404, lat: 39.915 },
      // pointColor: "",
      showDialog: false,
    };
  },

  mounted() {
    // this.pointColor = this.color; // 这里我是用来获取传入的值来定义样式的，可能有点多余了，pointColor是组件中绑定的样式，color是传进来的样式。【这样就可以根据传入的样式来显示不同样子的点了】
  },

  methods: {
    draw({ el, BMap, map }) {
      const { lng, lat } = this.center;
      const pixel = map.pointToOverlayPixel(new BMap.Point(lng, lat));
      el.style.left = pixel.x - 16 + "px";
      el.style.top = pixel.y - 16 + "px";
    },

    clickMarker() {
      this.showDialog = !this.showDialog;
    },
  },
};
</script>
<style lang='less' scoped >
.bm-view {
  width: 100%;
  height: 500px;
  .BMap_cpyCtrl {
    display: none;
  }
  .anchorBL {
    display: none;
  }
  // .sample {
  //   width: 32px;
  //   height: 32px;
  //   line-height: 32px;
  //   border-radius: 32px;
  //   background: rgba(0, 0, 0, 0.5);
  //   overflow: hidden;
  //   box-shadow: 0 0 5px #000;
  //   color: #fff;
  //   text-align: center;
  //   position: absolute;
  // }
  // .sample.active {
  //   background: rgba(0, 0, 0, 0.75);
  //   color: #fff;
  // }
  .info-window {
    width: 440px;

    &_content {
      width: 100px;
      height: 100px;
      border: 1px solid #000;
      background: #fff;
    }
  }
}
</style>
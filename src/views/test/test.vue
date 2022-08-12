<template>
  <div class="map-point-main">
    <HeaderBar title="地图打点"></HeaderBar>
    <div class="map-point">
      <div class="map-point__side">
        <div>请确认坐标系，并输入经纬度进行地图打点（云镜默认BD09）</div>

        <div class="map-point__radio">
          <label>坐标系:</label>
          <el-radio-group v-model="radio">
            <el-radio label="WGS84">WGS84</el-radio>
            <el-radio label="GCJ02">GCJ02</el-radio>
            <el-radio label="BD09">BD09</el-radio>
          </el-radio-group>
        </div>

        <div class="map-point__action">
          <el-input
            type="textarea"
            placeholder="请输入经纬度，并使用回车分割，最多输入500个经纬度"
            v-model="textarea"
            @change="textareaChange"
            :row="8"
          ></el-input>
          <el-row type="flex" justify="end">
            <el-button
              type="primary"
              :disabled="disabled"
              @click="handlePoint"
              style="margin-top: 10px"
            >
              打点
              <el-tooltip
                class="item"
                effect="dark"
                content="打点时坐标格式有问题的点会自动过滤"
                placement="bottom-start"
              >
                <i class="el-icon-question"></i>
              </el-tooltip>
            </el-button>
          </el-row>
          <description-list title="经纬度格式" :col="1">
            <description-list-item term="坐标"
              >116.404,39.915（经纬度之间按英文逗号分割）</description-list-item
            >
          </description-list>
        </div>

        <el-upload
          class="map-point__upload"
          action="#"
          :http-request="stopAction"
          :before-upload="beforeUpload"
          :on-remove="onFileRemove"
          :on-change="handleChange"
          multiple
          :file-list="fileList"
        >
          <el-button slot="trigger" type="primary">点击上传文件</el-button>
          <el-button
            style="margin-left: 8px"
            @click="handleSetPointByFile"
            :disabled="fileList.length === 0"
            >打点</el-button
          >
          <div slot="tip" class="el-upload__tip">
            <div>只能上传xls/xlsx文件，且不超过500kb；文件格式如下:</div>
            <el-table :data="positionData" border style="margin-top: 10px">
              <el-table-column prop="lng" label="lng"></el-table-column>
              <el-table-column prop="lat" label="lat"></el-table-column>
            </el-table>
          </div>
        </el-upload>

        <description-list title="坐标系解释" :col="1">
          <description-list-item term="WGS84坐标系"
            >地球坐标系，国际通用坐标系</description-list-item
          >
          <description-list-item term="GCJ02坐标系"
            >火星坐标系，WGS84坐标系加密后的坐标系；Google国内地图、高德、QQ地图使用</description-list-item
          >
          <description-list-item term="BD09坐标系"
            >百度坐标系，GCJ02坐标系加密后的坐标系</description-list-item
          >
        </description-list>
      </div>

      <div class="map-point__map">
        <el-card class="circleInfoWindow" v-if="showCircleDataFlag">
          <span>0000000</span>
        </el-card>
        <baidu-map
          class="baidu__map"
          :center="$loginInfo.location"
          :zoom="15"
          :max-zoom="18"
          :scroll-wheel-zoom="true"
          @ready="mapReady"
        >
          <map-tool-box
            class="map-point__side__boxButton"
            :mapDom="$refs['baidu__map']"
            :useFence="true"
            :points="points"
            @showCircleData="setCircleData"
            @hiddenCricleData="hiddenCricleData"
          ></map-tool-box>
          <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>

          <bm-point-collection
            :points="points"
            shape="BMAP_POINT_SHAPE_CIRCLE"
            color="red"
            size="BMAP_POINT_SIZE_BIGGER"
            @click="clickHandler"
          ></bm-point-collection>
        </baidu-map>
      </div>
    </div>
  </div>
</template>

<script>
import gcoord from "gcoord";
import XLSX from "xlsx";
import HeaderBar from "./coms/header-bar";
import DescriptionList from "./coms/description-list";
import api from "@self/data/api.js";
import mapToolBox from "@self/components/map-tool-box";

const DescriptionListItem = DescriptionList.Item;

function isLongLat(obj) {
  const regLng =
    /^[\-\+]?(0(\.\d{1,16})?|([1-9](\d)?)(\.\d{1,16})?|1[0-7]\d{1}(\.\d{1,16})?|180\.0{1,16})$/;
  const regLat = /^[\-\+]?((0|([1-8]\d?))(\.\d{1,16})?|90(\.0{1,16})?)$/;
  const { lng, lat } = obj;

  return regLng.test(lng) && regLat.test(lat) ? true : false;
}

const fromMap = {
  BD09: gcoord.BD09,
  WGS84: gcoord.WGS84,
  GCJ02: gcoord.GCJ02,
};

export default {
  name: "MapPoint",
  components: {
    HeaderBar,
    DescriptionList,
    DescriptionListItem,
    mapToolBox,
  },
  data() {
    return {
      map: null,
      BMap: null,
      fileList: [],
      disabled: false,
      radio: "BD09",
      textarea: "",
      markerPoint: { lng: 116.404, lat: 39.915 },
      points: [],
      filePoints: [],
      file: {},
      positionData: [{ lng: 116.404, lat: 39.915 }],
      showCircleDataFlag: false,
    };
  },
  computed: {},
  methods: {
    hiddenCricleData(flag) {
      this.showCircleDataFlag = flag;
    },
    setCircleData(option) {
      console.log(option, "====option");
      this.showCircleDataFlag = true;
    },
    mapReady({ map, BMap }) {
      this.map = map;
      this.BMap = BMap;
    },
    stopAction() {
      // do no thing
    },
    /*
     * params: Object
     * eg: { lng: 116.404, lat: 39.915 }
     */
    translate(obj) {
      const { lng, lat } = obj;
      const position = [Number(lng), Number(lat)];
      const result = gcoord.transform(
        position, // 经纬度坐标
        fromMap[this.radio], // 当前坐标系
        gcoord.BD09 // 目标坐标系
      );
      // 116.403988,39.914266

      const point = { lng: Number(result[0]), lat: Number(result[1]) };
      return point;
    },

    textareaChange(str) {
      const gps = str.trim().split(/\s\r\n|[\s\r\n]/);
      if (gps.length > 500) {
        this.$message.warning(`坐标数量超过500条`);
        this.disabled = true;
      } else {
        this.disabled = false;
      }
    },

    /*
输入框打点
*/
    handlePoint() {
      if (this.textarea.trim() === "") {
        this.$message.warning(`不能输入空数据`);
        return;
      }
      try {
        const points = [];
        const formatArr = [];
        const gps = this.textarea.trim().split(/\s\r\n|[\s\r\n]/);
        gps.forEach((e) => {
          const regLngOrLat =
            /^[\-\+]?(0(\.\d{1,10})?|([1-9](\d)?)(\.\d{1,10})?|1[0-7]\d{1}(\.\d{1,16})?|180\.0{1,16}),[\-\+]?((0|([1-8]\d?))(\.\d{1,16})?|90(\.0{1,16})?)$/;
          const format = regLngOrLat.test(e);
          const position = {
            lng: Number(e.split(",")[0]),
            lat: Number(e.split(",")[1]),
          };
          const point = this.translate(position);
          isLongLat(point) && points.push(point);

          formatArr.push(format);
        });

        const formatFlag = formatArr.every((e) => e === true);
        if (!formatFlag) {
          throw new Error(true);
        }
        this.points = points;
        this.map.setViewport(points, { zoomFactor: -5 });
      } catch (error) {
        this.$message.warning(`当前输入内容数据格式错误，请重试`);
      }
    },

    clickHandler(e) {
      this.$message(`单击点的坐标为：${e.point.lng}, ${e.point.lat}`);
    },

    onFileRemove() {
      this.map.reset();
      this.fileList = [];
    },

    handleChange(file, fileList) {
      this.fileList = fileList.slice(-1);
    },

    /*
文件上传处理
*/
    async beforeUpload(file) {
      const isLtType =
        file.type === "application/vnd.ms-excel" ||
        file.type ===
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

      if (!isLtType) {
        this.$message.warning("文件格式只能是xls,xlsx");
        return Promise.reject(false);
      }
      const isLt5M = file.size / 1024 / 1024 < 5;
      if (!isLt5M) {
        this.$message.warning("文件大小不能大于5MB");
        return Promise.reject(false);
      }
      let isLtData = null;
      let noData = null;
      let isFormat = null;
      let targetFileResult = null;
      try {
        targetFileResult = await this.readFileAsync(file);
        const sheetLength = [];
        const formatCheckArr = [];
        /* Parse data */
        const workbook = XLSX.read(targetFileResult, {
          type: "binary",
        });

        workbook.SheetNames.forEach((sheet) => {
          //生成json表格内容

          const ws = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
          sheetLength.push(Number(ws.length));

          // TODO 检查上传文件的表头字段：不为"经度""纬度"则为错误格式文件
          ws.forEach((position) => {
            const formatCheck =
              position.hasOwnProperty("lng") && position.hasOwnProperty("lat");
            formatCheckArr.push(formatCheck);
          });
        });

        const all = sheetLength.reduce((total, cur) => {
          return total + cur;
        }, 0);

        isLtData = all < 501;
        if (!isLtData) {
          this.$message.warning(`当前文件数据条数超过500条，请重试`);
        }

        noData = all < 1;
        if (noData) {
          this.$message.warning(`当前文件数据为空，请重试`);
        }

        isFormat = formatCheckArr.every((e) => e === true);
        if (!isFormat) {
          this.$message.warning(`当前文件数据格式错误，请重试`);
        }
      } catch (error) {
        this.$message.error(`当前文件数据解析失败，请重试`);
        return Promise.reject(false);
      }

      if (isLtData && !noData && isFormat) {
        this.file = targetFileResult;
        return Promise.resolve(true);
      } else {
        return Promise.reject(false);
      }
    },

    /*
读取文件打点
*/
    async handleSetPointByFile() {
      try {
        const points = [];
        /* Parse data */
        const workbook = XLSX.read(this.file, {
          type: "binary",
        });

        workbook.SheetNames.forEach((sheet) => {
          //生成json表格内容
          const ws = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
          ws.forEach((position) => {
            const point = {
              lng: position["lng"],
              lat: position["lat"],
            };
            const result = this.translate(point);
            isLongLat(result) && points.push(result);
            this.filePoints = points;
          });
        });
      } catch (error) {
        this.$message.error(`当前文件数据解析失败，请重试`);
      }
      this.points = this.filePoints;
      this.map.setViewport(this.filePoints, { zoomFactor: 0 });
    },

    /*
异步读取文件
*/
    readFileAsync(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsBinaryString(file);
      });
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.map-point-main {
  padding-bottom: 0;
  height: calc(100vh - 56px);
}
.map-point {
  margin-top: 10px;
  display: flex;
  &__side {
    width: 380px;
    height: 100%;
    overflow: auto;
    .map-point__radio {
      margin: 10px 0;
      display: inline-block;
      label {
        margin-right: 10px;
      }
    }
    .map-point__action {
      margin-bottom: 10px;
    }
    .map-point__upload {
      margin-bottom: 16px;
    }
    .map-point__desc {
      margin-top: 10px;
    }
  }
  &__map {
    flex: 1;
    height: calc(100vh - 122px);
    padding-left: 10px;
    position: relative;
    .baidu__map {
      height: 100%;
    }
    .circleInfoWindow {
      position: absolute;
      top: 140px;
      left: 10px;
      z-index: 10;
    }
  }
}

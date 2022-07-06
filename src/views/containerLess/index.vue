<template>
  <div>
    <div class="container">
      <el-date-picker
        v-model="startTime"
        type="datetime"
        placeholder="选择日期时间"
        align="left"
        :picker-options="pickerOptions"
      ></el-date-picker
      ><el-button @click="search" style="margin-left: 20px">查询</el-button>
      <div class="panel">
        <LineCharts ref="aa"></LineCharts>
        ><!-- <PieChart ref="bb"></PieChart> -->
      </div>
      <div style="margin-top: 30px">
        <vue-json-pretty
          :path="'res'"
          :data="{ key: 'value' }"
        ></vue-json-pretty>
      </div>
      <div class="text-list" style="margin-top: 30px">333</div>
    </div>
  </div>
</template>
<script>
import LineCharts from "@/components/charts/LineChart.vue";
import PieChart from "@/components/charts/pieChart.vue";
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";
import { logData } from "@/api/table";

export default {
  components: {
    LineCharts,
    VueJsonPretty,
    // PieChart,
  },
  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            },
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            },
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            },
          },
        ],
      },
      startTime: "",
      dataList: [],
      // newArr: [],
    };
  },
  mounted() {
    // this.getData();
  },
  methods: {
    search() {},
    getData() {
      logData().then((res) => {
        this.dataList = res[0].data;
        console.log(this.dataList, "===");
        this.dataList.map((changelog) => {
          changelog.history?.map((his) => {
            console.log(his, "===his");
            const newArr = [
              ...his.diff.del?.map((item) => {
                ({ ...item, type: "del" });
              }),
              ...his.diff.ins?.map((item) => {
                ({ ...item, type: "ins" });
              }),
            ];
            console.log(newArr, "====bewArr");
            return { ...his, newArr };
          });
        });
      });
    },
  },
};
</script>
<style lang="less" scoped>
.container {
  padding: 20px 20px;
  .panel {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    column-gap: 20px; //设置列间距
    // row-gap: 20px;
  }
}
</style>
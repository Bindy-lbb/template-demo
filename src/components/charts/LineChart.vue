<template>
  <div class="all-panel">
    <div class="panel-toolbar">
      <div class="panle-title">表格</div>
      <div class="panel-status">
        <template>
          <span
            class="panel-status-item"
            v-for="item in statusList"
            :key="item.status"
            >{{ item.name }}</span
          >
          <el-divider direction="vertical"> </el-divider>
        </template>
      </div>
      <div class="panel-action"></div>
    </div>
    <div class="panel-container">
      <div id="main" class="main_container"></div>
      <div id="main_two" class="main_container"></div>
    </div>
  </div>
</template>
<script>
import api from "@/api/testApi.js";
import Highcharts from "highcharts";
import HighchartsNoData from "highcharts/modules/no-data-to-display";
// import { log } from "handsontable/helpers";
import { getData } from "@/api/testApi.js";

HighchartsNoData(Highcharts);

export default {
  data() {
    return {
      statusList: [
        { name: "全部", status: 1 },
        {
          name: "在用",
          status: 2,
        },
      ],
    };
  },
  mounted() {
    // this.getData();
    this.initCharts();
  },
  methods: {
    categoriesDay() {},

    async initCharts() {
      const res = await getData();
      console.log(res, "====看看res");
      const categoriesXDay = res.list.map(({ day }) => day);
      console.log(categoriesXDay, "= categoriesXDay");
      // const { endTime = "", list = [], startTime = "", total = "" } = res;
      const allTotal = res.list.map(({ total }) => total);
      const formalCount = res.list.map(({ formalCount }) => formalCount);
      const trailCount = res.list.map(({ trailCount }) => trailCount);

      const chartOptions = {
        colors: ["#a0b0de", "#abcad3", "#d7e0c6", "#feeed6"],
        chart: {
          type: "spline",
          // margin: [21, 23, 24, 54], //整个图表的位置(上下左右的空隙)
          inverted: false,
          borderWidth: 1,
          borderColor: `#d9d9d9`,
          vertical: 1,
        },
        lang: { vertical: "没有数据" },
        title: {
          text: null,
          // x: -200, //center //水平偏移量
          // y: 10, //y:垂直偏移量
          // align: "left", //水平方向（left, right, bottom, top）
          // floating: true, //是否浮动显示
          // margin: 15,
          // verticalAlign: "left",
        },
        legend: {
          layout: "horizontal", //horizontal水平排列  vertical 垂直排列
          align: "right",
          verticalAlign: "top",
          // floating: true,
          borderWidth: 1,
        },
        xAxis: {
          categories: categoriesXDay,
          title: {
            text: "天",
            align: "high",
            x: -10,
            y: -25,
          },
        },
        yAxis: {
          title: {
            text: "数量",
            align: "high",
            rotation: 360,
          },
        },
        //设置右下角标记
        credits: {
          enabled: true,
          text: "卜卜图表",
          position: {
            //显示的位置
            align: "right",
            x: -10,
          },
          href: "", //路径
        },
        tooltip: {
          shared: true,
          // valueSuffix: "",
          headerFormat: `<span style="font-size:10px;">{point.key}</span><table>`,
          pointFormat: `<tr style="background-color:transparent;">
          <td style="color:{series.color};padding:0">{series.name}:</td>
          <td style="padding:0;"><b>{point.y}</b></td></tr>
          `,
          footerFormat: `</table>`,
          useHTML: true, //是否使用html渲染！！！！！！！
        },
        //绘图线条控制
        plotOptions: {
          areaspline: {
            lineWidth: 1.5,
          },
          marker: {
            enabled: true, //是否显示点
            radius: 3, //点的半径
            fillColor: "#888",
            lineColor: "#000",
            states: {
              hover: {
                enabled: true, //鼠标放上去点是否放大
                lineWidth: 3,
              },
              select: {
                enabled: false, //控制鼠标选中点时候的状态
              },
            },
          },
        },
        series: [
          {
            type: "area",
            name: "全部",
            data: allTotal,
          },
          {
            name: "正式",
            data: formalCount,
          },
          {
            name: "试用",
            data: trailCount,
          },
        ],
      };

      const chartTwoOptions = {
        colors: ["#a0b0de", "#abcad3", "#d7e0c6", "#feeed6"],
        chart: {
          type: "line",
          // margin: [21, 23, 24, 54], //整个图表的位置(上下左右的空隙)
          inverted: false,
          borderWidth: 1,
          borderColor: `#d9d9d9`,
          vertical: 1,
        },
        lang: { vertical: "没有数据" },
        title: {
          text: null,
          // x: -200, //center //水平偏移量
          // y: 10, //y:垂直偏移量
          // align: "left", //水平方向（left, right, bottom, top）
          // floating: true, //是否浮动显示
          // margin: 15,
          // verticalAlign: "left",
        },
        legend: {
          layout: "horizontal", //horizontal水平排列  vertical 垂直排列
          align: "right",
          verticalAlign: "top",
          // floating: true,
          borderWidth: 1,
        },
        xAxis: {
          categories: categoriesXDay,
          title: {
            text: "天",
            align: "high",
            x: -10,
            y: -25,
          },
        },
        yAxis: {
          title: {
            text: "数量",
            align: "high",
            rotation: 360,
          },
        },
        //设置右下角标记
        credits: {
          enabled: true,
          text: "卜卜图表",
          position: {
            //显示的位置
            align: "right",
            x: -10,
          },
          href: "", //路径
        },
        tooltip: {
          shared: true,
          // valueSuffix: "",
          headerFormat: `<span style="font-size:10px;">{point.key}</span><table>`,
          pointFormat: `<tr style="background-color:transparent;">
          <td style="color:{series.color};padding:0">{series.name}:</td>
          <td style="padding:0;"><b>{point.y}</b></td></tr>
          `,
          footerFormat: `</table>`,
          useHTML: true, //是否使用html渲染！！！！！！！
        },
        //绘图线条控制
        plotOptions: {
          areaspline: {
            lineWidth: 1.5,
          },
          marker: {
            enabled: true, //是否显示点
            radius: 3, //点的半径
            fillColor: "#888",
            lineColor: "#000",
            states: {
              hover: {
                enabled: true, //鼠标放上去点是否放大
                lineWidth: 3,
              },
              select: {
                enabled: false, //控制鼠标选中点时候的状态
              },
            },
          },
        },
        series: [
          {
            type: "area",
            name: "全部",
            data: allTotal,
          },
          {
            name: "正式",
            data: formalCount,
          },
          {
            name: "试用",
            data: trailCount,
          },
        ],
      };

      let that = this;
      this.charts = new Highcharts.Chart("main", chartOptions);
      this.charts = new Highcharts.Chart("main_two", chartTwoOptions);
    }
  },
};
</script>
<style lang="less" scoped>
.panel-toolbar {
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  margin-bottom: 16px;
  .panle-title {
    color: #515a6e;
    font-size: 16px;
    font-weight: 500;
    padding-left: 8px;
    margin-right: 20px;
    margin-top: 20px;
    position: relative;

    &::after {
      position: absolute;
      content: "";
      top: 4px;
      left: 0;
      width: 2px;
      height: 14px;
      background: rgb(127, 136, 255);
    }
  }
  .panel-status {
    .panel-status-item {
      cursor: pointer;
    }
  }
}
.panel-container {
  width: 100%;
}
// .panel-container {
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   column-gap: 20px; //设置列间距
//   row-gap: 20px;
// }
</style>
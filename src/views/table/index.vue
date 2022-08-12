<template>
  <div>
    <el-form ref="form" :model="ruleForm" :rules="rules" label-width="80px">
      <el-form-item label="ip" prop="ip">
        <el-select
          v-model="ruleForm.ip"
          multiple
          filterable
          allow-create
          default-first-option
          placeholder="请选择文章标签"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>

    <el-button @click="save">保存</el-button>
    <div id="container" />
  </div>
</template>

<script>
import Sortable from "sortablejs";
import { uniqBy } from "lodash-es";
import G6 from "@antv/g6";
import { v4 as uuidv4 } from "uuid";
// import { log } from "handsontable/helpers";

export default {
  data() {
    let ipTest = (rule, value, callback) => {
      console.log(value, "===value");
      if (value === "" || typeof value === "undefined" || value == null) {
        callback(new Error("请输入正确的IP地址"));
      } else {
        const reg =
          /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
        if (!reg.test(value) && value !== "") {
          callback(new Error("请输入正确的IP地址"));
        } else {
          callback();
        }
      }
    };
    return {
      options: [
        {
          value: "HTML",
          label: "HTML",
        },
        {
          value: "CSS",
          label: "CSS",
        },
        {
          value: "JavaScript",
          label: "JavaScript",
        },
      ],
      value: [],
      ruleForm: {
        ip: [], //注意这里是个数组
      },

      rules: {
        ip: [
          {
            required: true,
            trigger: "change",
            validator: ipTest,
          },
        ],
      },

      graph: undefined, //new G6
      data: {
        nodes: [
          {
            id: "0",
            label: "0",
          },
          {
            id: "1",
            label: "1",
          },
          {
            id: "2",
            label: "2",
          },
          {
            id: "3",
            label: "3",
          },
          {
            id: "4",
            label: "4",
            comboId: "A",
          },
          {
            id: "5",
            label: "5",
            comboId: "B",
          },
          {
            id: "6",
            label: "6",
            comboId: "A",
          },
          {
            id: "7",
            label: "7",
            comboId: "C",
          },
          {
            id: "8",
            label: "8",
            comboId: "C",
          },
          {
            id: "9",
            label: "9",
            comboId: "A",
          },
          {
            id: "10",
            label: "10",
            comboId: "B",
          },
          {
            id: "11",
            label: "11",
            comboId: "B",
          },
        ],
        edges: [
          {
            source: "0",
            target: "1",
          },
          {
            source: "0",
            target: "2",
          },
          {
            source: "1",
            target: "4",
          },
          {
            source: "0",
            target: "3",
          },
          {
            source: "3",
            target: "4",
          },
          {
            source: "2",
            target: "5",
          },
          {
            source: "1",
            target: "6",
          },
          {
            source: "1",
            target: "7",
          },
          {
            source: "3",
            target: "8",
          },
          {
            source: "3",
            target: "9",
          },
          {
            source: "5",
            target: "10",
          },
          {
            source: "5",
            target: "11",
          },
        ],
        combos: [
          {
            id: "A",
            label: "combo A",
            style: {
              fill: "#C4E3B2",
              stroke: "#C4E3B2",
            },
          },
          {
            id: "B",
            label: "combo B",
            style: {
              stroke: "#99C0ED",
              fill: "#99C0ED",
            },
          },
          {
            id: "C",
            label: "combo C",
            style: {
              stroke: "#eee",
              fill: "#eee",
            },
          },
        ],
      },
      aArr: [
        { id: 1, count: 10 },
        { id: 2, count: 50 },
        { id: 4, count: 6 },
        { id: 3, count: 3 },
      ],
      bArr: [
        { id: 1, count: 11 },
        { id: 7, count: 50 },
        { id: 5, count: 6 },
        { id: 3, count: 3 },
      ],
    };
  },
  mounted() {
    this.init();
    this.getData();
  },
  methods: {
    getData() {
      // let arr1 = this.aArr
      //   .sort(function (a, b) {
      //     return b.count - a.count;
      //   })
      //   .slice(0, 2);
      // console.log(arr1, "===arr1");
      const newArr = [...this.aArr, ...this.bArr];
      console.log(newArr, "===newArr");
    },

    function factorial(n) {
    if (n==1) {
      return 1
    }
    return n*factorial(n-1)

    }
    // ipTest(rule, value, callback) {
    //   console.log(value, "===value");
    //   if (value === "" || typeof value === "undefined" || value == null) {
    //     callback(new Error("请输入正确的IP地址"));
    //   } else {
    //     const reg =
    //       /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
    //     if (!reg.test(value) && value !== "") {
    //       callback(new Error("请输入正确的IP地址"));
    //     } else {
    //       callback();
    //     }
    //   }
    //   // let regexp =
    //   //   /^((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}$/;

    //   // let isCorrect = true;
    //   // if (value) {
    //   //   if (regexp.test(value) == false) {
    //   //     isCorrect = false;
    //   //   }
    //   // }
    //   // if (value == "") {
    //   //   return callback(new Error("请输入iP地址"));
    //   // } else if (!isCorrect) {
    //   //   callback(new Error("请输入正确对ip地址"));
    //   // } else {
    //   //   callback();
    //   // }
    // },
    save() {},
    init() {
      this.data.nodes.forEach((node) => {
        switch (node.ComboId) {
          case "A":
            node.style = {
              fill: "#C4E3B2",
              stroke: "#aaa",
            };
            break;
          case "B":
            node.style = {
              fill: "#99C0ED",
              stroke: "#aaa",
            };
            break;
          case "C":
            node.style = {
              fill: "#eee",
              stroke: "#aaa",
            };
            break;
          default:
            node.style = {
              fill: "#FDE1CE",
              stroke: "#aaa",
            };
            break;
        }
      });
      const width = container.scrollWidth;
      const height = (container.scrollHeight || 800) - 30;
      this.graph = new G6.Graph({
        container: "container",
        width,
        height: height - 50,
        fitView: true,
        fitViewPadding: 30,
        animate: true,
        groupByTypes: false,
        modes: {
          default: [
            "drag-combo",
            "drag-node",
            "drag-canvas",
            {
              type: "collapse-expand-combo",
              relayout: false,
            },
          ],
        },
        layout: {
          type: "dagre",
          sortByCombo: false,
          ranksep: 10, //层间距
          nodesep: 10, //节点间距
        },
        defaultNode: {
          size: [60, 30],
          type: "rect",
          anchorPoints: [
            [0.5, 0],
            [0.5, 1],
          ],
        },
        defaultEdge: {
          type: "line",
        },
        defaultCombo: {
          type: "rect",
          style: {
            fillOpacity: 0.1,
          },
        },
      });
      this.graph.data(this.data);
      this.graph.render();

      if (typeof window !== "undefined")
        window.onresize = () => {
          if (!this.graph || this.graph.get("destroyed")) return;
          if (!container || !container.scrollWidth || !container.scrollHeight)
            return;
          this.graph.changeSize(
            container.scrollWidth,
            container.scrollHeight - 30
          );
        };
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 500px;
  height: 800px;
}
</style>



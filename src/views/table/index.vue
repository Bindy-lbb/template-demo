<template>
  <div>
    <!-- <el-dialog :visible.sync="visable" width="1000px"> -->
    <el-table row-key="date" border :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180">
        <template slot-scope="{ row }">
          {{ row.date }}
        </template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
        <template slot-scope="{ row }">
          <el-select v-model="row.name">
            <el-option
              v-for="item in options"
              :key="item.id"
              :label="item.id"
              :value="item.name"
            ></el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
    <pre>{{ tableData }}</pre>

    <el-button @click="add">aaa</el-button>
    <!-- </el-dialog> -->
  </div>
</template>

<script>
import Sortable from "sortablejs";
export default {
  data() {
    return {
      visable: true,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小22222虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小3333虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小444虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小55虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],

      options: [
        { id: 1, name: "1111" },
        {
          id: 2,
          name: "2222",
        },
      ],
    };
  },
  mounted() {
    const table = document.querySelector(".el-table__body-wrapper tbody");
    const self = this;
    Sortable.create(table, {
      onEnd({ newIndex, oldIndex }) {
        const targetRow = self.tableData.splice(oldIndex, 1)[0];
        self.tableData.splice(newIndex, 0, targetRow);
      },
    });
  },

  methods: {
    add() {
      console.log(this.tableData, "====tableData");
    },
  },
};
</script>




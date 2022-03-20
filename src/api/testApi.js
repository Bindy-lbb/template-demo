import axios from "axios";

const APIs = {
  getData(params) {
    return Promise.resolve({
      list: [
        {
          res: "contract.mine",
          newDepartment: [
            { type: "mine", name: "我的" },
            { type: "all", name: "全量的" },
          ],
        },
        {
          res: "contract.sub",
          newDepartment: [{ type: "sub", name: "下属的" }],
        },
      ],
      total: {
        total: 25,
        formalCount: 13,
        trailCount: 12,
      },
      startTime: "2021-12-30 00:00:00",
      endTime: "2022-01-03 23:59:59",
    });
  },

  getPieData() {
    return Promise.resolve({
      list: [
        ["Firefox", 45.0],
        ["IE", 26.8],
        {
          name: "Chrome",
          y: 12.8,
          sliced: true,
          selected: true,
        },
        ["Safari", 8.5],
        ["Opera", 6.2],
        ["其他", 0.7],
      ],
    });
  },

  logData() {
    return Promise.resolve([
      // * 获取变更日志
      // *  获取字段后，会做字段权限过滤
      // * @param module 模块，如 clue, contract
      // * @param objectId 具体的id
      // * @returns 变更日志
      {
        data: [
          {
            createdTime: "2021-01-01 01:01:01", //操作时间
            creator: "8xx", // 操作人
            creatorId: "谢xx1", // 操作人
            action: "指派给", // 动作
            extra: "谭xx", //其他字段
            history: [
              {
                keyName: "归档ID", // 修改的字段
                key: "22ID", // 修改的字段
                old: "ht0000001", // 旧值 ,对象数据
                new: "ht0000002", // 新值
                diff: {
                  // 方式二 返回对象，前端自己做展示
                  del: [
                    {
                      rowNumber: 1, // 行号
                      data: "产品：m，回款方式: 一次性回款, 回款金额：100，分段比例：【{回款金额：50，回款时间：30，预计回款：2020-10-10}，{回款金额：50，回款时间：30，预计回款：2020-11-10}】", // 字符串
                    },
                    {
                      rowNumber: 3, // 行号
                      data: "产品，回款方式: 一次性回款, 回款金额：100，分段比例：【{回款金额：50，回款时间：30，预计回款：2020-10-10}，{回款金额：50，回款时间：30，预计回款：2020-11-10}】", // 字符串
                    },
                  ],
                  ins: [
                    {
                      rowNumber: 1, // 行号
                      data: "产品：ym，", // 字符串
                    },
                    {
                      rowNumber: 3, // 行号
                      data: "回款方式：一次性回款，回款金额：90，", // 字符串
                    },
                    {
                      rowNumber: 4, // 行号
                      data: "回款方式：一次性回款，回款金额：90，", // 字符串
                    },
                  ],
                },
              },
              {
                keyName: "归档ID", // 修改的字段
                key: "11ID", // 修改的字段
                old: "ht0000001", // 旧值 ,对象数据
                new: "ht0000002", // 新值
                diff: {},
              },
            ],
          },
          {
            createdTime: "2021-01-01 01:01:01", //操作时间
            creator: "谢xx", // 操作人
            creatorId: "谢xx2", // 操作人
            action: "变更", // 动作
          },
        ],
      },
    ]);
  },
};

export default {
  ...APIs,
};

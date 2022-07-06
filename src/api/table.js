import request from "@/utils/request";

export function getList(params) {
  // return request({
  //   url: "/vue-admin-template/table/list",
  //   method: "get",
  //   params,
  // });
  return Promise.resolve({
    logText:
      "11111stage\n[Pipeline] { (build)\n[Pipeline] sh\n[common-build@2] Running shell script\n+ sh common-build/build.sh\n+ export -f fast_npm_install\n+ export -f run_jenkins_build\n+ export PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/root/apache-maven-3.6.1/bin:/root/bin:/root/apache-maven-3.6.1/bin:/root/android/gradle/gradle-4.6/bin\n+ PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/root/apache-maven-3.6.1/bin:/root/bin:/root/apache-maven-3.6.1/bin:/root/android/gradle/gradle-4.6/bin\n++ node --version\n+ echo 'Node Version: v14.18.3'\nNode Version: v14.18.3\n++ npm --version\n+ echo 'NPM Version: 8.3.1'\nNPM Version: 8.3.1\n+ import_envs=/app/devops/envfile/@lego-app/ip-portrait/128658/env.sh\n+ '[' -e /app/devops/envfile/@lego-app/ip-portrait/128658/env.sh ']'\n+ git_name=ip-portrait\n+ export SONAR_GIT_REPO_NAME=ip-portrait\n+ SONAR_GIT_REPO_NAME=ip-portrait\n+ REPO_COMMIT=d421ff3fb375749aa538bf0fee31ddb6692523c0\n+ '[' d421ff3fb375749aa538bf0fee31ddb6692523c0 = LATEST ']'\n+ export REPO_COMMIT=d421ff3fb375749aa538bf0fee31ddb6692523c0\n+ REPO_COMMIT=d421ff3fb375749aa538bf0fee31ddb6692523c0\n++ readlink -f ip-portrait/d421ff3fb375749aa538bf0fee31ddb6692523c0/ip-portrait\n+ export SONAR_GIT_FULL_PATH=/data/Jenkins/workspace/common-build@2/ip-portrait/d421ff3fb375749aa538bf0fee31ddb6692523c0/ip-portrait\n+ SONAR_GIT_FULL_PATH=/data/Jenkins/workspace/common-build@2/ip-portrait/d421ff3fb375749aa538bf0fee31ddb6692523c0/ip-portrait\n+ cd ip-portrait/d421ff3fb375749aa538bf0fee31ddb6692523c0/ip-portrait\n+ export BUILD_NUMBER=156647\n+ BUILD_NUMBER=156647\n+ export GIT_BRANCH=saas\n+ GIT_BRANCH=saas\n+ export REPO_BUILD_NUMBER=69\n+ REPO_BUILD_NUMBER=69\n+ export GIT_NAME=ip-portrait\n+ GIT_NAME=ip-portrait\n+ tree\n.\n├── babel.config.js\n├── config.js\n├── index.js\n├── package.json\n├── pnpm-lock.yaml\n├── postcss.config.js\n├── README.md\n└── src\n    ├── assets\n    │   └── svg\n    │       ├── oot-sign-large.svg\n    │       ├── oot-sign.svg\n    │       └── vpn_default_icon.svg\n    ├── components\n    │   ├── collection-button\n    │   │   ├── collection-button.vue\n    │   │   └── index.js\n    │   ├── date-picker\n    │   │   └── index.vue\n    │   ├── description-list\n    │   │   ├── description-list.vue\n    │   │   └── index.js\n    │   ├── extension-tooltip\n    │   │   ├── extension-tooltip.vue\n    │   │   └── index.js\n    │   ├── five-code\n    │   │   └── five-code.vue\n    │   ├── func-title\n    │   │   ├── func-title.vue\n    │   │   └── index.js\n    │   ├── heatmap\n    │   │   ├── heatmap-legend.vue\n    │   │   └── index.js\n    │   ├── info-window.vue\n    │   ├── page-layout\n    │   │   ├── index.js\n    │   │   └── page-layout.vue\n    │   ├── panel-basic-info\n    │   │   ├── index.js\n    │   │   └── panel-basic-info.vue\n    │   ├── portrait-panel\n    │   │   ├── index.js\n    │   │   ├── panel-item.vue\n    │   │   ├── portrait-panel.vue\n    │   │   └── remark.vue\n    │   ├── risk-tag\n    │   │   └── index.vue\n    │   ├── table-device-model.vue\n    │   ├── table-stay-pos.vue\n    │   └── tag\n    │       ├── list.vue\n    │       └── tree.vue\n    ├── constants\n    │   ├── config.js\n    │   ├── constant.js\n    │   ├── consul.js\n    │   ├── error-code.js\n    │   ├── menus.js\n    │   ├── privilege.js\n    │   └── routes.js\n    ├── data\n    │   └── api.js\n    └── pages\n        ├── index.js\n        ├── main-report.vue\n        ├── panels\n        │   ├── ip-panel.vue\n        │   └── remark.vue\n        ├── report.vue\n        └── tabs\n            ├── mixin.js\n            ├── relative-device\n            │   └── index.vue\n            └── relative-wifi\n                └── index.vue\n\n23 directories, 52 files\n+ [[ @lego-app/ip-portrait = \\c\\r\\m\\-\\f\\e ]]\n+ [[ @lego-app/ip-portrait = \\w\\e\\b\\n\\o\\d\\e\\-\\g\\l\\a\\b\\-\\c\\r\\m ]]\n+ export HELM_BUILD_USE_OLD=false\n+ HELM_BUILD_USE_OLD=false\n+ [[ -e helm/requirements.yaml ]]\n+ [[ @lego-app/ip-portrait =~ @lego-app ]]\n+ fe_app_build\n+ set -ex",
  });
}

export function logData(params) {
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
}

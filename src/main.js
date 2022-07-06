import Vue from "vue";

import "normalize.css/normalize.css"; // A modern alternative to CSS resets

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/en"; // lang i18n

import "@/styles/index.scss"; // global css

import App from "./App";
import store from "./store";
import router from "./router";

import "@/icons"; // icon
import "@/permission"; // permission control
import echarts from "echarts";
import BaiduMap from "vue-baidu-map";

// 引入echarts
Vue.prototype.$echarts = echarts;

//引用less
import less from "less";
Vue.use(less);

Vue.use(BaiduMap, {
  ak: "Gm6QCiE6yQYIT4rMARLTsjGV51fxu1Zi",
});

//引入Handsontable
// import Handsontable from "handsontable/base";
// Vue.use(Handsontable);

if (process.env.NODE_ENV === "production") {
  const { mockXHR } = require("../mock");
  mockXHR();
}

// set ElementUI lang to EN
// Vue.use(ElementUI, { locale });
// 如果想要中文版 element-ui，按如下方式声明
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});

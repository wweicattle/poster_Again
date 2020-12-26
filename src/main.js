import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
import "./plugins/vant.js"
import "./network/axios"
import 'lib-flexible'
// 进行引入折线图
import VeLine from 'v-charts/lib/line.common'
Vue.component(VeLine.name, VeLine)
// Vue.component('heading', {
//   render: function (h) {
//     return h(
//       'h', // 标签名称
//       [h("div", "wukai")] // 子节点数组
//     )
//   },
// })
var version =Vue.version
console.log(version);
console.log(App);

// console.log(1rem=="12px");
var vue = new Vue({
  // el:"#app",
  router,
  store,
  render: h => h(App)
});
vue.$mount('#app')

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
console.log(VeLine);
Vue.component(VeLine.name, VeLine)




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

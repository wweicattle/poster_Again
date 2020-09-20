import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
import "./plugins/vant.js"
import "./network/axios"
import 'lib-flexible'





new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

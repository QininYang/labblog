import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './routers'
import store from './store'
import './plugins/element.js'

Vue.config.productionTip = false

//vue实例化
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
//渲染入口

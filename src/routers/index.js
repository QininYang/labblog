import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './router.js'
//因为router.js中是逐个导出，不是export default这样导出整个的
//所以要使用｛｝这种形式
//注册到vue中，可以在其他地方直接调用
Vue.use(Router)
//router实例化
const router = new Router({
  routes
})

export default router

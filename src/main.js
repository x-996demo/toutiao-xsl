import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/permission' // 引入权限模块
import ElementUI from 'element-ui' // 引入模块
import axios from 'axios' // 引入axios
import Components from '@/components'
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import '@/styles/index.less' // 引入样式
Vue.config.productionTip = false
Vue.use(Components) // 注册我的组件
Vue.use(ElementUI) // 全局注册Element-ui
// 配置axios的默认地址
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0' // 配置公共的请求头地址
Vue.prototype.$axios = axios // 将axios赋值给vue对象的原型属性
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

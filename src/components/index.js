// 需要使用Vue.use的方式去注册
// Vue.use会调用对象中的install方法第一个参数 是vue对象
import LayoutHeader from './home/layout-header'
import LayoutAside from './home/layout-aside'

export default {
  install: function (Vue) {
    // 注册全局组件Vue一旦注册 在任意位置都可以使用
    Vue.component('layout-header', LayoutHeader) // 注册头部组件
    Vue.component('layout-aside', LayoutAside) // 注册左部导航组件
  }
}

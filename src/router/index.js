import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home' // 用简写的方式代替原有的方式
// import Home from '../views/Home.vue'
import Login from '@/views/login' // 简写形式
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home' // 强制跳转到home页面

  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    component: Login,
    name: 'login'
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router

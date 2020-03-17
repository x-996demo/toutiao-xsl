/**
 * 封装请求工具 request.js
 * 对axios的二次封装 配置拦截器一级其他
 */
import axios from 'axios'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0' // 配置公共的请求头地址
// 请求拦截器的开发
axios.interceptors.request.use(function (config) {
  // 成功时执行 第一个参数 会有一个config config就是所有的请返回 求信息
  // 在第一一个函数中 需要将配置信息进行返回 返回配置 会作为 请求参数进行请求
  // 在返回之前 就是我们同意注入token最佳时间
  const token = localStorage.getItem('user-token')// 从兜con里拿钥匙 也就是从缓存中取token
  config.headers.Authorization = `Bearer ${token}` // 统一注入token
  return config
}, function (error) {
  // 失会有一个错误 直接reject错误即可
  // 失败时执行第二个 axios 是一个支持promise 如果失败了 我们应该直接reject reject会直接进入axios的catch中
  return Promise.reject(error)
})
export default axios

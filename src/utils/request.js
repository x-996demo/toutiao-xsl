/**
 * 封装请求工具 request.js
 * 对axios的二次封装 配置拦截器一级其他
 */
import axios from 'axios'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0' // 配置公共的请求头地址

export default axios

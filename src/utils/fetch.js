import axios from 'axios'
import Utils from '../utils'
import store from '../store'

const service = axios.create({
  baseURL: process.env.API_HOST, // api的base_url
  timeout: 10000 // 请求超时时间
  // transformRequest: data => qs.stringify(data)
})
// request拦截器
service.interceptors.request.use(
  config => {
    if (store.state.token) {
      config.headers.Authorization = store.state.token
    }
    config.params = config.params || {}
    config.headers = config.headers || {}
    // set 默认值
    return config
  },
  error => ({
    status: 0,
    msg: error.message
  })
)
// respone拦截器
service.interceptors.response.use(
  response => {
    const result = response.data
    if (response.status === 200) {
      return result
    }
    return result
  },
  error => {
    Utils.toast('系统错误')
    return Promise.reject(error)
  }
)

export default service

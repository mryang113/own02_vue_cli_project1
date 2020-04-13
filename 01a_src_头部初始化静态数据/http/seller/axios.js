import axios from 'axios'
import config from './config'

// 创建axios 实例
const axiosIns = axios.create({
  baseURL: config.baseUrl || "",
  timeout: config.timeout || 5000,
});

// 为axios实例添加拦截器
// 请求拦截器
axiosIns.interceptors.request.use((axiosConfig)=>{
  config.hooks && config.hooks.beforeReq && config.hooks.beforeReq.call(config)
  return axiosConfig
});

//响应拦截器
axiosIns.interceptors.response.use(
  (response) => {
    config.hooks && config.hooks.afterReqSuccess && config.hooks.afterReqSuccess.call(config,response.data)
    return response.data
  },
  (error) => {
    config.hooks && config.hooks.afterReqFail && config.hooks.afterReqFail.call(config)
    // return new Promise(()=>{})
    return Promise.reject(error)
  }
);

// 将axios实例暴露出去   这个axiosIns拦截器上写成了axios 一直出bug列表不显示!!!!!

export default axiosIns ;
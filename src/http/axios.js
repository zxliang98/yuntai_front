import Vue from 'vue'
import axios from 'axios'

var instance = axios.create({
  baseURL: 'http://112.125.89.73:3023/api',
  // baseURL: 'http://localhost:3000/api',
  timeout: 10000
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

Vue.prototype.$http = instance

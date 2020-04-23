import Vue from 'vue'
import axios from 'axios'

var instance = axios.create({
  baseURL: 'http://112.125.89.73:3023/api',
  timeout: 10000
})

Vue.prototype.$http = instance

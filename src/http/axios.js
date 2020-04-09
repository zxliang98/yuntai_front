import Vue from 'vue'
import axios from 'axios'

var instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000
})

Vue.prototype.$http = instance

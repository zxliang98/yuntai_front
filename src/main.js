import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/http/axios'

import '@/assets/css/common.less'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './common/directive'

import BaiduMap from 'vue-baidu-map'

import yuntaiBackTop from './components/yuntai-back-top/yuntaiBackTop'
import yuntaiBreadcrumb from './components/yuntai-breadcrumb/yuntaiBreadcrumb'
Vue.component('yuntai-back-top', yuntaiBackTop)
Vue.component('yuntai-breadcrumb', yuntaiBreadcrumb)

Vue.use(BaiduMap, {
  ak: '1c6h6jloEGGGaSe0TVD1XRrplaCqhszP' // 这个地方是官方提供的ak密钥
})

Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$store = store

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

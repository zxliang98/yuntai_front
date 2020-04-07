import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/css/common.less'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import yuntaiBackTop from './components/yuntai-back-top/yuntaiBackTop'
Vue.component('yuntai-back-top', yuntaiBackTop)

Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$store = store

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

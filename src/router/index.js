import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/login/login'
import Home from '@/views/Home'
import TabbarHome from '@/views/pages-tabbar/tabbar-home/tabbarHome'
import TabbarVisit from '@/views/pages-tabbar/tabbar-visit/tabbarVisit'

import Error from '@/components/yuntai-error/yuntaiError'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    redirect: '/home',
    children: [
      {
        name: 'home',
        path: '/home',
        component: TabbarHome
      },
      {
        name: 'visit',
        path: '/visit',
        component: TabbarVisit
      }
    ]
  },
  {
    name: 'login',
    path: '/login',
    component: Login
  },
  {
    name: 'error',
    path: '*',
    component: Error
  }
]

const router = new VueRouter({
  routes
})

export default router

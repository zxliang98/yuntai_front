import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/login/login'
import Home from '@/views/Home'
import TabbarHome from '@/views/pages-tabbar/tabbar-home/tabbarHome'
import TabbarVisit from '@/views/pages-tabbar/tabbar-visit/tabbarVisit'
import TabbarView from '@/views/pages-tabbar/tabbar-view/tabbarView'
import TabbarNotice from '@/views/pages-tabbar/tabbar-notice/tabbarNotice'
import TabbarPlay from '@/views/pages-tabbar/tabbar-play/tabbarPlay'
import TabbarAbout from '@/views/pages-tabbar/tabbar-about/tabbarAbout'
import yuntaiDetail from './../views/detail/yuntai-detail/yuntaiDetail'
import yuntaiList from './../views/detail/yuntai-list/yuntaiList'

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
        name: 'view',
        path: '/view',
        component: TabbarView
      },
      {
        name: 'visit',
        path: '/visit',
        component: TabbarVisit
      },
      {
        name: 'notice',
        path: '/notice',
        component: TabbarNotice
      },
      {
        name: 'play',
        path: '/play',
        component: TabbarPlay
      },
      {
        name: 'about',
        path: '/about',
        component: TabbarAbout
      },
      {
        name: 'detail',
        path: '/detail/:id',
        component: yuntaiDetail
      },
      {
        name: 'list',
        path: '/list/:type',
        component: yuntaiList
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

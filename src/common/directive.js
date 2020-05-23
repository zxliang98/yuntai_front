import Vue from 'vue'

let handleFunction = null

const scrollMethods = () => {
  if (handleFunction) {
    // 滚动条高度（页面被卷去高度）
    const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
    // 文档高度
    const bodyHeight = document.body.scrollHeight || document.documentElement.scrollHeight

    if (scrollTop + window.innerHeight >= bodyHeight - 50) {
      // 发送请求
      handleFunction()
    }
  }
}

Vue.directive('window-scroll', {
  bind: function (el, binding, vnode) {
    const disable = (binding.arg ? binding.arg : false)
    handleFunction = (binding.value ? binding.value : null)
    if (!disable && handleFunction) {
      window.addEventListener('scroll', scrollMethods)
    } else {
      window.removeEventListener('scroll', scrollMethods)
    }
    if (!disable && !handleFunction) {
      console.log('%c 没有传上拉加载方法', 'font-size:18px;color:pink;')
    }
  },
  update: function (el, binding, vnode) {
    const disable = (binding.arg ? binding.arg : false)
    handleFunction = (binding.value ? binding.value : null)
    if (!disable && handleFunction) {
      window.addEventListener('scroll', scrollMethods)
    } else {
      window.removeEventListener('scroll', scrollMethods)
    }
    if (!disable && !handleFunction) {
      console.log('%c 没有传上拉加载方法', 'font-size:18px;color:pink;')
    }
  },
  // 路由转跳到其他页面时，会调用unbind，解绑滚动加载事件。
  unbind: function (el, binding, vnode) {
    window.removeEventListener('scroll', scrollMethods)
  }
})

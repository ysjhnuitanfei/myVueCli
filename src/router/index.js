import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/'

Vue.use(Router)
const Index = resolve => require(['@/views/Index/Index'], resolve)
const Vux = resolve => require(['@/views/Vux/Index'], resolve)
const Request = resolve => require(['@/views/Request/Index'], resolve)
const Scroll = resolve => require(['@/views/Scroll/Index'], resolve)

let router = new Router({
  routes: [
    {
      path: '/',
      redirect: 'index',
      component: Index,
      children: [
        {
          path: 'index',
          component: Index,
          name: 'Index',
          meta: {
            title: '首页',
            menu: true,
            showHeader: false
          }
        }
      ]
    },
    {
      path: '/vux',
      component: Vux,
      meta: {
        title: 'vux-toast',
        showHeader: true
      }
    },
    {
      path: '/request',
      component: Request,
      meta: {
        title: 'Request'
      }
    },
    {
      path: '/scroll',
      component: Scroll,
      meta: {
        title: 'Scroll'
      }

    },
    {
      path: '/request',
      component: Request,
      meta: {
        title: 'Request'
      }
    }
  ]
})

router.beforeEach(function (to, from, next) {
  if (to.path) {
    window._hmt.push(['_trackPageview', '/#' + to.fullPath])
  }
  if (!window.navigator.onLine) {
    store.commit('loadingStatus', {
      isLoading: false
    })
    // 网络断开
    store.commit('setError', {
      msg: '网络异常，请检查网络设置',
      show: true
    })
    window.location.hash = '#' + to.fullPath
    return
  } else {
    store.commit('loadingStatus', {
      isLoading: true,
      immediately: true
    })
  }

  let meta = (to && to.meta) || {}
  let title = meta.title || '首页'
  let showHeader = meta.showHeader
  // 如果没有定义showheader，默认返回true
  if (meta && meta.showHeader === undefined) {
    showHeader = true
  }
  // 如果没有定义返回按钮，默认返回true
  let preBtn = meta.preBtn
  if (meta && meta.preBtn === undefined) {
    preBtn = true
  }
  store.commit('setHeader', {
    title: title,
    showHeader: showHeader,
    preBtn: preBtn,
    menu: meta.menu,
    goIndex: meta.goIndex,
    refesh: meta.goIndex
  })

  next()
})

router.afterEach(function (transition) {
  if (transition.matched.length === 0) {
    store.commit('loadingStatus', {
      isLoading: false
    })
    // 页面地址不存在，显示错误页
    store.commit('setError', {
      msg: '页面走丢了！',
      show: true
    })
    return
  } else {
    // 页面存在，关闭错误页
    store.commit('setError', {
      msg: '',
      show: false
    })
  }
  store.commit('loadingStatus', {
    isLoading: false
  })
  document.title = transition.meta.title || ''
})
export default router

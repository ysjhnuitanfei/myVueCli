import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/'

Vue.use(Router)
const Welcome = resolve => require(['@/views/Welcome/Index'], resolve)
const Index = resolve => require(['@/views/Index/Index'], resolve)
const Vux = resolve => require(['@/views/Vux/Index'], resolve)
const Request = resolve => require(['@/views/Request/Index'], resolve)
const Scroll = resolve => require(['@/views/Scroll/Index'], resolve)
const Refresh = resolve => require(['@/views/Refresh/Index'], resolve)
const RefreshMore = resolve => require(['@/views/RefreshMore/Index'], resolve)
const Share = resolve => require(['@/views/Share/Index'], resolve)
const Lottery = resolve => require(['@/views/Lottery/Index'], resolve)

let router = new Router({
  routes: [{
    path: '/',
    redirect: 'welcome',
    component: Welcome,
    children: [{
      path: 'welcome',
      component: Welcome,
      name: 'Welcome',
      meta: {
        title: '欢迎页',
        menu: true,
        showHeader: false
      }
    }]
  },
    // 首页
  {
    path: '/index',
    component: Index,
    meta: {
      title: '首页',
      showHeader: false
    }
  },
    // 全局提示
  {
    path: '/vux',
    component: Vux,
    meta: {
      title: 'vux-toast',
      showHeader: true
    }
  },
    // 接口请求2
  {
    path: '/scroll',
    component: Scroll,
    meta: {
      title: 'Scroll'
    }

  },
    // 接口请求1
  {
    path: '/request',
    component: Request,
    meta: {
      title: 'Request'
    }
  },
    // 下拉刷新
  {
    path: '/refresh',
    component: Refresh,
    meta: {
      title: 'Refresh'
    }
  },
    // 下拉刷新&&加载更多
  {
    path: '/refreshMore',
    component: RefreshMore,
    meta: {
      title: 'RefreshMore'
    }
  },
    // 分享
  {
    path: '/share',
    component: Share,
    meta: {
      title: 'Share'
    }
  },
    // 抽奖
  {
    path: '/lottery',
    component: Lottery,
    meta: {
      title: 'Lottery'
    }
  }
  ]
})

router.beforeEach(function (to, from, next) {
  if (to.path) {
    window._hmt.push(['_trackPageview', '/#' + to.fullPath])
  }
  if (!window.navigator.onLine) {
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

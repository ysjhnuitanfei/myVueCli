import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/'
import Utils from '../utils'

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
            showHeader: true,
            title: '首页',
            preBtn: false,
            menu: true
          }
        }
      ]
    },
    {
      path: '/vux',
      component: Vux,
      meta: {
        title: 'Vux'
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
    Utils.toast('网络异常，请检查网络设置')
    window.location.hash = '#' + to.fullPath
    return
  }

  let meta = (to && to.meta) || {}
  let title = meta.title || '首页'
  let showHeader = meta.showHeader
  store.commit('setHeader', {
    title: title,
    showHeader: showHeader,
    preBtn: meta.preBtn,
    menu: meta.menu,
    goIndex: meta.goIndex,
    refesh: meta.goIndex
  })

  next()
})

router.afterEach(function (transition) {
  if (transition.matched.length === 0) {
    Utils.toast('页面不存在，请检查您访问的页面地址！')
    return
  }
  document.title = transition.meta.title || ''
})
export default router

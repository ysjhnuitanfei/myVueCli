import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Index = resolve => require(['@/views/Index/Index'], resolve)
const PullRefresh = resolve => require(['@/views/PullRefresh/Index'], resolve)
const LoadMore = resolve => require(['@/views/LoadMore/Index'], resolve)
const PullTo = resolve => require(['@/views/PullTo/Index'], resolve)
const Vux = resolve => require(['@/views/Vux/Index'], resolve)
const Request = resolve => require(['@/views/Request/Index'], resolve)

let router = new Router({
  routes: [
    {
      path: '/',
      redirect: 'index',
      component: Index,
      meta: {
        title: '首页'
      },
      children: [
        {
          path: 'index',
          component: Index,
          name: 'Index',
          meta: {
            title: '首页'
          }
        }
      ]
    },
    {
      path: '/pullRefresh',
      component: PullRefresh,
      meta: {
        title: '下拉刷新'
      }
    },
    {
      path: '/loadMore',
      component: LoadMore,
      meta: {
        title: '下拉刷新'
      }
    },
    {
      path: '/pullTo',
      component: PullTo,
      meta: {
        title: '下拉刷新'
      }
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
    }
  ]
})
export default router

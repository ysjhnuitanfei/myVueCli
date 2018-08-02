import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Index = resolve => require(['@/views/Index/Index'], resolve)
const PullRefresh = resolve => require(['@/views/pullRefresh/Index'], resolve)

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
    }
  ]
})
export default router

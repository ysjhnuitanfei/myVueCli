// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueScroller from 'vue-scroller'

// 以插件形式引入toast组件
import {
  ToastPlugin
} from 'vux'
Vue.use(ToastPlugin)

// vue-scroll插件
Vue.use(VueScroller)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
const FastClick = require('fastclick')
FastClick.attach(document.body)

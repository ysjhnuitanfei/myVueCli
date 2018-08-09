import Vue from 'vue'
import Vuex from 'vuex'

import headerView from './headerView'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    headerView
  }
})

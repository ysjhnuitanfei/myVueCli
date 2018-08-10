import Vue from 'vue'
import Vuex from 'vuex'

import headerView from './headerView'
import loading from './loading'
import error from './error'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    headerView,
    loading,
    error
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    homeScrollTop: 0
  },
  mutations: {
    changeHomeScrollTop (state, value) {
      state.homeScrollTop = value
    }
  },
  actions: {
  },
  modules: {
  }
})

import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

const vp = new VuexPersist({
	key : 'store'
});

Vue.use(Vuex)

export default new Vuex.Store({
  plugins : [vp.plugin],

  state: {
     todo : '',
     done : '' 
  },
  mutations: {
    isDone(state, data){
        state.done != state.done;
      },
  
  },
  actions: {},
  modules: {}
})
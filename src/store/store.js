import Vue from 'vue';
import VueX from 'vuex';
import counter from './modules/counter';
import incident from './modules/incident';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

Vue.use(VueX);

export const store = new VueX.Store({
  state : {
    value: 0
  },
  getters,
  mutations,
  actions,
  modules: {
    counter,
    incident
  }
})

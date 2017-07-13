import * as types from '../types';

const state = {
  incidents: []
};

const getters = {
  [types.ALL_INCIDENTS]: state => {
    return state.incidents.length;
  }
};

const mutations = {
  [types.SET_INCIDENTS]: (state, payload) => {
    state.incidents = payload;
  }
};

const actions = {
  asyncUpdateIncidents: ({commit}, payload) => {
    commit(types.SET_INCIDENTS, payload)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

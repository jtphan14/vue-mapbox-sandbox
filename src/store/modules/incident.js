import * as types from '../types';

const state = {
  incidents: [],
  normalized_incidents: [],
  filter_incidents: [],
  map: {}
};

const getters = {
  [types.ALL_INCIDENTS]: state => {
    return state.incidents.length;
  },
  [types.NORMALIZED_INCIDENTS]: state => {
    return state.normalized_incidents;
  },
  [types.MAP]: state => {
    return state.map;
  }
};

const mutations = {
  [types.SET_INCIDENTS]: (state, payload) => {
    state.incidents = payload;
  },
  [types.SET_NORMALIZED_INCIDENTS]: (state, payload) => {
    state.normalized_incidents = payload;
  },
  [types.SET_MAP]: (state, payload) => {
    state.map = payload;
  }

};

const actions = {
  [types.ASYNCUPDATEINCIDENTS]: ({commit}, payload) => {
    commit(types.SET_INCIDENTS, payload)
  },
  [types.ASYNCUPDATE_NORMALIZED_INCIDENTS]: ({commit}, payload) => {
    commit(types.SET_NORMALIZED_INCIDENTS, payload)
  },
  [types.ASYNCUPDATE_MAP]: ({commit}, payload) => {
    commit(types.SET_MAP, payload)
  },

}

export default {
  state,
  getters,
  mutations,
  actions
}

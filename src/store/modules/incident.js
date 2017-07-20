import * as types from '../types';

const state = {
  incidents: [],
  normalized_incidents: [],
  filtered_incidents: [],
  map: {}
};

const getters = {
  [types.ALL_INCIDENTS]: state => {
    return state.incidents;
  },
  [types.NORMALIZED_INCIDENTS]: state => {
    return state.normalized_incidents;
  },
  [types.MAP]: state => {
    return state.map;
  },
  [types.FILTERED_INCIDENTS]: state => {
    return state.filtered_incidents;
  }
};

const mutations = {
  [types.SET_INCIDENTS]: (state, payload) => {

    state.incidents = payload;
  },
  [types.SET_NORMALIZED_INCIDENTS]: (state, payload) => {
    state.normalized_incidents = payload;
  },
  [types.SET_FILTERED_INCIDENTS]: (state, payload) => {
    state.filtered_incidents = payload;
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
  [types.ASYNCUPDATE_FILTERED_INCIDENTS]: ({commit}, payload) => {
    commit(types.SET_FILTERED_INCIDENTS, payload)
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

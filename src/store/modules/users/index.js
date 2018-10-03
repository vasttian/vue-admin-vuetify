import API from '@/api';
import * as types from './types';

const state = {
  users: [],
  user: {},
};

const getters = {};

const actions = {
  readUser({ commit }, params) {
    return API.readUser(params).then((value) => {
      commit(types.READ_USER, { value });
    }, res => Promise.reject(res));
  },
  readUsers({ commit }) {
    return API.readUsers().then((value) => {
      commit(types.READ_USERS, { value });
    }, res => Promise.reject(res));
  },
};

const mutations = {
  [types.READ_USER](state, { value }) {
    state.user = value.data;
  },
  [types.READ_USERS](state, { value }) {
    state.users = value.data;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

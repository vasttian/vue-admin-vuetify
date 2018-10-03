import API from '@/api';
import * as types from './types';

const state = {
  token: localStorage.getItem('token') || null,
  me: {},
};

const getters = {};

const actions = {
  login({ commit, dispatch }, params) {
    return API.login(params).then((value) => {
      commit(types.LOGIN, { value });
      const token = value.data.access_token;
      localStorage.setItem('token', token);
      dispatch('readMe', { token });
      return value;
    }, res => Promise.reject(res));
  },
  readMe({ commit }, params) {
    return API.readMe(params).then((value) => {
      commit(types.READ_ME, { value });
    }, res => Promise.reject(res));
  },
  logout({ commit }) {
    return API.logout().then(() => {
      commit(types.LOGOUT);
    }, res => Promise.reject(res));
  },
};

const mutations = {
  [types.READ_ME](state, { value }) {
    state.me = value.data;
  },
  [types.LOGIN](state, { value }) {
    state.token = value.data.access_token;
  },
  [types.LOGOUT](state) {
    localStorage.removeItem('token');
    state.token = null;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

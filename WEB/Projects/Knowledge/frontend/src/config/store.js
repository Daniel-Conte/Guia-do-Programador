import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

// Vuex é um gerenciador de estado para o Vue como o Redux é para o React

Vue.use(Vuex);

export default new Vuex.Store({
  // state armazena o initial values da store
  state: {
    isMenuVisible: false,
    user: null,
  },
  // mutations funciona como o reducer do Redux
  mutations: {
    toggleMenu(state, isVisible) {
      if (!state.user) {
        state.isMenuVisible = false;
        return;
      }

      if (isVisible === undefined) {
        state.isMenuVisible = !state.isMenuVisible;
      } else {
        state.isMenuVisible = isVisible;
      }
    },
    setUser(state, user) {
      state.user = user;

      if (user) {
        axios.defaults.headers.common['Authorization'] = `bearer ${user.token}`;
        state.isMenuVisible = true;
      } else {
        delete axios.defaults.headers.common['Authorization'];
        state.isMenuVisible = false;
      }
    },
  },
});

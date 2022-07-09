import Vue from 'vue';
import Vuex from 'vuex';

// Vuex é um gerenciador de estado para o Vue como o Redux é para o React

Vue.use(Vuex);

export default new Vuex.Store({
  // state armazena o initial values da store
  state: {
    isMenuVisible: true,
  },
  // mutations funciona como o reducer do Redux
  mutations: {
    toggleMenu(state, isVisible) {
      if (isVisible === undefined) {
        state.isMenuVisible = !state.isMenuVisible;
      } else {
        state.isMenuVisible = isVisible;
      }
    },
  },
});

import Vue from 'vue'
import Vuex from 'vuex'
import Game from '../Game'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tiles: [],
    options: {},
    winner: false,
    lose: false,
    started: false
  },
  mutations: {
    newGame(state) {
      state.tiles = new Game(state.options.width, state.options.height, state.options.mines).tiles;
      state.winner = false;
      state.lose = false;
    },
    setWinner(state, payload) {
      state.winner = payload;
    },
    setLose(state, payload) {
      state.lose = payload;
    },
    setOptions(state, payload) {
      state.options = payload;
    },
    toggleStarted(state) {
      state.started = !state.started;
    }
  },
  actions: {

  },
})

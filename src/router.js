import Vue from 'vue'
import Router from 'vue-router'
import Game from './views/Game.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'game',
      component: Game
    },
    {
      path: '/rooms',
      component: () => import('./views/Multiplayer.vue')
    }
  ]
})

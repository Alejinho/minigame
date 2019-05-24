import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sign-up',
      name: 'signup',
      component: () => import(/* webpackChunkName: "about" */ './views/SignUp.vue')
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: () => import(/* webpackChunkName: "about" */ './views/Ranking.vue')
    },
    {
      path: '/question/:id/:q',
      name: 'question',
      component: () => import(/* webpackChunkName: "about" */ './views/Question.vue')
    }
  ]
})

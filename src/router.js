import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SignUp from './views/SignUp.vue'
import Ranking from './views/Ranking.vue'
import Question from './views/Question.vue'
import Finish from './views/Finish.vue'



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
      component: SignUp
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: Ranking
    },
    {
      path: '/question/:id/:q',
      name: 'question',
      component:Question
    },
    {
      path: '/finish/:score',
      name: 'finish',
      component: Finish
    }
  ]
})

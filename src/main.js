import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.api = 'http://18.212.19.89/api/1.0/'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

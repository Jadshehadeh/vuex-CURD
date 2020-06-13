import Vue from 'vue' 
import App from './App.vue' 
import router from './router' 
import store from './store/store'

import vuetify from './plugins/vuetify' 
import axios from 'axios' 

import ReadMore from 'vue-read-more' 

Vue.config.productionTip = false

Vue.use(axios)
Vue.use(ReadMore) 



new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')

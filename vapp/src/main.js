import Vue from 'vue' 
import App from './App.vue' 
import router from './router' 

import vuetify from './plugins/vuetify' 
import axios from 'axios' 

import ReadMore from 'vue-read-more' 
// import ScrollLoader from 'vue-scroll-loader' 

Vue.config.productionTip = false

Vue.use(axios)
Vue.use(ReadMore) 
// Vue.use(ScrollLoader) 



new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import axios from 'axios'

import App from './App.vue'
import router from './router';

require('./mock/mock')

Vue.config.productionTip = false
Vue.prototype.$http = axios;


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

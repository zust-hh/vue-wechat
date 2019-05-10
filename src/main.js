import Vue from 'vue';
import axios from 'axios';
import Antd, { message, Modal } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import App from './App.vue';
import router from './router';
import store from './store';

require('./mock/mock');

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.$message = message;
Vue.prototype.$confirm = Modal.confirm;

Vue.use(Antd);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');

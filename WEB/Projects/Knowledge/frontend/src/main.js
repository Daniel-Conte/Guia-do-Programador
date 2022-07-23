import 'font-awesome/css/font-awesome.css';
import Vue from 'vue';

import App from './App.vue';

import './config/bootstrap';
import './config/msgs';
import store from './config/store';
import router from './config/router';

Vue.config.productionTip = false;

// TEMP
require('axios').defaults.headers.common['Authorization'] =
  'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkRhbmllbCBDIiwiZW1haWwiOiJ0ZXN0ZUB0ZXN0ZS5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjU4NjAxMjk4LCJleHAiOjE2NTg4NjA0OTh9.hqjHWP3t2ExrhM2giGiY65FvzIMXFlLlqqAGGxG4B7E';

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.use(ElementUI);
Vue.directive('resubmit', {
  inserted(el, binding) {
    el.addEventListener('click', e => {
      if(!el.disabled) {
        el.disabled = true;
        let timer = setTimeout( () => {
          el.disabled = false;
        },2000)
      }
    })
  }
});
axios.interceptors.request.use(
  config => {

    return config;
  },
  err => {
    return Promise.reject(err);
  });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

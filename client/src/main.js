import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import VueQuagga from 'vue-quaggajs';
import VueCookies from 'vue-cookies';

Vue.config.productionTip = false;
Vue.use(VueQuagga);
Vue.use(VueCookies);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');

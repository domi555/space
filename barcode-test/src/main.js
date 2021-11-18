import Vue from 'vue';
import App from './App.vue';
import VueQuagga from 'vue-quaggajs';

Vue.config.productionTip = false;
Vue.use(VueQuagga);

new Vue({
  render: (h) => h(App),
}).$mount('#app');

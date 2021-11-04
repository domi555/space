import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Spaces from '../views/Spaces.vue';
import Account from '../views/Account.vue';
import Products from '../views/Products.vue';

import Login from '../views/Login.vue';
import Register from '../views/Register.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/spaces',
    name: 'Spaces',
    component: Spaces,
  },
  {
    path: '/space/product',
    name: 'Products',
    component: Products,
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
  },

  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

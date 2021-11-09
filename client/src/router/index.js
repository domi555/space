import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Spaces from '../views/Spaces.vue';
import Account from '../views/Account.vue';
import Items from '../views/Items.vue';

import Login from '../views/Login.vue';
import Register from '../views/Register.vue';

import Camera from '../views/Camera.vue';

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
    path: '/items',
    name: 'Items',
    component: Items,
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

  {
    path: '/camera',
    name: 'Camera',
    component: Camera,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

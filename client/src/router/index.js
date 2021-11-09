import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Spaces from '../views/Spaces.vue';
import AddSpace from '../views/AddSpace.vue';
import Account from '../views/Account.vue';
import Items from '../views/Items.vue';
import Product from '../views/Product.vue';
import AddProduct from '../views/AddProduct.vue';
import EditProduct from '../views/EditProduct.vue';

import Login from '../views/Login.vue';
import Register from '../views/Register.vue';

import Camera from '../views/Camera.vue';
import Loading from '../views/Loading.vue';

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
    path: '/add-space',
    name: 'AddSpace',
    component: AddSpace,
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
    path: '/product',
    name: 'Product',
    component: Product,
  },
  {
    path: '/add-product',
    name: 'AddProduct',
    component: AddProduct,
  },
  {
    path: '/edit-product',
    name: 'EditProduct',
    component: EditProduct,
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
  {
    path: '/loading',
    name: 'Loading',
    component: Loading,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

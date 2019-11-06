import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';

const About = () => import(/* webpackChunkName: "about" */ '../views/About.vue');
const Prices = () => import(/* webpackChunkName: "prices" */ '../views/Prices.vue');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/prices',
    name: 'prices',
    component: Prices,
    meta: {
      title: 'Prices | MiniAussieArt',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// Update the document title
router.beforeEach((to, _, next) => {
  document.title = to.meta.title || 'MiniAussieArt';
  next();
});

export default router;

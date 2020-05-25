import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/index.vue'
import animeList from '../views/animeList.vue'
import login from '../views/login.vue'
import logout from '../views/loguot.vue'
import myAnimeList from '../views/myAnimeList.vue'
import myProfil from '../views/myProfil.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/registr',
    name: 'registr',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/registr.vue')
  },
  {
    path: '/animeList',
    name: 'animeList',
    component: animeList
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/logout',
    name: 'logout',
    component: logout
  },
  {
    path: '/myAnimeList',
    name: 'myAnimeList',
    component: myAnimeList
  },
  {
    path: '/myProfil',
    name: 'myProfil',
    component: myProfil
  }
]

const router = new VueRouter({
  routes
})

export default router

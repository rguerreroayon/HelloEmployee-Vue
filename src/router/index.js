import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Check from '../views/Check.vue'
import Profile from '../views/Profile.vue'
import Beneficios from '../views/Beneficios.vue'
import AdminOffice from '../views/AdminOffice.vue'
import Reportes from '../views/Reportes.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/beneficios',
    name: 'beneficios',
    component: Beneficios
  },
  {
    path: '/adminoffice',
    name: 'adminoffice',
    component: AdminOffice
  },
  {
    path: '/reportes',
    name: 'reportes',
    component: Reportes
  },
  {
    path: '/check',
    name: 'check',
    component: Check
  },


]

const router = new VueRouter({
  mode: 'history',
  routes 
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Customers from '../views/Customers.vue'
import Products from '../views/Products.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/customers',
    name: 'Customers',
    component: Customers
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

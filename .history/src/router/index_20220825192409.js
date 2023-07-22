import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ItemMusic from '../views/ItemMusic.vue'
import Search from '../views/Search.vue'
import Login from '../views/Login.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/itemMusic',
    component:ItemMusic
  },
  {
    path:'/search',
    component:Search
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/InfoUser',
    component:Login
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

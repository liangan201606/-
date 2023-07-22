import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ItemMusic from '../views/ItemMusic.vue'
import Search from '../views/Search.vue'
import Login from '../views/Login.vue'
import InfoUser from '../views/InfoUser.vue'
import store from '../store/index.js'
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
    path:'/infoUser',
    component:InfoUser,
    beforeEach: (to, from, next) => {
      // ...
      if(store.state.isLogin){
        next()
      }else{
        next('/login')
      }
    }
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// 全局路由守卫
router.beforeEach((to) =>{
  if(to.path == '/login'){
    store.state.isFootMusic = false
  }else{
    store.state.isFootMusic = true
  }
})
export default router

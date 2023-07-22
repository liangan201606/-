import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import getVant  from './plugins'
import Vue3Marquee from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'

const app = createApp(App);
getVant(app)
app.use(store)
app.use(router).mount('#app')

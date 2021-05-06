import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
import VueRouter from 'vue-router'
import Main from './components/Main.vue'
import Work from './components/Work.vue'
import Reader from './components/Reader.vue'
import Book from './components/Book.vue'
import Register from './components/Register.vue'
import CNNode from './components/CNNode.vue'



Vue.use(ElementUI)
Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  {
    path:"/",
    component:Main
  },
  {
    path:"/login",
    component:Main
  },{
    path:"/work",
    component:Work
  },{
    path:"/book",
    component:Book
  },{
    path:"/reader",
    component:Reader
   },{
    path:"/register",
    component:Register
   },{
    path:"/cnnode",
    component:CNNode
   }
]

const router = new VueRouter({routes})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')



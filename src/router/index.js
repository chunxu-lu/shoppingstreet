import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = ()=>import('views/home/Home')
const Category = ()=>import('views/category/Category')
const Cart = ()=>import('views/cart/Cart')
const Profile = ()=>import('views/profile/Profile')
const Detail = ()=>import('views/detail/Detail')


const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    name: 'home',
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    name:'Detail',
    path:'/detail/:id',
    component:Detail
  }
]
const router = new VueRouter({
  routes,
  mode:'history'
})

//在VUE中路由遇到Error: Avoided redundant navigation to current location:报错显示是路由重复
const routerReplace = VueRouter.prototype.replace

VueRouter.prototype.replace = function (location) {
  return routerReplace.call(this, location).catch(error => error)
}

export default router


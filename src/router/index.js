import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Login from '../components/Login'
import register from "../components/register";
import Course from "../components/Course";
import CourseDetail from "../components/CourseDetail";
import cart from '../components/cart'
import Cartltme from '../components/Cartltme'
import Order from '../components/Order'
import OrderSuccess from "../components/OrderSuccess";
import OrderList from '../components/OrderList'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {path: '/', component: Home},
    {path:'/home',component:Home},
    {path:'/login',component:Login},
    {path:'/register',component:register},
    {path:'/course',component:Course},
    {path:'/detail',component:CourseDetail},
    {path:'/cart',component:cart},
    {path:'/cartltme',component:Cartltme},
    {path:'/order',component:Order},
    {path:'/payments/result',component:OrderSuccess},
    {path:'/orderlist',components:OrderList}
  ]
})

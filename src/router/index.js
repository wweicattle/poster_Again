import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/home',
  name: 'index'
},
{
  path: '/home',
  name: 'Home',
  component: () => import( /* webpackChunkName: "about" */ 'views/home/index.vue')
},
{
  path: '/editposter',
  name: 'Poster',
  component: () => import( /* webpackChunkName: "about" */ '../components/Poster/Poster.vue')
},
{
  path: '/saveposter',
  name: 'savePoster',
  component: () => import( /* webpackChunkName: "about" */ '../components/Poster/SavePoster.vue')
},
{
  path: '/saveposter/memberpull',
  name: 'Member',
  component: () => import( /* webpackChunkName: "about" */ '../components/MemberPull')
},
{
  path: '/saveposter/fanspull',
  name: 'fans',
  component: () => import( /* webpackChunkName: "about" */ '../components/FansList')
},
{
  path: '/birthBack',
  name: 'birthBack',
  component: () => import( /* webpackChunkName: "about" */ '../components/BirthdayVisit')
},
{
  path: '/salevisit',
  name: 'saleVisit',
  component: () => import( /* webpackChunkName: "about" */ '../components/SalesVisit')
},
{
  path: '/memberretention',
  name: 'memberretention',
  component: () => import( /* webpackChunkName: "about" */ '../components/MemberRetention')
},
{
  path: '/cardvouchar',
  name: 'vouchar',
  component: () => import( /* webpackChunkName: "about" */ '../components/CardVoucher')
},

]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})
// 进行显示进度条
router.beforeEach((to, from, next) => {
  NProgress.start()
  console.log(to);

  


  // if (to.path == "/home") {
  //   window.localStorage.setItem("footerState", 0)
  // } else if (to.path == "/editposter") {
  //   window.localStorage.setItem("footerState", 1)
  // }
  next()
})

router.afterEach(() => {
  NProgress.done()
})
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
export default router

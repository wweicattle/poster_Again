import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import( /* webpackChunkName: "about" */ 'views/home/index.vue')
  },
  {
    path: '/editposter',
    name: 'Poster',
    component: () => import( /* webpackChunkName: "about" */ '../components/Poster/Poster.vue')
  },
  {
    path: '/memberpull',
    name: 'Member',
    component: () => import( /* webpackChunkName: "about" */ '../components/MemberPull')
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})
// 进行显示进度条
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})
export default router

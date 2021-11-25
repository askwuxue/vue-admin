import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import cache from '@/utils/cache'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main',
  },
  {
    path: '/main',
    name: 'main',
    component: () => {
      return import(/* webpackChunkName: "main" */ '@/views/main/Main.vue')
    },
    // TODO children的使用场景
    // children: [
    //   {
    //     path: '/login',
    //     name: 'login',
    //     component: () => {
    //       return import(
    //         /* webpackChunkName: "login" */ '@/views/login/Login.vue'
    //       )
    //     },
    //   },
    // ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => {
      return import(/* webpackChunkName: "login" */ '@/views/login/Login.vue')
    },
  },
  // TODO 配置404页面
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// TODO 路由守卫如何实现用户已经登录，访问login进行 重定向
router.beforeEach((to, from, next) => {
  console.log('from: ', from)
  console.log('to: ', to)
  if (to.path !== '/login') {
    const token = cache.getCache('token')
    if (!token) {
      next('/login')
      return
    }
  }
  next()
})

export default router

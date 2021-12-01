import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import cache from '@/utils/cache'
import { firstMenu } from '@/utils/mapMenus'

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
  // TODO 配置404页面 vue3固定的配置方法
  {
    path: '/:pathMatch(.*)*',
    name: 'not_found',
    component: () => {
      return import(
        /* webpackChunkName: "login" */ '@/views/main/not_found/not-found.vue'
      )
    },
  },
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
    // main页面重定向到菜单栏的第一个tab栏中
    if (to.path === '/main') {
      const path = firstMenu.url
      next(path)
    }
  }
  next()
})

export default router

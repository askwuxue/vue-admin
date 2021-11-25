import router from '@/router'
import { RouteRecordRaw } from 'vue-router'
export const mapMenusToRoutes = (usesMenus: any) => {
  // 路由信息
  // const routes: RouteRecordRaw[] = []
  // 所有路由信息
  const allRoutes: RouteRecordRaw[] = []
  // 加载路由文件
  const routesFile = require.context('../router/main', true, /\.ts/)
  const routesArray = routesFile.keys()
  routesArray.forEach((filePath) => {
    // 获取到路由模块
    const routeModule = require('../router/main' + filePath.split('.')[1])
    // 真正的路由
    const route = routeModule.default
    // 添加到存放所有路由的路由数组
    allRoutes.push(route)
  })

  // 根据菜单信息获取需要添加的routes
  // 递归，type不等于2的全部都是无法展开的的菜单
  // 获取到对应的routes信息后，遍历，使用router.addRoute('主模块'， route)动态添加路由信息
  const recursiveGetRoute = (menus: any) => {
    for (const menu of menus) {
      if (menu.type !== 2) {
        recursiveGetRoute(menu.children)
      }
      const route = allRoutes.find((item) => item.path === menu.url)
      if (route) {
        router.addRoute('main', route)
      }
    }
  }
  recursiveGetRoute(usesMenus)
}

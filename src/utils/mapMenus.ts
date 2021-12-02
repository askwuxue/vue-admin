import router from '@/router'
import { RouteRecordRaw } from 'vue-router'

// 菜单栏中的第一个子菜单
let firstMenu: any = null

// 映射菜单到路由对象
export const mapMenusToRoutes = (usesMenus: any) => {
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
      // 第一个菜单tab
      if (!firstMenu) {
        firstMenu = menu
      }
      // TODO 下面这段逻辑卸载这个工具类中不合适，应该返回一个routes对象，在外部调用时添加route
      if (route) {
        router.addRoute('main', route)
      }
    }
  }
  recursiveGetRoute(usesMenus)
}

// 地址和菜单ID之间的映射
export const mapPathToMenu = (usesMenus: any, currentPath: string): any => {
  for (const menu of usesMenus) {
    if (menu.type === 1) {
      const findMenu = mapPathToMenu(menu.children, currentPath)
      // TODO 如果找到值就返回值，没找到就递归
      if (findMenu) {
        return findMenu
      }
    }
    // 菜单模块id和当前路径匹配，返回菜单模块
    if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

export const mapPathToBreadcrumb = (
  usesMenus: any,
  currentPath: string,
  breadcrumb: any[],
): any => {
  for (const menu of usesMenus) {
    if (menu.type === 1) {
      const findMenu = mapPathToBreadcrumb(
        menu.children,
        currentPath,
        breadcrumb,
      )
      // console.log('menu: ', menu)
      // console.log('findMenu: ', findMenu)
      // TODO 如果找到值就返回值，没找到就递归
      if (findMenu) {
        breadcrumb.push(menu)
        breadcrumb.push(findMenu)
        return breadcrumb
      }
    }
    // 菜单模块id和当前路径匹配，返回菜单模块
    if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

export { firstMenu }

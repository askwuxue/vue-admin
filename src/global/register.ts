import { App } from 'vue'
import components from './element-component'
import icons from './icons'
// 导入的是有所有组件合并到一个数组中
const allComponents = [...components, ...icons]

// 使用app.use()传入函数参数，该函数参数接受的参数为app对象
export default function (app: App): void {
  // 注册element-plus组件
  for (const comp of allComponents) {
    const camelizeRE = /([A-Z])/g
    // 对于El开头的一定是element-plus的组件
    if (comp.name.startsWith('El')) {
      const name = comp.name
        .replace(camelizeRE, (_, c) => `-${c}`)
        .slice(4)
        .toLowerCase()
      // const name = comp.name.slice(2).toLowerCase()
      // TODO 曲线救国，通过动态加载的方式解决按需加载对应样式无法加载的问题
      // TODO 这种方式不行，路径不具有通用性
      // import('element-plus/lib/components/tab-pane/style/css')
      import(`element-plus/lib/components/${name}/style/css`)
    }
    app.component(comp.name, comp)
  }
}

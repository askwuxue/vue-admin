import { App } from 'vue'
import components from './element-component'
// 使用app.use()传入函数参数，该函数参数接受的参数为app对象
export default function (app: App): void {
  // 注册element-plus组件
  for (const comp of components) {
    const name = comp.name.slice(2).toLowerCase()
    // TODO 曲线救国，通过动态加载的方式解决按需加载对应样式无法加载的问题
    import(`element-plus/lib/components/${name}/style/css`)
    app.component(comp.name, comp)
  }
}

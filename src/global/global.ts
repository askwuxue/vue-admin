// 国际化
// TODO 使用element-plus提供的第一种国际化方式配置失败
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { App } from 'vue'

export default function (app: App) {
  app.use(ElementPlus, {
    locale: zhCn,
  })
}

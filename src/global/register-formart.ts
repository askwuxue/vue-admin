import { App } from 'vue'
import { formatUTCDate } from '@/utils/format-date'

export default function (app: App) {
  // 全局属性
  app.config.globalProperties.$filter = {
    formatUTCDate,
  }
}

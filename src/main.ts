import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import register from './global/register'
import 'normalize.css'
import 'element-plus/dist/index.css'
// 按需加载组件的基础样式
import 'element-plus/theme-chalk/base.css'

const app = createApp(App)
app.use(register)
app.use(store)
app.use(router)
app.mount('#app')

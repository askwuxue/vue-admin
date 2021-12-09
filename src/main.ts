import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { setupStore } from './store'
import register from './global/register'
import 'normalize.css'
import 'element-plus/dist/index.css'
// 按需加载组件的基础样式
import 'element-plus/theme-chalk/base.css'
// 自定义样式
import '@/assets/css/index.css'
import format from '@/global/register-formart'
// 国际化
// import global from '@/global/global'

const app = createApp(App)
app.use(format)
app.use(register)
// app.use(global)

app.use(store)
// TODO 动态注册的路由在使用路由之前，否则在路由匹配阶段无法找到对应的路径匹配的路由，导致匹配到404页面
app.use(setupStore)
app.use(router)
app.mount('#app')

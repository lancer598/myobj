import { createApp } from 'vue'
//引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//引入仓库
import pinia from './stores'
//插件引入
import MyUi from '@/components/index'
//暗黑模式引入
import 'element-plus/theme-chalk/dark/css-vars.css'
//mixin混入
import { xt } from '../src/mixin.js'

import App from './App.vue'
import router from './router'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
app.use(MyUi)

app.mixin(xt)
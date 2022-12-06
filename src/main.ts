import { createApp } from 'vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'
import '@/assets/css/global.css'
import * as antIcons from '@ant-design/icons-vue'
import * as echarts from 'echarts'
import menutab from '@/utils/menuTab'
const app = createApp(App)

// 注册组件
Object.keys(antIcons).forEach(key => {
  app.component(key, antIcons[key])
})
// 添加到全局
app.config.globalProperties.$antIncons = antIcons
app.config.globalProperties.$menutab = menutab // 全局挂载echarts
app.config.globalProperties.$echarts = echarts // 全局挂载echarts
app.use(Antd)
app.use(store).use(router).mount('#app')

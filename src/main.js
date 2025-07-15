import App from './App.vue'
import router from './router'
import '@/assets/style/reset.scss'
import '@/assets/style/index.scss'
import '@/assets/style/page.scss'
import '@/assets/style/element.scss'
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@/assets/fonts/iconfont.js'
import SvgIcon from '@/components/SvgIcon'
import validate from '@/utils/validate'
import { deepClone } from '@/utils/deepClone'
import { i18n } from '@/lang/index.js';
import direactives from './direactives'
import {createPinia} from 'pinia'
import VueGridLayout from 'vue-grid-layout'
import { echarts } from "@/utils/echarts.js";
import mitt from "mitt"
const pinia = createPinia()

const app = createApp(App)

app.config.globalProperties.$deepClone = deepClone
app.config.globalProperties.$echarts = echarts
app.config.globalProperties.$mitt = mitt()


app.use(router)
app.use(pinia)
app.use(i18n)
app.use(validate)
app.use(VueGridLayout)
app.use(direactives)

app.component('SvgIcon', SvgIcon)
app.provide('$echarts', echarts)
app.mount('#app')


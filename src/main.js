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

import {createPinia} from 'pinia'
import VueGridLayout from 'vue-grid-layout' // 引入layout
const pinia = createPinia()

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(i18n)
app.use(validate)
app.use(VueGridLayout)


app.config.globalProperties.$deepClone = deepClone
app.component('SvgIcon', SvgIcon)
app.mount('#app')

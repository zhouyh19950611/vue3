// 注册全局组件
import SvgIcon from './SvgIcon'

export default {
    install(app) {
        app.component('SvgIcon', SvgIcon)
    }
}
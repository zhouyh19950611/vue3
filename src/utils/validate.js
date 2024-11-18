// 校验
export default {
    install(app) {
        // 手机号
        app.config.globalProperties.$phoneNub = (val) => {
            let reg = /(\+?\d{1,3}[-\s]?)?(?:\((?:[0-9]{1,4}\))|[0-9]{1,5})[-.\s]?([0-9]{1,8})$/
            return reg.test(val)
        },
        // 邮箱
        app.config.globalProperties.$email = (val) => {
            let reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
            return reg.test(val)
        }
        // 密码
        app.config.globalProperties.$password = (val) => {
            let reg = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,16}$/
            return reg.test(val)
        }
    }
}
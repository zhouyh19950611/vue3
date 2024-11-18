import axios from "axios"
import router from '@/router'
import { getCookie } from "@/utils/cookie";

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
const request = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL, // 基础URL
    timeout: 10000, // 请求超时时间限制
})
let loadingInstance
// 请求拦截
request.interceptors.request.use(
    config =>{
        loadingInstance = ElLoading.service({ fullscreen: true})
        if (getCookie()) {
            config.headers['Authorization'] = 'Bearer ' + getCookie() // 让每个请求携带自定义token 请根据实际情况自行修改
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
// 响应拦截
request.interceptors.response.use(
    response =>{
        loadingInstance.close()
        if(response.data.code === 200){
            return Promise.resolve(response.data)
        }else if(response.data.code === 401){
            // ElMessageBox.alert(response.data.msg, '警告', {
            //         confirmButtonText: '去登录',
            //         callback: () => {
            //             return router?.replace('/login')
            //         },
            //     }
            // )
        }else{
            ElMessage.error(response.data.msg)
            return Promise.resolve(response.data)
        }
    },
    error => {
        return Promise.reject(error)
    }
)
export default request


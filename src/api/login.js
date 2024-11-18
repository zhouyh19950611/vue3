import request from "@/utils/request.js"
function getCode (param = {}){
    return request({
        url: '/code',
        method: "get",
        param: param
    })
}
function login (data = {}){
    return request({
        url: '/auth/login',
        method: "post",
        data: data
    })
}
export{
    getCode,
    login
}

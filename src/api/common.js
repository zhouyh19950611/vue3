import request from "@/utils/request.js"
const getMenu = function(param){
    return request({
        url: '/system/menu/getRouters',
        method: "get",
        param: param
    })
}
export{
    getMenu
}

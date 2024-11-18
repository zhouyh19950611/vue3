import Cookies from "js-cookie"
const cookieKey = "Test-Token"
function setCookie(token, expires){
    Cookies.set(cookieKey,token,{ expires: expires })
}
function getCookie(){
    return Cookies.get(cookieKey)
}
function removeCookie(){
    Cookies.remove(cookieKey)
}
export{
    setCookie,
    getCookie,
    removeCookie
}
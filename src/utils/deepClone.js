// 递归深拷贝
const deepClone = (obj) =>{
    const objCopy = Array.isArray(obj) ? [] : {};
    if(obj && typeof obj === "object"){
        for(let key in obj){
            if(obj[key] && typeof obj[key] === "object"){
                objCopy[key] = deepClone(obj[key])
            }else{
                objCopy[key] = obj[key]
            }
        }
    }
    return objCopy

}
export { deepClone }
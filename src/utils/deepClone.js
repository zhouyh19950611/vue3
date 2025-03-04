// 递归深拷贝
/**
 * 支持 日期、数组、对象、正则
 * @param {*} obj 
 * @returns 
 */
const deepClone = (obj, cache = new WeakMap()) =>{
    // 缓存一个map结构, WeakMap不影响垃圾回收, 降低内存泄漏造成的风险
    /**
     * WeakMap 中的键只能是对象，并且对于键对象的引用是弱引用，
     * 这意味着当键对象不再被引用时，它们将被垃圾回收。
     */
    if(obj===null || typeof obj !== 'object'){
        return obj
    }
    if(obj instanceof Date){
        return new Date(obj.getTime())
    }
    if(obj instanceof RegExp){
        return new RegExp(obj)
    }
    //递归之前判断一下是否拷贝过该对象
    if(cache.has(obj)){
        return cache.get(obj)
    }
    let clone = Array.isArray(obj) ? [] : {};
    // 将克隆对象添加到缓存
    cache.set(obj,clone)
    for(let key in obj){
        // 排除原型上的属性
        if(obj.hasOwnProperty(key)){
            clone[key] = deepClone(obj[key])
        }
    }
    return clone
}
export { deepClone }
import { defineStore } from "pinia"
import setting from "./setting"
const initState = function () {
    return{
        ...setting,
    }
}
export const useAllStore = defineStore('allData', ()=>{
    const state = ref(initState())
    return {
        state
    }
})
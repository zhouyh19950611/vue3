import { defineStore } from "pinia"
const useSettingStore = defineStore('setting', ()=>{
    const state = ref({
        language: 'zh',
        theme: '',
        isCollapse: false
    })
    return {
        state
    }
})
export default useSettingStore
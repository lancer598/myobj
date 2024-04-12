import { defineStore } from "pinia";

export const useSettingStore = defineStore('setting',{
  state: () => {
    return ({
      refresh:true,
      Collapse:false,
    })
  },
  actions:{
    refreshNgation(){
      this.refresh = !this.refresh
    },
    changeCollapse(){
      this.Collapse = !this.Collapse   
    },
  },
  getters:{
    getrefresh(state){
      return state.refresh
    }
  },
  persist: true,
})
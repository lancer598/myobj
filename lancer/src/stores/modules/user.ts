import { defineStore } from "pinia";
import { login, getInfo } from "@/api/user";
import type { loginData } from "@/api/user/type";
import router from '@/router'
import { ElNotification } from "element-plus";
import message from '@/utils/time';

export const useUserStore = defineStore('user',{
  state: () => {
    return ({
      token:'',
      userInfo:{},
      roleType:'',
    })
  },
  actions: {
    async login(data:loginData) {
      let res:any = await login(data);
      if(res.code === 200){
        this.token = res.data.token;
        localStorage.setItem('token', res.data.token);
        await this.getUserInfo()
        router.push('/')
        ElNotification({
          title: '登陆成功',
          message: message + '，' + this.userInfo.name,
          type: 'success',
          duration: 2000,
        })
      }else{
        return
      }
    },
    async getUserInfo(){
      let res:any = await getInfo()
      if (res.code === 200){
        this.userInfo = res.data.checkUser;
        this.roleType = res.data.checkUser.roleType
      }
    },
    async loginOut(){
      localStorage.removeItem('token'),
      this.settoken(''),
      this.setuserInfo({}),
      this.setroleType('')
      router.push('/login')
    },
    async settoken(data:any){
      this.token = data
    },
    async setuserInfo(data:any){
      this.userInfo = data
    },
    async setroleType(data:any){
      this.roleType = data
    },
  },
  getters: {
    getInfo(state) {
      return state.userInfo;
    },
    getRole(state) {
      return state.roleType;
    },
  },
  persist: true,
})
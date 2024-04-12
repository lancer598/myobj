import router from '@/router'
import { useUserStore } from './stores/modules/user'
import  pinia from '@/stores/index'

const userStore = useUserStore(pinia)

//1.路由鉴权防止直接输入地址跳转进入不属于自己的页面。
//2.用户未登录不能访问其他页面。
//3.登录之后不能直接跳到login，（部分退出登录会发请求，会清湖token等数据，直接login的话这一步骤会跳过。）
router.beforeEach((to, from, next) => {
  const token = userStore.token
  console.log(token);
  if(token){
    if(to.path === '/login'){
      next({path:from.path})
    }else{
      next()
    }
  }else{
    if(to.path === '/login'){
      next()
    }else{
      next({ path: '/login'})
    }
  }
})
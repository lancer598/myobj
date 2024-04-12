import axios from 'axios';
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/modules/user';

const basisUrl = import.meta.env.NODE_ENV === "development" ? "/xt-api" : "/xt-api";

//创建实例
const request = axios.create({
  //基础路径
  baseURL: basisUrl,
  timeout: 10000, // 超时时间
});
//请求拦截器
//token 不在请求拦截器而在响应拦截器：1.token失效是后端才知道的。2.如果判断了，那登录接口没有token会报错。
request.interceptors.request.use((config)=>{
  const userStore = useUserStore();
  if(userStore.token){
    config.headers.token = userStore.token;
  }
  //返回配置对象
  return config;
})
//响应拦截器
request.interceptors.response.use((response)=>{
  //成功回调(简化数据)
  
  if(response.data.code == 200){
    return response.data
  }else{
    let message = response.data?.data?.message||'发生错误';
  //提示错误信息
  ElMessage({
    type:'error',
    message
  })
  }
},(error)=>{
  //失败回调
  let message = '';
  let status = error.response.status;
  switch(status){
    case 401:
      message='TOKEN过期';
      break;
    case 403:
      message='无权访问';
      break;
    case 404:
      message='请求错误';
      break;
    case 500:
      message='服务器错误';
      break;
    default:
      message='未知错误';
      break;
  }
  //提示错误信息
  ElMessage({
    type:'error',
    message
  })
  return Promise.reject(error)
})
export default request;
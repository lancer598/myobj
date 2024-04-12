// 用户管理接口
import request from '@/utils/request';
import type { loginData } from './type';

enum API {
  login = '/user/login',
  info = '/user/info',
}

//暴露请求函数
//登录
export const login = (data:loginData) => {
  return request.post(API.login,data)
}
//用户信息
export const getInfo = () => {
  return request.post(API.info)
}
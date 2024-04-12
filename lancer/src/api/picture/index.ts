// 用户管理接口
import request from '@/utils/request';

enum API {
  getpicturea = '/picture/getpicturea',
  getCharts = '/picture/getCharts',
}

//暴露请求函数
//图片1
export const getpicturea = (data: any) => {
  return request.post(API.getpicturea,data)
}
//chart
export const getCharts = (data: any) => {
  return request.post(API.getCharts,data)
}

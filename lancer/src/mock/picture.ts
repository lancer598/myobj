//图片数据
function creatPicList() {
  return {
    type1:[
      '/src/assets/picture/pic1.jpg',
      '/src/assets/picture/pic2.png', 
      '/src/assets/picture/pic3.jpg', 
      '/src/assets/picture/pic4.jpg',
    ],
    type2:[
      '/src/assets/food/food1.jpg',
      '/src/assets/food/food2.jpg',
      '/src/assets/food/food3.jpg',
      '/src/assets/food/food4.jpg',
      '/src/assets/food/food5.jpg',
      '/src/assets/food/food6.jpg',
      '/src/assets/food/food7.jpg',
      '/src/assets/food/food8.jpg',
      '/src/assets/food/food9.jpg',
      '/src/assets/food/food10.jpg',
      '/src/assets/food/food11.png',
      '/src/assets/food/food12.jpg',
      '/src/assets/food/food13.jpg',
      '/src/assets/food/food14.jpg',
      '/src/assets/food/food15.jpg',
      '/src/assets/food/food16.jpg',
      '/src/assets/food/food17.jpg',
      '/src/assets/food/food18.jpg',
      '/src/assets/food/food19.png',
      '/src/assets/food/food20.png',
      '/src/assets/food/food21.png',
      '/src/assets/food/food22.png',
    ]
  }
}
function creatCharts() {
  return {
    '杭州市':[
      '/src/assets/charts/pic1.jpg',
      '/src/assets/charts/pic2.jpg',
      '/src/assets/charts/pic4.jpg',
      '/src/assets/charts/pic5.jpg',
      '/src/assets/charts/pic11.jpg',
      '/src/assets/charts/pic15.jpg',
    ],
    '南京市':[
      '/src/assets/charts/pic3.jpg',
      '/src/assets/charts/pic9.jpg',
      '/src/assets/charts/pic12.jpg',
      '/src/assets/charts/pic13.jpg',
    ],
    '宁波市':[
      '/src/assets/charts/pic7.jpg',
    ],
    '大庆市':[
      '/src/assets/charts/pic6.jpg',
      '/src/assets/charts/pic14.jpg',
    ],
    '恩施土家族苗族自治州':[
      '/src/assets/charts/pic8.jpg',
      // '/src/assets/charts/pic10.jpg',
    ],
    // '煞比':[
    //   '/src/assets/charts/pic10.jpg',
    // ],
    'all':[
      '/src/assets/charts/pic1.jpg',
      '/src/assets/charts/pic2.jpg',
      '/src/assets/charts/pic3.jpg',
      '/src/assets/charts/pic4.jpg',
      '/src/assets/charts/pic5.jpg',
      '/src/assets/charts/pic6.jpg',
      '/src/assets/charts/pic7.jpg',
      '/src/assets/charts/pic8.jpg',
      '/src/assets/charts/pic9.jpg',
      // '/src/assets/charts/pic10.jpg',
      '/src/assets/charts/pic11.jpg',
      '/src/assets/charts/pic12.jpg',
      '/src/assets/charts/pic13.jpg',
      '/src/assets/charts/pic14.jpg',
      '/src/assets/charts/pic15.jpg',

    ]
  }
}
// 图片获取
export default [
  {
    url: '/xt-api/picture/getpicturea',
    method: 'post',
    response: ({ body }) => {
      const { type } = body; 
      let checkpic:any[] = []
      if(type==='type1'){
      checkpic = creatPicList().type1
      }
      if(type==='type2'){
        checkpic = creatPicList().type2
        }
      if (!checkpic) {
        return { code: 201, data: { message: '出错啦' } }
      }
      return {
        code: 200, data: { pic1: checkpic }
      }
    }
  },
  {
    url: '/xt-api/picture/getCharts',
    method: 'post',
    response: ({ body }) => {
      const { city } = body; 
      let checkpic:any[] = []
      if(city){
        checkpic = creatCharts()[city]
      }else{
        checkpic = creatCharts().all
      }
      if (!checkpic) {
        return { code: 201, data: { message: '地区没有照片' } }
      }
      return {
        code: 200, data: { pic: checkpic, city: city }
      }
    }
  },
]
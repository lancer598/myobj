export const constantRouter = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/layout/index.vue'),
    meta: {
      hidden: false,
      title: '学习',
      icon:'Notebook',
    },
    redirect:'/home/fileupload',
    children: [
      {
        path: '/home/fileupload',
        name: 'fileupload',
        component: () => import('@/views/home/fileUpload/index.vue'),
        meta: {
          hidden: false,
          title: '文件上传',
          icon:'Notebook',
        },
      },
      {
        path: '/home/filedownload',
        name: 'filedownload',
        component: () => import('@/views/home/fileDownload/index.vue'),
        meta: {
          hidden: false,
          title: '文件下载'
        },
      },
      {
        path: '/home/vhvw',
        name: 'vhvw',
        component: () => import('@/views/home/vhvw/index.vue'),
        meta: {
          hidden: false,
          title: '深度逻辑以及难点'
        },
      },
      {
        path: '/home/zdyzl',
        name: 'zdyzl',
        component: () => import('@/views/home/zdyzl/index.vue'),
        meta: {
          hidden: false,
          title: '自定义指令'
        },
      },
    ]
  },
  {
    path: '/screen',
    name: 'screen',
    component: () => import('@/views/screen/index.vue'),
    meta: {
      hidden: false,
      title: '数据大屏',
      icon:'TrendCharts',
    },
    redirect:'/screen/sample',
    children: [
      {
        path: '/screen/sample',
        name: 'sample',
        component: () => import('@/views/screen/sample/index.vue'),
        meta: {
          hidden: false,
          title: 'show',
        },
      },
      {
        path: '/screen/screenpicture',
        name: 'screenpicture',
        component: () => import('@/views/screen/screenpicture/index.vue'),
        meta: {
          hidden: true,
          title: '大屏照片'
        },
      },
    ]
  },
  {
    path: '/manage',
    name: 'manage',
    component: () => import('@/layout/index.vue'),
    meta: {
      hidden: false,
      title: '日常',
      icon:'CollectionTag',
    redirect:'/screen/sample',
    },
    redirect:'/manage/usermanage',
    children: [
      {
        path: '/manage/usermanage',
        name: 'usermanage',
        component: () => import('@/views/manage/usermanage/index.vue'),
        meta: {
          hidden: false,
          title: '生活照',
        },
      },
      {
        path: '/manage/rolemanage',
        name: 'rolemanage',
        component: () => import('@/views/manage/rolemanage/index.vue'),
        meta: {
          hidden: false,
          title: '美食',
        },
      },
      // {
      //   path: '/manage/menumanage',
      //   name: 'menumanage',
      //   component: () => import('@/views/manage/menumanage/index.vue'),
      //   meta: {
      //     hidden: false,
      //     title: '菜单管理',
      //   },
      // },
    ]
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('@/layout/index.vue'),
    meta: {
      hidden: false,
      title: '商品管理',
      icon:'Goods',
    },
    redirect:'/product/pinpai',
    children: [
      {
        path: '/product/pinpai',
        name: 'pinpai',
        component: () => import('@/views/product/pinpai/index.vue'),
        meta: {
          hidden: false,
          title: '品牌管理',
        },
      },
      {
        path: '/product/shuxing',
        name: 'shuxing',
        component: () => import('@/views/product/shuxing/index.vue'),
        meta: {
          hidden: false,
          title: '属性管理',
        },
      },
      {
        path: '/product/spu',
        name: 'spu',
        component: () => import('@/views/product/spu/index.vue'),
        meta: {
          hidden: false,
          title: 'SPU管理',
        },
      },
      {
        path: '/product/sku',
        name: 'sku',
        component: () => import('@/views/product/sku/index.vue'),
        meta: {
          hidden: false,
          title: 'SKU管理',
        },
      },
    ]
  },
  {
    path: '/game',
    name: 'game',
    component: () => import('@/layout/index.vue'),
    meta: {
      hidden: false,
      title: '娱乐',
      icon:'SwitchFilled',
    },
    redirect:'/game/anime',
    children: [
      {
        path: '/game/anime',
        name: 'anime',
        component: () => import('@/views/game/anime/index.vue'),
        meta: {
          hidden: false,
          title: '动漫',
        },
      },
    ]
  },
  {
    path: '/system',
    name: 'system',
    component: () => import('@/layout/index.vue'),
    meta: {
      hidden: false,
      title: '系统',
      icon: 'Tools',
    },
    redirect:'/system/user',
    children: [
      {
        path: '/system/user',
        name: 'user',
        component: () => import('@/views/system/user/index.vue'),
        meta: {
          hidden: false,
          title: '个人中心',
        },
      },
      {
        path: '/system/setting',
        name: 'setting',
        component: () => import('@/views/system/setting/index.vue'),
        meta: {
          hidden: false,
          title: '系统设置',
        },
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      hidden: true,
      title: '登录'
    },
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404/index.vue'),
    meta: {
      hidden: true,
      title: '404'
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'any',
    meta: {
      hidden: true,
      title: '其他页面'
    },
  },
]
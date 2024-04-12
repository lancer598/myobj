//用户数据
function creatUserList() {
  return [
    {
      userId: 1,
      avater: '/src/assets/img/xtavater.jpg',
      userName:'xiangtao',
      password: 'xiangtao',
      name: '向涛',
      desc: 'lancer',
      roles: ['1'],
      roleType:'1',
      button: ['cuser.detail'],
      routes: ['home'],
      token: 'Lancer Token'
    },
    {
      userId: 2,
      avater: '',
      userName:'tianjiuhong',
      password: 'tianjiuhong',
      name: '田九红',
      desc: 'saber',
      roles: ['2'],
      roleType:'2',
      button: ['cuser.detail'],
      routes: ['home'],
      token: 'saber Token'
    }
  ]
}

// 用户登录
export default [
  {
    url: '/xt-api/user/login',
    method: 'post',
    response: ({ body }) => {
      const { userName, password } = body;
      const checkUser = creatUserList().find(
        (item) => item.userName === userName && item.password === password
      )
      if (!checkUser) {
        return { code: 201, data: { message: '账号密码不正确' } }
      }
      const { token } = checkUser
      return {
        code: 200, data: { token }
      }
    }
  },
  // 获取用户信息
  {
    url: '/xt-api/user/info',
    method: 'post',
    response: (request) => {
      const token = request.headers.token;
      const checkUser = creatUserList().find(
        (item) =>  item.token === token
      )
      if (!checkUser) {
        return { code: 201, data: { message: '获取用户信息失败' } }
      }
      return {
        code: 200, data: { checkUser }
      }
    }
  },
]
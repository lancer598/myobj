import myButton from './button/index.vue';
import myTips from './tips/index.vue';
//插件
const allComponent:any = {myButton,myTips}


export default{
  install(app:any){
    console.log(app.__proto__,'app')
    //注册全局组件
    Object.keys(allComponent).forEach(key=>{
      app.component(key, allComponent[key])
    })
  }
}
<template>
  <myTips>
    <template #header>
      <div>自定义指令</div>
    </template>
    <template #body>
      <pre>vue2中有 directives
        directives:{
        //使用v-big使得显示的值为10倍(函数式)
          big(element,bind){
            element.innerHTML = bind.value*10
          }
        //使用v-focus使得input默认获取焦点(对象式)
        focus:{
          // 指令与元素绑定成功时（一上来）
          bind(element,bind){
            element.value = bind.value
          }
          //元素被插入页面时
          inserted(element,bind){
            element.focus()
          }
          //指令所在模板被更新时
          update(element,bind){
            element.value = bind.value
          }
        }
        }
        //*指令中的this都指向windows
        // vue注册全局指令如下 第二个参数为回调函数或者对象
        vue.directive（big，function(element,bind){
            element.innerHTML = bind.value*10
          }）
      </pre>
    </template>
  </myTips>
</template>
<script setup lang="ts">

</script>
<style scoped></style>

<template>
  <pre style="font-size:16px;">
    数据大屏宽高自适应 1.vw vh （字体大小不可变）   2.scale 
  </pre>
  <pre style="font-size:16px;">
    数据劫持:object.defineproperty(对象名，属性值，配置项{
      value：属性值，
      enumerable：true，是否可枚举，默认false
      writable：true，是否可修改，默认false
      configurable：true，是否可删除，默认false
      //当有人读取属性值，get触发，返回值就是属性值
      get:function (){
        return valueget
      },
      //当有人修改属性值，set触发，且会收到修改值
      set(val){
        console.log(val)修改值
        valueget = val
      }
      })
  </pre>
</template>
<script setup lang="ts">

</script>
<style scoped>

</style>
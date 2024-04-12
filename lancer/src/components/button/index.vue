<template>
  <div>
    <el-button color="rgb(35, 76, 126)" v-bind="$attrs" >
      <slot></slot>
    </el-button>
  </div>
</template>
<script setup lang="ts">
  import { defineProps } from 'vue';
  //属性透传会将事件直接给到最外层的div,v-bind="$attrs会让按钮也有事件,不加defineOptions点击按钮会因为事件冒泡触发两次事件.
  defineOptions({
  inheritAttrs: false
  })
  
</script>
<style scoped>

</style>
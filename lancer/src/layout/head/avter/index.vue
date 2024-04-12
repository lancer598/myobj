<template>
  <div class="outer-class">
  <img :src="avater" alt="头像">
  <div class="name-class">{{name}}</div>
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from '@/stores/modules/user.ts';
import { ref } from 'vue';
 
  const userStore = useUserStore();
  const info:any = userStore.getInfo;
  const avater = ref(info.avater);
  const name = ref(info.name);
  
</script>
<style scoped lang="less" >
.outer-class{
  line-height: 70px;
  display: flex;
  justify-content: start;
  align-items: center;
  img{
    width: 40px;
    height: 40px;
    border-radius:50%;
    padding-right: 15px;
  }
  .name-class{
    font-size: 17px;
    font-weight: bolder;
  }
}
</style>
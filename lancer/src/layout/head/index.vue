<template>
  <div class="outer-class">
    <div class="headLeft-class">
    <TableBar></TableBar>
    </div>
    <div class="headright-class">
        <el-icon size="25" style="margin-right:20px;" @click="refresh"><Refresh /></el-icon>
        <el-icon size="25" style="margin-right:20px;" @click="fullScreen"><FullScreen /></el-icon>
        <el-icon size="25" style="margin-right:20px;" @click="setting"><Setting /></el-icon>
      <Avter></Avter>
      <myButton style="margin-left: 20px;" type="primary" @click="loginOut">退出登录</myButton>
    </div>
  </div>
  <el-drawer v-model="drawer" title="主题切换">
    <div style="margin-bottom: 40px;">
    <span style="margin-right: 20px;">主题颜色:</span>
    <el-color-picker v-model="color1" @change="changeColor" />
    </div>
    <div>
    <span style="margin-right: 20px;">主题切换:</span>
    <el-switch v-model="theme" @change="themeChange" />
    </div>
  </el-drawer>
</template>
<script setup lang="ts">
import Avter from './avter/index.vue';
import { useUserStore } from '@/stores/modules/user';
import { useSettingStore } from '@/stores/modules/setting';
import TableBar from './tableBar/index.vue';
import { ref } from 'vue'

const userStore = useUserStore();
const useSetting = useSettingStore();
const drawer = ref(false);
const color1 = ref(); //主题颜色
const theme = ref(false); //主题模式
const refresh = () => {
  useSetting.refreshNgation()
}

const fullScreen = () => {
  //判断是否全屏
  let full = document.fullscreenElement
  if(!full){
    //全屏模式
    document.documentElement.requestFullscreen()
  }else{
    //退出全屏
    document.exitFullscreen();
  }
}
//主题模式切换
const themeChange = () =>{
  console.log(theme.value);
  const el = document.documentElement
  theme.value?el.className='dark':el.className=''
}

//主题色
const changeColor = (color:any) =>{
  // console.log(color);
  const el = document.documentElement
  getComputedStyle(el).getPropertyValue(`--el-color-primary`)
  el.style.setProperty('--el-color-primary', color)
}

const setting = () =>{
  drawer.value = true;
}

const loginOut = () => {
  userStore.loginOut()
}
</script>
<style scoped lang="less">
 @import '/src/style/color.less';
.outer-class {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid @line-color;

  .headLeft-class {
    height: 100%;
  }

  .headright-class {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
<template>
  <div class="outer-class">
    <el-menu
      active-color="#409EFF"
      background-color="rgb(35, 76, 126)"
      :default-active="route.path"
      text-color="#fff"
      :unique-opened="true"
      :router="true"
      active-text-color="#000"
      :collapse="collapseStatus"
      collapse-transition
    >
      <template v-for="item in constantRouter" :key="item.path">
       <template v-if="!item.meta.hidden">
        <el-sub-menu v-if="item.children" :index="item.path">
          <template #title>
            <el-icon>
              <component :is="item.meta.icon"></component>
            </el-icon>
            <span>{{ item.meta.title }}</span>
          </template>
            <Menu :constantRouter="item.children"></Menu>
        </el-sub-menu>
        <el-menu-item v-if="!item.children"  :index="item.path">
          <el-icon>
              <component :is="item.meta.icon"></component>
            </el-icon>
          <template #title>
              <span>{{ item.meta.title }}</span>
          </template>
        </el-menu-item>
       </template>
      </template>
    </el-menu>
  </div>
</template>
<script setup lang="ts">
import { defineProps, ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useSettingStore } from '@/stores/modules/setting';

 const props = defineProps(['constantRouter'])
 const route = useRoute();
//  const menu:any = ref(null)
 
//  onMounted(()=>{
//   console.log(menu.value.open, );
  
//   menu.value.open(route.path);
//  })
const collapseStatus = ref(false)
const useSetting = useSettingStore();
watch(
  ()=>useSetting.Collapse,
  (newValue, oldValue)=>{
    collapseStatus.value = newValue
  },
)

</script>
<script lang="ts">
export default {
  name : 'Menu',
}
</script>
<style scoped>
.outer-class{
  width: 100%;
  height: 100%;
  .el-menu{
    border: 0;
  }
}
</style>
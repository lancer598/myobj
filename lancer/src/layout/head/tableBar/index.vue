<template>
  <div class="outer-class">
    <el-icon size="25" @click="changeCollapse">
      <Operation />
    </el-icon>
    <div class="bar-class">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item v-for="item in route.matched" :key="item.name" :to="{ path: item.path }"><span style="font-size: 20px;">{{ item.meta.title }}</span></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue';
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import { useSettingStore } from '@/stores/modules/setting';

const route = ref(useRoute());

const useSetting = useSettingStore();

const changeCollapse = () => {
  useSetting.changeCollapse()
}

</script>
<style scoped lang="less">
.outer-class {
  display: flex;
  justify-content: center;
  align-items: center;
  .bar-class{
    margin-left:20px;
  }
}</style>
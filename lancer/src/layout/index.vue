<template>
  <div class="common-layout">
    <el-container>
      <el-aside
        width="15%"
        :class="{ 'aside-class': true, collapse: collapse }"
      >
        <!-- logo -->
        <div class="logo">
          <img
            style="height: 50px; width: 50px"
            :src="setting.logo"
            alt="大向logo"
          />
          <div class="logo-right">{{ setting.title }}</div>
        </div>
        <!-- 菜单 -->
        <el-scrollbar class="scrollbar">
          <Menu :constantRouter="constantRouter"></Menu>
        </el-scrollbar>
      </el-aside>
      <el-container>
        <el-header height="70px">
          <Head class="head-class"></Head>
        </el-header>
        <el-main>
          <router-view v-slot="{ Component, route  }">
            <transition name="fade">
                <keep-alive v-if="route.meta.keepalive == true">
                  <component :is="Component" :key="route.path" />
                </keep-alive>
                <component :is="Component" v-else :key="route.path" />
            </transition>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import setting from "@/setting";
import Menu from "@/layout/menu/index.vue";
import { constantRouter } from "@/router/routers";
import Head from "@/layout/head/index.vue";
import { useSettingStore } from "@/stores/modules/setting";
import { watch, ref, nextTick } from "vue";

const useSetting = useSettingStore();
const refresh = ref(true);
const collapse = ref(false);

watch(
  () => useSetting.refresh,
  () => {
    refresh.value = false;
    nextTick(() => {
      refresh.value = true;
    });
  }
);
watch(
  () => useSetting.Collapse,
  (newVal) => {
    collapse.value = newVal;
  }
);
</script>
<style scoped lang="less">
@import "@/style/color.less";

.common-layout {
  height: 100%;

  .aside-class {
    background-color: @main-color;
    user-select: none;
    transition: all 0.3s;

    .logo {
      height: 50px;
      display: flex;
    }

    .logo-right {
      width: calc(100% - 50px);
      font-size: 20px;
      line-height: 50px;
      text-align: center;
      color: #fff;
    }

    .scrollbar {
      width: 100%;
      height: calc(100% - 50px);
    }
  }
  .collapse {
    width: 50px;
  }
  .head-class {
    user-select: none;
  }

  .fade-enter-from {
    opacity: 0;
  }
  .fade-enter-active {
    transition: all 0.5s;
  }
  .fade-enter-to {
    opacity: 1;
  }
}
</style>

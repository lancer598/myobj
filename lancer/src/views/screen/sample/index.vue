<template>
  <div class="outer">
    <div class="top">数 字 化 大 屏 感 知 平 台</div>
    <div class="bottom">
      <div class="left-cls">
        <div class="space">水球图</div>
        <Ball class="ball"></Ball>
        <div class="space">柱状图</div>
        <Zhu class="zhu"></Zhu>
        <div class="space">折线图</div>
        <Line class="line"></Line>
      </div>
      <Map class="map-cls"></Map>
      <div class="right-cls">
        <div class="space">涟漪图</div>
        <Lianyi class="lianyi"></Lianyi>
        <div class="space">雷达图</div>
        <Leida class="leida"></Leida>
        <div class="space">饼图</div>
        <Bing class="bing"></Bing>
      </div>
    </div>
  </div>
</template>
<script setup>
import Map from "./compononts/map.vue";
import Ball from "./compononts/ball.vue";
import Zhu from "./compononts/zhu.vue";
import Line from "./compononts/line.vue";
import Leida from "./compononts/leida.vue";
import Bing from "./compononts/bing.vue";
import Lianyi from "./compononts/lianyi.vue";
</script>
<style scoped lang="less">
.outer {
  height: 100%;
  // background-color: #014570;
  background: url("../../../assets/img/bg.png") no-repeat no-repeat 0 0/100%
    100%;
  .top {
    height: 50px;
    text-align: center;
    font-weight: bolder;
    color: rgb(255, 255, 255);
    line-height: 50px;
    font-size: 25px;
    word-spacing: 15px;
    background: url("../../../assets/img/title-pg.png") no-repeat no-repeat 0 0/100%
      160%;
  }
  .bottom {
    height: calc(100% - 50px);
    display: flex;
    .left-cls {
      flex: 1;
      display: flex;
      flex-direction: column;
      .ball {
        flex: 1;
      }
      .zhu {
        flex: 1;
      }
      .line {
        flex: 1;
      }
      .space {
        color: #8fffe7;
        padding-left: 5%;
        flex: 0.15;
        background: url("../../../assets/img/name-bg.png") no-repeat 0 0/100%
          100%;
      }
    }
    .map-cls {
      flex: 2;
    }
    .right-cls {
      flex: 1;
      display: flex;
      flex-direction: column;
      .leida {
        flex: 1;
      }
      .bing {
        flex: 1;
      }
      .lianyi {
        flex: 1;
      }
      .space {
        color: #8fffe7;
        padding-left: 5%;
        flex: 0.15;
        background: url("../../../assets/img/name-bg.png") no-repeat 0 0/100%
          100%;
      }
    }
  }
}
</style>

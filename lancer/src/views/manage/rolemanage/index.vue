<template>
  <div class="outer-cls">
    <div class="top-cls">厨艺照片</div>
    <div class="picdiv-cls">
      <el-carousel height="500px" interval="2500">
        <div class="fontl-cls">美</div>
        <el-carousel-item v-for="item in pic" :key="item">
          <el-image
            fit="contain"
            class="img-cls"
            :src="item"
            style="width: 50%; height: 500px"
          ></el-image>
        </el-carousel-item>
        <div class="fontr-cls">食</div>
      </el-carousel>
    </div>
    <div class="picwall-cls">
      <div class="picwallWord-cls">美食墙</div>
      <div style="display:inline" v-for="(item, index) in pic" :key="item">
        <el-image
          style="width: 100px; height: 100px; margin: 10px"
          :autoplay="true"
          :src="item"
          :zoom-rate="1.2"
          :max-scale="7"
          :min-scale="0.2"
          :preview-src-list="pic"
          :initial-index="index"
          fit="contain"
          :hide-on-click-modal="true"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { getpicturea } from "@/api/picture";
import { ref } from "vue";

const pic = ref([]);
const onload = async () => {
  let res = await getpicturea({
    type: "type2",
  });
  pic.value = res.data.pic1;
};
onload();
</script>
<style scoped lang="less">
@import "@/style/color.less";
.outer-cls {
  .top-cls {
    height: 100px;
    font-size: 40px;
    background-color: @main-color;
    line-height: 100px;
    text-align: center;
    color: antiquewhite;
  }
  .picdiv-cls {
    background-color: antiquewhite;
    .fontl-cls {
      font-family: STHupo, YouYuan;
      float: left;
      width: 25%;
      height: 100%;
      font-size: 70px;
      line-height: 500px;
      text-align: center;
      color: rgb(255, 69, 2);
    }
    .fontr-cls {
      font-family: STHupo, YouYuan;
      float: right;
      width: 25%;
      height: 100%;
      font-size: 100px;
      line-height: 500px;
      text-align: center;
      color: rgb(255, 69, 2);
    }
  }
  .img-cls {
    margin-left: 25%;
  }
  .picwall-cls {
    .picwallWord-cls {
      margin-top: 10px;
      height: 50px;
      font-size: 30px;
      background-color: #897777;
      line-height: 50px;
      text-align: center;
      color: antiquewhite;
    }
  }
}
</style>

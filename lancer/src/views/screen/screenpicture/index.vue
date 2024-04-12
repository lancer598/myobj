<template>
  <div class="outer">
    <div class="filter">
      <el-form :model="form" label-width="auto" style="max-width: 600px">
        <el-form-item label="城市">
          <el-select
            v-model="form.city"
            clearable
            placeholder="请选择城市"
            style="width: 240px"
            @change="change"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="back">返回地图</el-button>
    </div>
    <div class="outer-cls">
      <div class="top-cls">{{ cityName }}</div>
      <div class="picdiv-cls">
        <el-carousel height="500px" interval="2500">
          <div class="fontl-cls" v-if="cityName!=='煞比'">风</div>
          <div class="fontl-cls red" v-else>煞</div>
          <el-carousel-item v-for="item in pic" :key="item">
            <el-image
              fit="contain"
              class="img-cls"
              :src="item"
              style="width: 50%; height: 500px"
            ></el-image>
          </el-carousel-item>
          <div class="fontr-cls" v-if="cityName!=='煞比'">景</div>
          <div class="fontr-cls red" v-else>比</div>
        </el-carousel>
      </div>
      <div class="picwall-cls">
        <div class="picwallWord-cls">照片墙</div>
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
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import { getCharts } from "@/api/picture";
import { ref } from "vue";
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const cityName = ref();
const pic = ref([]);

const onload = async (city) => {
  let res = await getCharts({
    city: city,
  });
  pic.value = res.data.pic;
  cityName.value = res.data.city;
};
//
const form = reactive({
  city: route.query.city,
});
//
const change = (val) =>{
  onload(val);
}
onload(form.city);
//
const back = () => {
  router.back();
}


const options = [
  {
    value: "恩施土家族苗族自治州",
    label: "恩施土家族苗族自治州",
  },
  {
    value: "厦门市",
    label: "厦门市",
  },
  {
    value: "武汉市",
    label: "武汉市",
  },
  {
    value: "杭州市",
    label: "杭州市",
  },
  {
    value: "宁波市",
    label: "宁波市",
  },
  {
    value: "南京市",
    label: "南京市",
  },
  // {
  //   value: "煞比",
  //   label: "煞比",
  // },
];
</script>
<style scoped lang="less">
@import "@/style/color.less";
.outer {
  height: 100%;
  .filter {
    padding: 20px;
    display:flex;
    justify-content: space-between
  }
}
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
      color: rgb(101, 209, 255);
    }
    .fontr-cls {
      font-family: STHupo, YouYuan;
      float: right;
      width: 25%;
      height: 100%;
      font-size: 100px;
      line-height: 500px;
      text-align: center;
      color: rgb(101, 209, 255);
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
  .red{
    color:red !important;
  }
}
</style>

<template>
  <div class="outer-cls">
  <span class="backMenu-cls" @click="backMenu">返回主菜单>>></span>
  <span class="back-cls" v-if="mapState===2" @click="back">返回上一级>>></span>
  <div class="map-cls" ref="map"></div>
  </div>
</template>
<script setup lang="ts">
import * as echarts from "echarts";
import { ref, onMounted } from "vue";
import { data, toolTipData, keyValue } from "./data.js";
import { useRouter } from 'vue-router';

//
const router = useRouter();

//dom元素
const map = ref();
const mapCharts = ref();
//
const loading =ref(false)

//地图层级
const mapState = ref(1);

const geoCoordMap: any = ref({});

//处理特殊数据
let convertData = (data) => {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap.value[data[i].name];
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value),
      });
    }
  }
  return res;
};

//获取地图数据
const getMapData = async ({ name }) => {
  
  let data = keyValue.find((val) => {
   return val.name === name
  });
  
  // 注册地图
  const mapjson = await getmapjson(data);

  echarts.registerMap(data.map, { geoJSON: mapjson });
  //获取地图数据（经纬度，名称）
  let mapFeatures = echarts.getMap(data.map).geoJson.features;
  //避免上一级数据保留到下一级
  geoCoordMap.value={};
  mapFeatures.forEach((v) => {
    // 地区名称
    var name = v.properties.name;
    // 地区经纬度
    geoCoordMap.value[name] = v.properties.center;
  });
};
//导入函数
const getmapjson = async (val) => {
  let res = await import("./" + val.map + ".json");
  return res;
};
//注册map点击事件
const mapClick = () => {
  mapCharts.value.off("click")
  //处理点击事件
  mapCharts.value.on("click", async (e) => {
    let mapData = keyValue.find((val) => {
      return (val.name === e.name);
    });
    if(mapData&&mapState.value === 1){
      mapClick();
      await getMapData(e);
      setEcharts(mapData.map);
      mapState.value = 2
    }else if (mapData&&mapState.value === 2){
      router.push({
        path:`/screen/screenpicture/`,
        query:{
          city:e.name
        },
        // name:'screenpicture',
        // params:{
        //   city:e.name
        // }
      })
      // 现在params不能使用，除非动态路由，推荐query
    }
  });
};
const setEcharts = (mapName) => {
  //配置项
  let options = {
    // backgroundColor: "#014570",
    title: {
      show: true,
      text: "",
      x: "center",
      top: "10",
      textStyle: {
        color: "#fff",
        fontFamily: "等线",
        fontSize: 18,
      },
    },
    tooltip: {
      //提示框数据
      trigger: "item",
      formatter: function (params) {
        if (typeof params.value[2] == "undefined") {
          var toolTiphtml = "";
          for (var i = 0; i < toolTipData.length; i++) {
            if (params.name == toolTipData[i].name) {
              toolTiphtml += toolTipData[i].name + "：" + toolTipData[i].value;
            }
          }
          return toolTiphtml;
        } else {
          var toolTiphtml = "";
          for (var i = 0; i < toolTipData.length; i++) {
            if (params.name == toolTipData[i].name) {
              toolTiphtml += toolTipData[i].name + "：" + toolTipData[i].value;
            }
          }
          return toolTiphtml;
        }
      },
      backgroundColor: "#fff",
      borderColor: "#333",
      padding: [5, 10],
      textStyle: {
        color: "#333",
        fontSize: "16",
      },
    },
    geo: {
      // layoutCenter: ['45%', '48%'],//位置
      layoutSize: "100%", //大小
      show: true,
      map: mapName,
      // roam: true,
      label: {
        normal: {
          show: false,
          textStyle: {
            color: "#fff",
          },
        },
        emphasis: {
          show: true,
          textStyle: {
            color: "#fff",
          },
        },
      },
      itemStyle: {
        normal: {
          borderColor: "rgba(147, 235, 248, 1)",
          borderWidth: 1,
          areaColor: {
            type: "radial",
            x: 0.5,
            y: 0.5,
            r: 0.8,
            colorStops: [
              {
                offset: 0,
                color: "rgba(147, 235, 248, 0)", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "rgba(147, 235, 248, .2)", // 100% 处的颜色
              },
            ],
            globalCoord: false, // 缺省为 false
          },
          // shadowColor: 'rgba(128, 217, 248, 1)',
          shadowColor: "rgba(255, 255, 255, 1)",
          shadowOffsetX: -2,
          shadowOffsetY: 2,
          shadowBlur: 10,
        },
        emphasis: {
          areaColor: "#389BB7",
          borderWidth: 0,
        },
      },
    },
    series: [
      {
        type: "map",
        map: mapName,
        geoIndex: 0,
        aspectScale: 0.9, //长宽比
        zoom: 1,
        showLegendSymbol: false,
        roam: true,
        itemStyle: {
          normal: {
            areaColor: "#031525",
            borderColor: "#3B5077",
          },
          emphasis: {
            areaColor: "#2B91B7",
          },
        },
        animation: false,
        data: data,
      },
      {
        name: "Top 5",
        type: "effectScatter",
        coordinateSystem: "geo",
        data: convertData(toolTipData),
        symbolSize: function (val) {
          return 15;
        },
        showEffectOn: "render",
        rippleEffect: {
          brushType: "stroke",
        },
        hoverAnimation: true,
        label: {
          normal: {
            formatter: "{b}",
            position: "right",
            show: true,
            color: "#fff",
          },
        },
        itemStyle: {
          normal: {
            color: "#1DE9B6",
            shadowBlur: 10,
            shadowColor: "#1DE9B6",
          },
        },
        zlevel: 1,
      },
    ],
  };
  mapCharts.value.setOption(options);
};
//返回上一级
const back = async()=> {
  mapState.value =1;
  mapClick();
  await getMapData({ name: "中华人民共和国" });
  setEcharts("china");
}
//
const backMenu = async()=> {
  router.push({
    path:'/home/fileupload'
  })
}
//
onMounted(async () => {
  mapCharts.value = echarts.init(map.value);
  mapClick();
  await getMapData({ name: "中华人民共和国" });
  setEcharts("china");
});
</script>
<style scoped>
.outer-cls{
  height: 100%;
  position: relative;
}
.map-cls {
  height: 100%;
  /* background-color: #014570; */
}
.back-cls{
  position: absolute;
  color:#8fffe7;
  top:50px;
  right:50px;
  z-index:10;
  cursor: pointer;
}
.backMenu-cls{
  position: absolute;
  color:#8fffe7;
  top:50px;
  left:50px;
  z-index:10;
  cursor: pointer;
}
</style>

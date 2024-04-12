<template>
  <div class="ball-cls" ref="ball"></div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
import "echarts-liquidfill";

const ball = ref();
const ballChart = ref();

const Pie = () => {
  // 外层虚线圈数据
  let dataArr = [];
  for (var i = 0; i < 150; i++) {
    if (i % 2 === 0) {
      dataArr.push({
        name: (i + 1).toString(),
        value: 50,
        itemStyle: {
          color: "#19A4BB",
          borderWidth: 0,
          borderColor: "rgba(0,0,0,0)",
        },
      });
    } else {
      dataArr.push({
        name: (i + 1).toString(),
        value: 100,
        itemStyle: {
          color: "rgba(0,0,0,0)",
          borderWidth: 0,
          borderColor: "rgba(0,0,0,0)",
        },
      });
    }
  }
  return dataArr;
};

const setEchart = () => {
  const rate = 0.55;
  let option = {
    // title: {
    //   text: "水球图",
    //   textStyle: {
    //     color: "#fff",
    //     fontSize: 13,
    //   },
    //   padding: 0,
    //   top: 10,
    //   left: 10,
    // },
    // backgroundColor: "#014570",
    polar: {
      radius: ["75%", "80%"],
      center: ["50%", "50%"],
    },
    angleAxis: {
      max: 100,
      clockwise: false,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    radiusAxis: {
      type: "category",
      show: true,
      axisLabel: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    series: [
      {
        // 水波球
        //value: 50, //  内容 配合formatter
        type: "liquidFill",
        name: "预估量",
        radius: "70%", // 控制中间圆球的尺寸（此处可以理解为距离外圈圆的距离控制）
        center: ["50%", "50%"],
        data: [rate, rate, rate], // data个数代表波浪数
        backgroundStyle: {
          borderWidth: 1,
          color: "rgba(62, 208, 255, 1)", // 球体本景色
        },
        amplitude: "5%", //波浪的振幅
        color: [
          {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 1,
                color: "#6CDEFC",
              },
              {
                offset: 0,
                color: "#429BF7",
              },
            ],
            globalCoord: false,
          },
        ],
        label: {
          formatter: (params) => {
            return `cpu ${(params.value * 100).toFixed(0)}%`;
          },
          fontSize: 24,
          color: "#fff",
        },
        outline: {
          show: false,
        },
      },
      {
        // 外层虚线环
        type: "pie",
        zlevel: 0,
        silent: true,
        radius: ["76%", "78%"],
        z: 1,
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
        data: Pie(),
      },
      {
        // 进度条环
        name: "jindutiao",
        type: "bar",
        roundCap: true,
        z: 2,
        showBackground: false,
        data: [rate * 100],
        coordinateSystem: "polar",
        barWidth: 30, //大的占比环
        itemStyle: {
          opacity: 1,
          color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
            {
              offset: 0,
              color: "#19A4BB",
            },
            {
              offset: 1,
              color: "#22C7DA",
            },
          ]),
        },
      },
    ],
  };
  ballChart.value.setOption(option);
};

onMounted(() => {
  ballChart.value = echarts.init(ball.value);
  setEchart();
});
</script>
<style scoped lang="less">
.ball-cls {
  height: 100%;
  background: url("../../../../assets/img/block-bg.png") no-repeat 0 0/100% 100%;
}
</style>

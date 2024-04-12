<template>
  <div class="chart-cls" ref="line"></div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";

const line = ref();

const setEchart = () => {
  let linecharts = echarts.init(line.value);
  let option = {
    // title: {
    //   text: "折线图",
    //   textStyle: {
    //     color: "#fff",
    //     fontSize: 13,
    //   },
    //   padding: 0,
    //   top: 10,
    //   left: 10,
    // },
    // backgroundColor: "#014570",
    grid: {
      containLabel: true,
      left: 30,
      top: 30,
      bottom: 30,
      right: 30,
    },
    tooltip: {
      show: true,
      trigger: "axis",
      padding: [0, 0, 0, 0],
      axisPointer: {
        lineStyle: {
          width: 2,
          type: "solid",
          color: "#00D1FF",
        },
      },
      backgroundColor: "transparent",
      borderColor: "transparent",
      shadowColor: "transparent",
      formatter: (val) => {
        return `<div class="" style="width:150px;height:55px; background:url(https://s1.ax1x.com/2023/06/16/pCMGC9A.png) no-repeat;background-size:contain;padding:5px 10px;">
                              <p style="font-size:12px;color:rgba(214, 243, 255, 0.9);display:flex;align-items: center ;margin-top:0px">
                                  <span style="display:inline-block;width: 4px;height: 4px;border-radius:50%;background:#00FFFF;margin-right:5px;"></span> ${val[0].name}
                              </p>
                              <p style="font-size:12px;color:rgba(214, 243, 255, 0.9);display:flex;align-items: center; margin-top:5px">
                                  数量
                                  <span style="font-family: 'DIN'; font-size:16px;margin-left:5px;">${val[0].data}</span> 
                              </p>
                         </div>`;
      },
    },

    textStyle: {
      color: "rgba(221,247,255,0.7)",
    },
    xAxis: [
      {
        type: "category",
        data: ["12月", "2月", "4月", "6月", "8月", "10月", "12月"],
        axisLine: {
          lineStyle: {
            color: "#96A9B7",
            type: "dashed", //虚线
          },
        },
        axisTick: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        axisTick: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "#96A9B7",
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "#96A9B7",
            type: "dashed", //虚线
          },
        },
      },
    ],
    series: [
      {
        type: "line",
        data: [10, 10, 30, 12, 15, 3, 7],
        smooth: true,
        yAxisIndex: 0,
        symbol: "circle",
        symbolSize: 6,
        showSymbol: false,
        hoverAnimation: true,
        itemStyle: {
          color: "#fff",
          borderColor: "#00FFFF",
          borderWidth: 2,
        },
        lineStyle: {
          normal: {
            borderWidth: 5,
            color: {
              colorStops: [
                {
                  offset: 0,
                  color: "#00FFFF00",
                },

                {
                  offset: 0.5,
                  color: "#00FFFF",
                },
                {
                  offset: 1,
                  color: "#00FFFF00",
                },
              ],
            },
          },
        },
        areaStyle: {
          //区域填充样式
          normal: {
            //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "#00FFFF",
                },
                {
                  offset: 1,
                  color: "rgba(0, 255, 255, 0)",
                },
              ],
              false
            ),
            shadowColor: "rgba(0, 255, 255, 0.5)", //阴影颜色
            shadowBlur: 20, //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
          },
        },
      },
    ],
  };
  console.log(option);
  linecharts.setOption(option);
};

onMounted(() => {
  setEchart();
});
</script>
<style scoped lang="less">
.chart-cls {
  height: 100%;
  background:url('../../../../assets/img/block-bg.png') no-repeat 0 0/100% 100%;
}
</style>

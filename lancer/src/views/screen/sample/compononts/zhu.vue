<template>
  <div class="chart-cls" ref="zhu"></div>
</template>
<script setup>
import { ref, onMounted, reactive } from "vue";
import * as echarts from "echarts";

const zhu = ref();

const setEchart = (zhuChart) => {
  let option = {
    // title: {
    //   text: "柱状图",
    //   textStyle: {
    //     color: "#fff",
    //     fontSize: 13,
    //   },
    //   padding: 0,
    //   top: 10,
    //   left: 10,
    // },
    tooltip: {
      trigger: "axis", //触发类型 柱状图
      axisPointer: { type: "shadow" }, //触发效果 移动上去 背景效果
    },
    xAxis: [
      {
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "rgba(0,0,0,0.5)",
          },
        },
        axisLabel: {
          color: "#979797",
          fontSize: 12,
        },
        type: "category",
        data: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
        ],
      },
    ],
    yAxis: {
      name: "",
      nameTextStyle: {
        color: "rgba(0,0,0,0.5)",
      },
      type: "value",
      min: 0,
      axisLine: {
        show: false,
      },
      axisLabel: {
        color: "#979797",
        fontSize: 12,
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed",
          // color: '#2b2b2b'
        },
      },
      axisTick: {
        show: false,
      },
    },
    grid: {
      left: 30,
      top: 30,
      bottom: 30,
      right: 30,
      containLabel: true,
    },
    series: [
      {
        name: "example",
        type: "bar",
        barWidth: 15,
        barGap: 0,
        color: "#247FFF",
        data: [50, 110, 110, 210, 150, 50, 110, 110, 210, 150, 50, 110],
        itemStyle: {
          // borderRadius: 2,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#247AFFFF" },
            { offset: 1, color: "#448EFF33" },
          ]),
        },
      },
    ],
  };
  zhuChart.setOption(option);
};

onMounted(() => {
  let zhuChart = echarts.init(zhu.value);
  setEchart(zhuChart);
});
</script>
<style scoped lang="less">
.chart-cls {
  height: 100%;
  background:url('../../../../assets/img/block-bg.png') no-repeat 0 0/100% 100%;
}
</style>

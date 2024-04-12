<template>
  <div class="chart-cls" ref="chart"></div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";

const chart = ref();

const setEchart = (myChart) => {
  let option = {
    // title: {
    //   text: "涟漪图",
    //   textStyle: {
    //     color: "#fff",
    //     fontSize: 13,
    //   },
    //   padding: 0,
    //   top: 10,
    //   left: 10,
    // },
    color: ["rgba(115,179,243,0.3)", "rgba(23,216,161,0.3)"],
    xAxis: {
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      max: 10,
      min: 0,
    },
    yAxis: {
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      max: 10,
      min: 0,
    },
    series: [
      {
        itemStyle: {
          color: "rgba(142,136,84,0)",
          borderColor: "#fff",
          borderWidth: 2,
          shadowColor: "#17D8A1",
          shadowBlur: 10,
        },
        symbol: "circle",
        symbolSize: function (val) {
          return val[1] * 25;
        },
        showEffectOn: "render",
        rippleEffect: {
          color: "#79bbff",
          period: 5,
          scale: 2,
          brushType: "fill",
        },
        data: [[5.0, 5.04]],
        type: "effectScatter",
      },
      {
        itemStyle: {
          color: "rgba(142,136,84,0)",
          borderColor: "rgba(142,136,84,0)",
          borderWidth: 2,
          shadowColor: "#17D8A1",
          shadowBlur: 10,
        },
        symbol: "circle",
        symbolSize: function (val) {
          return val[1] * 25;
        },
        showEffectOn: "render",
        rippleEffect: {
          color: "rgba(142,136,84,0)",
          period: 5,
          scale: 2,
          brushType: "stroke",
        },
        data: [[5.0, 5.04]],
        type: "effectScatter",
      },
      
    ],
  };
  myChart.setOption(option);
};

onMounted(() => {
  let myChart = echarts.init(chart.value);
  setEchart(myChart);
});
</script>
<style scoped lang="less">
.chart-cls {
  height: 100%;
  background:url('../../../../assets/img/block-bg.png') no-repeat 0 0/100% 100%;
}
</style>

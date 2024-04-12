<template>
  <div class="chart-cls" ref="chart"></div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";

const chart = ref();

const setEchart = (myChart) => {
  let option = {
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
}
</style>

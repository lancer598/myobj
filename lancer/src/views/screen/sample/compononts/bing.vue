<template>
  <div class="chart-cls" ref="chart"></div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";

const chart = ref();
const setEchart = (myChart) => {
  let data = [
   { name: 'ex1', value: 100 },
   { name: 'ex2', value: 250 },
   { name: 'ex3', value: 50 },
   { name: 'ex4', value: 180 },
]
let pieColors = ['#95d475', '#00CBFF', '#f89898', '#28F2E6']
data = data.map((item, i) => {
   item.itemStyle = {
      color: {
         type: 'radial',
         x: myChart.getWidth() / 2,
         y: myChart.getHeight() / 2,
         r: 200,
         global: true,
         colorStops: [
            { offset: 0, color: 'rgba(0, 0, 0, 0.2)' },
            { offset: 0.3, color: hexToRgba(pieColors[i], 0.2) },
            { offset: 0.67, color: hexToRgba(pieColors[i], 0.4) },
            { offset: 0.97, color: pieColors[i] },
            { offset: 1, color: pieColors[i] },
         ]
      }
   }
   return item
})

  let option = {
    // title: {
    //   text: "饼图",
    //   textStyle: {
    //     color: "#fff",
    //     fontSize: 13,
    //   },
    //   padding: 0,
    //   top: 10,
    //   left: 10,
    // },
    legend: {
      bottom: 5,
      itemGap: 20,
      icon: "circle",
      textStyle: {
        color: "#fff",
      },
    },
    series: [
      {
        name: "innerPie",
        type: "pie",
        radius: 20,
        itemStyle: {
          color: pieColors[0],
        },
        label: {
          show: false,
        },
        emphasis: {
          disabled: true,
        },
        data: [0],
      },
      {
        name: "innerBorPie",
        type: "pie",
        radius: [33, 36],
        itemStyle: {
          color: pieColors[0],
        },
        label: {
          show: false,
        },
        emphasis: {
          disabled: true,
        },
        data: [0],
      },
      {
        name: "radialPie",
        type: "pie",
        radius: ['1%', '75%'],
        labelLine: {
          length: 30,
          length2: 30,
        },
        data,
      },
    ],
  };

  function hexToRgba(hex, opacity) {
    return (
      "rgba(" +
      parseInt("0x" + hex.slice(1, 3)) +
      "," +
      parseInt("0x" + hex.slice(3, 5)) +
      "," +
      parseInt("0x" + hex.slice(5, 7)) +
      "," +
      opacity +
      ")"
    );
  }
  setTimeout(() => {
    myChart.dispatchAction({
      type: "highlight",
      seriesName: "radialPie",
      dataIndex: 0,
    });
  }, 300);
  let dataIndex = 0,
    timer = null;
  loop();
  function loop() {
    const setBorderColor = (color) => {
      myChart.setOption({
        series: [
          {
            name: "innerPie",
            itemStyle: {
              color: color,
            },
          },
          {
            name: "innerBorPie",
            itemStyle: {
              color: color,
            },
          },
        ],
      });
    };
    const highlight = (index) => {
      myChart.dispatchAction({
        type: "downplay",
        seriesName: "radialPie",
      });

      myChart.dispatchAction({
        type: "highlight",
        seriesName: "radialPie",
        dataIndex: index,
      });
      setBorderColor(pieColors[index]);
    };
    const interval = () => {
      timer = setInterval(() => {
        ++dataIndex;
        if (dataIndex > data.length - 1) dataIndex = 0;
        highlight(dataIndex);
      }, 3000);
    };
    interval();
    myChart.on("mouseover", (e) => {
      if (e.seriesName === "radialPie") {
        clearInterval(timer);
        timer = null;
        dataIndex = e.dataIndex;
        highlight(e.dataIndex);
      }
    });
    myChart.on("mouseout", (e) => {
      if (e.seriesName === "radialPie") {
        interval();
      }
    });
  }
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

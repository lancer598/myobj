<template>
  <div class="chart-cls" ref="chart"></div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";

const chart = ref();
const legendData = ['ex1', 'ex2']; //图例
const color = ['#4A99FF', '#4BFFFC']; //线条边框颜色

const title = {
    text: '雷达图',
    textStyle: {
        color: '#fff',
        fontSize: 13,
    },
    padding: 0,
    top: 10,
    left: 10,
};
const legend = {
    //data，就是取得每个series里面的name属性。
    orient: 'vertical',
    icon: 'circle', //图例形状
    padding: 0,
    top: 35,
    right: 40,
    itemWidth: 14, //小圆点宽度
    itemHeight: 14, // 小圆点高度
    itemGap: 10, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
    textStyle: {
        fontSize: 14,
        color: '#00E4FF',
    },
};
const tooltip = {
    show: true,
};
const indicator = [
    {
        name: 'a',
        max: 6000,
    },
    {
        name: 'b',
        max: 5000,
    },
    {
        name: 'c',
        max: 5000,
    },
    {
        name: 'd',
        max: 5000,
    },
    {
        name: 'e',
        max: 5000,
    },
    {
        nam: 'f',
        max: 5000,
    },
];
const dataArr = [
    {
        name: 'ex1',
        value: [4300, 4700, 3600, 3900, 3800, 4200],
        symbolSize: 8,
        symbol: 'circle',

        lineStyle: {
            width: 2,
        },
        areaStyle: {
            // 单项区域填充样式
            color: {
                type: 'linear',
                x: 0, //右
                y: 0, //下
                x2: 1, //左
                y2: 1, //上
                colorStops: [
                    {
                        offset: 0,
                        color: color[0],
                    },
                    {
                        offset: 0.5,
                        color: 'rgba(0,0,0,0)',
                    },
                    {
                        offset: 1,
                        color: color[0],
                    },
                ],
                global: false,
            },
            opacity: 1, // 区域透明度
        },
    },
    {
        value: [3200, 3000, 3400, 2000, 3900, 2000],
        name: 'ex2',
        symbolSize: 8,
        symbol: 'circle',
        lineStyle: {
            width: 2,
        },

        areaStyle: {
            // 单项区域填充样式
            color: {
                type: 'linear',
                x: 0, //右
                y: 0, //下
                x2: 1, //左
                y2: 1, //上
                colorStops: [
                    {
                        offset: 0,
                        color: color[1],
                    },
                    {
                        offset: 0.5,
                        color: 'rgba(0,0,0,0)',
                    },
                    {
                        offset: 1,
                        color: color[1],
                    },
                ],
                global: false,
            },
            opacity: 1, // 区域透明度
        },
    },
];


const setEchart = (myChart) => {
  let option = {
    color,
    // title,
    legend,
    tooltip,
    radar: {
        center: ['50%', '50%'], //圆心坐标距离左边和上边的距离
        radius: ['1%', '75%'], //内外半径，不写默认是75%
        startAngle: 90, //可以旋转图形
        shape: 'polygon',
        axisName: {
            color: '#fff',
            fontSize: 16,
        },
        nameGap:1,//字到图的距离
        indicator: indicator,
        splitArea: {
            show: false, //默认显示颜色分割区域，不需要显示
        },
        axisLine: {
            show: true, //是否显示十字交叉线
            //指向外圈文本的分隔线样式
            lineStyle: {
                color: '#153269', //线条颜色
            },
        },
        axisLabel: { show: false },
        splitLine: {
            //雷达一圈圈
            show: true,
            lineStyle: {
                type: 'solid',
                color: '#113865', // 雷达一圈圈颜色分隔线颜色
                width: 1, // 分隔线线宽
            },
        },
    },
    series: [
        {
            type: 'radar',
            data: dataArr,
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

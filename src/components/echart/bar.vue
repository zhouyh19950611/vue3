<template>
  <div ref="lineRef" class="line-chart"></div>
</template>
<script setup>
import * as echarts from "echarts"; //引入图标
const lineRef = ref();
let echart;
onMounted(() => {
  nextTick(() => {
    echart = echarts.init(lineRef.value);
    const option = {
      gird: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
      },
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar",
        },
      ],
    };
    echart.setOption(option);
    setTimeout(() => {
      //由于网格布局拖拽放大缩小图表不能自适应，这里设置一个定时器使得echart加载为一个异步过程
      echart.resize();
    }, 0);
  });
});
const sizeChange = () => {
  // 修改 echart 大小
  echart.resize();
};
// 暴露方法
defineExpose({
  sizeChange,
});
</script>
<style lang="scss" scoped>
.line-chart {
  width: 100%;
  height: 100%;
  div {
    width: 100%;
    height: 100% !important;
  }
}
</style>

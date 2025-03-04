<template>
  <div ref="lineRef" class="line-chart"></div>
</template>
<script setup>
import "echarts-gl";
import * as echarts from "echarts"; //引入
import option from "./3D.js";
const lineRef = ref();

onMounted(() => {
  nextTick(() => {
    let echart = echarts.init(lineRef.value);
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

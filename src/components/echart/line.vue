<template>
  <div ref="lineRef" class="line-chart">
    <svg width="200" height="200" viewBox="0 0 200 200">
      <path id="arc" d="M 100,100 A 50,50 0 0,1 150,150" stroke="black" fill="none" />
    </svg>
  </div>
</template>
<script setup>
import * as echarts from "echarts"; //引入图标
const lineRef = ref();
let echart;
onMounted(() => {
  nextTick(() => {
    echart = echarts.init(lineRef.value);
    const option = {
      //创建折线图的配置项数据
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
          data: [150, 230, 224, 218, 135, 147, 260],
          type: "line",
        },
      ],
    };
    // echart.setOption(option);
    // setTimeout(() => {
    //   //由于网格布局拖拽放大缩小图表不能自适应，这里设置一个定时器使得echart加载为一个异步过程
    //   echart.resize();
    // }, 0);
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

@keyframes drawArc {
  0% {
    stroke-dasharray: 0, 1000;
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dasharray: 1000, 1000;
    stroke-dashoffset: -1000;
  }
}

#arc {
  stroke-dasharray: 1000; /* 总长度 */
  stroke-dashoffset: 1000; /* 开始隐藏 */
  animation: drawArc 3s linear forwards; /* 动画效果 */
}
</style>

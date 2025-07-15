<template>
  <div ref="chartRef" class="chart"></div>
</template>
<script setup>
// const $echarts = inject("$echarts");
const {proxy} =  getCurrentInstance();
const chartRef = ref();
function init_chart() {
  let myChart = proxy.$echarts.getInstanceByDom(chartRef.value);
  //判断dom是否存在，要是不存在再进行初始化
  if (myChart == null) {
    myChart = proxy.$echarts.init(chartRef.value);
  }
  myChart.setOption({
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
  });
}
onMounted(() => {
    // nextTick(() => {
        
    // })
    setTimeout(() => {
        init_chart();
    }, 50);
  window.addEventListener("resize", () => {
    init_chart();
  });
});
</script>
<style lang="scss" scoped>
.chart {
  width: 100%;
  height: 100%;
  div {
    width: 100%!important;
    height: 100%!important;
  }
}
</style>

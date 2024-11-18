<template>
  <div class="page">
    <h1 ref="titleRef">vue-grid-layout可拖拽式布局</h1>
    <grid-layout
      :layout.sync="layout"
      :col-num="12"
      :row-height="30"
      :is-draggable="draggable"
      :is-resizable="resizable"
      :vertical-compact="true"
      :use-css-transforms="true"
    >
      <grid-item
        v-for="item in layout"
        :static="item.static"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        :key="item.i"
        @resize="sizeAutoChange(item.i)"
      >
        <component :is="component[item.name]" :ref="(el) => (tempRefs[item.i] = el)" />
      </grid-item>
    </grid-layout>
    <!-- <p>{{ num }}</p>
    <el-button @click="add" type="primary">添加</el-button >
    <el-button @click="add">添加1</el-button>

    <router-link to="/home/detail">跳转</router-link>
    <p>跳转数码</p>
    <el-button text @click="dialogVisible = true">click to open the Dialog</el-button>
    <el-card class="box-card">
      <div v-for="o in 4" :key="o" class="text item">{{ "List item " + o }}</div>
    </el-card>
    <router-view></router-view> -->
  </div>
</template>
<script setup>
import useProject from "@/hooks/useProject";
const { num, add } = useProject();
import Line from "@/components/echart/line.vue";
import Bar from "@/components/echart/bar.vue";

let component = shallowReactive({
  Line,
  Bar,
});
const layout = ref([
  //每一个 grid-item 的属性
  { x: 0, y: 0, w: 4, h: 4, i: "0", static: false, name: "Line" },
  { x: 0, y: 4, w: 4, h: 4, i: "1", static: false, name: "Bar" },
  { x: 0, y: 8, w: 4, h: 4, i: "2", static: false, name: "Line" },
]);
//是否可拖拽
const draggable = ref(true);
//是否可更改大小
const resizable = ref(true);
// 获取动态子组件
const tempRefs = reactive([]);
const sizeAutoChange = (index) => {
  const chartRef = tempRefs[index];
  chartRef.sizeChange();
};
function testWorker() {
  const worker1 = new Worker(new URL("@/utils/worker1.js", import.meta.url));
  worker1.onmessage = function (e) {
    console.log(e);
  };
}
onMounted(() => {
  testWorker();
});
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.vue-grid-layout {
  background: #eee;
}
.vue-grid-item:not(.vue-grid-placeholder) {
  background: rgb(255, 255, 255);
  border: 1px solid black;
}
.vue-grid-item .static {
  background: #cce;
}
</style>

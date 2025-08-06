<template>
  <div class="page">
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
    <el-button @click="save">indexedDB存储123</el-button>
  </div>
</template>
<script setup>
import useProject from "@/hooks/useProject";
const { num, add } = useProject();
import Echart from "@/components/echart/index.vue";

let component = shallowReactive({
  Echart,
});
const layout = ref([
  //每一个 grid-item 的属性
  { x: 0, y: 0, w: 4, h: 4, i: "0", static: false, name: "Echart" },
  { x: 0, y: 4, w: 4, h: 4, i: "1", static: false, name: "Echart" },
  { x: 0, y: 8, w: 4, h: 4, i: "2", static: false, name: "Echart" },
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
// let worker = null
// function testWorker() {
//   worker = new Worker(new URL("@/utils/worker.js", import.meta.url));
//   worker.onmessage = (e) => {
//     console.log('收到结果',e.data);
//   };
//   worker.postMessage(1000000)
// }

// onMounted(() => {
//   testWorker();
// });
// onUnmounted(() => {
//   worker.terminate(); //组件销毁终止Worker
// });
function getIndexDB() {
  const indexedDB =
    window.indexedDB ||
    window.mozIndexedDB ||
    window.webkitIndexedDB ||
    window.msIndexedDB ||
    window.shimIndexedDB;
    if (indexedDB){
        return indexedDB
    }
    console.error("indexedDB not supported by this browser")
    return null
}
const indexedDB = getIndexDB()
const request = indexedDB.open("mydb", 1);
const request2 = indexedDB.open("mydb2", 2);
console.log(request)
// onerror 处理
request.onerror = (event) => console.error("IndexDB Error: ", event)
// onupgradeneeded
request.onupgradeneeded = () => {
  // 获取数据库连接
  const db = request.result;
  // 定义一个新存储
  const store = db.createObjectStore("todos", {
    keyPath: "id",
    autoIncrement: true,
  });
  // 指定一个属性作为索引
  store.createIndex("todos_text", ["text"], {unique: false})
};
//onsuccess
request.onsuccess = () => {
    console.log("Database Connection Established")
    // 获取数据库连接
    const db = request.result
    // 创建事务对象
    const tx = db.transaction("todos", "readwrite")
    // 创建一个与我们存储的事务
    const todosStore = tx.objectStore("todos")
    // 得到所有待办事项
    const query = todosStore.getAll()
    // 使用数据查询
    query.onsuccess =  () => {
        console.log("All Todos: ", query.result)
        for (todo of query.result){
            todos.push(todo.text)
        }
    }
}
function save(){
      // 获取数据库连接
    const db = request.result
    // 创建事务对象
    const tx = db.transaction("todos", "readwrite")
    // 创建一个与我们存储的事务
    const todosStore = tx.objectStore("todos")
    // 得到所有待办事项
    const query = todosStore.getAll()
    // 使用数据查询
    query.onsuccess =  () => {
        console.log("All Todos: ", query.result)
        for (todo of query.result){
            todos.push(todo.text)
        }
        renderTodos()
    }

}
</script>
<style scoped>
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

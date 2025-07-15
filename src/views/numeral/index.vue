<template>
  <div class="page">
    <child ref="childRef"></child>
    <router-link to="/detail">跳转</router-link>
    <el-table ref="tableRef" :data="tableData" style="width: 100%;height: 500px">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="100" />
      <el-table-column prop="address" label="Address" />
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="100" />
      <el-table-column prop="address" label="Address" />
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="100" />
      <el-table-column prop="address" label="Address" />
    </el-table>
  </div>
</template>
<script setup>
import { on } from "events";
import child from "./com/header.vue";
import childfoot from "./com/footer.vue";

  let car = ref('yu7')
  provide('CAR', car)
  // 模拟数据 
  let mockData = reactive([])
  for (let i = 0; i < 200; i++) {
    mockData.push({
      date: '2016-05-03',
      name: `王小虎${i}`,
      address: '上海市普陀区金沙江路 1518 弄',
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
    })
  }
  let tableData=reactive([])
  let size = 50;
  function dealData(){
    let index = mockData.length/size
    let data = []
    
  }
  onMounted(() => {
   
  });

</script>
<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  /* gap: 10px; */
}
.grid li {
  border: 1px solid #ccc;
}
</style>

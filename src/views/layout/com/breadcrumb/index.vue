<script setup></script>

<template>
  <el-breadcrumb class="bread">
    <el-breadcrumb-item
      v-for="(item, index) in $route.matched.filter((item) => item.name !== 'main')"
      :key="index"
      :to="{ path: item.path }"
    >
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style scoped>
.bread {
  width: 100%;
  height: 36px;
  line-height: 36px;
  margin-left: 12px;
}
</style>

<script setup>
import Menu from "@/components/Menu";
import Header from "@/components/Header";
import { getMenu } from "@/api/common";
const menuList = ref([]);
const getMenuList = async () => {
  const { data } = await getMenu();
  menuList.value = data;
};
onMounted(() => {
  // getMenuList();
});
</script>

<template>
  <el-container class="common-layout">
    <Menu :menuList="menuList" />
    <div class="common-container">
      <Header />
      <el-main class="common-main">
        <router-view></router-view>
      </el-main>
    </div>
  </el-container>
</template>

<style lang="scss" scoped>
.common-layout {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .common-container {
    width: 100%;
    height: 100vh;
    .common-main {
      width: 100%;
      height: calc(100vh - 48px);
      padding: 12px;
      // background: #f1f1f1;
      overflow: hidden;
    }
  }
}
</style>

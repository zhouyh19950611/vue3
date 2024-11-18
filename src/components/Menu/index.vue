<script setup>
import { useAllStore } from "@/store";
import { useRouter } from "vue-router";
const router = useRouter();
const store = useAllStore();
const props = defineProps({
  menuList: {
    type: Array,
    default: () => [],
  },
});
const isCollapse = computed(() => store.state.isCollapse);
const width = computed(() => (store.state.isCollapse ? "64px" : "180px"));
function jump(url) {
  router.push({
    path: url,
  });
}
const active = ref("home");
// 监听当前路由
watch(
  () => router.currentRoute.value,
  (newValue) => {
    active.value = newValue.meta.parent || newValue.name;
  },
  { immediate: true }
);
</script>

<template>
  <el-aside :width="width">
    <el-menu :default-active="active" :collapse="isCollapse" :unique-opened="true">
      <h3 class="el-menu-title">{{ isCollapse ? "运营" : "运营管控" }}</h3>
      <el-menu-item index="home" @click="jump('/home')">
        <svg-icon iconName="icon-shouye"></svg-icon>
        <span class="ml-8">{{ $t("language.home") }}</span>
      </el-menu-item>
      <el-sub-menu index="1">
        <template #title>
          <svg-icon iconName="icon-fenlei"></svg-icon>
          <span class="ml-8">分类</span>
        </template>
        <el-menu-item index="numeral" @click="jump('/numeral')">
          <span>数码</span>
        </el-menu-item>
        <el-menu-item index="1-1">
          <span>日用</span>
        </el-menu-item>
      </el-sub-menu>
      <el-sub-menu
        v-for="(item, index) in props.menuList"
        :key="index"
        :index="String(index + 2)"
      >
        <template #title>
          <svg-icon iconName="icon-zhuti"></svg-icon>
          <span class="ml-8">{{ item.meta.title }}</span>
        </template>
        <el-menu-item index="numeral1" v-for="(son, index) in item.children" :key="index">
          <span>{{ son.meta.title }}</span>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>

<style scoped lang="scss">
.el-aside {
  height: 100vh;
  border-right: none;
  overflow: hidden;
  overflow-y: scroll;
  ::v-deep(.el-menu) {
    height: 100%;
    background: transparent;
    .el-menu-title {
      text-align: center;
      height: 48px;
      line-height: 48px;
    }
  }
}
</style>

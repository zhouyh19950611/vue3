<script setup>
import useSettingStore from "@/store/setting";
import { HexToRgb } from "@/utils/tool";
import Breadcrumb from "@/components/Breadcrumb";
import { Sunny, Moon } from "@element-plus/icons-vue";

// 展开收起
const store = useSettingStore();
const handleCollapse = function () {
  store.state.isCollapse = !store.state.isCollapse;
};

// 暗色主题切换
const isDark = ref(false);
const toggleDark = function () {
  if (store.state.theme) {
    document.documentElement.classList.remove(store.state.theme);
    store.state.theme = null;
  } else {
    store.state.theme = "dark";
    document.documentElement.classList.add(store.state.theme);
  }
};

// 主题颜色
const themeColors = ref(["#409eff", "#2aa469", "#f2a369", "#0000ff"]);
function setThemeColor(color) {
  let RGB = HexToRgb(color);
  // 切换主题色
  document.documentElement.style.setProperty("--el-color-primary", color);
  document.documentElement.style.setProperty(
    "--el-color-primary-dark-2",
    `rgb(${RGB}, .1)`
  );
  for (let i = 1; i <= 9; i++) {
    // 切换滑动色
    document.documentElement.style.setProperty(
      `--el-color-primary-light-${i}`,
      `rgba(${RGB},.4)`
    );
  }
}
// 中英文切换
const { proxy } = getCurrentInstance();
function language() {
  let lan = localStorage.getItem("LANGUAGE") == "zh" ? "en" : "zh";
  localStorage.setItem("LANGUAGE", lan);
  proxy.$i18n.locale = lan;
}
</script>
<template>
  <header class="head flex">
    <div class="head-lt flex">
      <svg-icon @click="handleCollapse" iconName="icon-zhankai"></svg-icon>
      <Breadcrumb />
    </div>
    <div class="head-rt flex">
      <el-tooltip content="中英文切换">
        <svg-icon iconName="icon-zhongyingwen" @click="language()"></svg-icon>
      </el-tooltip>
      <el-popover placement="bottom" :width="240" trigger="hover">
        <template #reference>
          <svg-icon iconName="icon-zhuti"></svg-icon>
        </template>
        <div>
          <div class="theme">
            主题
            <el-switch
              v-model="isDark"
              inline-prompt
              :active-icon="Moon"
              :inactive-icon="Sunny"
              active-color="var(--el-fill-color-dark)"
              inactive-color="var(--el-color-primary)"
              @change="toggleDark"
            />
          </div>
          <div class="theme-color flex">
            主题颜色
            <p
              v-for="(item, index) in themeColors"
              :key="index"
              :style="{ background: item, width: '32px', height: '32px' }"
              @click="setThemeColor(item)"
            ></p>
          </div>
        </div>
      </el-popover>
      <el-tooltip content="退出">
        <svg-icon iconName="icon-tuichu" @click="exit()"></svg-icon>
      </el-tooltip>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.head {
  width: auto;
  height: 48px;
  padding: 0 12px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--el-menu-border-color);
  .head-lt {
    height: 48px;
    align-items: center;
  }
  .head-rt {
    height: 48px;
    align-items: center;
    .svg-icon {
      width: 48px;
      height: 48px;
      margin: 0 6px;
      text-align: center;
      line-height: 48px;
    }
  }
}
</style>

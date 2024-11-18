<template>
  <svg
    :class="svgClass"
    aria-hidden="true"
    :style="{
      width: size + 'px',
      height: size + 'px',
      fill: store.state.theme ? '#fff' : color,
    }"
  >
    <use :xlink:href="iconClassName"></use>
  </svg>
</template>

<script setup>
import { computed } from "vue";
import { useAllStore } from "@/store";
const store = useAllStore();
const props = defineProps({
  // 添加自定义类名
  className: {
    type: String,
    default: "",
  },
  // iconfont中的名字
  iconName: {
    type: String,
    required: true,
  },
  // iconfont中的名字
  size: {
    type: Number,
    default: () => 18,
  },
  // iconfont中的名字
  color: {
    type: String,
    default: () => "#333",
  },
});

const svgClass = computed(() => {
  if (props.className) {
    return `svg-icon ${props.className}`;
  } else {
    return "svg-icon";
  }
});
const iconClassName = computed(() => `#${props.iconName}`);
</script>

<style lang="scss" scoped>
.svg-icon {
  outline: unset;
}
</style>


<!-- 子组件 -->
<template>
  <div>
    孙子组件: {{car}}
  </div>
</template>
<script setup>
    let car = inject("CAR")
</script>

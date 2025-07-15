
<!-- 子组件 -->
<template>
  <div>
    我是子组件:{{car}}
    <grandChild/>
  </div>
</template>
<script setup>
    import grandChild from "./footer.vue"
    let car = inject("CAR")
</script>

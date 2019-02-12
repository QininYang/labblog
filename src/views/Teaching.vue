<template>
  <div class="teaching-container">

  </div>
</template>
<script>
export default {
  name: "teaching",
  data() {
    return {};
  }
};
</script>

<style scoped>
/* scoped 的目的是引入的 css 样式只对当前组件内的生效
    但是 scss 使用 scoped 不知道为什么不行，没去百度
 */
.teaching-container {
  background-color: darkslategray;
  height: 400px;
}
</style>

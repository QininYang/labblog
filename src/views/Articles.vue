<template>
  <div class="articles-container">
    <articals />
  </div>
</template>

<script>
//导入组件
import Articals from "@/views/contents/Articals.vue";
export default {
  name: "articles",
  //data必须是个函数，无法直接赋值给他
  data() {
    return {};
  },
  //组件注册
  components: {
    Articals
  }
};
</script>

<style lang="scss">
.articles-container {
  height: 400px;
  width: 100%;
  background-color: #e69654;
}
</style>

<template>
  <div class="home">
    <div class="container-description">
      <des-com />
    </div>
    <div class="container-highlights">
      <high-com />
    </div>
    <div class="container-mainer">
      <main-view />
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
//页面主要骨架，顶部，底部，中部是数据
//组件导入
import DesCom from "@/components/DesCom.vue";
import HighCom from "@/components/HighCom.vue";
import MainView from "@/views/contents/MainView.vue";
export default {
  name: "home",
  //注册组件
  components: {
    DesCom,
    HighCom,
    MainView
  }
};
</script>

<style lang="scss">
</style>

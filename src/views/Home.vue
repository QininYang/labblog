<template>
  <div class="home">
    <div class="home-header">
      <header-com />
    </div>
    <div>
      <!-- router-view路由转 -->
      <router-view></router-view>
    </div>
    <div class="home-footer">
      <footer-com />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//@ 别名 指代/src目录
//组件导入
import HeaderCom from "@/components/HeaderCom.vue";
import FooterCom from "@/components/FooterCom.vue";

export default {
  name: "home",
  //组件注册
  components: {
    HeaderCom,
    FooterCom
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: #08c;
}
.home {
  background-color: cornsilk;
  width: 940px;
  margin-left: auto;
  margin-right: auto;
}
</style>


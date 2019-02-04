<template>
  <div class="home">
    <div class="home-header">
      <header-com />
    </div>
    <div>
      <router-view></router-view>
    </div>
    <div class="home-footer">
      <footer-com />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderCom from "@/components/HeaderCom.vue";
import FooterCom from "@/components/FooterCom.vue";

export default {
  name: "home",
  components: {
    HeaderCom,
    FooterCom
  }
};
</script>

<style lang="scss">
.home {
  background-color: cornsilk;
  width: 940px;
  margin-left: auto;
  margin-right: auto;
}
</style>


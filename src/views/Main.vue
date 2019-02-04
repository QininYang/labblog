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
import DesCom from "@/components/DesCom.vue";
import HighCom from "@/components/HighCom.vue";
import MainView from "@/views/contents/MainView.vue";
export default {
  name: "home",
  components: {
    DesCom,
    HighCom,
    MainView
  }
};
</script>

<style lang="scss">
</style>

<template>
  <div class="home">
    <div class="container-header"></div>
    <div class="container-description"></div>
    <div class="container-highlights"></div>
    <div class="container-mainer"></div>
    <div class="container-footer"></div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from "@/components/HelloWorld.vue";

  export default {
    name: "home",
    components: {
      HelloWorld
    }
  };
</script>

<style lang="scss">
  .home {
    background: #000;
    height: 1200px;
    width: 940px;
    margin-left: auto;
    margin-right: auto;
  }
</style>

<template>
  <div class="home">
    <div class="container-header">
      <header-com />
    </div>
    <div class="container-description">
      <des-com />
    </div>
    <div class="container-highlights"></div>
    <div class="container-mainer"></div>
    <div class="container-footer"></div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HeaderCom from "@/components/HeaderCom.vue";
  import DesCom from "@/components/DesCom.vue"
  export default {
    name: "home",
    components: {
      HeaderCom,
      DesCom
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

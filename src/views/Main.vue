<template>
  <div class="home">
    <div class="container-header">
      <header-com />
    </div>
    <div class="container-description">
      <des-com />
    </div>
    <div class="container-highlights">
      <high-com />
    </div>
    <div class="container-mainer">

    </div>
    <div class="container-footer">
      <footer-com />
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HeaderCom from "@/components/HeaderCom.vue";
  import DesCom from "@/components/DesCom.vue";
  import FooterCom from "@/components/FooterCom.vue";
  import HighCom from "@/components/HighCom.vue";
  export default {
    name: "home",
    components: {
      HeaderCom,
      DesCom,
      FooterCom,
      HighCom,
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

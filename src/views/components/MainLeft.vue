<template>
  <div class="main-left">
    <div class="main-left-header">News and Events</div>
    <template v-for="item in newsdata"
      ><main-com v-bind:item="item"></main-com
    ></template>
    <div class="main-left-end"></div>
  </div>
</template>

<script>
  import MainCom from "_c/MainCom.vue";
  export default {
    name: "mainleft",
    data() {
      return {};
    },
    props: {
      newsdata: {}
    },
    components: {
      MainCom
    }
  };
</script>

<style lang="scss" scoped>
  .main-left-header {
    text-align: left;
    border-bottom: 2px solid #820000;
    margin-bottom: 12px;
  }
  .main-left {
    margin-left: 20px;
    margin-right: 20px;
  }
  .main-left-end {
    padding-bottom: 5px;
  }
</style>

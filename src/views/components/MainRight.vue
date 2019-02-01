<template>
  <div class="main-right">
    <div class="main-right-header">Press Coverage</div>
    <template v-for="item in coverages">
      <cover-com v-bind:item="item"> </cover-com>
    </template>
    <div class="main-right-end"></div>
  </div>
</template>

<script>
  import CoverCom from "_c/CoverCom.vue";
  export default {
    name: "mainright",
    data() {
      return {};
    },
    props: {
      coverages: {}
    },
    components: {
      CoverCom
    }
  };
</script>

<style lang="scss">
  .main-right {
    margin-right: 20px;
  }
  .main-right-header {
    text-align: left;
    border-bottom: 2px solid #820000;
    margin-bottom: 12px;
  }
</style>

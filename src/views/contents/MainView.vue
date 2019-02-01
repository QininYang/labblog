<template>
  <div class="main-container">
    <div class="main-container-left">
      <main-left v-bind:newsdata="newsdata"/>
    </div>
    <div class="main-container-right">
      <main-right v-bind:coverages="coverages"/>
    </div>
  </div>
</template>

<script>
  import { newsdata, coverages } from "@/config/data.js";
  import MainLeft from "@/views/components/MainLeft.vue";
  import MainRight from "@/views/components/MainRight.vue";
  export default {
    name: "main-view",
    data() {
      return {
        newsdata,
        coverages
      };
    },
    components: {
      MainLeft,
      MainRight
    }
  };
</script>

<style lang="scss" >
  .main-container {
    background-color: cornsilk;
  }
  .main-container-left {
    display: inline-block;
    width: 50%;
  }
  .main-container-right {
    width: 50%;
    display: inline-block;
    vertical-align: top; /*置顶*/
  }
</style>

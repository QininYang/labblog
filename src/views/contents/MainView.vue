<template>
  <div class="main-container">
    <div class="main-container-left"></div>
    <div class="main-container-right"></div>
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

<style lang="scss">
  .main-container {
    height: 300px;
    background-color: cornsilk;
  }
</style>

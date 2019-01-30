<template>
  <div class="high-container">
    <div class="high-header"><h4>Hightlights</h4></div>
    <div class="high-main">
      <div class="high-1 high"></div>
      <div class="high-2 high"></div>
      <div class="high-3 high"></div>
      <div class="high-4 high"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "highcom",
    data() {
      return {};
    }
  };
</script>

<style lang="scss">
  .high-container {
    background-color: cornsilk;
    height: 240px;
  }
  .high-header {
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-size: 20px;
    color: #820000;
    text-align: left;
    h4 {
      margin-top: 0px;
      border-bottom: 2px solid #820000;
      margin-bottom: 12px;
    }
  }
  .high-main {
    height: 200px;
  }
  .high {
    display: inline-block;
    width: 140px;
    height: 140px;
    margin: 20px 40px;
    background-color: chartreuse;
  }
</style>

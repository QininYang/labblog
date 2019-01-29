<template>
  <div class="header-main">
    <div class="header-panel">
      <div index="1"><a>Home</a></div> <div index="2"><a></a>People</a></div>
      <div index="3"><a></a>Publications</a></div> <div index="4"><a></a>Teaching</a></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "headercomponents",
    data() {
      return {};
    }
  };
</script>

<style lang="scss">
  .header-main {
    position: relative;
    height: 277px;
    background-image: url("~@/assets/header3.jpeg");
  }
  .header {
    text-align: right;
    font-size: 12px;
  }
  .header-panel {
    position: absolute;
    bottom: 5px;
    right: 25px;
    border-radius: 10px;
    /* border: 1px solid #d7dde4; */
    background-color: rgba(13, 91, 209, 0.4);
    height: 100px;
    width: 500px;
    div {
      display: inline-block;
      padding: 0px 20px;
      height: 100%;
      text-align: center;
      line-height: 90px;
      font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
      font-size: 20px;
    }
  }
</style>

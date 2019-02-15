<template>
  <div class="header-main">
    <div class="header-panel">
      <div index="1">
        <router-link to="/">Home</router-link>
      </div>
      <div index="2">
        <router-link to="/people">Peoples</router-link>
      </div>
      <div index="3">
        <router-link to="/articles">
          Articles
        </router-link>
      </div>
      <div index="4">
        <router-link to="/teaching">Teaching</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "headercomponents",
  data () {
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
  bottom: 0px;
  right: 25px;
  // border-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  /* border: 1px solid #d7dde4; */
  background-color: #fff;
  text-align: center;
  height: 100px;
  width: 500px;
  div {
    display: inline-block;
    padding: 0px 20px;
    height: 100%;
    text-align: center;
    line-height: 90px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 20px;
  }
}
</style>

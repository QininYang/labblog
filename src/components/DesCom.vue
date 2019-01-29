<template>
  <div class="des-main">
    <h4 class="des-title">Description</h4>
    <div class="des-left"></div>
    <div class="des-right">
      <template>
        <div class="block">
          <el-carousel height="250px">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: "descriptioncom",
    data() {
      return {};
    }
  };
</script>

<style lang="scss" scoped>
  .des-main {
    width: 100%;
    height: 302.6px;
    background-color: cornsilk;
  }
  .des-title {
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-size: 20px;
    color: #820000;
    margin-top: 0px;
    text-align: left;
    border-bottom: 2px solid #820000;
  }
  .des-left {
    display: inline-block;
    left: 0px;
    width: 50%;
    height: 250px;
    background-color: aqua;
  }
  .des-right {
    display: inline-block;
    right: 0px;
    width: 50%;
  }
  .el-carousel__item h3 {
    color: #da2a2a;
    font-size: 14px;
    opacity: 0.75;
    line-height: 250px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
</style>

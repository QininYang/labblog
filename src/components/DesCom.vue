<template>
  <div class="des-main">
    <div class="des-left"></div>
    <div class="des-right">
      <div class="block">
        <span class="demonstration">默认 Hover 指示器触发</span>
        <el-carousel height="150px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "description",
    data() {
      return {};
    }
  };
</script>

<style lang="scss" scoped>
  .el-carousel__item h3 {
    color: #da2a2a;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .des-right {
    position: absolute;
    right: 0px;
  }
</style>

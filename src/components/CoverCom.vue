<template>
  <div class="cover-main">
    <p>
      <a class="cover-title"
         :href="item.url">{{ item.title }} </a>
    </p>
    <small>
      <cite>—— {{ item.publish }}, {{ item.year }}</cite>
    </small>
  </div>
</template>

<script>
export default {
  name: "covercom",
  data () {
    return {};
  },
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style lang="scss">
.cover-main {
  // border-left: 5px solid red;
  // margin-bottom: 20px;
  // display: inline;
  // float: left;
  padding: 0 0 0 15px;
  margin: 0 0 20px;
  border-left: 5px solid #2c3e50;
  p {
    margin-bottom: 0;
    font-size: 17.5px;
    font-weight: 300;
    line-height: 1.25;
  }
  .cover-title {
    text-align: left;
    font-size: 18px;
  }
  small {
    line-height: 20px;
    font-size: 80%;
    color: #999;
  }
}
</style>

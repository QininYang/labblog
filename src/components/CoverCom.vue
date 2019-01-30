<template>
  <div class="cover-main">
    <div>
      <a class="cover-title" :href="item.url">{{ item.title }} </a>
    </div>
    <div class="cover-date">{{ item.publish }}</div>
    <div class="cover-year">{{ item.year }}</div>
  </div>
</template>

<script>
  export default {
    name: "covercom",
    data() {
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
    border-left: 5px solid red;
    margin-bottom: 20px;
    display: inline;
    float: left;
    .cover-title {
      float: left;

      text-align: left;
      font-size: 18px;
    }
    .cover-date {
      display: inline-block;
    }
    .cover-year {
      display: inline-block;
    }
  }
</style>

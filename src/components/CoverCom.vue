<template>
  <div class="cover-main">
    <a class="cover-title" :href="item.url">{{ item.title }} </a>
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
  }
  .a {
    text-align: left;
  }
</style>

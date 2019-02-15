<template>
  <div class="new-container">
    <div class="new-date">{{ item.date }}</div>
    <div class="new-text"
         v-html="item.content"></div>
  </div>
</template>

<script>
  export default {
    name: "maincom",
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
.new-container {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin-bottom: 10px;
  border-bottom: 2px solid #820000;
  overflow: hidden;
  font-size: 15px;
  line-height: 20px;
}
.new-date {
  // display: inline;
  float: left;
  font-weight: bold;
}
.new-text {
  position: relative;
  text-align: left;
  margin-bottom: 10px;
}
</style>

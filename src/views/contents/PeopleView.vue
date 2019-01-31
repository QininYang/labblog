<template>
  <div class="people-view-main">
  <template v-for="people in peoplelist">
    <people-com v-bind:people="people"/>
  </template>
</div>
</template>

<script>
  import PeopleCom from "@/components/PeopleCom.vue";
  import {peoples} from "@/config/data.js"
  export default {
    name: "peopleview",
    data() {
      return {
        peoplelist:peoples,
      };
    },
    components: {
      PeopleCom
    }
  };
</script>

<style lang="scss">
  .people-view-main {
    background-color: cornsilk;
  }
</style>

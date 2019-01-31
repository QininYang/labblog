<template>
  <div class="people-container">
    <div class="people-container-left"><template slot>
      <img :src="people.url" :alt="people.alt"></img>
    </template></div>
    <div class="people-container-right">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<!--
  //姓名
  //学位
  //方向
  //邮箱
  //主要成就
 -->
<script>
  export default {
    name: "peoplecom",
    data() {
      return {};
    },
    props: {
      people: {
        type: Object,
        default: () => ({})
      }
    }
  };
</script>

<style lang="scss"></style>

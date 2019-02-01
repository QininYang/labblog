<template>
  <div class="people-container">
    <div class="people-container-left">
        <img :src="people.url" :alt="people.alt"></img>
    </div>
    <div class="people-container-right">
      <div class="ss">{{people.name}}</div>
      <div class="ss">{{people.degree}}</div>
      <div class="ss">{{people.direction}}</div>
      <div class="ss">{{people.achievement}}</div>
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

<style lang="scss">
  img {
    height: 100px;
    width: 100px;
  }
  .people-container{
    height: 200px;
    width: 100%;
  }
  .people-container-left {
    display: inline-block;
    width: 35%;
    left: 0px;
  }
  .people-container-right {
    display: inline-block;
    right: 0px;
    width: 65%;
    div {
      border-bottom: 2px solid #820000;

    }
  }
</style>

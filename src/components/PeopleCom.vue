<template>
  <div class="people-container">
    <div class="people-container-left">
      <div class="img">
        <img
          :src="people.url"
          :alt="people.alt"
        ></img>
      </div>
    </div>
    <div class="people-container-right">
      <div class="sss"><span>{{people.name}}</span>
        <div class="ss"></div>
      </div>
      <div class="sss"><span>{{people.degree}}</span>
        <div class="ss"></div>
      </div>
      <div class="sss"><span>{{people.direction}}</span>
        <div class="ss"></div>
      </div>
      <div class="sss"><span>{{people.achievement}}</span>
        <div class="ss"></div>
      </div>
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
  margin: 25%;
  height: 100px;
  width: 100px;
}

.people-container {
  height: 200px;
  width: 100%;
}
.people-container-left {
  display: inline-block;
  width: 35%;
  left: 0px;
  vertical-align: top;
  position: relative;
  .img {
    height: 100px;
    width: 100px;
    margin: auto;

    background-color: #3cc6e9;
    top: 50px;
    left: 0;
    bottom: 0;
    right: 0;
  }
}
.people-container-right {
  display: inline-block;
  right: 0px;
  width: 65%;
  div {
    margin-top: 10px;
    margin-bottom: 10px;
    span {
      border-bottom: 30px;
    }
  }
}
.ss {
  margin-left: 25.33%;
  width: 50%;
  border-bottom: 2px solid #26ec26;
}
</style>

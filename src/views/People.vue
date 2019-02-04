<template>
  <div class="people-v">
    <people-view />
  </div>
</template>

<script>
import PeopleView from "@/views/contents/PeopleView.vue";
export default {
  name: "people",
  data() {
    return {};
  },
  components: {
    PeopleView
  }
};
</script>

<style lang="scss">
.people-v {
  margin-top: 20px;
  margin-bottom: 15px;
}
</style>


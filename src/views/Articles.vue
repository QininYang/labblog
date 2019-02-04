<template>
  <div class="articles-container">
    <articals />
  </div>
</template>

<script>
import Articals from "@/views/contents/Articals.vue";
export default {
  name: "articles",
  data() {
    return {};
  },
  components: {
    Articals
  }
};
</script>

<style lang="scss">
.articles-container {
  height: 400px;
  width: 100%;
  background-color: #e69654;
}
</style>

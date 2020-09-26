<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import Home from "views/home/index.vue";
export default {
  name: "App",
  data: function () {
    return {};
  },
  components: {
    Home,
  },
};
</script>
<style lang="scss">
@import url(./assets/css/base.css);
#app {
  background: #33496c;
  // height: 800px;
}
</style>

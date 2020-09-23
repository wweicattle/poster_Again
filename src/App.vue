<template>
  <div id="app">
    <Poster />
    <router-view />
  </div>
</template>
<script>
import Poster from "components/Poster/Poster";
export default {
  name: "App",
  data: function () {
    return {};
  },
  components: {
    Poster,
  },
};
</script>
<style lang="scss">
@import url(./assets/css/base.css);
#app {
  background: #3c5b8d;
  height: 800px;
}
</style>

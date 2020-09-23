<template>
  <div class="editcolor-cotnains">
    <ul>
      <li v-for="(val,index) in colors" :key="index" :style="{backgroundColor:val}"></li>
    </ul>
  </div>
</template>
<script scoped>
import { eventBus } from "utils/eventbus";
import { colors } from "utils/colors";

export default {
  name: "EditText",
  props: {},
  data: function () {
    return {
      colors:[]
    }
  },
  mounted() {
    this.colors=colors;
  },
  methods: {},
};
</script>
<style lang="scss">
.editcolor-cotnains {
  position:fixed;
  width: 100%;
  bottom: 0;
  height: 50px;
  background: #ccc;
  ul {
    display: flex;
    li {
      width:30px;
      height: 30px;
      border: 1px solid red;
      border-radius: 50%;
    }
  }
}
</style>

<template>
  <div class="edittext-cotnains">
    <ul>
      <li @click="addOpcity">透明</li>
      <li>对齐</li>
      <li>间距</li>
      <li @click="addStrongBtn">加粗</li>
      <li @click="deleteCom">删除</li>
    </ul>
  </div>
</template>
<script scoped>
import { eventBus } from "utils/eventbus";
export default {
  name: "EditText",
  props: {},
  data: function () {
    return {
      canvas: null,
      event: null,
    };
  },
  mounted() {
    eventBus.$on("init", (obj) => {
      this.canvas = obj.canvas;
      this.event = obj.event;
      console.log(this.canvas.getObjects().length, this.event);
      this.canvas.getObjects().forEach((val, index) => {
        val.on("deselected", (options) => {
          console.log(33333);

          // this.isShowEditText = false;
          this.$emit("closedEditText");
        });
      });
      //     this.event.fontSize
      //   // f.fontSize = 0.5 + Number(f.fontSize)
      //   // f.fill = "#f40"
      //   // f.opacity = 0.5
      // // 删除画布的对象
      // // this.canvas.re
    });
  },
  methods: {
    addOpcity() {
      this.event.opacity = 0.5;
      this.canvas.discardActiveObject();
      this.canvas.renderAll();
    },
    addStrongBtn() {
      // this.canvas.deactivateAll();
      this.event.fontWeight = 850;
      this.canvas.discardActiveObject();
      this.canvas.renderAll();
    },
    deleteCom() {
      this.canvas.remove(this.event);
    },
  },
};
</script>
<style lang="scss">
.edittext-cotnains {
  width: 100%;
  background: #3f65a2;
  height: 30px;
  font-size: 12px;
  color: #fff;
  position: fixed;
  bottom: 10px;
  ul {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>

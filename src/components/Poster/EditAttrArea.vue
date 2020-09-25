<template>
  <div class="edittext-cotnains">
    <ul>
      <li @click="addOpcity">透明</li>
      <!-- <li>对齐</li>
      <li>间距</li>-->
      <li @click="editColorBtn">颜色</li>
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
          // console.log(22);
          this.$emit("closedEditText");
        });
      });
      console.log(this.canvas.getObjects());

      //     this.event.fontSize
      //   // f.fontSize = 0.5 + Number(f.fontSize)
      //   // f.fill = "#f40"
      //   // f.opacity = 0.5
      // // 删除画布的对象
      // // this.canvas.re
    });
  },
  methods: {
    editColorBtn() {
      this.$emit("showEditColor", { event: this.event, canvas: this.canvas });
    },
    // 添加透明度
    addOpcity() {
      this.event.opacity==1?this.event.opacity=0.5:this.event.opacity =1;
      // this.canvas.discardActiveObject();
      this.canvas.renderAll();
    },
    addStrongBtn() {
      if (this.event.fontWeight == "normal") this.event.fontWeight = 400;
      this.event.fontWeight += 100;
      // this.canvas.discardActiveObject();
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

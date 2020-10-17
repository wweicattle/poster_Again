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
    eventBus.$on("getUserCid", (cid) => {
      console.log(2323);
      console.log(cid);
      this.cid = cid;
    });
    eventBus.$on("init", (obj) => {
      this.canvas = obj.canvas;
      this.event = obj.event;
      
      this.canvas.getObjects().forEach((val, index) => {
        val.on("deselected", (options) => {
          this.$emit("closedEditText");
        });
      });
   
    });
  },
  methods: {
    editColorBtn() {
      this.$emit("showEditColor", { event: this.event, canvas: this.canvas });
    },
    // 添加透明度
    addOpcity() {
      this.event.opacity == 1
        ? (this.event.opacity = 0.5)
        : (this.event.opacity = 1);
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
  bottom: 56px;
  ul {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>

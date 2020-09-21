<template>
  <div class="addtext-cotnains">
    <van-dialog
      v-model="show"
      title="标题"
      show-cancel-button
      @confirm="confirmBtn"
      @cancel="cancelBtn"
    >
      <div class="text-area-contain">
        <textarea id="textArea" cols="30" rows="10" placeholder="添加标题文字" v-model="textContent"></textarea>
      </div>
    </van-dialog>
  </div>
</template>
<script scoped>
export default {
  name: "ADDTEXT",
  props: {
    isShowVisable: {
      type: Boolean,
      default: false,
    },
  },
  data: function () {
    return {
      show: true,
      textContent: "",
    };
  },
  mounted() {},
  methods: {
    cancelBtn() {
      this.$emit("closeVisable");
    },
    confirmBtn() {
      // 文本传到父组件上
      this.$emit("textInfo", this.textContent);
      this.$emit("closeVisable");
    },
  },
};
</script>
<style lang="scss">
.addtext-cotnains {
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  .van-dialog {
    border-radius: inherit;
  }
  #textArea {
    padding-top: 10px;
    display: block;
    background: #f1f0f0;
    border: none;
    width: 80%;
    margin: auto;
    font-size: 12px;
    color: #000;
  }
}
</style>

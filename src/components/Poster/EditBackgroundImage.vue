<template>
  <div class="addtext-cotnains">
    <van-dialog
      v-model="show"
      title="背景图片"
      show-cancel-button
      @confirm="confirmBtn"
      @cancel="cancelBtn"
    >
      <div class="img-contain">
        <img :src="img" alt @click="imgindex(-1)" />
        <img
          v-for="(img,index) in imageList"
          v-lazy="img"
          :key="index"
          class="imgContent"
          @click="imgindex(index)"
        />
      </div>
    </van-dialog>
  </div>
</template>
<script>
var img=require("./../../assets/avator.png");
export default {
  name: "EditPhoto",
  props: {
    isShowVisable: {
      type: Boolean,
      default: false,
    },
  },
  data: function () {
    return {
      img,
      show: true,
      textContent: "",
      imageList: [
        "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
        " https://img.yzcdn.cn/vant/apple-4.jpg",
        " https://img.yzcdn.cn/vant/apple-4.jpg",
        " https://img.yzcdn.cn/vant/apple-4.jpg",
        " https://img.yzcdn.cn/vant/apple-4.jpg",
        " https://img.yzcdn.cn/vant/apple-4.jpg",
        " https://img.yzcdn.cn/vant/apple-4.jpg",
        " https://img.yzcdn.cn/vant/apple-4.jpg",

        " https://img.yzcdn.cn/vant/apple-4.jpg",
        " https://img.yzcdn.cn/vant/apple-4.jpg",
        " https://img.yzcdn.cn/vant/apple-4.jpg",
      ],
    };
  },
  mounted() {},
  methods: {
    imgindex(index) {
      if (index == -1) {
        this.selectImgUrl = img;
        return;
      }
      this.selectImgUrl = this.imageList[index];
    },
    cancelBtn() {
      this.$emit("closeVisable");
    },
    confirmBtn() {
      
      // 文本传到父组件上
      this.$emit("textInfo", this.textContent);
      this.$emit("closeVisable");
      this.$emit("sendPhotoUrl", this.selectImgUrl);
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
  .img-contain {
    margin: 10px 5px 0;
    height: 300px;
    overflow-y: scroll;
    .imgContent {
      width: 100px;
      height: 100px;
      object-fit: contain;
      &:hover {
        border: 1px solid #ccc;
        opacity: 0.7;
      }
    }
  }
}
</style>

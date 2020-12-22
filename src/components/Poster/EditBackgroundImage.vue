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
        <img
          v-for="(img,index) in imageLists"
          v-lazy="img"
          :key="index"
          class="imgContent"
          @click="imgindex(index)"
          @load="imgload"
        />
      </div>
    </van-dialog>
  </div>
</template>
<script>
import { eventBus } from "utils/eventbus";

export default {
  name: "EditPhoto",
  props: {
    isShowVisable: {
      type: Boolean,
      default: false,
    },
    imageLists:{
      type:Array,
      default(){
        return [];
      }
    }
  },
  data: function () {
    return {
      show: true,
      textContent: "",
      imgNum:0
    };
  },
  created() {
       this.$toast.loading({
        forbidClick: true,
        duration: 0,
      });
  },
  mounted() {
   
  },
  methods: {
    imgload(){
      ++this.imgNum;
      console.log(this.imgNum);
      if(this.imgNum==this.imageLists.length)this.$toast.clear();
    },
    imgindex(index) {
      // 后台所给接口一开始是不允许跨域，所以后台给中转了一下
      // let url=`http://tm.lilanz.com/qywx/project/FacePass/PushMessage.ashx?action=transferimage&imageurl=${this.imageLists[index].urladdress}`
      this.selectImgUrl =this.imageLists[index];
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
  watch:{
    
  }
};
</script>
<style lang="scss" scoped>
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
    // display: flex;
    // justify-content: space-around;
    // align-items: flex-start;
    flex-wrap:wrap;
    overflow-y: scroll;
    .imgContent {
      width: 33.33%;
      padding: 3px;
      height: 36%;
      object-fit:cover;
      padding-bottom: 5px;
      &:hover {
        border: 1px solid #ccc;
        opacity: 0.7;
      }
    }
  }
}
</style>

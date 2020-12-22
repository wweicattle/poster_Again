<template>
  <div class="upload-pho-contain">
    <div class="upload">
      <van-uploader v-model="fileList" :max-count="7" preview-size="100px" />
    </div>
    <div class="footer-contain">
      <div class="footer-fun">
        <span class="cancel" @click="$router.back()">取消</span>
        <span class="send">发送</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
    };
  },
  created() {
    document.title = "发送海报";
  },
  mounted() {},
  methods: {},
};
</script>

<style  lang="scss">
.upload-pho-contain {
  height: 100vh;
  overflow: hidden;
  background: #f7f7f7;

  //   background: #682323;
  .upload {
    margin-top: 20px;
    margin-left: 20px;
    // .van-uploader {
    //   border: 1px dotted#ccc;
    // }
    .van-uploader__upload {
      background: #f2f3f5;
    }
  }
  .footer-contain {
    // background: #f40;
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 48px;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .footer-fun {
      color: #33496c;
      font-size: 12px;
      margin-right: 15px;
      border-radius: 20px;
      overflow: hidden;
      border: 1px solid #33496c;
      background: #33496c;
      span {
        display: inline-block;
        width: 80px;
        height: 28px;
        text-align: center;
        line-height: 28px;
        // background: #000;
        &.cancel {
          background: #fff;
        }
        &.send {
          color: #fff;
        }
      }
    }
  }
}
</style>

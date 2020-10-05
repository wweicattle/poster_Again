<template>
  <div id="birth-contain">
    <div class="birth-back">
      <div class="member-back">
        <span class="member-birth-title">会员生日回访</span
        ><span class="member-birth-content"
          >为会员生日送上一声祝福，体现品牌温度</span
        >
        <img src="~assets/img/memberBack/illustration.png" alt="" />
        <div class="triangle"></div>
      </div>
      <div class="birth-swiper">
        <!-- 户数咯人Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
        repellat optio, molestiae iusto maiores explicabo illum nihil deleniti
        eligendi assumenda. -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>话术1</van-swipe-item>
          <van-swipe-item>话术二</van-swipe-item>
          <van-swipe-item>话术3</van-swipe-item>
        </van-swipe>
      </div>
    </div>

    <div class="wait-back-content">
      <user-info></user-info>
    </div>
  </div>
</template>
<script>
import UserInfo from "components/common/UserInfo";
export default {
  name: "birthVisit",
  data() {
    return {};
  },
  components: {
    UserInfo,
  },
  methods: {},
  mounted() {
    //   进行会员列表滚动固定
  },
  computed: {},
  watch: {},
};
</script>
<style lang="scss" scoped>
#birth-contain {
  background: #f7f7f7;
  height: 667px;
  padding: 20px;
  .birth-back {
  }
  .member-back {
    position: relative;
    height: 76px;
    background: #33496c;
    border-radius: 8px 8px 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 15px;
    .triangle {
      position: absolute;
      bottom: -40px;
      z-index: 100;
      left: 0;
      right: 0;
      margin: auto;
      // width: 10px;
      // height: 10px;
      width: 0px;
      height: 0px;
      border-width: 26px 20px;
      border-color:#33496c transparent transparent;
      border-style: solid;
      // display: inline-block;
    }
    .member-birth-title {
      // width: 94px;
      height: 22px;
      font-size: 16px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #ffffff;
      line-height: 22px;
    }
    .member-birth-content {
      margin-top: 5px;
      // width: 211px;
      height: 17px;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      line-height: 17px;
    }
    img {
      width: 68px;
      // height: 84px;
      position: absolute;
      top: -10px;
      right: 10px;
    }
  }
  .birth-swiper {
    height: 131px;
    background: #ffffff;
    box-shadow: 0px 10px 14px 0px #f8f9fb;
    .my-swipe .van-swipe-item {
      color: #000;
      font-size: 20px;
      line-height: 131px;
      text-align: center;
      background-color: #fff;
    }
  }
}
</style>

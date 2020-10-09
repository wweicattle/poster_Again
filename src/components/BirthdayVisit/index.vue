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
        <van-swipe class="my-swipe" :autoplay="3000">
          <van-swipe-item>
            <div class="swiper-title">话术</div>
            <div class="swiper-content">
              尊敬的VIP顾客，我是你在利郎的专属导购，在你的生日时来临之时，为你送上我最诚挚的祝福，为你送上我最诚挚的祝福，祝你生日快乐,祝你生日快乐
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="swiper-title">话术</div>
            <div class="swiper-content">
              尊敬的VIP顾客，我是你在利郎的专属导购，在你的生日时来临之时，为你送上我最诚挚的祝福，祝你生日快乐
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="swiper-title">话术</div>
            <div class="swiper-content">
              尊敬的VIP顾客，我是你在利郎的专属导购，在你的生日时来临之时，为你送上我最诚挚的祝福，祝你生日快乐
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>

    <div class="wait-back-content">
      <user-info>
        <div slot="selectSlot">
          <select-item
            @slectbtn="slectbtn"
            :listArr="['本周', '本月', '下周', '下月']"
            :listVal="[1, 2, 3, 4]"
            :colorSelect="'black'"
          ></select-item>
        </div>
      </user-info>
    </div>
  </div>
</template>
<script>
import UserInfo from "components/common/UserInfo/UserInfo";
import SelectItem from "components/common/SelectItem";

export default {
  name: "birthVisit",
  data() {
    return {};
  },
  components: {
    UserInfo,
    SelectItem,
  },
  methods: {
    slectbtn(e) {
      console.log(e);
    },
  },
  mounted() {
    //   进行会员列表滚动固定
  },
  computed: {},
  watch: {},
};
</script>
<style lang="scss">
.van-swipe__indicator {
  background-color: #5192fc;
}
</style>
<style lang="scss" scoped>
#birth-contain {
  background: #f7f7f7;
  // height: 667px;
  padding: 20px;
  .birth-back {
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
        border-color: #33496c transparent transparent;
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
      .my-swipe {
        height: 100%;
        
        // box-sizing: border-box;
        .van-swipe-item {
          padding: 0 10px;
          color: #000;
          font-size: 20px;
          background-color: #fff;
          .swiper-title {
            padding: 10px 0;
            font-size: 14px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #323232;
          }
          .swiper-content {
            text-indent: 30px;
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #555555;
            line-height: 20px;
            height: 57px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
          }
        }
      }
    }
  }
}
</style>

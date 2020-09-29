<template>
  <div id="birth-contain">
    <div class="birth-back">
      <div class="member-back">
        <span class="member-birth-title">会员生日回访</span
        ><span class="member-birth-content"
          >为会员生日送上一声祝福，体现品牌温度</span
        >
        <img src="static/img/memberBack/illustration.png" alt="" />
      </div>
      <div class="birth-swiper">
        户数咯人Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
        repellat optio, molestiae iusto maiores explicabo illum nihil deleniti
        eligendi assumenda.
      </div>
    </div>

    <div class="wait-back-content"></div>
  </div>
</template>
<script>
import CardItem from "components/common/CardItem";

export default {
  name: "birthVisit",
  data() {
    return {};
  },
  components: {
    CardItem,
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
  height: 667px;
  .birth-back {
    width: 345px;
    // height: 131px;
  }
  .member-back {
    width: 345px;
    height: 86px;
    background: #33496c;
    border-radius: 8px;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items:space-around;
    .member-birth-title {
      width: 94px;
      height: 22px;
      font-size: 16px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #ffffff;
      line-height: 22px;
    }
    .member-birth-content {
      width: 211px;
      height: 17px;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      line-height: 17px;
    }
  }
}
</style>

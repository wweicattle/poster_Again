<template>
  <div id="homes-contains">
    <div class="title-headers">
      <title-header>
        <div slot="iconLeft" >
          <van-icon name="arrow-left" @click="$emit('backeditposter')" />
        </div>
        <div slot="header" class="title-header">
          <div class="title-name">超级导购</div>
        </div>
      </title-header>
    </div>

    <div class="sale-contains">
      <div class="sale-number-contain"></div>
      <div class="super-people">
        <div>会员拉新</div>
        <div>粉丝拉新</div>
      </div>
    </div>
    <div class="home-functions-contain">
      <div>
        <ul>
          <li>查库存</li>
          <li>递会员</li>
          <li>琅琊榜</li>
        </ul>
      </div>
      <div>
        <div>代办任务</div>
        <ul>
          <li>生日回访</li>
          <li>售后回访</li>
          <li>会员维系</li>
          <li>卡券到期提醒</li>
        </ul>
      </div>
    </div>
    <div class="home—footer-contain">
      <ul>
        <li>首页</li>
        <li>海报</li>
        <li>会员</li>
      </ul>
    </div>
    <button @click="clicmebtn">return poster</button>
  </div>
</template>
<script>
import TitleHeader from "components/common/Title";

export default {
  name: "Home",
  data: function () {
    return {};
  },
  components: {
    TitleHeader,
  },
  methods: {
    clicmebtn() {
      this.$router.push("/editPoster");
    },
  },
};
</script>
<style lang="scss" scoped>
#homes-contains {
  .title-headers {
    .title-header {
      // font-size: ;
      .title-name {
        color: #fff;
      }
    }
  }
}
</style>

<template>
  <div class="member-contains">
    <van-tabs
      v-model="activeName"
      color="#5192fc"
      swipeable
      @click="tabClickBtn"
      sticky
      animated
    >
      <van-tab title="全部" name="a">全部</van-tab>
      <van-tab title="公众号" name="b">公众号</van-tab>
      <van-tab title="企业号" name="c">企业员</van-tab>
      <van-tab>
        <template #title name="d">
          <img src="~assets/img/memberPer/icon_search_black.png" alt=""
        /></template>
        内容 {{ 1 }}
      </van-tab>
      <van-tab>
        <template #title name="e">
          <img src="~assets/img/memberPer/icon_filter.png" alt=""
        /></template>
        内容 {{ 1 }}
      </van-tab>
    </van-tabs>
    <!-- <div class="tab-search">
      <img src="~assets/img/memberPer/icon_search_black.png" alt="" />
      <img src="~assets/img/memberPer/icon_filter.png" alt="" />
    </div> -->
  </div>
</template>

<script>
export default {
  name:"tab",
  data() {
    return {
      activeName: "a",
    };
  },
  created() {
    document.title = "会员列表";
  },
  mounted() {},
  methods: {
    tabClickBtn() {
      if(this.activeName==3){
        this.$router.push("/editposter")
      }
    },
  },
};
</script>

<style  lang="scss">
.member-contains {
  .van-tabs__wrap {
    width: 270px;
  }
  .tab-search {
    // height: 48.5px;
    // line-height: 48.5px;
    position: absolute;
    right: 10px;
    top: 0px;
    img {
      width: 20px;
      margin-right: 20px;
    }
  }
}
</style>

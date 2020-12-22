<template>
  <div class="card-contain">
    <div class="card-content" >
      <div class="card-money">
        <div>
          <span class="money-icon">￥</span>
          <span class="money-num">{{ cardInfo.val.reducecost }}</span>
        </div>
        <div class="arrive-val">满{{ cardInfo.val.leastcost }}可用</div>
        <div class="dotted"></div>
      </div>
      <div class="card-detail">
        <div class="card-name">{{ cardInfo.val.title }}</div>
        <div class="card-date">
          有效期:{{
            new Date(cardInfo.val.begintimestamp)
              .toLocaleDateString()
              .split("/")
              .join("-") + " "
          }}-{{
            " " +
            new Date(cardInfo.val.endtimestamp)
              .toLocaleDateString()
              .split("/")
              .join("-")
          }}
        </div>
        <div
          class="card-info-detail"
          @click="
            isshowUserRange == cardInfo.index
              ? (isshowUserRange = null)
              : (isshowUserRange = cardInfo.index)
          "
        >
          <span> 详细信息 </span>
          <van-icon name="arrow-down" v-if="!isshowUserRange" />
          <van-icon name="arrow-up" v-else />
        </div>
      </div>
      <div class="card-use-daterange" v-if="isshowUserRange == cardInfo.index">
        <span class="card-use-name">使用范围：</span>
        <span class="content">{{ cardInfo.val.storelist }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      isshowUserRange: null,
      isshowCardItem: null,
      isshowViss: false,
      userInfoDetail: {},
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.card-contain {
  .card-content {
    border-radius: 8px;
    margin: 20px;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    
    .card-money {
      background: #fcf4f6;
      width: 35%;
      height: 90px;
      border-radius: 8px 18px 18px 8px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      // align-items: center;
      // border-right: 1px dotted #999 ;
      position: relative;
      .money-icon {
        font-size: 14px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #de617f;
        line-height: 20px;
      }
      .money-num {
        font-size: 26px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #de617f;
        line-height: 37px;
      }
      .arrive-val {
        align-self: center;
        padding: 3px 6px;
        background: #f5e2e7;
        border-radius: 2px;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #de617f;
        line-height: 17px;
      }
      .dotted {
        height: 80%;
        top: 0;
        bottom: 0;
        margin: auto;
        // width: 1px;
        border-right: 1px dashed #f8d2d2;
        position: absolute;
        right: 0;
      }
    }
    .card-detail {
      background: #fcf4f6;
      border-radius: 18px 8px 8px 18px;
      height: 90px;
      width: 65%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #888888;
      line-height: 17px;
      .card-name {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #323232;
        line-height: 20px;
      }
      .card-date {
        padding: 5px 0;
      }
      .card-info-detail {
        vertical-align: center;
      }
    }
    .card-use-daterange {
      background: #f8eef1;
      height: 55px;
      overflow-y: scroll;
      width: 100%;
      padding: 0 20px;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #999999;
      display: flex;
      line-height: 20px;
      align-items: center;
      .card-use-name {
        width: 80px;
      }
      .content {
        flex: 1;
        padding-top: 13px;
        height: 55px;
        overflow-y: scroll;
      }
    }
  }
}
</style>

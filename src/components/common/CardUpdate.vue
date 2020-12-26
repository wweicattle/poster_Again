// 使用该复用  的组件你必须先知道复用中的组件插槽有1.全选图标select 2.满多少减多少enoughNum
<template>
  <div class="card-contain">
    <div class="card-content" :class="{ 'card-other-back': otherBackTheme }">
      <div class="select-icon">
        <slot name="select"> </slot>
      </div>
      <!-- <div class="card-detail-content"> -->
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
      <!-- </div> -->
      <div class="card-use-daterange" v-if="isshowUserRange == cardInfo.index">
        <span class="card-use-name">使用注意：</span>
        <div class="content">
          <span>
            {{ cardInfo.val.storelist }}
          </span>
          <span>
            {{ cardInfo.val.defaultdetail }}
          </span>
          <span>
            {{ cardInfo.val.notice }}
          </span>
        </div>
        <!-- <span class="content">{{ cardInfo.val.defaultdetail }}</span>
        <span class="content">{{ cardInfo.val.notice }}</span> -->

        <!-- <span class="card-use-name">使用规则：</span>
        <div class="content">
          <div>1.你is底部is你懂啥都是</div>
          <div>2.是多少防溺水丢那地方in发的发的</div>
          <div>3.是多少防溺水丢那地方in发的发的</div>
          <div>4.是多少防溺水丢那地方in发的发的</div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardUpdate",
  props: {
    otherBackTheme: {
      type: Boolean,
      default: false,
    },
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
$colorCard: #f61d33;
.card-contain {
  .card-content {
    box-shadow: 0px 4px 10px 0px #eff2f6;
    border-radius: 8px;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    align-items: center;
    padding: 6px 0;
    .select-icon {
      margin: 0 14px;
    }
    // .card-detail-content {
    //   display: flex;
    //   width: 86%;
    .card-money {
      background: #fcf4f6;
      width: 26%;
      height: 90px;
      border-radius: 8px 18px 18px 8px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
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
      width: 56%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #888888;
      line-height: 17px;
      padding-left: 15px;
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
    // }
    .sff {
      dsfsf: 323;
    }
    .card-use-daterange {
      height: 55px;
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
        height: 60px;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
      }
    }
  }

  .card-other-back {
    .card-money {
      background: #ffffff;
      .money-icon {
        color: $colorCard;
        font-size: 18px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #f61d33;
        line-height: 25px;
        background: linear-gradient(180deg, #fe670a 0%, #fa213c 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .money-num {
        color: $colorCard;
        font-size: 36px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #f61d33;
        line-height: 50px;
        background: linear-gradient(180deg, #fe8618 0%, #eb0824 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .arrive-val {
        color: $colorCard;
        background: #f3f3f3;
      }
    }
    .card-detail {
      background: #ffffff;
      .card-name {
        font-weight: 600;
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        color: #323232;
        line-height: 20px;
      }
    }
    .card-use-daterange {
      width: 80%;
      margin: 0 auto;
    }
  }
}
</style>

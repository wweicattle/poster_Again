<template>
  <div id="homes-contains">
    <!-- <div class="title-headers">
      <title-header>
        <div slot="iconLeft">
          <van-icon name="arrow-left" />
        </div>
        <div slot="header" class="title-header">
          <div class="title-name">超级导购</div>
        </div>
      </title-header>
    </div> -->
    <div class="sale-contains">
      <div class="sale-number-contain">
        <div class="sale-number-content">
          <span class="sale-num">销售金额(元)</span>
          <div class="sale-money">
            <span class="sale-detail-num">{{ salecount + ".00" }}</span>
            <img src="~assets/img/home/icon_arrow_blackbg.png" alt />
          </div>
        </div>
        <div class="today-select">
          <span
            class="switch-contain"
            @click="switchBtn"
            :class="{ active: !switchNum }"
          >
            <!-- <van-switch v-model="checked" /> -->
            <span class="circle"></span
            ><span class="switch-person">{{
              switchNum ? "个人" : "本店"
            }}</span>
          </span>
          <select v-model="selected" class="select">
            <option value="today">今日</option>
            <option value="month">本月</option>
          </select>
        </div>
      </div>
      <div class="super-people-contain">
        <div class="left" @click="clicktMemberBtn">
          <span class="super-pull-person">会员拉新(人)</span>
          <div class="pull-line">
            <img
              src="static/img/home/icon_fall.png"
              alt
              v-if="vipscount.state == -1"
            />
            <img
              src="static/img/home/icon_rise.png"
              alt
              v-if="vipscount.state == 1"
            />
            <span class="line-num">{{ vipscount.newvipscount || 0 }}</span>
            <img
              class="iconTwo"
              src="~assets/img/home/icon_arrow_blackbg.png"
              alt
              v-if="isshowrighticon"
            />
          </div>
        </div>
        <div class="right" @click="clicktFanBtn">
          <span class="super-pull-person">粉丝拉新(人)</span>
          <div class="pull-line">
            <img
              src="static/img/home/icon_fall.png"
              alt
              v-if="fanscount.state == -1"
            />
            <img
              src="static/img/home/icon_rise.png"
              alt
              v-if="fanscount.state == 1"
            />

            <span class="line-num">{{ fanscount.newfanscount || 0 }}</span>
            <img
              class="iconTwo"
              src="~assets/img/home/icon_arrow_blackbg.png"
              alt
              v-if="isshowrighticon"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="functions-contain">
      <ul>
        <li @click="findInventoryBtn">
          <div class="fun-icon-contain">
            <div class="icon">
              <img src="~assets/img/home/icon_kucun.png" alt />
            </div>
            <span class="only">查库存</span>
          </div>
        </li>
        <li @click="nirvanaBtn">
          <div class="fun-icon-contain" @click="clicmebtn">
            <div class="icon">
              <img src="~assets/img/home/icon_vip.png" alt />
            </div>
            <span class="only">邀会员</span>
          </div>
        </li>
        <li @click="inviteProsonBtn">
          <div class="fun-icon-contain">
            <div class="icon">
              <img src="~assets/img/home/icon_reward.png" alt />
            </div>
            <span class="only">琅琊榜</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="home-functions-contain">
      <div class="help-item">
        <div class="item-totalname">代办任务</div>
        <ul>
          <li>
            <span class="birth-name">生日回访</span>
            <div class="birth-back-content">
              <span>{{ birthdaycount }}人待回访</span>
              <van-button
                plain
                hairline
                type="primary"
                round
                @click.native="birthBackBtn"
                >去回访</van-button
              >
            </div>
          </li>

          <li>
            <span class="birth-name">售后回访</span>
            <div class="birth-back-content">
              <span>{{ salefeedbackcount }}人待回访</span>
              <van-button plain hairline type="primary" round
                >去回访</van-button
              >
            </div>
          </li>
          <li>
            <span class="birth-name">会员维系</span>
            <div class="birth-back-content">
              <span>{{ vipcontactcount }}人待回访</span>
              <van-button plain hairline type="primary" round
                >去回访</van-button
              >
            </div>
          </li>
          <li>
            <span class="birth-name">卡券到期提醒</span>
            <div class="birth-back-content">
              <span>{{ cardovertimecount }}人待回访</span>
              <van-button
                plain
                hairline
                type="primary"
                round
                @click="$router.push('/cardvouchar')"
                >去回访</van-button
              >
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- <div class="home—footer-contain">
      <ul>
        <li class="home-icon" :class="{active:activecolorI}" @click="activecolorI=true,activecolorII=false,activecolorIII=false"><img src="" />首页</li>
        <li @click="$router.push('/editposter'),activecolorI=false,activecolorII=true,activecolorIII=false" :class="{active:activecolorII}"> 
          <img class="add-icon" src="~assets/img/home/icon_add.png" />海报
        </li>
        <li @click="activecolorI=false,activecolorII=false,activecolorIII=true" :class="{active:activecolorIII}"><img src="~assets/img/home/tabbar_vip_default.png" />会员</li>
      </ul>
    </div> -->
  </div>
</template>
<script>
import TitleHeader from "components/common/Title";
import { requestHomeInfo } from "network/home";
import { requestUserInfo } from "network/home";
export default {
  name: "Home",
  data: function () {
    return {
      selected: "today",
      checked: true,
      salecount: 0.0,
      salefeedbackcount: null,
      vipcontactcount: null,
      cardovertimecount: null,
      birthdaycount: null,
      isshowicon: true,
      isshowrighticon: true,
      // searchtype: 0,
      switchNum: true,
      fanscount: {},
      vipscount: {},
    };
  },
  components: {
    TitleHeader,
  },
  methods: {
    birthBackBtn() {
      this.$router.push("/birthBack");
    },

    // 查库存，邀会员，琅琊榜额链接
    findInventoryBtn() {
      window.location.href =
        "http://tm.lilanz.com/oa/project/storesaler/goodsListV7.aspx";
    },
    nirvanaBtn() {
      window.location.href =
        "http://tm.lilanz.com/oa/project/storesaler/ShopRankV2.aspx";
    },
    inviteProsonBtn() {
      window.location.href =
        "http://tm.lilanz.com/oa/project/StoreSaler/addFansQRCode.aspx";
    },
    switchBtn() {
      this.switchNum = !this.switchNum;
    },
    //会员拉新事件
    clicktMemberBtn() {
      this.$router.push("/saveposter/memberpull");
      // window.location.href="/saveposter/memberpull";
    },
    clicktFanBtn() {
      this.$router.push("/saveposter/fanspull");
    },
    // 递会员事件
    clicmebtn() {
      this.$router.push("/editposter");
    },

    // 请求主页数据
    requestHomeInfo(obj) {
      requestHomeInfo(obj).then((da) => {
        if (da.data.errcode == 0) {
          console.log(da);
          this.salecount = da.data.data.salecount;
          this.salefeedbackcount = da.data.data.salefeedbackcount;
          this.vipcontactcount = da.data.data.vipcontactcount;
          this.cardovertimecount = da.data.data.cardovertimecount;
          this.birthdaycount = da.data.data.birthdaycount;
          this.fanscount = da.data.data.fanscount;
          this.vipscount = da.data.data.vipscount;
          this.$nextTick(() => {
            // 清除加载提示框
            this.$toast.clear();
            this.$toast.success("查询数据成功！");
          });
        } else {
          this.$notify({
            type: "warning",
            message: da.data.errmsg || "获取主页信息失败！",
          });
        }
      });
    },
  },
  mounted() {
    // 如果有用户已经登陆，本地可查询不需要
    // if (!window.localStorage.getItem("cid")) {
      new Promise((res) => {
        this.$toast.loading({
          message: "查询数据中..",
          forbidClick: true,
          duration: 0,
        });
        requestUserInfo().then((da) => {
          if (da.data.errcode === 0) {
            // 进行用户cid进行保存本地，方便调用
            window.localStorage.setItem("cid", da.data.data.cid);
            // 进行请求主页信息数据
            this.requestHomeInfo({
              cid: window.localStorage.getItem("cid"),
              ...this.identify,
            });
          } else {
            this.$notify({
              type: "warning",
              message: "获取用户信息错误！请检查网络",
              duration: 10000,
            });
            return;
          }
        });
      }).catch((da) => {
        this.$notify({
          type: "warning",
          message: da,
          duration: 10000,
        });
      });
    // }

    // 设置标题
    document.title = "销售神器II";
    //门店或者导购信息识别存本地
    window.localStorage.setItem("indentifyState", 1);

    // 请求主页信息数据
    // if (this.selected == "today" && this.switchNum) {
    //   this.requestHomeInfo({
    //     cid: window.localStorage.getItem("cid"),
    //     searchtype: 0,
    //   });
    // } else {
    //   this.requestHomeInfo({
    //     cid: window.localStorage.getItem("cid"),
    //     searchtype: 1,
    //     datetype: 0,
    //   });
    // }
  },
  computed: {
    riseUrl() {
      return "static/img/home/icon_fall.png";
    },
    downUrl() {
      return "static/img/home/icon_fall.png";
    },
    identify() {
      let obj = {};
      if (this.switchNum) {
        obj.searchtype = 1;
      } else {
        obj.searchtype = 0;
      }
      if (this.selected === "month") {
        obj.datetype = 1;
      } else {
        obj.datetype = 0;
      }
      return obj;
    },
  },
  watch: {
    identify(newVal) {
      if (newVal == "month") {
        this.requestHomeInfo({
          cid: window.localStorage.getItem("cid"),
          ...this.identify,
        });
      }
    },
    switchNum(state) {
      this.$toast.loading({
        message: "查询数据中..",
        forbidClick: true,
        duration: 0,
      });
      this.requestHomeInfo({
        cid: window.localStorage.getItem("cid"),
        ...this.identify,
      });
      window.localStorage.setItem("indentifyState", state ? 1 : 0);
    },
    selected() {
      this.$toast.loading({
        message: "查询中..",
        forbidClick: true,
        duration: 0,
      });
      this.requestHomeInfo({
        cid: window.localStorage.getItem("cid"),
        ...this.identify,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
#homes-contains {
  overflow-y: scroll;
  background: #f7f7f7;
  margin-bottom: 44px;
  height: 100vh;
  .title-headers {
    .title-header {
      // font-size: ;
      .title-name {
        color: #fff;
      }
    }
  }
  .sale-contains {
    height: 198px;
    background: #33496c;
    padding: 20px 20px 0;
    // margin-top: 43px;
    .sale-number-contain {
      height:50px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      .sale-number-content {
        display: flex;
        // align-items: flex-start;
        flex-direction: column;
        .sale-num {
          padding-bottom: 5px;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #ffffff;
        }
        .sale-money {
          text-align: center;
          // display: flex;
          // align-items: center;
          .sale-detail-num {
            font-size: 24px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #ffffff;
          }
          img {
            padding-left: 5px;
            width: 20px;
            height: 12px;
          }
        }
      }
      .today-select {
        display: flex;
        align-items: flex-start;
        .active {
          background: #38537c !important;
          .circle {
            background: #30918e !important;
          }
        }
        .switch-contain {
          width: 52px;
          height: 20px;
          background: #52698d;
          border-radius: 12px;
          border: 1px solid #7e91b0;
          display: flex;
          align-items: center;
          margin-right: 3px;
          // line-height: 20px;
          &:hover {
            background: #3c5275;
          }
          .circle {
            display: inline-block;
            width: 16px;
            height: 16px;
            background: #2dcac5;
            box-shadow: 0px 0px 8px 0px #1b6c69;
            border-radius: 50%;
          }
          .switch-person {
            // padding-left: 1px;
            width: 24px;
            height: 16px;
            font-size: 12px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #ffffff;
            line-height: 16px;
          }
        }
        .today-num {
          font-size: 14px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #ffffff;
          padding-left: 10px;
          padding-top: 5px;
        }
        .select {
          // padding-top: 5px;
          background: #33496c;
          border: none;
          font-size: 13px;
          color: #fff;
        }
      }
    }
    .super-people-contain {
      height:50px;
      display: flex;
      justify-content: space-between;   
      align-items: flex-start;
      margin-top: 10px;
      .left {
        .super-pull-person {
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #fff;
          line-height: 17px;
        }
        .pull-line {
          display: flex;
          padding-top: 5px;
          align-items: center;
          .line-num {
            padding: 0 3px;
            font-size: 18px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #ffffff;
          }
          .iconTwo {
            width: 20px;
            height: 15px;
          }
          img {
            width: 20px;
            height: 20px;
          }
        }
      }
      .right {
        .super-pull-person {
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #fff;
          line-height: 17px;
        }
        .pull-line {
          align-items: center;
          padding-top: 5px;
          display: flex;
          .line-num {
            padding: 0 3px;
            font-size: 18px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #ffffff;
            line-height: 22px;
          }
          .iconTwo {
            width: 20px;
            height: 15px;
          }
          img {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }
  .functions-contain {
    margin: -35px 15px 0;
    height: 94px;
    background: #ffffff;
    // box-shadow: 0px 56px 42px 0px #eef0f3;
    border-radius: 8px;
    ul {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 15px 0;
      box-sizing: border-box;
      justify-content: space-around;
      li {
        height: 100%;
        width: 44px;
        text-align: center;
        .fun-icon-contain {
          .icon {
            border-radius: 50%;
            width: 44px;
            height: 44px;
            background: #e8f1ff;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
              width: 24px;
            }
          }
          .only {
            display: block;
            font-size: 12px;
            padding-top: 5px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #323232;
            line-height: none;
          }
        }
      }
    }
  }
  .home-functions-contain {
    // margin: -40px 15px 0;
    margin: 25px 15px 0;
    height: 282px;
    background: #ffffff;
    border-radius: 8px;
    padding: 10px 15px 0;
    .help-item {
      .item-totalname {
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 600;
        color: #323232;
        line-height: 36px;
      }
      ul {
        li {
          height: 50px;
          padding: 15px 0;
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #464646;
          border-bottom: 1px solid rgba(163, 119, 119, 0.1);
          .birth-name {
            line-height: 19px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #464646;
          }
          .birth-back-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            span {
              font-size: 12px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #888888;
            }
            .van-button {
              margin-left: 5px;
              height: 20px;
              font-size: 12px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              line-height: 20px;
              border: #5192fc;
              padding: 0 10px;
              .van-button__text {
                color: #5192fc;
                text-align: center;
              }
            }
          }
          &:last-child {
            border: none;
          }
        }
      }
    }
  }
  .home—footer-contain {
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 44px;
    background: #fff;
    ul {
      height: 44px;
      display: flex;
      justify-content: space-around;
      height: 100%;
      .home-icon {
        i {
          font-size: 23px;
        }
      }
      li {
        display: flex;
        flex-direction: column;
        font-size: 12px;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        &:first-child {
          img {
            width: 30px;
            height: 30px;
          }
        }
        .add-icon {
          // display: 100%;
          width: 26px;
          height: 26px;
          background: #ccc;
          border-radius: 50%;
          box-sizing: border-box;
          padding: 5px;
        }
        img {
          width: 26px;
          height: 26px;
        }
      }
      .active {
        img {
          background: rgba(81, 146, 252, 1);
        }
      }
    }
  }
}
</style>

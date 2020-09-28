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
          <div>
            <span class="sale-detail-num">{{ salecount || "127.26.00" }}</span>
            <img src="~assets/img/home/icon_arrow_blackbg.png" alt />
          </div>
        </div>
        <div class="today-select">
          <span>
            <van-switch v-model="checked" />
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
            <img v-if="isshowicon" src="~assets/img/home/icon_fall.png" alt />
            <span class="line-num">125</span>
            <img
              class="iconTwo"
              src="~assets/img/home/icon_arrow_blackbg.png"
              alt
              v-if="isshowrighticon"
            />
          </div>
        </div>
        <div class="right">
          <span class="super-pull-person">粉丝拉新(人)</span>
          <div class="pull-line">
            <img src="static/img/logo.png" alt v-if="isshowicon" />
            <span class="line-num">125</span>
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
        <li>
          <div class="fun-icon-contain">
            <div class="icon">
              <img src="~assets/img/home/icon_kucun.png" alt />
            </div>
            <span class="only">查库存</span>
          </div>
        </li>
        <li>
          <div class="fun-icon-contain" @click="clicmebtn">
            <div class="icon">
              <img src="~assets/img/home/icon_vip.png" alt />
            </div>
            <span class="only">邀会员</span>
          </div>
        </li>
        <li>
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
              <van-button plain hairline type="primary" round
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
              <van-button plain hairline type="primary" round
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
export default {
  name: "Home",
  data: function () {
    return {
      selected: "today",
      checked: true,
      salecount: null,
      salefeedbackcount: null,
      vipcontactcount: null,
      cardovertimecount: null,
      birthdaycount: null,
      isshowicon: true,
      isshowrighticon: true,
      searchtype: 0,
    
    };
  },
  components: {
    TitleHeader,
  },
  methods: {
    //会员拉新事件
    clicktMemberBtn() {
      this.$router.push("/saveposter/memberpull");
      // window.location.href="/saveposter/memberpull";
    },

    // 递会员事件
    clicmebtn() {
      this.$router.push("/editposter");
    },

    // 请求主页数据
    requestHomeInfo(obj) {
      requestHomeInfo(obj).then((da) => {
        console.log(da);
        if (da.data.errcode == 0) {
          this.salecount = da.data.data.salecount;
          this.salefeedbackcount = da.data.data.salefeedbackcount;
          this.vipcontactcount = da.data.data.vipcontactcount;
          this.cardovertimecount = da.data.data.cardovertimecount;
          this.birthdaycount = da.data.data.birthdaycount;
          this.fanscount = da.data.data.fanscount;
          this.vipscount = da.data.data.vipscount;
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
    // 设置标题
    document.title = "超级导购";
    // 请求主页信息数据
    if (this.selected == "today") {
      this.requestHomeInfo({ cid: 587, searchtype: 0 });
    } else {
      this.requestHomeInfo({ cid: 587, searchtype: 1, searchdate: "" });
    }
  },
  computed: {
    riseUrl() {
      return "static/img/home/icon_fall.png";
    },
    downUrl() {
      return "static/img/home/icon_fall.png";
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
        div {
          display: flex;
          align-items: center;
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
        .van-switch {
          font-size: 26px;
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
          padding-top: 5px;
          background: #33496c;
          border: none;
          font-size: 13px;
          color: #fff;
        }
      }
    }
    .super-people-contain {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding-top: 10px;
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
              padding-right: 6px;
            }
            .van-button {
              height: 17px;
              font-size: 12px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              line-height: 17px;
              border: #5192fc;
              // padding:0 3px ;
              .van-button__text {
                color: #5192fc;
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
      .home-icon{
        i{
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
        &:first-child{
          img{
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
      .active{
        img{
          background: rgba(81, 146, 252, 1);

        }
      }
    }
  }
}
</style>

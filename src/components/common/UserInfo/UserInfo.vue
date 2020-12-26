<template>
  <div class="user-contains">
    <div class="user-title">
      <span class="wait-birthuser">待回访({{ userInfo.length }})</span>
      <div>
        <slot name="selectSlot"></slot>
      </div>
    </div>
    <div class="user-total-contain">
      <template v-for="(val, index) in userInfo">
        <div class="user-details" :key="index">
          <div class="user-avator"><img :src="val.avatar" /></div>
          <div class="user-right-content">
            <div class="user-sex">
              <span class="u-name">{{ val.xm ? val.xm : val.fansname }}</span>
              <img
                src="~assets/common/icon_man.png"
                alt=""
                v-if="val.gender == 1"
              />
              <img src="~assets/common/icon_woman.png" alt="" v-else />
            </div>
            <div class="recent-day">
              <span class="rec-detail"
                >生日:{{
                  val.csrq
                    ? new Date(val.csrq)
                        .toLocaleDateString()
                        .split("/")
                        .join("-")
                    : "无生日号码"
                }}</span
              >
              <img src="~assets/common/icon_arrow_blackbg.png" alt="" />
            </div>
            <div class="user-photo">
              <img src="~assets/common/icon_phone.png" alt="" />
              <span class="phonecss">
                <a :href="'tel:' + val.mainmobile">{{
                  val.mainmobile ? val.mainmobile : "无电话号码"
                }}</a>
              </span>
              <span @click="saveUserInfoBtn(val)" class="savecss"
                >保存记录</span
              >
            </div>
          </div>
          <div v-if="$route.path == '/cardvouchar'" class="open-card-details">
            <transition name="bounce">
              <div v-if="isshowCardItem == index" class="show-card">
                <template v-for="(val, index) in val.cardInfoList">
                  <!-- <div class="card-content" :key="index">
                  <div class="card-money">
                    <div>
                      <span class="money-icon">￥</span>
                      <span class="money-num">{{ val.reducecost }}</span>
                    </div>
                    <div class="arrive-val">满{{ val.leastcost }}可用</div>
                    <div class="dotted"></div>
                  </div>
                  <div class="card-detail">
                    <div class="card-name">{{ val.title }}</div>
                    <div class="card-date">
                      有效期:{{
                        new Date(val.begintimestamp)
                          .toLocaleDateString()
                          .split("/")
                          .join("-") + " "
                      }}-{{
                        " " +
                        new Date(val.endtimestamp)
                          .toLocaleDateString()
                          .split("/")
                          .join("-")
                      }}
                    </div>
                    <div
                      class="card-info-detail"
                      @click="
                        isshowUserRange == index
                          ? (isshowUserRange = null)
                          : (isshowUserRange = index)
                      "
                    >
                      <span> 详细信息 </span>
                      <van-icon name="arrow-down" v-if="!isshowUserRange" />
                      <van-icon name="arrow-up" v-else />
                    </div>
                  </div>
                  <div
                    class="card-use-daterange"
                    v-if="isshowUserRange == index"
                  >
                    <span class="card-use-name">使用范围：</span>
                    <span class="content">{{ val.storelist }}</span>
                  </div>
                </div> -->

                  <!-- 卡券列表 数组值与数组下标给子组件 -->
                  <card-update :key="index" :cardInfo="{ val, index }" >
                    <!-- <template #enoughNum> 满{{ val.leastcost }}可用 </template> -->
                  </card-update>
                </template>
              </div>
            </transition>

            <div
              @click="
                isshowCardItem == index
                  ? (isshowCardItem = null)
                  : (isshowCardItem = index),
                  (isshowUserRange = null)
              "
              class="open-records-card"
            >
              <span class="open-card">展开卡券详情</span>
              <van-icon name="arrow-down" v-if="!isshowCardItem" />
              <van-icon name="arrow-up" v-else />
            </div>
          </div>
        </div>
      </template>

      <van-empty
        image="search"
        description="无会员记录！"
        v-if="userInfo.length == 0"
      />
      <!-- <div class="user-details">
        <div class="user-avator"><img src="~assets/avator.png" /></div>
        <div class="user-right-content">
          <div class="user-sex">
            <span class="u-name">李小伟</span>
            <img src="~assets/common/icon_man.png" alt="" />
          </div>
          <div class="recent-day">
            <span class="rec-detail">生日：1992-07-32</span>
            <img src="~assets/common/icon_arrow_blackbg.png" alt="" />
          </div>
          <div class="user-photo">
            <img src="~assets/common/icon_phone.png" alt="" />
            <span class="phonecss">
              <a href="tel:136268908307">13626908307</a>
            </span>
            <span @click="saveUserInfoBtn" class="savecss">保存</span>
          </div>
        </div>
      </div> 
       <div class="user-details">
        <div class="user-avator"><img src="~assets/avator.png" /></div>
        <div class="user-right-content">
          <div class="user-sex">
            <span class="u-name">李小伟</span>
            <img src="~assets/common/icon_man.png" alt="" />
          </div>
          <div class="recent-day">
            <span class="rec-detail">生日：1992-07-32</span>
            <img src="~assets/common/icon_arrow_blackbg.png" alt="" />
          </div>
          <div class="user-photo">
            <img src="~assets/common/icon_phone.png" alt="" />
            <span class="phonecss">
              <a href="tel:136268908307">13626908307</a>
            </span>
            <span @click="saveUserInfoBtn" class="savecss">保存</span>
          </div>
        </div>
      </div> 
       <div class="user-details">
        <div class="user-avator"><img src="~assets/avator.png" /></div>
        <div class="user-right-content">
          <div class="user-sex">
            <span class="u-name">李小伟</span>
            <img src="~assets/common/icon_man.png" alt="" />
          </div>
          <div class="recent-day">
            <span class="rec-detail">生日：1992-07-32</span>
            <img src="~assets/common/icon_arrow_blackbg.png" alt="" />
          </div>
          <div class="user-photo">
            <img src="~assets/common/icon_phone.png" alt="" />
            <span class="phonecss">
              <a href="tel:136268908307">13626908307</a>
            </span>
            <span @click="saveUserInfoBtn" class="savecss">保存</span>
          </div>
        </div>
      </div> 
       <div class="user-details">
        <div class="user-avator"><img src="~assets/avator.png" /></div>
        <div class="user-right-content">
          <div class="user-sex">
            <span class="u-name">李小伟</span>
            <img src="~assets/common/icon_man.png" alt="" />
          </div>
          <div class="recent-day">
            <span class="rec-detail">生日：1992-07-32</span>
            <img src="~assets/common/icon_arrow_blackbg.png" alt="" />
          </div>
          <div class="user-photo">
            <img src="~assets/common/icon_phone.png" alt="" />
            <span class="phonecss">
              <a href="tel:136268908307">13626908307</a>
            </span>
            <span @click="saveUserInfoBtn" class="savecss">保存</span>
          </div>
        </div>
      </div> 
       <div class="user-details">
        <div class="user-avator"><img src="~assets/avator.png" /></div>
        <div class="user-right-content">
          <div class="user-sex">
            <span class="u-name">李小伟</span>
            <img src="~assets/common/icon_man.png" alt="" />
          </div>
          <div class="recent-day">
            <span class="rec-detail">生日：1992-07-32</span>
            <img src="~assets/common/icon_arrow_blackbg.png" alt="" />
          </div>
          <div class="user-photo">
            <img src="~assets/common/icon_phone.png" alt="" />
            <span class="phonecss">
              <a href="tel:136268908307">13626908307</a>
            </span>
            <span @click="saveUserInfoBtn" class="savecss">保存</span>
          </div>
        </div>
      </div>  -->
    </div>
    <user-popup
      :isshowVis="isshowViss"
      :userInfo="userInfoDetail"
      @closePop="isshowViss = false"
    >
    </user-popup>
  </div>
</template>

<script>
import UserPopup from "../UserPopup";
import CardUpdate from "../CardUpdate";
export default {
  props: {
    userInfo: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  data() {
    return {
      //
      isshowUserRange: null,
      isshowCardItem: null,
      isshowViss: false,
      userInfoDetail: {},
    };
  },
  created() {},
  mounted() {},
  methods: {
    saveUserInfoBtn(val) {
      // 将用户详细数据进行保存
      this.userInfoDetail = val;
      // 显示popup底框
      this.isshowViss = true;
    },
  },
  components: { UserPopup, CardUpdate },
};
</script>

<style scoped lang="scss">
.bounce-enter-active {
  transition: opacity 4s;
}
.bounce-leave-active {
  opacity: 0;
}
.bounce-enter-active,
.bounce-leave-active {
  transition: opacity 0.5s;
}
.bounce-enter, .bounce-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
// @keyframes bounce-in {
//   0% {
//     opacity: 0;
//   }
//   100% {
//     opacity: 1;
//   }
// }
.user-contains {
  // height: 390px;
  line-height: none;
  .symbol-without {
    background: #fff;
    height: 300px;
    font-size: 16px;
    width: 300px;
    text-align: center;
    margin: auto;
    padding-top: 150px;
    // margin-top: 60px;
  }
  .user-title {
    position: sticky;
    position: -webkit-sticky;
    background: #f7f7f7;
    top: 0;
    display: flex;
    justify-content: space-between;
    padding: 12px 0;
    .wait-birthuser {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #323232;
      line-height: 20px;
    }
    select {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #999;
      line-height: 17px;
      background: #fff;
    }
  }
  .user-total-contain {
    height: 350px;
    overflow-y: scroll;
    .user-details {
      background: #ffffff;
      padding: 15px 0 0px;
      // width: 345px;
      // height: 88px;
      background: #ffffff;
      border-radius: 8px;
      // border: 1px solid #fcf4f6;
      display: flex;
      align-items: flex-start;
      margin-bottom: 15px;
      flex-wrap: wrap;
      .user-avator {
        padding-left: 10px;
        overflow: hidden;
        img {
          width: 36px;
          height: 36px;
          border-radius: 50%;
        }
      }
      .user-right-content {
        // flex: 1 ;
        width: 270px;
        padding-left: 10px;
        padding-bottom: 10px;
        .user-sex {
          line-height: 0;
          padding-bottom: 7px;
          .u-name {
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #323232;
            padding-right: 3px;
            vertical-align: 2px;
          }
          img {
            overflow: hidden;
            width: 16px;
          }
        }
        .recent-day {
          display: flex;
          justify-content: space-between;
          padding-bottom: 8px;
          .rec-detail {
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #888888;
          }
        }
        .user-photo {
          padding: 3px 0;
          border-radius: 3px;
          color: #5192fc;
          font-size: 12px;
          span {
            padding-right: 5px;
            &:hover {
              color: #ccc;
            }
            &.phonecss a {
              background-color: #ecf5ff;
              color: #409eff;
            }
            &.savecss {
              background-color: #fdf6ec;
              border-color: #faecd8;
              color: #e6a23c;
            }
          }
          img {
            width: 10px;
          }
          a {
            color: #5192fc;
          }

          // }
        }
      }

      .open-card-details {
        background: #f1f1f1;
        // box-shadow:1px 1px 1px #000;
        border-radius: 0px 0px 8px 8px;
        width: 100%;
        text-align: center;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #888888;
        font-size: 12px;

        // .card-content {
        //   border-radius: 8px;
        //   margin: 20px;
        //   display: flex;
        //   flex-wrap: wrap;
        //   position: relative;
        //   .card-money {
        //     background: #fcf4f6;
        //     width: 35%;
        //     height: 90px;
        //     border-radius: 8px 18px 18px 8px;
        //     display: flex;
        //     flex-direction: column;
        //     justify-content: center;
        //     // align-items: center;
        //     // border-right: 1px dotted #999 ;
        //     position: relative;
        //     .money-icon {
        //       font-size: 14px;
        //       font-family: PingFangSC-Semibold, PingFang SC;
        //       font-weight: 600;
        //       color: #de617f;
        //       line-height: 20px;
        //     }
        //     .money-num {
        //       font-size: 26px;
        //       font-family: PingFangSC-Semibold, PingFang SC;
        //       font-weight: 600;
        //       color: #de617f;
        //       line-height: 37px;
        //     }
        //     .arrive-val {
        //       align-self: center;
        //       padding: 3px 6px;
        //       background: #f5e2e7;
        //       border-radius: 2px;
        //       font-size: 12px;
        //       font-family: PingFangSC-Regular, PingFang SC;
        //       font-weight: 400;
        //       color: #de617f;
        //       line-height: 17px;
        //     }
        //     .dotted {
        //       height: 80%;
        //       top: 0;
        //       bottom: 0;
        //       margin: auto;
        //       // width: 1px;
        //       border-right: 1px dashed #f8d2d2;
        //       position: absolute;
        //       right: 0;
        //     }
        //   }
        //   .card-detail {
        //     background: #fcf4f6;
        //     border-radius: 18px 8px 8px 18px;
        //     height: 90px;
        //     width: 65%;
        //     display: flex;
        //     flex-direction: column;
        //     justify-content: center;
        //     font-size: 12px;
        //     font-family: PingFangSC-Regular, PingFang SC;
        //     font-weight: 400;
        //     color: #888888;
        //     line-height: 17px;
        //     .card-name {
        //       font-size: 14px;
        //       font-family: PingFangSC-Regular, PingFang SC;
        //       font-weight: 400;
        //       color: #323232;
        //       line-height: 20px;
        //     }
        //     .card-date {
        //       padding: 5px 0;
        //     }
        //     .card-info-detail {
        //       vertical-align: center;
        //     }
        //   }
        //   .card-use-daterange {
        //     background: #f8eef1;
        //     height: 55px;
        //     overflow-y: scroll;
        //     width: 100%;
        //     padding: 0 20px;
        //     font-size: 12px;
        //     font-family: PingFangSC-Regular, PingFang SC;
        //     font-weight: 400;
        //     color: #999999;
        //     display: flex;
        //     line-height: 20px;
        //     align-items: center;
        //     .card-use-name {
        //       width: 80px;
        //     }
        //     .content {
        //       flex: 1;
        //       padding-top: 13px;
        //       height: 55px;
        //       overflow-y: scroll;
        //     }
        //   }
        // }

        .open-records-card {
          .open-card {
            vertical-align: 1px;
            display: inline-block;
            padding: 10px 2px 10px 0;
          }
        }
      }
    }
  }
}
</style>

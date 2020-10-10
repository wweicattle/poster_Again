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
                    : "无生日记录"
                }}</span
              >
              <img src="~assets/common/icon_arrow_blackbg.png" alt="" />
            </div>
            <div class="user-photo">
              <img src="~assets/common/icon_phone.png" alt="" />
              <span class="phonecss">
                <a :href="'tel:' + val.mainmobile">{{ val.mainmobile }}</a>
              </span>
              <span @click="saveUserInfoBtn(val)" class="savecss">保存</span>
            </div>
          </div>
        </div>
      </template>
       <!-- <van-empty
      image="search"
      description="无回访记录！"
      v-if="userInfo.length == 0"
    /> -->
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
    </div>

   
    <!-- <div class="symbol-without" >无待生日回访的用户！</div> -->

    <user-popup
      :isshowVis="isshowViss"
      :userInfo="userInfoDetail"
      @closePop="isshowViss = false"
    >
    </user-popup>
    <!-- <van-popup
      v-model="isshow"
      position="bottom"
      closeable
      round
      :style="{ height: '50%' }"
    >
      <div style="borderbottom: 1px solid #ccc">tiltle</div>
    </van-popup> -->
  </div>
</template>

<script>
import UserPopup from "../UserPopup";
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
      // isshow: false,
      isshowViss: false,
      userInfoDetail: {},
      // userInfo:{
      //   name:"Wuwei"
      // }
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
  components: { UserPopup },
};
</script>

<style scoped lang="scss">
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
      padding: 15px 10px 10px 10px;
      // width: 345px;
      height: 88px;
      background: #ffffff;
      border-radius: 8px;
      // border: 1px solid red;
      display: flex;
      align-items: flex-start;
      margin-bottom: 15px;
      .user-avator {
        overflow: hidden;
        img {
          // margin-top: 6px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
        }
      }
      .user-right-content {
        flex: 1;
        padding-left: 10px;
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
    }
  }

}
</style>

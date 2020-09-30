<template>
  <div class="user-contains">
    <div class="user-title">
      <span class="wait-birthuser">待回访(100)</span>
      <select name="" id="">
        <option value="1">本月</option>
        <option value="2">本周</option>
        <option value="3">下周</option>
        <option value="4">下月</option>
      </select>
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
          <span
            ><slot name="photo"
              ><a href="tel:136268908307">13626908307</a>
            </slot></span
          >
          <span @click="saveUserInfoBtn">保存</span>
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
          <slot name="icon"
            ><img src="~assets/common/icon_arrow_blackbg.png" alt=""
          /></slot>
        </div>
        <div class="user-photo">
          <img src="~assets/common/icon_phone.png" alt="" />
          <span
            ><slot name="photo"
              ><a href="tel:136268908307">13626908307</a>
            </slot></span
          >
          <span>保存</span>
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
          <slot name="icon"
            ><img src="~assets/common/icon_arrow_blackbg.png" alt=""
          /></slot>
        </div>
        <div class="user-photo">
          <img src="~assets/common/icon_phone.png" alt="" />
          <span
            ><slot name="photo"
              ><a href="tel:136268908307">13626908307</a>
            </slot></span
          >
          <span>保存</span>
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
          <slot name="icon"
            ><img src="~assets/common/icon_arrow_blackbg.png" alt=""
          /></slot>
        </div>
        <div class="user-photo">
          <img src="~assets/common/icon_phone.png" alt="" />
          <span
            ><slot name="photo"
              ><a href="tel:136268908307">13626908307</a>
            </slot></span
          >
          <span>保存</span>
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
          <slot name="icon"
            ><img src="~assets/common/icon_arrow_blackbg.png" alt=""
          /></slot>
        </div>
        <div class="user-photo">
          <img src="~assets/common/icon_phone.png" alt="" />
          <span
            ><slot name="photo"
              ><a href="tel:136268908307">13626908307</a>
            </slot></span
          >
          <span>保存</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    saveUserInfoBtn(){
      console.log(222);
    }
  },
};
</script>

<style scoped lang="scss">
.user-contains {
  line-height: none;
  .user-title {
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
    select{
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #999;
      line-height: 17px;
          background: #fff;

      options{
      }
    }
  }
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
      img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
      }
    }
    .user-right-content {
      padding-left: 10px;
      height: 100%;
      line-height: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-top: -1px;
      width: 100%;
      .user-sex {
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
          // padding-top: 1px;
          width: 14px;
        }
      }
      .recent-day {
        display: flex;
        justify-content: space-between;
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
</style>

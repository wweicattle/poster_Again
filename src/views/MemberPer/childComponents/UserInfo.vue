<template>
  <div>
    <div class="user-infos">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-checkbox-group v-model="result" ref="checkboxGroup">
          <ul>
            <!-- 进行遍历用户 -->
            <template v-for="(item, index) in list">
              <li :key="index">
                <div class="user-details">
                  <van-checkbox :name="index"></van-checkbox>
                  <div class="user-name">
                    <img
                      :src="item.avatar ? item.avatar : 'static/img/avatar.jpg'"
                      alt=""
                      class="avator"
                    />
                    <div class="details">
                      <div>
                        <span class="name">{{
                          item.fansname.slice(0, 3).padEnd(3, ".")
                        }}</span>
                        <img
                          src="~assets/common/icon_man.png"
                          alt=""
                          v-if="item.gender == '0'"
                        />
                        <img
                          src="~assets/common/icon_woman.png"
                          alt=""
                          v-else
                        />
                      </div>
                      <div class="member">公众号会员</div>
                    </div>
                  </div>
                  <div class="mem-date">{{ item.rhrq }}入会</div>
                </div>
              </li>
            </template>
          </ul>
        </van-checkbox-group>

        <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
      </van-list>
      <!-- <section class="up-init">lorem</section> -->
    </div>
  </div>
</template>

<script>
import { getUserInfos } from "network/userInfo.js";

export default {
  name: "userInfo",
  props: {
    isSelectAll: {
      type: Boolean,
      default: false,
    },
    userState: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      result: [],
      cid: Number(window.localStorage.getItem("cid")),
      page: 1,
      userStates: null,
    };
  },
  created() {
    console.log(2222222222222222222);
    // 判断是企业用户 还是普通用户
    // if (this.userState == 1) {
    //   this.userState = "wx";
    // } else if (this.userState == 2) {
    //   this.userState = "qywx";
    // }
    console.log(window.localStorage.getItem("identifyState"));
    this.userStates = window.localStorage.getItem("identifyState");
    // this.userStates==1?this.userStates="wx":this.userStates="qywx";
    this.$toast.loading({
      forbidClick: true,
      duration: 0,
    });
    // 请求用户数据
    this.getUserInfos();
  },
  mounted() {},
  methods: {
    // 获取用户信息
    getUserInfos(serachDetail) {
      let obj = {
        cid: this.cid,
        type: this.userStates,
        taglist: "",
        // searchname: "",
        // 用户还是个人，后面再调整
        searchtype: 0,
        page: this.page,
        ...serachDetail,
      };
      getUserInfos(obj).then((da) => {
        console.log("当前页码是"+this.page)
        console.log(da);
        if (da.data.errcode == 0) {
          this.$toast.clear();

          // da.data.data.datalist.forEach(val=>{
          //     new Date(val.rhrq).toLocaleDateString().split("/").forEach(val=>{
          //       val.
          //     })
          // })
          if (this.userState.length > 0) {
            this.list = da.data.data.datalist;
          } else {
            this.list = this.list.concat(da.data.data.datalist);
          }
          this.loading = false;
        }
        // console.log(da);
        // this.$toast.clear();
        // 加载状态结束
        // this.loading = false;
      });
    },
    onLoad() {
      console.log("load加载一次");
      this.page = ++this.page;
      this.getUserInfos();
      if (this.list.length >= 1) {
        this.finished = true;
      }
    },
  },
  watch: {
    isSelectAll(newVal, oldVal) {
      this.$refs.checkboxGroup.toggleAll(newVal);
    },
    userState(newVal) {
      console.log(newVal);
      this.page = 1;
      let obj = {
        searchname: newVal.trim(),
      };
      this.$toast.loading({
        forbidClick: true,
        duration: 0,
      });
      this.getUserInfos(obj);
    },
  },
};
</script>

<style  lang="scss">
.user-infos {
  // position: relative;
  transform: none;

  font-size: 16px;
  line-height: auto;
  .user-details {
    padding: 20px 15px;
    margin: 15px 20px;
    border-radius: 10px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .van-checkbox {
      .van-icon {
        font-size: 15px;
      }
    }
    .user-name {
      margin-left: -50px;
      .avator {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: 0 10px;
      }
      display: flex;
      .details {
        width: 64px;
        overflow: hidden;
        .name {
          font-size: 13px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #323232;
          padding-right: 3px;
          // width:43px ;
          // white-space: nowrap;
          // text-overflow: ellipsis;
          // overflow: hidden;
          // display: inline-block;
          // vertical-align: -4px;
        }
        img {
          width: 14px;
          height: 14px;
          vertical-align: -1px;
        }
        .member {
          padding-top: 5px;
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #888888;
        }
      }
    }
    .mem-date {
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #b2b2b2;
      line-height: 17px;
    }
  }
  // .up-init {
  //   position: sticky;
  //   right: 20px;
  //   top: 0px;
  //   // bottom: 120px;
  //   width: 40px;
  //   height: 40px;
  //   text-align: center;
  //   background-color: rgba(209, 36, 36, 0.95);
  //   border-radius: 50%;
  //   box-shadow: 0 2px 6px 1px rgba(27, 27, 27, 0.08);
  // }
}
</style>

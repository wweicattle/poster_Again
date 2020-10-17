<template>
  <div id="memberpull-contain">
    <div class="birth-back">
      <div class="member-back">
        <span class="member-birth-title">会员维系回访</span
        ><span class="member-birth-content"
          >为会员送上一声祝福，体现品牌温度</span
        >
        <img src="~assets/img/memberBack/illustration.png" alt="" />
        <div class="triangle"></div>
      </div>
      <div class="birth-swiper">
        <!-- 户数咯人Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
        repellat optio, molestiae iusto maiores explicabo illum nihil deleniti
        eligendi assumenda. -->
        <van-swipe class="my-swipe" :autoplay="3000">
          <template v-for="(val, index) in talkskills">
            <van-swipe-item :key="index">
              <div class="componey-provide" :key="index">{{ val.mc }}</div>
              <div class="swiper-title">话术</div>
              <div class="swiper-content">
                {{ val.data }}
              </div>
            </van-swipe-item>
          </template>

          <van-swipe-item v-if="talkskills.length == 0">
            <div class="componey-provide">默认</div>
            <div class="swiper-title">话术</div>
            <div class="swiper-content">默认话术</div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>

    <div class="wait-back-content">
      <user-info :userInfo="birthbackusers">
        <div slot="selectSlot">
          <select-item
            @slectbtn="slectIndexBtn"
            :listArr="['半年以上']"
            :listVal="['']"
            :colorSelect="'black'"
          ></select-item>
        </div>
      </user-info>
    </div>
  </div>
</template>
<script>
import UserInfo from "components/common/UserInfo/UserInfo";
import SelectItem from "components/common/SelectItem";
import { getVipList, addFeedBack, getTalkSkill } from "network/memberretention";
import { eventBus } from "utils/eventbus";

export default {
  name: "MemberRetention",
  data() {
    return {
      cid: window.localStorage.getItem("cid"),
      birthbackusers: [],
      selectindex: "",
      talkskills: [],
    };
  },
  components: {
    UserInfo,
    SelectItem,
  },
  methods: {
    // 保存回访记录
    addFeedBack(obj) {
      addFeedBack(obj).then((da) => {
        console.log(da);
        if (da.data.errcode == 0) {
          this.$toast.success("添加回访记录成功！");
          // 关闭底框组件
          eventBus.$emit("closePopup");

          // // 刷新主页数据
          // eventBus.$emit("freshGetBirth");
          // 刷新生日回访数据
          this.getVipList({ cid: this.cid, type: this.selectindex });
        } else {
          this.$notify({
            type: "warning",
            message: da.data.errmsg || "添加回访记录失败！",
          });
        }
      });
    },

    slectIndexBtn(index) {
      if (this.selectindex == index) return;
      this.selectindex = index;
      // 切换type进行重新请求
      this.getVipList({ cid: this.cid, type: this.selectindex });
    },
    getTalkSkill(obj) {
      getTalkSkill(obj).then((da) => {
        console.log(da);
        this.talkskills = da.data.data;
      });
    },
    // 请求生日回访列表用户
    getVipList(obj) {
      this.$toast.loading({
        message: "查询数据中..",
        forbidClick: true,
        duration: 0,
      });
      getVipList(obj)
        .then((da) => {
          console.log(da);
          if (da.data.errcode == 0) {
            this.$toast.clear();
            this.$toast.success("查询数据成功！");
            this.birthbackusers = da.data.data;

              // 进行更新首页的回访人数
             eventBus.$emit("freshGetBirth",{type:2,num:da.data.data.length})
          } else {
            this.$notify({
              type: "warning",
              message: da.data.errmsg || "获取生日回访列表失败！请稍后重试",
            });
          }
        })
        .catch((da) => {
          // this.
          this.$notify({
            type: "warning",
            message: da.data.errmsg || "获取生日回访列表失败！请稍后重试",
          });
        });
    },
  },
  mounted() {
    // 组件初始化请求一次
    this.getVipList({ cid: this.cid, type: this.selectindex });

    // 获取生日回访话术
    this.getTalkSkill({ cid: this.cid });

    // 监听刷新生日回访数据
    eventBus.$on(`addRecord`, (obj) => {
      if (this.$route.path == "/memberretention") {
        this.addFeedBack(obj);
      }
    });
  },
  computed: {},
  watch: {},
  beforeDestroy() {
    eventBus.$off("addRecord");
  },
};
</script>
<style lang="scss">
.van-swipe__indicator {
  background-color: #5192fc;
}
</style>
<style lang="scss" scoped>
#memberpull-contain {
  background: #f7f7f7;
  // height: 667px;
  padding: 20px;
  // overflow-y: scroll;
  .birth-back {
    .member-back {
      position: relative;
      height: 76px;
      background: #33496c;
      border-radius: 8px 8px 0 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 15px;
      .triangle {
        position: absolute;
        bottom: -40px;
        z-index: 100;
        left: 0;
        right: 0;
        margin: auto;
        // width: 10px;
        // height: 10px;
        width: 0px;
        height: 0px;
        border-width: 26px 20px;
        border-color: #33496c transparent transparent;
        border-style: solid;
        // display: inline-block;
      }
      .member-birth-title {
        // width: 94px;
        height: 22px;
        font-size: 16px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #ffffff;
        line-height: 22px;
      }
      .member-birth-content {
        margin-top: 5px;
        // width: 211px;
        height: 17px;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
        line-height: 17px;
      }
      img {
        width: 68px;
        // height: 84px;
        position: absolute;
        top: -10px;
        right: 10px;
      }
    }
    .birth-swiper {
      height: 131px;
      background: #ffffff;
      box-shadow: 0px 10px 14px 0px #f8f9fb;
      .my-swipe {
        height: 100%;
        position: relative;
        .componey-provide {
          padding: 0 8px;
          font-size: 12px;
          position: absolute;
          right: 0;
          top: 6px;
          // width: 46px;
          height: 20px;
          line-height: 20px;
          background: #5192fc;
          color: #fff;
          z-index: 1000;
          border-radius: 10px 0px 0px 10px;
        }
        // box-sizing: border-box;
        .van-swipe-item {
          padding: 0 10px;
          color: #000;
          font-size: 20px;
          background-color: #fff;
          .swiper-title {
            padding: 10px 0;
            font-size: 14px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #323232;
          }
          .swiper-content {
            text-indent: 30px;
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #555555;
            line-height: 20px;
            height: 57px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
          }
        }
      }
    }
  }
}
</style>

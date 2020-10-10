<template>
  <div class="pop-contains">
    <van-popup
      v-model="isshowPop"
      position="bottom"
      closeable
      round
      @close="closePop"
    >
      <div class="title-contain">回访反馈</div>
      <div class="user-avatar-content">
        <div class="avatar-details">
          <img :src="userInfo.avatar" alt="" />
          <img
            class="genderselect"
            src="static/img/memberPull/icon_man.png"
            alt=""
            v-if="userInfo.gender == 1"
          />
          <img
            class="genderselect"
            src="static/img/memberPull/icon_woman.png"
            alt=""
            v-else
          />
        </div>
        <span class="user-name">{{
          userInfo.xm ? userInfo.xm : userInfo.fansname
        }}</span>
      </div>
      <div class="label-content">
        <ul>
          <template v-for="(val, index) in quickComment">
            <li
              @click="labelbtn(index)"
              :key="index"
              :class="{ active: arr[index] }"
            >
              {{ val }}
            </li>
          </template>
        </ul>
      </div>
      <div class="comment-context">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="还有什么想说的嘛！"
          ref="textarea"
        >
        </textarea>
      </div>
      <div class="btn-contain">
        <van-button type="primary" block @click="submitBtn">提交</van-button>
      </div>
    </van-popup>
  </div>
</template>
<script>
import { addFeedBack } from "network/birthback";
import { eventBus } from "utils/eventbus";
export default {
  name: "userPop",
  props: {
    isshowVis: {
      type: Boolean,
    },
    userInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      cid: window.localStorage.getItem("cid"),
      textValue: "",
      isshowPop: false,
      arr: {},
      quickComment: [
        "回访成功！",
        "电话未接听",
        "用户评论中肯",
        "用户评论中肯",
        "忠实顾客",
        "意见不错",
        "用户评论中肯",
        "忠实顾客",
        "意见不错",
      ],
    };
  },
  methods: {
    // 添加回访记录
    addFeedBack(obj) {
      addFeedBack(obj).then((da) => {
        console.log(da);
        if (da.data.errcode == 0) {
          this.$toast.success("添加回访记录成功！");
          this.isshowPop = false;
          // 进行刷新生日回访的用户列表
          eventBus.$emit("freshGetBirth");
        } else {
          this.$notify({
            type: "warning",
            message: da.data.errmsg || "添加回访记录失败！",
          });
        }
      });
    },
    submitBtn() {
      this.arrs = [];
      // 进行对标签的回访纪录的拼接
      for (var i in this.arr) {
        if (this.arr[i]) {
          this.arrs.push(this.quickComment[i]);
        }
      }
      let str = this.arrs.join() + this.$refs.textarea.value;

      // 进行添加生日回访记录请求
      eventBus.$emit("addRecord", {
        cid: this.cid,
        feedback: str,
        vipid: this.userInfo.vipid,
        fansuserid: this.userInfo.fansuserid,
      });
    },
    labelbtn(index) {
      this.$set(this.arr, index, !this.arr[index]);
    },
    closePop() {
      this.$emit("closePop");
      this.arr = {};
    },
  },
  watch: {
    isshowVis(newVal) {
      this.isshowPop = newVal;
    },
  },
  mounted() {
    eventBus.$on("closePopup", () => {
      this.isshowPop = false;
      this.$refs.textarea.value="";
    });
  },
};
</script>
<style lang="scss"  >
.pop-contains {
  .van-popup {
    height: 500px;
    .van-popup__close-icon--top-right {
      top: 10px;
      right: 12px;
      font-size: 18px;
    }
  }
  .title-contain {
    line-height: 40px;
    height: 40px;
    text-align: center;
    border-bottom: 1px solid #fdeded;
    font-size: 15px;
  }
  .user-avatar-content {
    height: 126px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .avatar-details {
      position: relative;
      img {
        width: 54px;
        height: 54px;
        border-radius: 50%;
      }
      .genderselect {
        position: absolute;
        bottom: 8px;
        right: 0;
        width: 14px;
        height: 14px;
      }
    }

    .user-name {
      padding-top: 5px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #323232;
      line-height: 20px;
    }
  }
  .label-content {
    ul {
      padding: 0 20px 10px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li {
        text-align: center;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;

        color: #555555;
        line-height: 27px;
        width: 96px;
        height: 27px;
        background: #fff;
        border-radius: 2px;
        border: 1px solid #bfd6fc;
        margin-bottom: 20px;
      }
      .active {
        color: #5192fc;
        background: #eff5fd;
      }
    }
  }
  .comment-context {
    position: relative;
    height: 86px;
    margin: 0 20px;
    box-sizing: border-box;
    textarea {
      padding-top: 10px;
      padding-left: 10px;
      font-size: 14px;
      border: none;
      width: 100%;
      height: 86px;
      background: #f1f3f7;
      border-radius: 4px;
      &::placeholder {
        color: #ccc;
        font-size: 12px;
      }
    }
  }
  .btn-contain {
    padding: 30px 20px 0;
    .van-button {
      background: #33496c;
    }
  }
}
</style>
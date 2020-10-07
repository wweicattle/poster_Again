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
        <img src="~assets/avator.png" alt="" />
        <span class="user-name">吴晓伟</span>
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
          <!-- <li class="active">回访成功！</li>
          <li>电话未接听</li>
          <li>用户评论中肯</li>
          <li>忠实顾客</li>
          <li>意见不错</li>
          <li>用户评论中肯</li>
          <li>忠实顾客</li>
          <li>意见不错</li>
          <li>用户评论中肯</li> -->
        </ul>
      </div>
      <div class="comment-context">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="可快速点击快捷标签，方便纪录回访"
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
export default {
  name: "App",
  props: {
    isshowVis: {
      type: Boolean,
    },
  },
  data() {
    return {
      isshowPop: false,
      arr: {},
      ss: "sdfs",
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
    submitBtn() {
      this.arrs = [];
      for (var i in this.arr) {
        if (this.arr[i]) {
          this.arrs.push(this.quickComment[i]);
        }
      }
      console.log(this.arrs);
    },
    labelbtn(index) {
      this.$set(this.arr, index, !this.arr[index]);
    },
    closePop() {
      this.$emit("closePop");
      this.arr={};
      
    },
  },
  watch: {
    isshowVis(newVal) {
      this.isshowPop = newVal;
    },
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
    img {
      width: 54px;
      height: 54px;
      border-radius: 50%;
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
  }
}
</style>
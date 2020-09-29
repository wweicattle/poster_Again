<template>
  <div id="save-contains">
    <!-- <title-header>
      <div slot="iconLeft" :style="iconLeftStyle">
        <van-icon name="arrow-left" @click="$emit('backeditposter')" />
      </div>
      <div slot="header" class="title-header">
        <div class="title-name">保存海报</div>
      </div>
    </title-header> -->
    <div class="save-poster-contain">
      <div class="poster-img-contain">
        <img :src="src" alt />
        <div class="poster-remind-contain">
          <van-divider
            :style="{ color: '#999', borderColor: '#999', padding: '0 8px' }"
          >点击图片 长按进行保存图片</van-divider>
        </div>
      </div>
      <div class="save-btn-contain">
        <div class="save-oprate">
          <van-button round @click="addCreateBtn">再创建一个</van-button>
          <van-button
            type="primary"
            round
            style="color:#fff;background:#5192fc"
            @click="sharePosterBtn"
          >分享</van-button>
        </div>
      </div>
    </div>

    <!-- 信息群发 -->
    <send-mess
      :isshow="isshowSendMess"
      v-if="isshowSendMess"
      @changeVisable="isshowSendMess=false"
       :shareSrc="src"
    />
  </div>
</template>
<script>
import TitleHeader from "components/common/Title";
import SendMess from "components/Poster/SendMess";
import { eventBus } from "utils/eventbus";

export default {
  name: "SavePoster",
  props: {
    src: {
      type: String,
    },
    iconleftcolor: {
      type: Boolean,
      default: false,
    },
  },
  data: function () {
    return {
      isshowSendMess: false,
    };
  },
  components: {
    TitleHeader,
    SendMess,
  },
  computed: {
    iconLeftStyle() {
      return { color: this.iconleftcolor ? "#000" : "red" };
    },
  },
  methods: {
    addCreateBtn() {
      // eventBus.
      // this.$router.push("/editPoster")
      window.location.href = "/editPoster";
      // this
      // this.$router.push("/index")
      // console.log(t);
      window.localStorage.setItem("footerState", 1);
    },
    // sendMessageBtn(){
    //   this.
    // }
    sharePosterBtn() {
      this.isshowSendMess = true;
  
    },
  },
  mounted() {},
  watch: {
    src: {
      handler(ss) {
        console.log(ss);
      },
      immediate: true,
    },
  },
};
</script>
<style lang="scss" scoped>
#save-contains {
  height: 621px;
  background:#33496c;
  .title-header {
    background: #fff;
    color: #000000;
    // font-weight: 550;
    .title-name {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 180px;
      margin: auto;
    }
  }
  .save-poster-contain {
    border-radius: 10px;
    width: 75%;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    margin-top: 40px;
    height: 416px;
    // line-height: 380px;
    background: #f5efef;
    text-align: center;
    padding-top: 14px;
    .poster-img-contain {
      img {
        width: 80%;
        height: 70%;
        object-fit: fill;
      }
      .poster-remind-contain {
        width: 100%;
        position: absolute;
        bottom: 0;
        .van-divider {
          color: #c4bebe !important;
          font-size: 12px;
          // border: 1px solid red;
          &::before {
            border-top-color: #ccc !important;
          }
          &::after {
            border-top-color: #ccc !important;
          }
        }
      }
    }
  }
  .save-btn-contain {
    background: #33496c;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -65px;
    margin: auto;
    width: 100%;
    .save-oprate {
      display: flex;
      justify-content: space-between;
      .van-button {
        width: 120px;
        height: 40px;
        color: #5192fc;
      }
    }

    // bottom: 60px;
  }
}
</style>

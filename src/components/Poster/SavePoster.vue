<template>
  <div id="save-contains">
    <title-header>
      <div slot="iconLeft" :style="iconLeftStyle">
        <van-icon name="arrow-left" @click="$emit('backeditposter')" />
      </div>
      <div slot="header" class="title-header">
        <div class="title-name">保存海报</div>
      </div>
    </title-header>
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
        <!-- <van-button
          type="primary"
          size="large"
          color="linear-gradient(to right, #ff6034, #ee0a24)"
          icon="down"
          class="saveBtn"
        >保存到相册</van-button>-->
        <div class="save-oprate">
          <van-button  round @click="addCreateBtn">再创建一个</van-button>
          <van-button  type="primary" round style="color:#fff;background:#5192fc">分享</van-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TitleHeader from "components/common/Title";

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
    return {};
  },
  components: {
    TitleHeader,
  },
  computed: {
    iconLeftStyle() {
      return { color: this.iconleftcolor ? "#000" : "red" };
    },
  },
  methods: {
    addCreateBtn(){
      window.location.href="/"
      // this.$router.push("/index")
      // console.log(t);
    }
  },
};
</script>
<style lang="scss" scoped>
.title-header {
  background: #fff;
  color: #000000;
  font-size: 17px;
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
  position: relative;
  .poster-img-contain {
    border-radius: 10px;
    width: 80%;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    margin-top: 50px;
    height: 420px;
    // line-height: 380px;
    background: #f5efef;
    text-align: center;
    padding-top: 14px;
    img {
      width: 80%;
      height: 86%;
      object-fit: fill;
    }
    .poster-remind-contain {
      width: 100%;
      position: absolute;
      bottom: 0;
      // border: 1px solid red;
    }
  }

  .save-btn-contain {
    background: #3c5b8d;
    position: fixed;
    left: 0;
    right: 0;
    margin: auto;
    width: 80%;
    bottom: 80px;
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

<template>
  <div id="save-contains">
    <title-header>
      <div slot="iconLeft" :style="iconLeftStyle">
        <van-icon name="arrow-left" @click="$emit('backeditposter')" />
      </div>
      <div slot="header" class="title-header">
        <div class="title-name">喜庆风中秋国庆喜庆风中秋国庆喜庆风中秋国庆</div>
      </div>
    </title-header>
    <div class="save-poster-contain">
      <div class="poster-img-contain">
        <img :src="src" alt />
      </div>
      <div class="save-btn-contain">
        <van-button
          type="primary"
          size="large"
          color="linear-gradient(to right, #ff6034, #ee0a24)"
          icon="down"
        >保存到相册</van-button>
        <div class="save-oprate">
          <van-button plain hairline type="primary" icon="edit">编辑</van-button>
          <van-button plain hairline type="info" icon="edit">分享</van-button>
          <van-button plain hairline type="info" icon="edit">主页</van-button>
        </div>
      </div>
    </div>

    <!-- <a href="https://m.jb51.net/w3school/i/w3school_logo_white.gif" download="logo">
      <img border="0" src="https://m.jb51.net/w3school/i/w3school_logo_white.gif" alt="W3School" />
    </a> -->
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
  methods: {},
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
    height: 380px;
    line-height: 380px;
    background: #f5efef;
    text-align: center;
    padding-top: 14px;
    img {
      width: 80%;
      height: 96%;
      
      object-fit: fill;
    }
  }
  .save-btn-contain {
    background: #fff;
    position: fixed;
    left: 0;
    right: 0;
    margin: auto;
    width: 90%;
    padding-bottom: 20px;
    bottom: 0;
    .save-oprate {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
    }
    // bottom: 60px;
  }
}
</style>

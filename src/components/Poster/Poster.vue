<template>
  <div>
    <div class="poster-contains" v-if="!isshowSavePoster">
      <!-- 这是标题 -->
      <title-header>
        <div slot="header" class="title-header">生成海报</div>
      </title-header> 
      <!--  -->
      <div class="line-content"></div>
      <!-- <van-divider  hairline dashed :style="{  margin: '0 ' }"/> -->
      <!-- 这是海报设计内容 -->
      <div class="poster-content">
        <!-- poster上部 -->
        <div class="poster-content-top">
          <div class="poster-contenr-footer" ref="posterPhoto">
            <!-- <video width="100%" height="400px" controls>
            <source src="../../assets/qq.mp4" type="video/mp4" />
            </video> -->
            <div class="poster-person">
              <div class="per-code">
                <img src="~assets/code.png" alt />
                <div class="per-componeny">
                  <div>长按识别二维码</div>
                  <div class="com-name">LILANZ利郎</div>
                </div>
              </div>

              <div class="per-actor">
                <div class="actor">
                  <img src="~assets/avator.png" alt />
                </div>
                <div class="actorName">
                  <!-- <img src="" alt /> -->
                  李晓晓
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- poster下部 -->
        <div class="poster-content-bottom">
          <div class="print-btn-contains">
            <div class="poster-oprate">
              <van-button>
              添加文字
              </van-button>
               <van-button>
              添加图片
              </van-button>
            </div>
            <div class="print—cicle-btn">
              <div class="btn-name" @click="screenShot">生成海报</div>
            </div>
          </div>

          <div class="change-btnPoster">
            <ul>
              <li>模板</li>
              <li>自定义</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- <input type="file" name id="input" value="wwww" /> -->
    </div>
    <!-- 保存到本地图片组件 -->
    <save-postr
      class="save-poster"
      :src="imgsrc"
      :iconleftcolor="isshowSavePoster"
      @backeditposter="changePosterState"
      v-else
    />
  </div>
</template>
<script>
import html2canvas from "html2canvas";
import TitleHeader from "components/common/Title";
import SavePostr from "components/Poster/SavePoster";

export default {
  name: "Poster",
  data() {
    return {
      imgsrc: "",
      isshowSavePoster: false,
    };
  },
  components: {
    SavePostr,
    TitleHeader,
  },
  methods: {
    async screenShot() {
      const toast = await this.$toast.loading({
        message: "正在生成中....",
        forbidClick: true,
        overlay: true,
        loadingType: "spinner",
      });

      this.isshowSavePoster = true;
      let a = this.$refs.posterPhoto.scrollWidth;
      let b = this.$refs.posterPhoto.scrollHeight;
      html2canvas(this.$refs.posterPhoto, {
        width: a-15,
        height: b,
        y: 79,
      }).then((canvas) => {
        // 第一个参数是需要生成截图的元素,第二个是自己需要配置的参数,宽高等
        this.imgsrc = canvas.toDataURL("image/png");
      });
    },
    changePosterState() {
      this.isshowSavePoster = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.img {
  width: 295px;
  #new_img {
    width: 100%;
    display: block;
  }
}

.w {
  position: absolute;
  left: 0;
  border: 1px solid red;
}
.title-header {
  background: #3c5b8d;
  color: #fff;
  font-size: 17px;
}
.line-content {
  border-top: 1PX solid #ccc;

  // box-shadow: 0 0 0 0.5px #000;
}
.poster-content {
  background: #3c5b8d;
  height: 622px;
  position: relative;
  padding-top: 35px;
  .poster-content-top {
    left: 0;
    right: 0;
    width: 265px;
    height: 407px;
    margin: auto;
    background: #fff;
    .poster-contenr-footer {
      background: url(~assets/timg.jpg);
      background-repeat: no-repeat;
      background-size: 100% 100%;
      height: 100%;
      position: relative;
      .poster-person {
        padding: 0 26px;
        box-sizing: border-box;
        width: 265px;
        position: absolute;
        bottom: 20px;

        display: flex;
        justify-content: space-between;
        .per-code {
          display: flex;
          align-items: center;
          img {
            width: 54px;
            height: 54px;
          }
          .per-componeny {
            line-height: 1.5;
            margin-left: 10px;
            font-size: 12px;
            width: 84px;
            .com-name {
              font-weight: 1000;
            }
          }
        }
        .per-actor {
          text-align: center;
          width: 47px;
          img {
            width: 100%;
            height: 47px;
            border-radius: 50%;
            object-fit: fill;
          }
          .actorName {
            padding-top: 5px;
            font-size: 14px;
            font-weight: 600;
          }
        }
      }
    }
  }
  .poster-content-bottom {
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 106px;
    background: #fff;
    padding-top: 7px;
    .print-btn-contains {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
    }
    .print—cicle-btn {
      width: 62px;
      height: 62px;
      background: #5192fc;
      border-radius: 50%;
      color: #fff;
      position: relative;
      font-weight: 600;
      border: 2px solid #c8dbfa;
      margin-right: 15px;
      .btn-name {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 35px;
        height: 45px;
        line-height: 22px;
        text-align: center;
        &:hover {
          opacity: 0.8;
          font-size: 13px;
        }
      }
    }
    .change-btnPoster {
      border-top: 1px solid #000;
      position: absolute;
      bottom: 0;
      height: 31px;
      width: 100%;
      ul {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        li {
          font-size: 15px;
          font-weight: 550;
          // width: 50%;
          &:nth-child(1) {
            color: #5192fc;
          }
        }
      }
    }
  }
}
</style>

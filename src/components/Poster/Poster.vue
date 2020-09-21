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
          <!-- <div class="poster-contenr-footer" ref="posterPhoto">
            <video width="100%" height="400px" controls>
            <source src="../../assets/qq.mp4" type="video/mp4" />
            </video>
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
                
                  李晓晓
                </div>
              </div>
            </div>
          </div>-->

          <!-- <div class="sss" ref="img">
            <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600507592033&di=c6b40221562e5a59974f3e23887743eb&imgtype=0&src=http%3A%2F%2Fpic25.nipic.com%2F20121116%2F9252150_144336550000_2.jpg"
            alt
          />
          </div>-->
          <div class="canvas-contains" ref="canvasRef">
            <canvas width="265" height="407" ref="zz"></canvas>
          </div>
          <button @click="ss">clicknmeObj</button>
        </div>
        <!-- poster下部 -->
        <div class="poster-content-bottom">
          <div class="print-btn-contains">
            <div class="poster-oprate">
              <van-button @click="isshowAddTextVisable = true">添加文字</van-button>
              <van-button>添加图片</van-button>
              <van-button @click="isshowEditVisable=true">修改背景</van-button>
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

    <!-- 添加文本组件 -->
    <add-text
      v-if="isshowAddTextVisable"
      @closeVisable="isshowAddTextVisable=false"
      @textInfo="addTextContentInfo"
    ></add-text>
    <!-- 修改背景组件 -->
    <edit-back-image
      v-if="isshowEditVisable"
      @closeVisable="isshowEditVisable=false"
      @sendPhotoUrl="sendPhotoUrlBtn"
    ></edit-back-image>
  </div>
</template>
<script>
import html2canvas from "html2canvas";
import TitleHeader from "components/common/Title";
import SavePostr from "components/Poster/SavePoster";
import AddText from "components/Poster/AddText";
import EditBackImage from "components/Poster/EditBackgroundImage";

import { fabric } from "fabric";
// import "utils/cardCode.js"
export default {
  name: "Poster",
  data() {
    return {
      backPhotoUrl: "",
      isshowEditVisable: false,
      // 添加文字的内容
      addTextscontent: "",
      canvasWidth: 200,
      num: 1,
      codeNum: "",
      actorNum: "",
      imgsrc: "",
      //
      isshowSavePoster: false,
      // 显示添加文字的组件
      isshowAddTextVisable: false,
    };
  },
  components: {
    SavePostr,
    TitleHeader,
    AddText,
    EditBackImage,
  },
  methods: {
    // 进行海报截图
    takePosterPhoto() {
      // var canvas = document.getElementById("canvas"), //获取canvas
      //   ctx = this.$refs.zz.getContext("2d"), //对应的CanvasRenderingContext2D对象(画笔)
      //   img = new Image(), //创建新的图片对象
      //   base64 = ""; //base64
      // img.setAttribute("crossOrigin", "anonymous");
      // img.src = "http://www.xxxx.png";
      // img.onload = function () {
      //   //图片加载完，再draw 和 toDataURL
      //   ctx.drawImage(img, 0, 0);
      //   base64 = canvas.toDataURL("image/png");
      // };
      setTimeout(() => {
        const dataURL = this.canvas.toDataURL({
          format: "jpeg", // jpeg或png
          quality: 0.8, // 图片质量，仅jpeg时可用,
          // 截取指定位置和大小
          // left: 100,
          // top: 100,
          // width: 200,
          // height: 200
        });

        // // console.log(dataURL);
        this.takePhotoUrl = dataURL;
        console.log(this.takePhotoUrl);
      }, 3000);

      // }
    },
    // 背景图片
    sendPhotoUrlBtn(url) {
      this.backPhotoUrl = url;
      this.editBackPhoto(url);
      console.log(this.canvas.getObjects());
    },
    addTextContentInfo(text) {
      console.log(text);
      this.addTextscontent = text;
      this.addText(text);
    },
    // 添加文字事件
    addText(text) {
      let a = new fabric.Textbox(text, {
        left: 90,
        top: 100,
        width: 100,
        fill: "#000",
        fontSize: 20,
        textDecoration: "underline",
        // editingBorderColor: "blue",
      });
      this.canvas.add(a);
    },

    // 添加照片事件
    editBackPhoto() {
      fabric.Image.fromURL(this.backPhotoUrl, (img) => {
        img.set({
          // // 通过scale来设置图片大小，这里设置和画布一样大
          scaleX: this.canvas.width / img.width,
          scaleY: this.canvas.height / img.height,
          // width: that.canvasWidth,
          // height: canvas.getHeight(),
          // originX: "left",
          // originY: "top",
        });

        // 设置背景
        this.canvas.setBackgroundImage(
          img,
          this.canvas.renderAll.bind(this.canvas)
        );
        this.canvas.renderAll();
      });
    },

    // 显示添加文本组件事件变量
    addTextBtn() {
      this.isshowAddTextVisable = true;
    },
    // 初始化画布事件
    canvasDetail() {
      var that = this;
      // 开始进行绘制二维码区域
      var canvas = new fabric.Canvas(this.$refs.zz);
      this.canvas = canvas;

      // 背景图片设置
      fabric.Image.fromURL(
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600507592033&di=c6b40221562e5a59974f3e23887743eb&imgtype=0&src=http%3A%2F%2Fpic25.nipic.com%2F20121116%2F9252150_144336550000_2.jpg",
        (img) => {
          img.set({
            // // 通过scale来设置图片大小，这里设置和画布一样大
            scaleX: this.canvas.width / img.width,
            scaleY: this.canvas.height / img.height,
            // width: that.canvasWidth,
            // height: canvas.getHeight(),
            // originX: "left",
            // originY: "top",
          });
          // 设置背景
          canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
          canvas.renderAll();
        }
      );

      this.codeNum =
        "http://p.qpic.cn/wwhead/duc2TvpEgSSdsPInfahzxxJxrSQlMcdj6uImzK86zRwnicLlXsdicHEhkl9eibww5ZaERoR642gDLk/0";
      this.actorNum =
        "http://p.qlogo.cn/bizmail/7NMZiaypxPUicQoKWogla0rCFRvHorPZqLAMb1xibBoGsUkibAJ0CpMEeA/0";
      // 二维码添加
      fabric.Image.fromURL(that.codeNum, function (da) {
        da.scale(0.1);
        da.set({
          left: 20,
          top: 320,
        });
        da.set({
          borderColor: "green",
          cornerColor: "orange",
          cornerSize: 8,
          transparentCorners: true,
        });
        // canvas.setActiveObject(da);

        da.scaleToHeight(60, false); //缩放图片的高度到400
        da.scaleToWidth(60, false); //缩放图片的宽度到400
        canvas.add(da);
      });

      //  头像添加
      fabric.Image.fromURL(this.actorNum, function (da) {
        da.scale(0.1);
        da.set({
          left: 200,
          top: 320,
        });

        da.set({
          borderColor: "green",
          cornerColor: "orange",
          cornerSize: 8,
          transparentCorners: true,
        });
        // canvas.setActiveObject(da);

        da.scaleToHeight(45, false); //缩放图片的高度到400
        da.scaleToWidth(45, false); //缩放图片的宽度到400
        canvas.add(da);
      });

      this.text2 = new fabric.Textbox("sadad", {
        left: 90,
        top: 330,
        width: 50,
        fill: "#999",
        fontFamily: "Comic Sans",
        fontSize: 13,
        textDecoration: "underline",
        editingBorderColor: "blue",
      });
      canvas.add(this.text2);
      this.text3 = new fabric.Textbox("LILANGZ 利郎", {
        left: 90,
        top: 350,
        width: 100,
        fill: "#000",
        fontFamily: "Comic Sans",
        fontSize: 10,
        fontWeight: 700,
        textDecoration: "underline",
        editingBorderColor: "blue",
      });
      canvas.add(this.text3);

      // 添加名字
      var name = "李晓晓";
      this.text4 = new fabric.Textbox(name, {
        left: 200,
        top: 370,
        width: 100,
        fill: "#000",
        fontFamily: "Comic Sans",
        fontSize: 12,
        textDecoration: "underline",
        editingBorderColor: "blue",
      });
      canvas.add(this.text4);
    },
    ss() {
      this.takePosterPhoto();
      var that = this;
      console.log(this.canvas.width);
      console.log(111);
      this.num = 222;
      console.log(this.canvas.getObjects());
      console.log(this.codeNum);
      this.codeNum =
        "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png";
      this.canvas.renderAll();

      //  fabric.Image.fromURL(
      //       that.codeNum,
      //       function (da) {
      //         da.scale(0.1);
      //         da.set({
      //           left: 20,
      //           top: 320,
      //         });
      //         da.set({
      //           borderColor: "green",
      //           cornerColor: "orange",
      //           cornerSize: 8,
      //           transparentCorners: true,
      //         });
      //         // canvas.setActiveObject(da);

      //         da.scaleToHeight(60, false); //缩放图片的高度到400
      //         da.scaleToWidth(60, false); //缩放图片的宽度到400
      //         that.canvas.add(da);
      //       }
      //     );
    },
    async screenShot() {
      this.takePosterPhoto();
      // const toast = await this.$toast.loading({
      //   message: "正在生成中....",
      //   forbidClick: true,
      //   overlay: true,
      //   loadingType: "spinner",
      // });
      // this.isshowSavePoster = true;
      // // let a = this.$refs.ss.scrollWidth;
      // // let b = this.$refs.ss.scrollHeight;
      // html2canvas(this.$refs.ss, {
      //   width: 300,
      //   height:300,
      //   y: 79,
      // }).then((canvas) => {
      //   // 第一个参数是需要生成截图的元素,第二个是自己需要配置的参数,宽高等
      //   this.imgsrc = canvas.toDataURL("image/png");
      // });
    },
    changePosterState() {
      this.isshowSavePoster = false;
    },
  },
  mounted() {
    // 初始化画布
    this.canvasDetail();
    var that = this;
    let f = this.$refs.canvasRef.$el;
    window.onresize = function () {
      console.log(document.querySelector(".canvas-contains").clientWidth);
      console.log(that);
      // console.log(111);
      // console.log(f);
      // this.canvasWidth = getComputedStyle(f).width.split("px")[0];
      // console.log(this.canvasWidth);
    };
  },
  watch: {
    canvasWidth(news, olds) {
      console.log(news, olds);
      this.canvas.setWidth(news);
      //  this.canvas.setHeight(407)

      // this.canvasDetail();
      this.canvas.renderAll();
    },
  },
};
</script>
<style lang="scss" scoped>
#sss {
  display: none;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
  }
}

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
  border-top: 1px solid #ccc;

  // box-shadow: 0 0 0 0.5px #000;
}
.poster-content {
  background: #3c5b8d;
  height: 622px;
  position: relative;
  padding-top: 35px;
  .poster-content-top {
    width: 265px;
    height: 407px;
    margin: auto;
    background: #fff;
    position: relative;
    .canvas-contains {
      width: 100%;
      height: 100%;
      position: relative;
      top: 0;
      border: 1px solid #ccc;
      // background: fuchsia;
    }
    // .poster-contenr-footer {
    //   // background: url(~assets/timg.jpg);
    //   background-repeat: no-repeat;
    //   background-size: 100% 100%;
    //   height: 100%;
    //   position: relative;
    //   top: 0;
    //   // z-index: 100;
    //   .poster-person {
    //     padding: 0 26px;
    //     box-sizing: border-box;
    //     width: 265px;
    //     position: absolute;
    //     bottom: 20px;

    //     display: flex;
    //     justify-content: space-between;
    //     .per-code {
    //       display: flex;
    //       align-items: center;
    //       img {
    //         width: 54px;
    //         height: 54px;
    //       }
    //       .per-componeny {
    //         line-height: 1.5;
    //         margin-left: 10px;
    //         font-size: 12px;
    //         width: 84px;
    //         .com-name {
    //           font-weight: 1000;
    //         }
    //       }
    //     }
    //     .per-actor {
    //       text-align: center;
    //       width: 47px;
    //       img {
    //         width: 100%;
    //         height: 47px;
    //         border-radius: 50%;
    //         object-fit: fill;
    //       }
    //       .actorName {
    //         padding-top: 5px;
    //         font-size: 14px;
    //         font-weight: 600;
    //       }
    //     }
    //   }
    // }
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

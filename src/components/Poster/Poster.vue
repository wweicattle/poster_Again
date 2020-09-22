<template>
  <div>
    <div class="poster-contains" v-if="!isshowSavePoster">
      <!-- 这是标题 -->
      <title-header>
        <div slot="header" class="title-header">生成海报</div>
      </title-header>
      <!--  -->
      <div class="line-content"></div>
      <!-- 这是海报设计内容 -->
      <div class="poster-content">
        <!-- poster上部 -->
        <div class="poster-content-top">
          <div class="poster-contenr-footer" ref="posterPhoto">
            <div class="poster-person">
              <div class="per-code"></div>

              <div class="per-actor"></div>
            </div>
            <!-- 进行画布设置 -->
            <div class="canvas-contains yes" ref="canvasRef">
              <!-- <img :src="ss" alt=""> -->
              <canvas width="155" height="407" ref="zz"></canvas>
            </div>
          </div>
        </div>
        <!-- poster下部 -->
        <div class="poster-content-bottom" v-if="!isShowEditText">
          <div class="print-btn-contains">
            <div class="poster-oprate">
              <van-button @click="isshowAddTextVisable = true">添加文字</van-button>
              <van-uploader
                ref="fileUploadRef"
                :after-read="afterRead"
                :max-size="500 * 1024"
                @oversize="onOversize"
              >
                <van-button @click="addPhotoBtn">添加图片</van-button>
              </van-uploader>

              <van-button @click="isshowEditVisable=true">修改背景</van-button>
            </div>
            <div class="print—cicle-btn">
              <div class="btn-name" @click="screenShot">生成海报</div>
            </div>
            <div class="testApi">
              <!-- <button @click="load">登录</button>
              <button> 背景图获取</button>
              <button>二维码地址</button>
              <button>头像</button>
              <button>所有粉丝</button>
              <button>群发模板</button>-->
            </div>
          </div>

          <!-- <div class="change-btnPoster">
            <ul>
              <li>模板</li>
              <li>自定义</li>
            </ul>
          </div>-->
        </div>
      </div>
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

    <!-- 修改画布的组件 -->
    <edit-text v-if="isShowEditText" @closedEditText="isShowEditText=false"></edit-text>
  </div>
</template>
<script>
import html2canvas from "html2canvas";
import TitleHeader from "components/common/Title";
import SavePostr from "components/Poster/SavePoster";
import AddText from "components/Poster/AddText";
import EditText from "components/Poster/EditText";
import EditBackImage from "components/Poster/EditBackgroundImage";
import axios from "axios";
import { fabric } from "fabric";
var img = require("./../../assets/timg.jpg");
import {
  requestUserCode,
  requestUserInfo,
  requestUserAvator,
} from "network/home";
import { eventBus } from "utils/eventbus";

export default {
  name: "Poster",
  data() {
    return {
      ss: "",
      fileList: null,
      isShowEditText: false,
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
    EditText,
  },
  methods: {
    onOversize(file) {
      console.log(file);
      console.log("文件大小不能超过 500kb");
      // 警告通知
      this.$notify({ type: "warning", message: "上传图片大小必须小于500kb!" });
    },
    afterRead(s) {
      console.log(s.content);
      if (s.file.size > 500 * 1024) {
        this.$notify({
          type: "warning",
          message: "上传图片大小必须小于500kb!",
        });
      } else {
        this.ss = s.content;
        fabric.Image.fromURL(this.ss, (da)=>{
          da.scale(0.3);
          this.canvas.add(da);
        });
      }
    },
    // 添加图片到画布的事件
    addPhotoBtn() {
      console.log(this.$refs.addPhotoBtn);
    },
    load() {
      axios
        .get(
          "http://tm.lilanz.com/qywx/project/facepass/pushmessage.ashx?action=logininfo&ctrl=&systemid=1"
        )
        .then((da) => {
          console.log(da);
        });
    },
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

    // 修改背景图片事件
    editBackPhoto(url) {
      fabric.Image.fromURL(
        url,
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
          img.crossOrigin = "anonymous";
          // 设置背景
          this.canvas.setBackgroundImage(
            img,
            this.canvas.renderAll.bind(this.canvas)
          );
          this.canvas.renderAll();
        },
        { crossOrigin: "anonymous" }
      );
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

      // // 背景图片设置
      // fabric.Image.fromURL(
      //   "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600507592033&di=c6b40221562e5a59974f3e23887743eb&imgtype=0&src=http%3A%2F%2Fpic25.nipic.com%2F20121116%2F9252150_144336550000_2.jpg",
      //   (img) => {
      //     img.set({
      //       // // 通过scale来设置图片大小，这里设置和画布一样大
      //       scaleX: this.canvas.width / img.width,
      //       scaleY: this.canvas.height / img.height,
      //       // width: that.canvasWidth,
      //       // height: canvas.getHeight(),
      //       // originX: "left",
      //       // originY: "top",
      //     });
      //     // 设置背景
      //     canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
      //     canvas.renderAll();
      //   }
      // );

      this.codeNum =
        "http://tm.lilanz.com/qywx/project/FacePass/PushMessage.ashx?action=transferimage&imageurl=http://p.qpic.cn/wwhead/duc2TvpEgSSdsPInfahzxxJxrSQlMcdjibHj8smTa4ZbOrlMOibffuTHphK01z60Mr8nxdKOUURAo/0";
      this.actorNum =
        "http://tm.lilanz.com/qywx/project/FacePass/PushMessage.ashx?action=transferimage&imageurl=http://p.qpic.cn/wwhead/duc2TvpEgSSdsPInfahzxxJxrSQlMcdjibHj8smTa4ZbOrlMOibffuTHphK01z60Mr8nxdKOUURAo/0";
      // 二维码添加
      fabric.Image.fromURL(
        that.codeNum,
        function (da) {
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
          // da.set("c")
          da.scaleToHeight(60, false); //缩放图片的高度到400
          da.scaleToWidth(60, false); //缩放图片的宽度到400
          canvas.add(da);
        },
        { crossOrigin: "Anonymous" }
      );

      //  头像添加
      fabric.Image.fromURL(
        this.actorNum,
        function (da) {
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
        },
        { crossOrigin: "Anonymous" }
      );
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

      // 点击画布中的对象时
      this.canvas.on("selection:created", (e) => {
        // 选中图层事件触发时，动态更新赋值
        this.initFabricEvent(e.target);
      });
      this.canvas.on("selection:updated", (e) => {
        // 选中图层事件触发时，动态更新赋值
        this.initFabricEvent(e.target);
      });

      this.$nextTick(() => {
        console.log(this.canvas.getActiveObject());
      });
    },
    //初始化画布监听事件
    initFabricEvent(event) {
      this.isShowEditText = true;
      console.log(221323);
      this.$nextTick(() => {
        eventBus.$emit("init", { event, canvas: this.canvas });
      });
    },
    // 进行导出截图
    async screenShot() {
      // this.takePosterPhoto();
      const toast = await this.$toast.loading({
        message: "正在生成中....",
        forbidClick: true,
        overlay: true,
        loadingType: "spinner",
      });
      this.isshowSavePoster = true;
      // let a = this.$refs.ss.scrollWidth;
      // let b = this.$refs.ss.scrollHeight;
      html2canvas(document.querySelector(".yes"), {
        allowTaint: true,
        taintTest: false,
        // width: 1000,X
        // height: 1000,
        // y: 79,
      }).then((canvas) => {
        // 第一个参数是需要生成截图的元素,第二个是自己需要配置的参数,宽高等
        this.imgsrc = canvas.toDataURL("image/png");
      });
    },
    changePosterState() {
      this.isshowSavePoster = false;
      window.location.href = "/";
    },
  },
  mounted() {
    // 进行计算画布的大小
    this.$refs.zz.width = this.$refs.posterPhoto.clientWidth;
    console.log(this.$refs.posterPhoto.clientWidth);
    this.$refs.zz.height = this.$refs.posterPhoto.clientHeight;
    // 初始化画布
    this.canvasDetail();
    var that = this;
    let f = this.$refs.canvasRef.$el;
  },
  watch: {
    canvasWidth(news, olds) {
      console.log(news, olds);
      this.canvas.setWidth(news);
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
    .poster-contenr-footer {
      // background: url(~assets/timg.jpg);
      background-repeat: no-repeat;
      background-size: 100% 100%;
      height: 100%;
      position: relative;
      top: 0;
    }
  }
  .poster-content-bottom {
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 76px;
    background: #fff;
    padding-top: 7px;
    .print-btn-contains {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      align-items: flex-end;
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

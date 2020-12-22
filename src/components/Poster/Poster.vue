<template>
  <div>
    <div class="poster-contains" v-if="!isshowSavePoster">
      <!-- 这是标题 -->
      <!-- <title-header>
        <div slot="header" class="title-header">生成海报</div>
      </title-header> -->
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
              <div
                @click="(isshow = !isshow), (isshowAttr = !isshowAttr)"
                class="get-many-attr"
                :class="{ colorChange: isshow }"
              >
                <van-icon name="apps-o" />
                <span>素材</span>
              </div>
              <div @click="isshowAddTextVisable = true" v-if="isshowAttr">
                <!-- <div class="iconname">T</div> -->
                <img src="~assets/img/home/fontIcon.png" alt="" />
                <span>文字</span>
              </div>
              <div @click="addPhotoBtn" v-if="isshowAttr" class="font-icon">
                <van-uploader
                  ref="fileUploadRef"
                  :after-read="afterRead"
                  :max-size="500 * 1024"
                  @oversize="onOversize"
                >
                  <van-icon name="photo-o" />
                  <span>图片</span>
                </van-uploader>
              </div>

              <div
                @click="isshowEditVisable = true"
                class="back-contain"
                v-if="isshowAttr"
              >
                <van-icon name="orders-o" />
                <span class="back-name">背景</span>
              </div>
            </div>
            <div class="print—cicle-btn">
              <div class="btn-name" @click="screenShot">生成海报</div>
            </div>
          </div>
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
      @closeVisable="isshowAddTextVisable = false"
      @textInfo="addTextContentInfo"
    ></add-text>
    <!-- 修改背景组件 -->
    <edit-back-image
      v-if="isshowEditVisable"
      @closeVisable="isshowEditVisable = false"
      @sendPhotoUrl="sendPhotoUrlBtn"
      :imageLists="backImages"
    ></edit-back-image>

    <!-- 修改画布的组件 -->
    <edit-area
      v-if="isShowEditText"
      @closedEditText="isShowEditText = false"
      @showEditColor="cahngeshowEditColor"
    ></edit-area>
    <edit-color
      v-if="isshowEditColor"
      @closededitcolor="isshowEditColor = false"
      :activeObj="nowActiveObj"
    ></edit-color>
  </div>
</template>
<script>
import html2canvas from "html2canvas";
import TitleHeader from "components/common/Title";
import SavePostr from "components/Poster/SavePoster";
import AddText from "components/Poster/AddText";
import EditArea from "components/Poster/EditAttrArea.vue";
import EditBackImage from "components/Poster/EditBackgroundImage";
import EditColor from "components/Poster/EditColor";

import axios from "axios";
import { fabric } from "fabric";
import {
  requestUserCode,
  requestUserInfo,
  requestUserAvator,
  requestSendGroupMess,
  requestBacImage,
} from "network/home";
import { eventBus } from "utils/eventbus";
export default {
  name: "Poster",
  data() {
    return {
      isshowAttr: false,
      isshow: false,
      nowActiveObj: null,
      isshowEditColor: false,
      avator: null,
      usercode: null,
      backImages: [],
      userInfo: {},
      ss: "",
      fileList: null,
      isShowEditText: false,
      backPhotoUrl: "",
      isshowEditVisable: false,
      // 添加文字的内容
      addTextscontent: "",
      num: 1,
      codeNum: "",
      actorNum: "",
      imgsrc: "",
      //
      isshowSavePoster: false,
      // 显示添加文字的组件
      isshowAddTextVisable: false,
      canvas: null,
    };
  },
  components: {
    SavePostr,
    TitleHeader,
    AddText,
    EditBackImage,
    EditArea,
    EditColor,
  },
  methods: {
    cahngeshowEditColor(obj) {
      this.isshowEditColor = true;
      this.nowActiveObj = obj;
    },
    onOversize(file) {
      console.log(file);
      console.log("文件大小不能超过 500kb");
      // 警告通知
      this.$notify({
        type: "warning",
        message: "上传图片大小必须小于500kb!",
        duration: 15000,
      });
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
        fabric.Image.fromURL(this.ss, (da) => {
          da.scale(0.3);
          this.canvas.add(da);
        });
      }
    },
    // 添加图片到画布的事件
    addPhotoBtn() {
      console.log(this.$refs.addPhotoBtn);
    },

    // 获取导购信息，头像
    async initGetData() {
      // 背景图获取
      this.backImages = await new Promise((res) => {
        requestBacImage()
          .then((da) => {
            // let url=`http://tm.lilanz.com/qywx/project/FacePass/PushMessage.ashx?action=transferimage&imageurl=${this.imageLists[index].urladdress}`
            let data = da.data.data.map((val) => {
              return `http://tm.lilanz.com/qywx/project/FacePass/PushMessage.ashx?action=transferimage&imageurl=${val.urladdress}`;
            });
            res(data);
          })
          .catch((da) => {
            this.$notify({
              type: "warning",
              message: da.data.errmsg || "获取背景图片数据失败！",
            });
          });
      });

      this.userInfo = {
        cid: window.localStorage.getItem("cid"),
        cname: window.localStorage.getItem("cname"),
      };

      // 获取二维码成功
      let a = await new Promise((res) => {
        requestUserCode(this.userInfo).then((da) => {
          res(da.data.data);
        });
      });
      //
      let b = await new Promise((res) => {
        requestUserAvator(this.userInfo).then((da) => {
          console.log(da);
          res(da.data.data);
        });
      });

      let t = await Promise.all([a, b]).then((da) => {
        console.log(da);
        if (da.length == 2) {
          this.usercode = da[0];
          this.avator = da[1];
          // 初始化画布
          this.canvasDetail();
        }
      });
    },
    // 进行海报截图
    takePosterPhoto() {
      const dataURL = this.canvas.toDataURL({
        format: "jpeg", // jpeg或png
        quality: 0.8, // 图片质量，仅jpeg时可用,
        // 截取指定位置和大小
        // left: 100,
        // top: 100,
        // width: 200,
        // height: 200
      });

      this.takePhotoUrl = dataURL;
      console.log(this.takePhotoUrl);
    },
    // 背景图片
    sendPhotoUrlBtn(url) {
      this.backPhotoUrl = url;
      this.editBackPhoto(url);
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
        fill: "rgb(1,1,1)",
        fontSize: 20,
        textDecoration: "underline",
      });
      this.canvas.add(a);
    },

    // 修改背景图片事件
    editBackPhoto(url) {
      fabric.Image.fromURL(
        url,
        (img) => {
          console.log(this.canvas.width);
          console.log(this.canvas.height);
          img.set({
            // // 通过scale来设置图片大小，这里设置和画布一样大
            scaleX: this.canvas.width / img.width,
            scaleY: this.canvas.height / img.height,
            // width: this.canvas.width,
            // height: this.canvas.height,
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
    // 创建画布实例
    createCanvasInit() {
      // 开始进行绘制二维码区域
      var canvas = new fabric.Canvas(this.$refs.zz);
      this.canvas = canvas;

      // 点击画布中的对象时
      this.canvas.on("selection:created", (e) => {
        console.log(11221);
        // 选中图层事件触发时，动态更新赋值
        this.initFabricEvent(e.target);
      });
      this.canvas.on("selection:updated", (e) => {
        console.log(111);
        // 选中图层事件触发时，动态更新赋值
        this.initFabricEvent(e.target);
      });
    },
    // 初始化画布事件
    canvasDetail() {
      var that = this;
      let code = `http://tm.lilanz.com/qywx/project/FacePass/PushMessage.ashx?action=transferimage&imageurl=${this.usercode}`;
      let actorUrl = `http://tm.lilanz.com/qywx/project/FacePass/PushMessage.ashx?action=transferimage&imageurl=${this.avator.avatar}`;
      fabric.Image.fromURL(
        actorUrl,
        function (da) {
          da.set({
            left: that.symbolWidth * 7.5,
            top: that.symbolHeight + 7,
          });

          da.set({
            borderColor: "green",
            cornerColor: "orange",
            cornerSize: 8,
            transparentCorners: true,
          });

          da.scaleToWidth(that.symbolWidth * 1.3, false); //缩放图片的宽度到400
          that.canvas.add(da);
        },
        { crossOrigin: "Anonymous" }
      );
      // 二维码添加
      fabric.Image.fromURL(
        code,
        function (da) {
          da.set({
            left: that.symbolWidth,
            top: that.symbolHeight,
          });
          da.set({
            borderColor: "green",
            cornerColor: "orange",
            cornerSize: 8,
            transparentCorners: true,
          });
          // canvas.setActiveObject(da);
          // da.set("c")
          console.log(that.symbolHeight);
          da.scaleToHeight(that.symbolWidth * 2.2, false); //缩放图片的高度到400
          // da.scaleToWidth(60, false); //缩放图片的宽度到400
          that.canvas.add(da);
        },
        { crossOrigin: "Anonymous" }
      );

      that.text2 = new fabric.Textbox("长按保存二维码", {
        left: that.symbolWidth * 3.2,
        top: that.symbolHeight + 15,
        width: 50,
        fill: "rgb(1,1,1)",
        fontFamily: "Comic Sans",
        fontSize: 11,
        textDecoration: "underline",
        editingBorderColor: "blue",
      });
      that.canvas.add(that.text2);
      that.text3 = new fabric.Textbox("LILANZ 利郎", {
        left: that.symbolWidth * 3.2,
        top: that.symbolHeight + 30,
        width: 100,
        fill: "rgb(1,1,1)",
        fontFamily: "Comic Sans",
        fontSize: 10,
        fontWeight: 700,
        textDecoration: "underline",
        editingBorderColor: "blue",
      });
      that.canvas.add(that.text3);

      // 添加名字
      var name = that.userInfo.cname || "moren";
      that.text4 = new fabric.Textbox(name, {
        left: that.symbolWidth * 7.5,
        top: that.symbolWidth * 1.3 + that.symbolHeight + 8,
        width: 100,
        fill: "rgb(1,1,1)",
        fontFamily: "Comic Sans",
        fontSize: 10,
        textDecoration: "underline",
        editingBorderColor: "blue",
      });
      that.canvas.add(that.text4);

      this.canvas.getObjects().forEach((val, index) => {
        window.localStorage.setItem("test", 0);
        val.on("deselected", (options) => {
          console.log(221323);
        });
      });
      //
      this.$toast.clear();
    },

    //初始化画布监听事件
    initFabricEvent(event) {
      this.isShowEditText = true;
      this.$nextTick(() => {
        eventBus.$emit("init", {
          event,
          canvas: this.canvas,
        });
      });
    },

    // 进行导出截图
    async screenShot() {
      this.isshowSavePoster = true;
      let h = document.querySelector(".poster-content");
      let w = document.querySelector(".poster-content-top");
      let paddingTop = getComputedStyle(h).paddingTop.split("px")[0];
      let left = getComputedStyle(w).marginLeft.split("px")[0];
      let totalTop = Number(paddingTop);
      html2canvas(document.querySelector(".yes"), {
        allowTaint: true,
        taintTest: false,
        y: totalTop,
        // x: left+1
      }).then((canvas) => {
        // 第一个参数是需要生成截图的元素,第二个是自己需要配置的参数,宽高等
        this.imgsrc = canvas.toDataURL("image/png");
      });
    },

    changePosterState() {
      this.isshowSavePoster = false;
      // 刷新页面
      window.location.href = "/editPoster";
    },
  },
  mounted() {
    // 设置标题
    document.title = "海报制作";
    // 进行计算画布的大小
    this.$refs.zz.width = this.$refs.posterPhoto.clientWidth;
    this.$refs.zz.height = this.$refs.posterPhoto.clientHeight;
    this.symbolHeight = Math.ceil((this.$refs.zz.height / 4) * 3);
    this.symbolWidth = Math.ceil(this.$refs.zz.width / 10);
    this.$toast.loading({
      message: "查询数据中..",
      forbidClick: true,
      duration: 0,
    });
    // 组件加载获取导购数据
    this.initGetData();
    // 初始化一个canvas实例,必须放在设置画布宽高时的下面执行
    this.createCanvasInit();
  },

  beforeDestroy() {
    // 清除事件总线
    eventBus.$off("init");
  },
};
</script>
<style lang="scss" scoped>
.testApi {
  position: fixed;
  top: 10px;
  left: 20px;
}
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
  color: #fff;
  font-size: 17px;
}
.line-content {
}
.poster-content {
  background: #33496c;
  height: 621px;
  position: relative;
  padding-top: 35px;
  .poster-content-top {
    font-size: 0;
    // background: ;
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
      // border: 1px solid #ccc;
      // background: fuchsia;
    }
    .poster-contenr-footer {
      font-size: 0;
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
    bottom: 46px;
    height: 76px;
    background: #fff;
    padding-top: 7px;
    border-bottom: 0.5px solid #ccc;
    .print-btn-contains {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      align-items: flex-start;

      .poster-oprate {
        // height:60px;
        padding-top: 10px;
        display: flex;
        align-items: flex-end;
        .get-many-attr {
          padding-right: 5px;
          border-right: 1px solid #ccc;
        }
        .colorChange {
          color: #5192fc;
        }
        .back-name {
          // padding-top: 8px;
        }
        .font-icon {
          padding-left: 6px;
        }
        & > div {
          margin: 0 10px;
          width: 35px;
          // justify-content: center;
          display: flex;
          flex-direction: column;
          text-align: center;

          span {
            padding-top: 4px;
            display: block;
          }
          i {
            font-weight: 600;
            height: 25px;
            font-size: 20px;
            // line-height: 28px;
          }
          img {
            width: 16px;
            padding-bottom: 5px;
            margin: auto;
          }
        }
      }
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

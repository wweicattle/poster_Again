<template>
  <div id="app">
    <div id="nav">
      <img
        src="./assets/avator.png"
        class="modal_content"
        v-touch:scaleTouch="{func: scalePic, param: ''}"
        v-touch:slideTouch="{func: movePic, param: ''}"
      />
      <van-button type="primary">主要按钮</van-button>
      <van-button type="info">信息按钮</van-button>
      <van-button type="default">默认按钮</van-button>
      <van-button type="warning">警告按钮</van-button>
      <van-button type="danger">危险按钮</van-button>
    </div>
    <div class="yi">
      <div class="er">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, nemo.</div>
    </div>
  </div>
</template>
<script>
import s from "./network/home";

export default {
  data: function () {
    return {
      baseLeft: 0,
      baseTop: 0,
      bodyWidth: document.body.clientWidth,
      ele: null, // 不能在这里设置， dom还没有生成
    };
  },
  methods: {
    movePic: function (param) {
      if (param.is_endMove) {
        // 每次移动松开手指的时候要下次移动的基础坐标
        this.baseLeft = parseInt(this.ele.style.marginLeft.slice(0, -2));
        this.baseTop = parseInt(this.ele.style.marginTop.slice(0, -2));
      } else {
        let nodeStyle = this.ele.style.transform;
        if (nodeStyle) {
          // 有这个就表示应该是移动
          let currScaleSize = parseFloat(
            nodeStyle.slice(nodeStyle.indexOf("scale") + 6)
          );
          this.setMaxdisp(
            currScaleSize,
            this.baseLeft + param.x,
            this.baseTop + param.y,
            "move"
          );
        }
      }
    },
    scalePic: function (param, is_endScale) {
      this.ele = document.getElementsByClassName("modal_content")[0]; // 这个应该在图片显示的时候设置
      let nodeStyle = this.ele.style.transform;
      let changeSize = nodeStyle
        ? parseFloat(nodeStyle.slice(nodeStyle.indexOf("scale") + 6))
        : 0;
      if (is_endScale) {
        // 缩放图片结束，要重新计算定位
        this.setMaxdisp(
          changeSize,
          parseInt(this.ele.style.marginLeft),
          parseInt(this.ele.style.marginTop),
          "scale"
        );
        return;
      }
      if (nodeStyle) {
        // 如果存在的话，就说明已经设置了，scale已经改变了
        let currScaleSize = changeSize + param;
        currScaleSize > 3 ? (currScaleSize = 3) : null;
        currScaleSize < 1 ? (currScaleSize = 1) : null;
        this.ele.style.transform =
          "translate(-50%, -50%) scale(" +
          currScaleSize +
          "," +
          currScaleSize +
          ")";
      } else {
        // 如果不存在，就说明是第一次设置
        let scale = param + 1;
        this.ele.style.marginLeft = "0px";
        this.ele.style.marginTop = "0px";
        this.ele.style.transform =
          "translate(-50%, -50%) scale(" + scale + "," + scale + ")";
      }
    },
    setMaxdisp: function (changeSize, changeX, changeY, type) {
      // 计算最大位移
      // naturalWidth ： 是图片原始的宽度，通过比例可以计算出当前图片在页面的高度
      let picHeight =
        this.bodyWidth / (this.ele.naturalWidth / this.ele.naturalHeight);
      let maxTop = (picHeight * changeSize - window.innerHeight) / 2;
      let maxLeft = (this.bodyWidth / 2) * (changeSize - 1);
      if (changeX >= maxLeft) {
        this.ele.style.marginLeft = maxLeft + "px";
      } else if (changeX < -maxLeft) {
        this.ele.style.marginLeft = -maxLeft + "px";
      } else if (type === "move") {
        this.ele.style.marginLeft = changeX + "px";
      }
      // 如果图片当前尺寸大于屏幕尺寸，可以移动
      if (maxTop > 0) {
        if (changeY >= maxTop) {
          this.ele.style.marginTop = maxTop + "px";
        } else if (changeY < -maxTop) {
          this.ele.style.marginTop = -maxTop + "px";
        } else if (type === "move") {
          this.ele.style.marginTop = changeY + "px";
        }
      } else if (type === "move") {
        this.ele.style.marginTop = 0 + "px";
      }
    },
  },
};
</script>
<style lang="scss">
@import url(./assets/css/base.css);

.yi {
  .er {
    color: red;
  }
}
</style>

<template>
  <div class="editcolor-cotnains">
    <ul>
      <li
        v-for="(val, index) in colors"
        :key="index"
        :style="{ backgroundColor: val }"
        :class="{ activecolor: indexactivecolor === index }"
        @click="activeColorBtn(val, index)"
      ></li>
    </ul>
    <div class="chose-color">
      <van-icon name="cross" @click="cancelchangebtn" />
      <span>颜色</span>
      <van-icon name="success" @click="editcolorBtn" />
    </div>
  </div>
</template>
<script scoped>
import { eventBus } from "utils/eventbus";
import { colors } from "utils/colors";

export default {
  name: "EditColor",
  props: {
    activeObj: {
      type: Object,
      defaul() {
        return {};
      },
    },
  },
  data: function () {
    return {
      colors: [],
      isactive: true,
      indexactivecolor: 0,
      canvas: null,
      event: null,
      event: null,
      changeColor: null,
      beforeColors: null,
      symbolclickcolor: false,
      obj: [],
    };
  },
  created() {
    this.colors = colors;
  },
  mounted() {},
  methods: {
    activeColorBtn(val, index) {
      console.log("activeSOmecolor");
      this.indexactivecolor = index;
      this.changeColor = val;
      // 文本颜色进行修使用set方法
      this.event.set("fill", val);
      // // 进行刷新画布
      this.canvas.renderAll();
    },
    // 确定颜色
    editcolorBtn() {
      console.log("confirm");
      // // // 文本颜色进行修使用set方法
      // this.event.set("fill", this.obj.pop());
      // this.symbolclickcolor = true;
      // // // this.canvas.discardActiveObject();
      // // // 进行刷新画布
      // this.canvas.renderAll();
      this.$emit("closededitcolor");
      window.localStorage.setItem("test", 1);
      // this.event.set(
      //   "fill",
      //   window.localStorage.setItem("event", this.changeColor)
      // );

      // // 确定之后颜色就已经确定
    },
    // 取消颜色
    cancelchangebtn() {
      console.log("cancel");
      // 文本颜色进行修使用set方法
      this.event.set("fill", window.localStorage.getItem("event"));
      // this.canvas.discardActiveObject();
      // 进行刷新画布
      this.canvas.renderAll();
      this.$emit("closededitcolor");
    },
  },
  watch: {
    activeObj: {
      handler(newVal, oldVal) {
        window.localStorage.setItem("test", 0);
        console.log("begin");
        this.canvas = newVal.canvas || [];
        this.event = newVal.event;
        console.log(this.event);
        // this.beforeColors = this.event.fill;
        // setTimeout(() => {
        //   this.activeColorBtn(this.event)
        // }, (600));
        window.localStorage.setItem("test", 0);

        window.localStorage.setItem("event", this.event.fill);
        this.canvas.getObjects().forEach((val, index) => {
          window.localStorage.setItem("test", 0);
          val.on("deselected", (options) => {
            // if (window.localStorage.getItem("test") == 1) return;
            // this.event.set("fill", window.localStorage.getItem("event"));
            console.log(val==this.event)
            // console.log(this.canvas);
            console.log("deselect");
            // 文本颜色进行修使用set方法
            // this.event.set("fill", this.beforeColors);
            // this.canvas.discardActiveObject();
            // 进行刷新画布
            // if (this.symbolclickcolor) {
            // if (this.symbolclickcolor)return this.event.set("fill", this.changeColor);
            // this.event.set("fill", this.beforeColors);
            // // this.symbolclickcolor=false;
            // // } else {
            // // this.event.set("fill", this.beforeColors);
            // // }
            // // this.canvas.discardActiveObject();

            // this.canvas.renderAll();
            this.$emit("closededitcolor");
          });
        });

        // 在组件开始初始化的时候，watch里面可能接受不到响应数据，所以在nextTick中进行获取
        this.$nextTick(() => {
          let index = this.colors.findIndex((val) => {
            // console.log(val);
            return val == this.beforeColors;
          });
          this.indexactivecolor = index;
        });
      },
      immediate: true,
      // 这个意思是监听对象的对象如果有变化你就执行watch
      // 然而我只要执行执行
      // deep:true
    },
  },
};
</script>
<style lang="scss">
.editcolor-cotnains {
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 190px;
  background: #234172;
  z-index: 1000;
  ul {
    height: 86%;
    overflow-y: scroll;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-top: 10px;
    li {
      margin: 5px 11px;
      width: 28px;
      height: 28px;
      // border: 1px solid red;
      border-radius: 50%;
    }
    .activecolor {
      border: 3px solid #c3b0b0;
    }
  }
  .chose-color {
    padding: 0 5px;
    height: 10%;
    // background: #000;
    display: flex;
    justify-content: space-between;
    color: #fff;
    align-items: center;
    font-size: 13px;
    .van-icon {
      font-size: 17px;
    }
  }
}
</style>

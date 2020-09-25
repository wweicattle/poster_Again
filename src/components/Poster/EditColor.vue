<template>
  <div class="editcolor-cotnains">
    <ul>
      <li
        v-for="(val,index) in colors"
        :key="index"
        :style="{backgroundColor:val}"
        :class="{activecolor:indexactivecolor===index}"
        @click="activeColorBtn(val,index)"
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
    };
  },
  created() {
    this.colors = colors;
  },
  mounted() {
    eventBus.$on("init", (obj) => {
      console.log(obj);
      this.canvas = obj.canvas;
      this.event = obj.event;
    });
  },
  methods: {
    activeColorBtn(val, index) {
      this.indexactivecolor = index;
      this.changeColor = val;
      // 文本颜色进行修使用set方法
      this.event.set("fill", val);
      // 进行刷新画布
      this.canvas.renderAll();
    },
    // 确定颜色
    editcolorBtn() {
      this.symbolclickcolor = true;
      // this.canvas.discardActiveObject();
      // 进行刷新画布
      this.canvas.renderAll();
      this.$emit("closededitcolor");
      // // 确定之后颜色就已经确定
      // this.beforeColors=this.changeColor;
    },
    // 取消颜色
    cancelchangebtn() {
      // 文本颜色进行修使用set方法
      this.event.set("fill", this.beforeColors);
      // this.canvas.discardActiveObject();
      // 进行刷新画布
      this.canvas.renderAll();
      this.$emit("closededitcolor");
    },
  },
  watch: {
    activeObj: {
      handler(newVal, oldVal) {
        console.log(111111);
        this.canvas = newVal.canvas || [];
        this.event = newVal.event;
        this.beforeColors = this.event.fill;
        console.log(this.beforeColors);
        this.canvas.getObjects().forEach((val, index) => {
          val.on("deselected", (options) => {
            console.log(23243);
            // 文本颜色进行修使用set方法
            // this.event.set("fill", this.beforeColors);
            // this.canvas.discardActiveObject();
            // 进行刷新画布
            if (this.symbolclickcolor) {
              this.event.set("fill", this.changeColor);
              this.symbolclickcolor=false;
              this.changeColor=this.beforeColors;
            } else {
              this.event.set("fill", this.beforeColors);
            }
            // this.canvas.discardActiveObject();

            this.canvas.renderAll();
            this.$emit("closededitcolor");
          });
        });

        // 在组件开始初始化的时候，watch里面可能接受不到响应数据，所以在nextTick中进行获取
        this.$nextTick(() => {
          console.log(this.colors);
          let index = this.colors.findIndex((val) => {
            console.log(val);
            return val == this.beforeColors;
          });
          console.log(index);
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

<template>
  <div class="select-contain">
    <div @click="selectBtn" class="isselectDom">
      <!-- <input type="text" @click="selectBtn" :value="sas" @blur="blurSelect" /> -->
      <div v-if="colorSelect == 'white'">
        <span>{{ listArr[selectindex] }}</span>
        <img
          class="isselectDom"
          src="~assets/img/selectItem/select_down.png"
          alt=""
        />
      </div>
      <div v-if="colorSelect == 'black'">
        <span class="colorBlack">{{ listArr[selectindex] }}</span>
        <img
          class="isselectDom"
          src="~assets/img/selectItem/select_downBlack.png"
          alt=""
        />
      </div>
    </div>
    <ul v-if="isshowItem">
      <template v-for="(val, index) in listArr">
        <li
          :key="index"
          @click="selectItemBtn($event, index)"
          :class="{ selectActive: index == selectindex }"
          class="isselectDom"
        >
          {{ val }}
        </li>
      </template>

      <!-- <li>選擇1</li>
      <li>選擇2</li>
      <li>選擇3</li> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: "SelectItem",
  props: {},
  data() {
    return {
      isshowItem: false,
      selectindex: 0,
      //   listArr: ["今日", "本月"],
      //   listVal:["today","month"]
    };
  },
  props: {
    listArr: {
      type: Array,
      default() {
        return [];
      },
    },
    listVal: {
      type: Array,
      default() {
        return [];
      },
    },
    colorSelect: {
      type: String,
      default: "white",
    },
  },
  created() {},
  mounted() {
    document.addEventListener("touchstart", (e) => {
      if (e.target.classList.contains("isselectDom")) {
        return;
      } else {
        this.isshowItem = false;
      }
    });
  },
  methods: {
    blurSelect(e) {
      console.log(e);
      //   this.isshowItem = false;
    },
    selectItemBtn(e, index) {
      // 進行選中字段進行高亮
      this.selectindex = index;
      // 向父组件进行发送选中值
      this.$emit("slectbtn", this.listVal[index]);
      // 关闭ul
      this.isshowItem = false;
    },
    selectBtn() {
      this.isshowItem = !this.isshowItem;
    },
  },

  computed: {},
};
</script>

<style scoped lang="scss">
.select-contain {
  position: relative;
  color: #ffffff;
  font-size: 13px;
  width: 70px;
  text-align: center;
  top: 1px;
  .colorBlack {
    color: #000;
  }
  img {
    margin-left: 3px;
    width: 10px;
  }
  ul {
    position: absolute;
    z-index: 1000;
    box-sizing: border-box;
    margin-top: 8px;
    // padding: 3px 0;
    border-radius: 3px;
    width: 70px;
    background-color: #ffffff;
    box-shadow: 0 0 0 1px #e7d9d9;
    // border: 1px solid #ccc;
    li {
      color: #000;
      //   background-color: #ffffff;
      height: 30px;
      line-height: 30px;
      text-align: center;
      &:hover {
        background: #ccc;
      }
    }
    .selectActive {
      color: #5192fc;
    }
  }
}
</style>

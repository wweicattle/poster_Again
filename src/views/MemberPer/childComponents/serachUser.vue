<template>
  <div class="search-contain" @scroll="scrollTabBtn" ref="tabsRef">
    <van-search
      v-model="value"
      show-action
      label=""
      placeholder="请输入搜索关键词"
      @search="onSearch"
    >
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>
    <div class="serach-counts">你的搜索结果如下: 2020条</div>
    <div>
      <user-info :isSelectAll="selectAll" :userState="0"></user-info>
    </div>
    <div class="all-selct">
      <div class="all-item">
        <van-checkbox v-model="selectAll">全选(已选2个)</van-checkbox>
      </div>
      <div class="reload-confirm">
        <div class="btn-contain">
          <span class="reload">发海报</span> <span class="confirm">发卡券</span>
        </div>
      </div>
    </div>
    <section class="up-init" @click="topBtn" v-show="top">
      <van-icon name="back-top" />
    </section>
  </div>
</template>

<script>
const TOPMAX = 1000;
import UserInfo from "./UserInfo";
export default {
  data() {
    return {
      value: "",
      selectAll: false,
      top: false,
    };
  },
  created() {},
  mounted() {},
  methods: {
    scrollTabBtn(e) {
      let top = this.$refs.tabsRef.scrollTop;
      if (top > TOPMAX) {
        this.top = true;
      } else {
        this.top = false;
      }
    },
    topBtn() {
      this.$refs.tabsRef.scrollTop = 0;
    },
    onSearch() {
      console.log(222);
    },
  },
  components: {
    UserInfo,
  },
};
</script>

<style scoped lang="scss">
.search-contain {
  height: 100vh;
  overflow: hidden;
  overflow-y:scroll;
  .serach-counts {
    font-size: 13px;
    margin: 15px 0 15px 15px;
  }
  .all-selct {
    background: #fff;
    width: 100%;
    // border: 1px solid red;
    position: fixed;
    bottom: 0px;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #ccc;
    .all-item {
      font-size: 12px;
      letter-spacing: 1px;
      display: flex;
      align-items: center;
      // line-height: 50px;
    }
    .reload-confirm {
      height: 50px;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      align-items: center;
      font-size: 12px;
      .btn-contain {
        border: 1px solid #33496c;
        border-radius: 20px;
        width: 170px;
        height: 32px;
        color: #33496c;
        display: flex;
        line-height: 32px;
        text-align: center;
        overflow: hidden;
        .confirm {
          width: 50%;
          // color: #33496c;
        }
        .reload {
          // color: #33496c;
          width: 50%;
          border-right: 1px solid #33496c;
          // background: #33496C;
        }
      }
    }
  }
  .up-init {
    position: fixed;
    right: 20px;
    bottom: 120px;
    width: 40px;
    height: 40px;
    text-align: center;
    background-color: rgb(255, 255, 255);
    border-radius: 50%;
    box-shadow: 0 2px 6px 1px rgba(27, 27, 27, 0.08);
    i {
      top: 10px;
      font-size: 20px;
      color: #000;
    }
  }
}
</style>

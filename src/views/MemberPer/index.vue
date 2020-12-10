<template>
  <div class="member-contains" @scroll="scrollTabBtn" ref="tabsRef">
    <!-- tab选择项 -->
    <van-tabs
      v-model="state"
      color="#5192fc"
      swipeable
      @click="tabClickBtn"
      sticky
      animated
      class="tabs-content"
    >
      <van-tab title="公众号" name="a">
        <user-info :isSelectAll="selectAll" ></user-info> Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Adipisci, deserunt.
        Ipsam porro labore, deleniti, mollitia earum suscipit et facere fugit
        amet modi velit iste cumque recusandae, animi accusamus ad architecto?
        Exercitationem nesciunt reiciendis perferendis quasi mollitia sapiente
        officiis fugit, praesentium harum porro. Nobis suscipit distinctio sed
        obcaecati sint, quia quisquam commodi assumenda odit nam ducimus impedit
        soluta iste, autem quo illum iusto eaque eligendi, dolorum voluptas
        molestiae officiis! Pariatur deleniti veritatis in iusto? Animi voluptas
        inventore neque dignissimos. Hic inventore, itaque eveniet fugit illum
        assumenda excepturi voluptas laboriosam expedita mollitia sint, repellat
        nihil dignissimos blanditiis! Adipisci, tempore. Itaque, iste
        consequatur?</van-tab
      >
      <van-tab title="企业号" name="b">
        <user-info :isSelectAll="selectAll" ></user-info> Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Adipisci, deserunt.
        Ipsam porro labore, deleniti, mollitia earum suscipit et facere fugit
        amet modi velit iste cumque recusandae, animi accusamus ad architecto?
        Exercitationem nesciunt reiciendis perferendis quasi mollitia sapiente
        officiis fugit, praesentium harum porro. Nobis suscipit distinctio sed
        obcaecati sint, quia quisquam commodi assumenda odit nam ducimus impedit
        soluta iste, autem quo illum iusto eaque eligendi, dolorum voluptas
        molestiae officiis! Pariatur deleniti veritatis in iusto? Animi voluptas
        inventore neque dignissimos. Hic inventore, itaque eveniet fugit illum
        assumenda excepturi voluptas laboriosam expedita mollitia sint, repellat
        nihil dignissimos blanditiis! Adipisci, tempore. Itaque, iste
        consequatur?</van-tab
      >
      <van-tab name="d">
        <template #title>
          <img
            src="~assets/img/memberPer/icon_search_black.png"
            class="search"
            alt=""
        /></template>
      </van-tab>
      <van-tab name="e">
        <template #title>
          <img src="~assets/img/memberPer/icon_filter.png" alt=""
        /></template>
      </van-tab>
    </van-tabs>
    <!-- 点击右侧标签页选择项 -->
    <van-popup
      v-model="showPop"
      position="right"
      :style="{ height: '100%', width: '70%' }"
      @close="closePop"
    >
      <div v-show="state == 'a'">
        <template v-for="(val, indexs) in tabDatas">
          <div class="tab-content" :key="indexs">
            <div class="tab-name">{{ val.groupname }}</div>
            <ul>
              <template v-for="(val, index) in val.tagnameList">
                <li
                  :class="{
                    'active-item': nowSelectIndex.includes('' + indexs + index),
                  }"
                  @click="itemBtn({ num: indexs, page: index })"
                  :key="index"
                >
                  {{ val.tagname }}
                  <div class="active-icon"></div>
                  <span class="active-real-icon"> x </span>
                </li>
              </template>
            </ul>
          </div>
        </template>
      </div>
      <div v-show="state != 'a'">
        <template v-for="(val, indexs) in tabQywxDatas">
          <div class="tab-content" :key="indexs">
            <div class="tab-name">{{ val.groupname }}</div>
            <ul>
              <template v-for="(val, index) in val.tagnameList">
                <li
                  :class="{
                    'active-item': nowSelectIndex.includes('' + indexs + index),
                  }"
                  @click="itemBtn({ num: indexs, page: index })"
                  :key="index"
                >
                  {{ val.tagname }}
                  <div class="active-icon"></div>
                  <span class="active-real-icon"> x </span>
                </li>
              </template>
            </ul>
          </div>
        </template>
      </div>

      <div class="reload-confirm">
        <div class="btn-contain">
          <span class="reload" @click="reloadBtn">重置</span>
          <span class="confirm">确定</span>
        </div>
      </div>
    </van-popup>
    <!-- <div class="load-more" @click="clickLoadMoreBtn">点击加载更多....</div> -->
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
import UserInfo from "./childComponents/UserInfo";
import { getTabData, getUserInfos } from "network/userInfo.js";
export default {
  name: "tab",
  data() {
    return {
      cid: Number(window.localStorage.getItem("cid")),
      state: "a",
      showPop: false,
      selectAll: false,
      nowSelectIndex: [],
      top: false,
      saveSate: "a",
      indentfyState: "wx",
      tabDatas: [],
      haveQywxTabDate: false,
      haveWxTabDate: false,
      tabQywxDatas: [],
    };
  },
  created() {
    // document.title = "会员列表";
  },
  mounted() {
    this.getTabData();
  },
  methods: {
    // 关闭pop，清除tab标签
    closePop() {
      this.nowSelectIndex = [];
    },

    // 获取标签数据
    getTabData() {
      getTabData({
        cid: this.cid,
        type: this.indentfyState,
      }).then((da) => {
        // console.log(333, da);
        if (da.data.errcode == 0) {
          //用户企业身份返回的数据格式不一，需做判断
          this.state == "a"
            ? (this.tabDatas = da.data.data)
            : (this.tabQywxDatas = da.data.data);
        } else {
          this.$notify({
            type: "warning",
            message: da.data.errmsg || "获取标签列表失败！请稍后重试",
          });
        }
      });
    },
    topBtn() {
      this.$refs.tabsRef.scrollTop = 0;
    },
    // 重置标签页
    reloadBtn() {
      this.nowSelectIndex = [];
    },
    // 点击标签页
    itemBtn(obj) {
      let { num, page } = obj;
      if (this.nowSelectIndex.includes("" + num + page)) {
        this.nowSelectIndex.splice(
          this.nowSelectIndex.indexOf("" + num + page),
          1
        );
        return;
      }
      this.nowSelectIndex.push("" + num + page);
    },

    scrollTabBtn(e) {
      // 显示向上图标
      let top = this.$refs.tabsRef.scrollTop;
      this.top = top > TOPMAX ? true : false;
    },
    tabClickBtn(val) {
      // 进行保存用户身份到变量，之后请求数据
      if (val == "b" || val == "a") {
        this.saveSate = val;

        if (val == "b") {
          this.indentfyState = "qywx";
          // 请求标签判断是否已经 请求，可使用缓存
          if (!this.haveWxTabDate) {
            this.getTabData();
            this.haveWxTabDate = true;
          }
        } else {
          this.indentfyState = "wx";
          if (!this.haveQywxTabDate) {
            this.haveQywxTabDate = true;
          }
        }
        // 保存点击用户身份到本地，因为搜索 的 时候 需要 使用
        window.localStorage.setItem("identifyState", this.indentfyState);
      }
      //
      if (this.state == "d" || this.state == "e") {
        // 放在下一帧，因为切换tab，会有变化
        this.$nextTick(() => {
          this.state = this.saveSate;
        });
        // 搜索内容与标签 大全

        // val == "d" ? this.$router.push("/serachUser") : (this.showPop = true);
        if (val == "d") {
          this.$router.push({
            name: "serachUser",
            params: {
              userState: this.indentfyState,
            },
          });
        } else {
          this.showPop = true;
        }
      }
    },
  },
  components: {
    UserInfo,
  },
};
</script>

<style  lang="scss">
.member-contains {
  overflow: hidden;
  overflow-y: scroll;
  font-size: 16px;
  height: 100vh;
  // &::-webkit-scrollbar {
  //   // display: ;
  // }

  &::-webkit-scrollbar {
    width: 3px;
    height: 10px;
    background-color: #ccc;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: rgb(138, 114, 114);
  }
  .tab-search {
    // height: 48.5px;
    // line-height: 48.5px;
    position: absolute;
    right: 10px;
    top: 0px;
    img {
      width: 20px;
      margin-right: 20px;
    }
  }
  .search {
    padding-left: 80px;
  }
  .van-popup {
    .tab-content {
      padding: 10px;
      .tab-name {
        font-size: 14px;
      }
      ul {
        display: flex;
        // justify-content: space-between;
        flex-wrap: wrap;
        text-align: center;
        margin: 10px 0;
        border-bottom: 1px solid #ccc;
        li {
          margin: 0 4px;
          position: relative;
          font-size: 13px;
          border-radius: 2px;
          height: 36px;
          background: #f7f7f7;
          width: 30%;
          line-height: 36px;
          margin-bottom: 10px;
          overflow: hidden;
          &.active-item {
            background: #fdeae1;
            color: #f97327;
            .active-icon {
              position: absolute;
              right: 0;
              bottom: -26px;
              // width: 0;
              // height: 0;
              border-top: 18px solid transparent;
              border-bottom: 23px solid transparent;
              border-right: 26px solid #f97327;
            }
            .active-real-icon {
              padding-top: 1px;
              line-height: normal;
              position: absolute;
              color: #fff;
              bottom: 0;
              right: 1px;
            }
          }
        }
      }
    }
    .reload-confirm {
      position: sticky;
      position: -webkit-sticky;
      width: 100%;
      right: 0;
      bottom: 0;
      height: 60px;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .btn-contain {
        // border: 1px solid red;
        margin-right: 10px;
        border-radius: 20px;
        width: 170px;
        height: 38px;
        color: #fff;
        display: flex;
        line-height: 38px;
        text-align: center;
        overflow: hidden;
        .confirm {
          width: 50%;
          background: #fb9f30;
        }
        .reload {
          width: 50%;
          background: #f97327;
        }
      }
    }
  }
  .all-selct {
    background: #fff;
    width: 100%;
    // border: 1px solid red;
    position: fixed;
    bottom: 46px;
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
.load-more {
  padding: 20px;
  text-align: center;
  margin-bottom: 96px;
}
</style>

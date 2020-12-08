<template>
  <div>
    <div class="user-infos">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-checkbox-group v-model="result" ref="checkboxGroup">
          <ul>
            <!-- 进行遍历用户 -->
            <template v-for="(item, index) in list">
              <li :key="index">
                <div class="user-details">
                  <van-checkbox name="a"></van-checkbox>
                  <div class="user-name">
                    <img src="~assets/avator.png" alt="" class="avator" />
                    <div class="details">
                      <div>
                        <span class="name">张萌萌 </span>
                        <img
                          src="static/img/memberPull/icon_woman.png"
                          alt=""
                        />
                      </div>
                      <div class="member">公众号会员</div>
                    </div>
                  </div>
                  <div class="mem-date">2019/08/20入会</div>
                </div>
              </li>
            </template>
          </ul>
        </van-checkbox-group>

        <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
      </van-list>
      <!-- <section class="up-init">lorem</section> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "userInfo",
  props: {
    isSelectAll: {
      type: Boolean,
      default: false,
    },
    userState: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      result: [],
    };
  },
  created() {},
  mounted() {
    console.log(this.userState);
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
  },
  watch: {
    isSelectAll(newVal, oldVal) {
      this.$refs.checkboxGroup.toggleAll(newVal);
    },
    userState(newVal) {
      console.log(newVal);
    },
  },
};
</script>

<style  lang="scss">
.user-infos {
  // position: relative;
  transform: none;

  font-size: 16px;
  line-height: auto;
  .user-details {
    padding: 20px 15px;
    margin: 15px 20px;
    border-radius: 10px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .van-checkbox {
      .van-icon {
        font-size: 15px;
      }
    }
    .user-name {
      margin-left: -50px;
      .avator {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: 0 10px;
      }
      display: flex;
      .details {
        .name {
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #323232;
        }
        img {
          width: 14px;
          height: 14px;
        }
        .member {
          padding-top: 5px;
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #888888;
        }
      }
    }
    .mem-date {
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #b2b2b2;
      line-height: 17px;
    }
  }
  // .up-init {
  //   position: sticky;
  //   right: 20px;
  //   top: 0px;
  //   // bottom: 120px;
  //   width: 40px;
  //   height: 40px;
  //   text-align: center;
  //   background-color: rgba(209, 36, 36, 0.95);
  //   border-radius: 50%;
  //   box-shadow: 0 2px 6px 1px rgba(27, 27, 27, 0.08);
  // }
}
</style>

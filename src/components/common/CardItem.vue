<template>
  <div class="card-contain">
    <div class="card-list-name" :class="{ fixPostion: fixPostion }">
      会员列表
    </div>
    <div class="item-content">
      <div class="remind-fanslist" v-if="without">无新增会员！</div>
      <template v-for="(val, index) in fanlist">
        <div class="card-content" :key="index">
          <div class="user-avatat-content">
            <img :src="val.avatar" alt="" />
          </div>
          <div class="user-details">
            <span class="username">
              {{ val.fansname || "admin" }}
              <img src="static/memberPull/icon_man.png" alt="" />
            </span>
            <div class="user-join">
              <span> 加入日期：</span>
              <span>
                {{ val.Joindate || "2010-25-25" }}
              </span>
            </div>
          </div>
        </div>
      </template>
      <!-- <template v-for="(val,index) in fanlist">
        <div class="card-content" :key="index">
          <div class="user-avatat-content">
            <img :src="val.avatar" alt="" />
          </div>
          <div class="user-details">
            <span class="username">
              {{ val.fansname || "admin" }}
              <img src="static/memberPull/icon_man.png" alt="" />
            </span>
            <div class="user-join">
              <span> 加入日期：</span>
              <span>
                {{ val.Joindate || "2010-25-25" }}
              </span>
            </div>
          </div>
        </div>
      </template>
      <template v-for="(val,index) in fanlist">
        <div class="card-content" :key="index">
          <div class="user-avatat-content">
            <img :src="val.avatar" alt="" />
          </div>
          <div class="user-details">
            <span class="username">
              {{ val.fansname || "admin" }}
              <img src="static/memberPull/icon_man.png" alt="" />
            </span>
            <div class="user-join">
              <span> 加入日期：</span>
              <span>
                {{ val.Joindate || "2010-25-25" }}
              </span>
            </div>
          </div>
        </div>
      </template>
      <template v-for="(val,index) in fanlist">
        <div class="card-content" :key="index">
          <div class="user-avatat-content">
            <img :src="val.avatar" alt="" />
          </div>
          <div class="user-details">
            <span class="username">
              {{ val.fansname || "admin" }}
              <img src="static/memberPull/icon_man.png" alt="" />
            </span>
            <div class="user-join">
              <span> 加入日期：</span>
              <span>
                {{ val.Joindate || "2010-25-25" }}
              </span>
            </div>
          </div>
        </div>
      </template>
      <template v-for="(val,index) in fanlist">
        <div class="card-content" :key="index">
          <div class="user-avatat-content">
            <img :src="val.avatar" alt="" />
          </div>
          <div class="user-details">
            <span class="username">
              {{ val.fansname || "admin" }}
              <img src="static/memberPull/icon_man.png" alt="" />
            </span>
            <div class="user-join">
              <span> 加入日期：</span>
              <span>
                {{ val.Joindate || "2010-25-25" }}
              </span>
            </div>
          </div>
        </div>
      </template>
      <template v-for="(val,index) in fanlist">
        <div class="card-content" :key="index">
          <div class="user-avatat-content">
            <img :src="val.avatar" alt="" />
          </div>
          <div class="user-details">
            <span class="username">
              {{ val.fansname || "admin" }}
              <img src="static/memberPull/icon_man.png" alt="" />
            </span>
            <div class="user-join">
              <span> 加入日期：</span>
              <span>
                {{ val.Joindate || "2010-25-25" }}
              </span>
            </div>
          </div>
        </div>
      </template>
      <template v-for="(val,index) in fanlist">
        <div class="card-content" :key="index">
          <div class="user-avatat-content">
            <img :src="val.avatar" alt="" />
          </div>
          <div class="user-details">
            <span class="username">
              {{ val.fansname || "admin" }}
              <img src="static/memberPull/icon_man.png" alt="" />
            </span>
            <div class="user-join">
              <span> 加入日期：</span>
              <span>
                {{ val.Joindate || "2010-25-25" }}
              </span>
            </div>
          </div>
        </div>
      </template>

      <template v-for="(val,index) in fanlist">
        <div class="card-content" :key="index">
          <div class="user-avatat-content">
            <img :src="val.avatar" alt="" />
          </div>
          <div class="user-details">
            <span class="username">
              {{ val.fansname || "admin" }}
              <img src="static/memberPull/icon_man.png" alt="" />
            </span>
            <div class="user-join">
              <span> 加入日期：</span>
              <span>
                {{ val.Joindate || "2010-25-25" }}
              </span>
            </div>
          </div>
        </div>
      </template>
      <template v-for="(val,index) in fanlist">
        <div class="card-content" :key="index">
          <div class="user-avatat-content">
            <img :src="val.avatar" alt="" />
          </div>
          <div class="user-details">
            <span class="username">
              {{ val.fansname || "admin" }}
              <img src="static/memberPull/icon_man.png" alt="" />
            </span>
            <div class="user-join">
              <span> 加入日期：</span>
              <span>
                {{ val.Joindate || "2010-25-25" }}
              </span>
            </div>
          </div>
        </div>
      </template>
      <template v-for="(val,index) in fanlist">
        <div class="card-content" :key="index">
          <div class="user-avatat-content">
            <img :src="val.avatar" alt="" />
          </div>
          <div class="user-details">
            <span class="username">
              {{ val.fansname || "admin" }}
              <img src="static/memberPull/icon_man.png" alt="" />
            </span>
            <div class="user-join">
              <span> 加入日期：</span>
              <span>
                {{ val.Joindate || "2010-25-25" }}
              </span>
            </div>
          </div>
        </div>
      </template>
      <template v-for="(val,index) in fanlist">
        <div class="card-content" :key="index">
          <div class="user-avatat-content">
            <img :src="val.avatar" alt="" />
          </div>
          <div class="user-details">
            <span class="username">
              {{ val.fansname || "admin" }}
              <img src="static/memberPull/icon_man.png" alt="" />
            </span>
            <div class="user-join">
              <span> 加入日期：</span>
              <span>
                {{ val.Joindate || "2010-25-25" }}
              </span>
            </div>
          </div>
        </div>
      </template>

      <template v-for="(val,index) in fanlist">
        <div class="card-content" :key="index">
          <div class="user-avatat-content">
            <img :src="val.avatar" alt="" />
          </div>
          <div class="user-details">
            <span class="username">
              {{ val.fansname || "admin" }}
              <img src="static/memberPull/icon_man.png" alt="" />
            </span>
            <div class="user-join">
              <span> 加入日期：</span>
              <span>
                {{ val.Joindate || "2010-25-25" }}
              </span>
            </div>
          </div>
        </div>
      </template>
      <template v-for="(val,index) in fanlist">
        <div class="card-content" :key="index">
          <div class="user-avatat-content">
            <img :src="val.avatar" alt="" />
          </div>
          <div class="user-details">
            <span class="username">
              {{ val.fansname || "admin" }}
              <img src="static/memberPull/icon_man.png" alt="" />
            </span>
            <div class="user-join">
              <span> 加入日期：</span>
              <span>
                {{ val.Joindate || "2010-25-25" }}
              </span>
            </div>
          </div>
        </div>
      </template>
      <template v-for="(val,index) in fanlist">
        <div class="card-content" :key="index">
          <div class="user-avatat-content">
            <img :src="val.avatar" alt="" />
          </div>
          <div class="user-details">
            <span class="username">
              {{ val.fansname || "admin" }}
              <img src="static/memberPull/icon_man.png" alt="" />
            </span>
            <div class="user-join">
              <span> 加入日期：</span>
              <span>
                {{ val.Joindate || "2010-25-25" }}
              </span>
            </div>
          </div>
        </div>
      </template> -->
    </div>
  </div>
</template>
<script>
import { eventBus } from "utils/eventbus";

export default {
  name: "Title",
  props: {
    fanlist: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  watch: {
    fanlist: {
      handler(newVal) {
        newVal.length==0? (this.without = true) : (this.without = false);
      },
    },
  },
  data: function () {
    return {
      fixPostion: false,
      without: false,
    };
  },
  methods: {},
  computed: {},
  mounted() {
    eventBus.$on("fixItem", () => {
      console.log(1);
      this.fixPostion = true;
    });
    eventBus.$on("cancelItem", () => {
      console.log(2);
      this.fixPostion = false;
    });
  },
};
</script>
<style lang="scss">
.card-contain {
  padding: 0 15px;
  .item-content {
    // height: 263px;
    // padding-bottom: 20px;
    // box-sizing: border-box;
    // overflow-y: scroll;
    .remind-fanslist {
      font-size: 18px;
      width: 100%;
      color: #999;
      text-align: center;
      height: 160px;
      line-height: 160px;
    }
  }
  .fixPostion {
    position: fixed;
    height: 50px;
    line-height: 50px;
    width: 100%;
    top: 0;
    margin: 0 !important;
    // z-index: 100;
    padding: 5px 0;
    margin-left: -15px;
    background: #fff;
    border-bottom: 1px solid #ccc;
  }
  .card-list-name {
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #323232;
    margin: 20px 0;
  }
  .card-content {
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    height: 66px;
    border-bottom: 1px solid #f2e1e1;
    // border: 1px solid red;
    //   justify-content: ;
    img {
      height: 46px;
      width: 46px;
      border-radius: 50%;
    }
    .user-details {
      height: 46px;
      padding-left: 15px;
      .username {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #323232;
        img {
          width: 14px;
          height: 14px;
        }
      }
      .user-join {
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #888888;
        line-height: 17px;
      }
    }
  }
}
</style>

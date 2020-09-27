<template>
  <div class="sendMess-cotnains">
    <van-dialog
      v-model="show"
      title="分享"
      show-cancel-button
      @confirm="confirmBtn"
      @cancel="cancelBtn"
      :beforeClose="beforeClose"
    >
      <div class="selectAll-contain">
        <span type="info" @click="toggleAll">反选</span>

        <span @click="checkAll">全选</span>
      </div>
      <van-checkbox-group v-model="result" ref="checkboxGroup">
        <template v-for="(val, index) in fanslist">
          <van-checkbox :name="val.fansuserid" :key="index">
            <img :src="val.avatar" alt />
            <span class="fans-name">{{ val.fansname }}</span>
          </van-checkbox>
        </template>
      </van-checkbox-group>
    </van-dialog>
  </div>
</template>
<script scoped>
import { eventBus } from "utils/eventbus";
import { colors } from "utils/colors";
import { requestFansList, requesUrl, requestSendGroupMess } from "network/home";
export default {
  name: "SendMess",
  props: {
    isshow: {
      type: Boolean,
    },
    shareSrc: {
      type: String,
    },
  },
  data: function () {
    return {
      show: false,
      result: [],
      fanslist: [],
      cid: null,
    };
  },
  created() {
    eventBus.$on("getUserCid", (cid) => {
      console.log(cid);
      this.cid = cid;
    });
  },

  mounted() {
    eventBus.$on("getUserCid", (cid) => {
      console.log(cid);
      this.cid = cid;
    });
    requestFansList({ cid: this.cid || 587 }).then((da) => {
      this.fanslist = da.data.data;
      console.log(da);
    });
  },
  methods: {
    beforeClose(a, b) {
      if (a === "confirm") return b(false);
    },
    requestSendGroupMess(obj) {
      requestSendGroupMess(obj)
        .then((da) => {
          if (da.data.errcode == 0) {
            this.$toast.clear();
            this.$toast.success("分享海报成功！");
            this.$emit("changeVisable");
          } else {
            this.$notify({
              type: "warning",
              message: "分享海报失败！" + da.errmsg,
            });
          }
        })
        .catch((da) => {
          this.$notify({ type: "warning", message: da });
        });
    },
    //   点击确定按钮
    confirmBtn() {
      if (this.result.length == 0) {
        this.$notify({ type: "warning", message: "请选择粉丝！" });
        this.show = true;
        return;
      }

      let params = {
        fansuserids: this.result.join(),
        cid: window.localStorage.getItem("cid"),
      };
      requesUrl(this.shareSrc)
        .then((da) => {
          let toast = this.$toast.loading({
            message: "分享中..",
            forbidClick: true,
          });
          if (da.data.errcode == 0) {
            params.url = da.data.data.signimgurl;
            params.picurl = da.data.data.signimgurl;
            // 进行群发
            this.requestSendGroupMess(params);
          } else {
            this.$notify({
              type: "warning",
              message: "海报图片中转失败，请检查网络",
            });
          }
        })
        .catch((da) => {
          this.$notify({
            type: "danger",
            message: da + "!",
          });
        });
    },
    cancelBtn() {
      this.$emit("changeVisable");
    },
    checkAll() {
      this.$refs.checkboxGroup.toggleAll(true);
    },
    toggleAll() {
      this.$refs.checkboxGroup.toggleAll();
    },
  },
  watch: {
    isshow: {
      handler(newVal) {
        this.show = newVal;
      },
      immediate: true,
    },
  },
};
</script>
<style lang="scss">
.sendMess-cotnains {
  .selectAll-contain {
    padding: 0 10px;
    background: #7b95bf;
    color: #fff;
    height: 36px;
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
  .van-checkbox-group {
    height: 300px;
    overflow-y: scroll;
    img {
      width: 40px;
      height: 40px;
    }
    .van-checkbox {
      padding: 20px;
      display: flex;
      align-items: center;
      .van-checkbox__label {
        display: flex;
        align-items: center;
        .fans-name {
          font-size: 17px;
          padding-left: 5px;
        }
      }
    }
  }
  .van-dialog__footer {
    .van-dialog__confirm {
      color: rgb(81, 146, 252);
    }
  }
  .van-dialog__header {
    padding-top: 10px;
    height: 40px;
  }
}
</style>

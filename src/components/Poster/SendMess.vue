<template>
  <div class="sendMess-cotnains">
    <van-dialog
      v-model="show"
      title="分享"
      show-cancel-button
      @confirm="confirmBtn"
      @cancel="cancelBtn"
    >
      <div class="selectAll-contain">
        <span type="info" @click="toggleAll">反选</span>

        <span @click="checkAll">全选</span>
      </div>
      <van-checkbox-group v-model="result" ref="checkboxGroup">
        <van-checkbox name="a">
          <img src="./../../assets/avator.png" alt />
          <span class="fans-name">吴伟</span>
        </van-checkbox>
        <van-checkbox name="b">
          <img src="./../../assets/avator.png" alt />
          <span class="fans-name">吴伟</span>
        </van-checkbox>
        <van-checkbox name="c">
          <img src="./../../assets/avator.png" alt />
          <span class="fans-name">吴伟</span>
        </van-checkbox>
        <van-checkbox name="d">
          <img src="./../../assets/avator.png" alt />
          <span class="fans-name">吴伟</span>
        </van-checkbox>
        <van-checkbox name="sasad">
          <img src="./../../assets/avator.png" alt />
          <span class="fans-name">吴伟</span>
        </van-checkbox>
        <van-checkbox name="sa">
          <img src="./../../assets/avator.png" alt />
          <span class="fans-name">吴伟</span>
        </van-checkbox>
        <van-checkbox name="sas">
          <img src="./../../assets/avator.png" alt />
          <span class="fans-name">吴伟</span>
        </van-checkbox>
      </van-checkbox-group>
    </van-dialog>
  </div>
</template>
<script scoped>
import { eventBus } from "utils/eventbus";
import { colors } from "utils/colors";
import { requestFansList } from "network/home";
export default {
  name: "SendMess",
  props: {
    isshow: {
      type: Boolean,
    },
  },
  data: function () {
    return {
      show: false,
      result: [],
    };
  },
  created() {},
  mounted() {
    requestFansList({ cid: 587 }).then((da) => {
      console.log(da);
    });
  },
  methods: {
    //   点击确定按钮
    confirmBtn() {
      console.log("22");
      this.$emit("changeVisable");
      console.log(this.result);
    },
    cancelBtn() {
      console.log(2332);
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
    background: #33496c;
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
}
</style>

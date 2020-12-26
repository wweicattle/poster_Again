<template>
  <div class="card-contains">
    <van-checkbox-group v-model="result" ref="checkboxGroup">
      <!-- <template v-for="(i, index) in 15">
        <card-update
          :key="index"
          :cardInfo="{ val, index }"
          :otherBackTheme="true"
        >
          <template v-slot:select>
            <van-checkbox :name="index"></van-checkbox>
          </template>
        </card-update>
      </template> -->
        <template v-for="(val, index) in totaldata">
        <card-update
          :key="index"
          :cardInfo="{ val, index }"
          :otherBackTheme="true"
        >
          <template v-slot:select>
            <van-checkbox :name="index"></van-checkbox>
          </template>
        </card-update>
      </template>
    </van-checkbox-group>
    <div class="footer-contain">
      <div class="totall-icon">
        <van-checkbox v-model="showall">全选</van-checkbox>
      </div>
      <div class="footer-fun">
        <span class="cancel" @click="$router.back()">取消</span>
        <span class="send">发送</span>
      </div>
    </div>
  </div>
</template>

<script>
import CardUpdate from "../common/CardUpdate";
import { getCardinfoList } from "network/cardVourchar.js";
export default {
  name: "upload_Card",
  data() {
    return {
      totaldata: [],
      showall: false,
      result: [],
      val: {
        title: "测试:5元现金券",
        color: "Color082",
        begintimestamp: "2016-09-01 00:00:00.0",
        endtimestamp: "2020-10-15 00:00:00.0",
        reducecost: 5,
        leastcost: 200,
        storelist: "总部门店,总部展厅",
      },
      index: 1,
    };
  },
  created() {},
  mounted() {
    this.getCardinfoList();
  },
  watch: {
    result(newval) {
      // console.log(this.result, newval);
      if (!newval.length) {
        this.showall = false;
      } else if (newval.length == this.totaldata) {
        this.showall = true;
      }
    },
    showall(newval) {
      console.log(newval);
      // if(this.showall!==newval)this.$refs.checkboxGroup.toggleAll(newval);
      this.$refs.checkboxGroup.toggleAll(newval);
    },
  },
  methods: {
    getCardinfoList() {
      let cid = window.localStorage.getItem("cid");
      getCardinfoList({ cid }).then((da) => {
        console.log(da);
        if (da.data.errcode == 0) {
          this.totaldata = da.data.data;
        } else {
          this.$notify({
            type: "warning",
            message: da.data.errmsg || "获取卡券列表失败！请稍后重试",
          });
        }
      });
    },
    // checkAll() {
    //   this.showall = !this.showall;
    //   if (this.showall) {
    //     this.$refs.checkboxGroup.toggleAll(true);
    //   } else {
    //     this.$refs.checkboxGroup.toggleAll();
    //   }
    // },
  },
  components: {
    CardUpdate,
  },
};
</script>

<style scoped lang="scss">
.card-contains {
  background: #f7f7f7;
  padding-top: 16px;
  height: 100vh;
  overflow-y: scroll;
  margin-bottom:44px;
}
.footer-contain {
  width: 100%;
  position: fixed;
  background: #fff;
  bottom: 0;
  height: 48px;
  // border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .totall-icon {
    // float: left;
    padding-left: 15px;
    font-size: 14px;
  }
  .footer-fun {
    color: #33496c;
    font-size: 12px;
    margin-right: 15px;
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid #33496c;
    background: #33496c;
    span {
      display: inline-block;
      width: 80px;
      height: 28px;
      text-align: center;
      line-height: 28px;
      // background: #000;
      &.cancel {
        background: #fff;
      }
      &.send {
        color: #fff;
      }
    }
  }
}
</style>

<template>
  <div id="fans-contain" ref="memberRef">
    <div class="member-infos">
      <div class="member-left">
        <span class="title"> 粉丝拉新(人) </span>
        <span class="pull-num">
          {{ datas[3] ? datas[3].newfanscount : "0" }}
        </span>
      </div>
      <div class="member-better">
        <span class="title"> 对比昨日 </span>
        <span class="pull-better"> {{ computedBetter }} </span>
      </div>
      <div class="member-select" @click="showDateChooseBtn">
        <div>
          <span>今日</span
          ><img src="/static/img/memberPull/icon_triangle_grey.png" alt="" />
        </div>
      </div>
    </div>
    <!-- <but
    ton @click="btn">click</button> -->
    <!-- 折线图 -->
    <ve-line
      :data="chartData"
      :height="canvasheight"
      :settings="chartSettings"
      :events="chartEvents"
      :loading="loading"
      :legend-visible="false"
    ></ve-line>
    <!-- 会员列表 -->
    <card-item :fanlist="fanslist" class="card-item-contain" ref="memberref">
      <div slot="titleName">粉丝列表</div>
    </card-item>

    <!-- 日历组件 -->
    <van-calendar
      color="#33496c"
      v-model="showDateRange"
      :min-date="minDate"
      :max-date="maxDate"
      @confirm="onConfirm"
    />
  </div>
</template>
<script>
// import "v-charts/lib/style.css";
// import TitleHeader from "components/common/Title";
// import { requestHomeInfo } from "network/home";
import CardItem from "components/common/CardItem";
import { eventBus } from "utils/eventbus";
import { getFanList, getFanListDetail } from "network/getFanslist";
export default {
  name: "FansPull",
  data() {
    console.log(this);
    this.chartSettings = {
      selectedMode: "single",
      hoverAnimation: false,
      stack: { 用户: ["访问用户", "下单用户"] },
      area: true,
    };
    var self = this;
    this.chartEvents = {
      click: function (e) {
        self.name = e.name;
        console.log(e);
      },
    };
    return {
      cid: window.localStorage.getItem("cid"),
      selectdate: "2010-10-27",
      minDate: new Date(2010, 0, 1),
      maxDate: new Date(2030, 0, 31),
      showDateRange: false,
      showDate: false,
      loading: false,
      name: "",
      canvasheight: "300px",
      isshowMemberVisable: false,
      chartData: {
        columns: ["日期", "拉新人数"],
        rows: [
          { 日期: "7/2", 拉新人数: 1 },
          { 日期: "7/3", 拉新人数: 1 },
          { 日期: "7/4", 拉新人数: 1 },
          { 日期: "7/5", 拉新人数: 3 },
          { 日期: "7/6", 拉新人数: 2 },
          { 日期: "7/7", 拉新人数: 2 },
          { 日期: "7/8", 拉新人数: 2 },
        ],
      },
      rows: [],
      datas: [],
      fanslist: [],
    };
  },
  components: {
    // TitleHeader,
    CardItem,
  },
  methods: {
    //   获取会员粉丝数据
    getFanList(obj) {
      obj.searchtype = window.localStorage.getItem("indentifyState");

      getFanList(obj).then((da) => {
        this.datas = da.data.data;
        console.log(da);
        this.rows = this.datas.map((val, index) => {
          let obj = {};
          obj["日期"] = val["countdate"];
          obj["拉新人数"] = val["newfanscount"];
          return obj;
        });
        this.$set(this.chartData, "rows", this.rows);
        // this.chartData.rows = this.rows;
        //   this.$forceUpdate();
      });
    },
    getFanListDetail(obj) {
      obj.searchtype = window.localStorage.getItem("indentifyState");

      getFanListDetail(obj).then((da) => {
        this.fanslist = da.data.data;
      });
    },

    onConfirm(e) {
      this.showDateRange = false;
      this.selectdate = e
        .toLocaleDateString()
        .replace(/\//g, "-")
        .split("-")
        .map((val, index) => {
          if (index > 0) {
            val = val.padStart(2, 0);
          }
          return val;
        })
        .join("-");

      console.log(this.selectdate);
    },
    showDateChooseBtn() {
      this.showDateRange = true;
    },
    btn() {
      this.chartData = {
        columns: ["日期", "拉新人数"],
        rows: [
          { 日期: "7/2", 拉新人数: 1 },
          { 日期: "7/3", 拉新人数: 1 },
          { 日期: "7/4", 拉新人数: 1 },
          { 日期: "7/5", 拉新人数: 3 },
          { 日期: "7/6", 拉新人数: 2 },
        ],
      };
    },
  },
  mounted() {
    //   进行会员列表滚动固定
    this.t = this.$refs.memberref.$el.offsetTop;
    this.$refs.memberRef.addEventListener("scroll", () => {
      if (this.t - this.$refs.memberRef.scrollTop <= 15) {
        eventBus.$emit("fixItem");
      } else {
        eventBus.$emit("cancelItem");
      }
    });
    this.getFanList({ cid: this.cid, searchdate: this.selectdate });
    this.getFanListDetail({ cid: this.cid, searchdate: this.selectdate });
  },
  computed: {
    computedBetter() {
      console.log(this.datas);
      if (this.datas.length > 0) {
        if (this.datas[3].newfanscount == 0) {
          let e = this.datas[2].newfanscount / 1;
          return e.toFixed(2) + "%";
        } else {
          let e = this.datas[2].newfanscount / this.datas[3].newfanscount;
          return e.toFixed(2) + "%";
        }
      } else {
        return "0.00%";
      }

      //   this.datas[3] ?.toFixed(2) : 0+"%";
    },
  },
  watch: {
    selectdate(newVal, oldVal) {
      console.log(this.cid);
      console.log(this.selectdate);
      this.getFanList({ cid: this.cid, searchdate: newVal });
      this.getFanListDetail({ cid: this.cid, searchdate: newVal });
    },
  },
};
</script>
<style lang="scss" scoped>
#fans-contain {
  height: 667px;
  overflow-y: scroll;
  .member-infos {
    padding: 20px 15px 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .title {
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #666666;
      line-height: 17px;
    }
    .member-left {
      width: 76px;
      text-align: center;
      .pull-num {
        font-size: 24px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #323232;
        line-height: 33px;
      }
    }
    .member-better {
      width: 76px;
      text-align: center;

      .pull-better {
        font-size: 24px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #3aadaa;
        line-height: 33px;
      }
    }
    .member-select {
      // width: 30px;
      //   select {
      //       background: #ffffff;
      margin-top: 15px;
      width: 60px;
      height: 100%;
      font-size: 14px;
      border-radius: 12px;
      border: 1px solid #cbcdd1;
      line-height: 30px;
      text-align: center;
      //   }
      &:hover {
        background: #e8e8e8;
      }
    }
  }
  .ve-line {
    border-bottom: 10px solid #f3f0f0;
  }
}
</style>
